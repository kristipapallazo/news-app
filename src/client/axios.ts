import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
  isAxiosError,
  // ResponseType,
} from "axios";
import { G_API, NEWS_API, NYC_API } from "../globals";
import { transformRes } from "../utils/transformReqData";

const instance = axios.create({
  baseURL: "",
  timeout: 4000,
  // headers: { "Content-Type": "application/json" },
});

type Res<T> = {
  data?: T;
  error?: boolean;
  message?: string;
};

const transformUrl = (url: string): string => {
  let newUrl: string = url;
  if (url.includes(NEWS_API.baseUrl)) {
    newUrl += `apiKey=${NEWS_API.apiKey}`;
  } else if (url.includes(NYC_API.baseUrl)) {
    newUrl += `api-key=${NYC_API.apiKey}`;
  } else if (url.includes(G_API.baseUrl)) {
    newUrl += `api-key=${G_API.apiKey}`;
  } else {
    // in any case, define to the default one
    newUrl += `apiKey=${NEWS_API.apiKey}`;
  }

  return newUrl;
};

instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const { url, params } = config;
    // check if the api type is supported, otherwise derive it to default
    if (!config.baseURL) {
      instance.defaults.baseURL = "";
    }

    if (!url) {
      alert("Url does not exist!");
    }
    const newUrl = transformUrl(url!);
    config.url = newUrl;

    console.log("config :>> ", config);
    config.transformResponse = function (data) {
      /* transform response only in case of error occur */
      console.log("data :>> ", data);
      let newData = JSON.parse(data);
      console.log("newData :>> ", newData);
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
    const newData = transformRes(data, config.params.dSource);
    console.log("response :>> ", response);
    console.log("newData", newData);
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
      console.log("response myres :>> ", response);
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
