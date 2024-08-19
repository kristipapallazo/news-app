import { createAsyncThunk } from "@reduxjs/toolkit";
import { DSourceType, FetchArticlesPayload } from "../types/types";
import AxiosClient from "../client/axios";
import { Route } from "../types/redux";
import { G_API, NEWS_API, NYC_API } from "../globals";

export const defineClass = (
  defClass: string,
  mobClass: string,
  isMobile: boolean
) => {
  return `${defClass} ${isMobile ? mobClass : ""}`;
};

export const asyncFetch = <T>(type: string) => {
  return createAsyncThunk<T, FetchArticlesPayload, { rejectValue: string }>(
    type,
    async (payload, { rejectWithValue }) => {
      const { url, config } = payload;
      const response = await AxiosClient.get<T>(url, config);

      if (response.error) {
        return rejectWithValue(response.message);
      }

      return response.data!;
    }
  );
};

export const handleTransformUrl = (
  dSource: DSourceType,
  route: Route = "everything"
): string => {
  let baseUrl: string = NEWS_API.baseUrl;
  let newRoute: Route = route;
  let apiKey: string = `apiKey=${NEWS_API.apiKey}`;

  switch (dSource) {
    case "nyc":
      baseUrl = NYC_API.baseUrl;
      newRoute = "articlesearch.json";
      apiKey = `api-key=${NYC_API.apiKey}`;
      break;
    case "guardian":
      baseUrl = G_API.baseUrl;
      // newRoute = "check later";
      apiKey = `api-key=${G_API.apiKey}`;
      break;
    default:
      baseUrl = NEWS_API.baseUrl;
      apiKey = `apiKey=${NEWS_API.apiKey}`;
      break;
  }

  const url = `${baseUrl}/${newRoute}?${apiKey}`;

  return url;
};

export const stringToArray = (str: string) => {
  const arr = str
    .split(",")
    .map((item: string) => item.trim())
    .filter((item: string) => item !== "");
  return arr;
};
