import { config } from "@/config";
import { IEntity } from "@/interface";
import store from "store2";
export namespace SendEmail {
  export type Request = {
    email: string;
  };
}
export const getSession = (): IEntity.Tokens =>
  store.get(config.api.sessionKEY) || {};

export const clearSession = () => store.remove(config.api.sessionKEY)!;

export const setSession = (tokens: IEntity.Tokens) =>
  store.set(config.api.sessionKEY, tokens);

export const getSessionVerification = (): IEntity.Tokens =>
  store.get("verification") || {};

export const clearSessionVerification = () => store.remove("verification")!;

export const setSessionVerification = (email: SendEmail.Request) =>
  store.set("verification", email);

export const getSessionReset = (): IEntity.Tokens =>
  store.get("resetemail") || {};

export const clearSessionReset = () => store.remove("resetemail")!;

export const setSessionReset = (email: SendEmail.Request) =>
  store.set("resetemail", email);
