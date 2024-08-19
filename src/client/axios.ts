import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { transformRes } from "../utils/transformReqData";
import { handleTransformUrl } from "../utils";

const instance = axios.create({
  baseURL: "",
  timeout: 5000,
});

// type Res<T> = {
//   data?: T;
//   error?: boolean;
//   message?: string;
// };

instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const { params } = config;
    const newUrl = handleTransformUrl(params.dSource, params.route);
    config.url = newUrl;

    config.transformResponse = function (data) {
      /* transform response only in case of error occur */
      let newData = JSON.parse(data);
      if (newData.status === "error") {
        newData = newData.message;
      }

      return newData;
    };
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

instance.interceptors.response.use(
  async (response: AxiosResponse) => {
    const { data, config } = response;
    if (!data) {
      throw new Error("Error occurred, data does not exist in response!");
    }
    if (config.params.route === "top-headlines/sources") {
      return response;
    }
    const newData = transformRes(data, config.params.dSource);
    response.data = newData;

    return response;
  },
  (error: AxiosError) => {
    console.log("error in response catch :>> ", error);
    return Promise.reject({
      error: true,
      message: error.response?.data || error.message,
    });
    // return Promise.reject(error);
  }
);

export class AxiosClientClass {
  constructor() {}

  instance = instance;

  async get<T>(url: string, config?: AxiosRequestConfig<T>) {
    try {
      const response = await this.instance.get<T>(url, config);
      if (!response || !response.data)
        throw new Error(response?.statusText || "error occured during the req");
      return { data: response.data };
    } catch (error) {
      console.log("error in tcatch :>> ", error);
      const e = error as Error;
      return { error: true, message: e.message };
    }
  }

  async post<T>(url: string, data: T, config?: AxiosRequestConfig<T>) {
    try {
      const response = await this.instance.post<T>(url, data, config);
      if (!response || !response.data)
        throw new Error(response?.statusText || "error occured during the req");
      return response.data;
    } catch (error) {
      console.log("error in tcatch :>> ", error);
      const e = error as Error;
      return { error: true, message: e.message };
    }
  }

  // async put<T>(url: string, data: unknown) {
  //   const response = await instance.put<T>(url, data);
  //   // const response = await this.instance.put<T>(url, data);

  //   return response.data;
  // }
}
const AxiosClient = new AxiosClientClass();

export default AxiosClient;
