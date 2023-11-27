/* eslint-disable no-useless-catch */

import http from "@/services/http";
import { IApi } from "./types";
import { objectToFormData } from "@/utils";

export const Login = ({ ...params }: IApi.Login.Request) =>
  http.post<IApi.Login.Response>(
    "/api/v1/user/login/",
    objectToFormData({ ...params })
  );

export const Profile = () => http.get("/api/v1/user/profile");
