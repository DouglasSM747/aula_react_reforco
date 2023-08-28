/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Credentials": true,
  "X-Requested-With": "XMLHttpRequest",
};

class Http {
  private instance: AxiosInstance | null = null;

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  initHttp() {
    const apiUrl = import.meta.env.VITE_API_URL;
    const http = axios.create({
      baseURL: apiUrl,
      headers,
      withCredentials: true,
    });

    http.interceptors.response.use(
      function (response) {
        return response;
      },

      function (error) {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 403) window.location.href = "/"; // Joga o usuario para tela inicial
        }
      }
    );
    this.instance = http;
    return http;
  }

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.get<T, R>(url, config);
  }

  post<T = any>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<any> {
    return this.http.post<T, any>(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.put<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.delete<T, R>(url, config);
  }
}

export const http = new Http();
