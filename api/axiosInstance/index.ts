import axios, { AxiosError, AxiosResponse } from "axios";
import { parseCookies } from "nookies";
import { setCookieClient } from "@/lib/functions/storage.lib";
import {
  globalCatchError,
  globalCatchSucess,
} from "@/lib/functions/_helpers.lib";
import { baseUrlApi, sucessNotificationEndPoints } from "../endpoints";
// import { refreshAccessToken } from "../functions/user.api";
import { BaseApiResponse } from "@/interface/common.interface";

const axiosInstance = axios.create({
  baseURL: baseUrlApi,
});

axiosInstance.interceptors.request.use((config) => {
  const cookies = parseCookies();
  let _token = process.env.NEXT_APP_TOKEN_NAME;

  if (!!_token) {
    const token = cookies[_token];
    if (token) {
      config.headers["x-access-token"] = `${token}`;
    }
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    // only show success notification on this routes

    if (sucessNotificationEndPoints.includes(res.config.url as string)) {
      globalCatchSucess(res);
    }

    return res;
  },
  async (error: AxiosError<BaseApiResponse>) => {
    globalCatchError(error);
    // const { data, status, config } = error.response!;
    const originalRequest = error.config;

    // if (error.response.status === 401 && !originalRequest._retry) {
    //   originalRequest._retry = true;
    //   const access_token = await refreshAccessToken();
    //   setCookieClient("token", access_token?.token);
    //   axios.defaults.headers.common["x-access-token"] = access_token?.token;
    //   return axiosInstance(originalRequest);
    // }

    return Promise.reject(error);

    // switch (status) {
    //   case 400:
    //     console.error(data);
    //     break;

    //   case 401:
    //     console.error("unauthorized");
    //     break;

    //   case 404:
    //     console.error("/not-found");
    //     break;

    //   case 500:
    //     console.error("/server-error");
    //     break;
    // }
    // return Promise.reject(error);
  }
);

export default axiosInstance;
