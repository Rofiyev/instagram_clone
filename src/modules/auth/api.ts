/* eslint-disable no-useless-catch */

import http from "@/services/http";
import { IApi } from "./types";

export const Register = (body: IApi.Login.Request) =>
  http.post<IApi.Login.Response>("/api/v1/user/register/", body);
export const Login = (body: IApi.Login.Request) =>
  http.post<IApi.Login.Response>("/api/v1/user/login/", body);

export const getProfile = () => http.get("/api/v1/user/profile");
export const getPosts = () => http.get("/api/v1/post/post/");
export const getReels = () => http.get("/api/v1/post/reel/");
export const changeUserProfile = (body: any) =>
  http.patch("/api/v1/user/profile", body);
export const getStorys = () => http.get("/api/v1/post/story/");
