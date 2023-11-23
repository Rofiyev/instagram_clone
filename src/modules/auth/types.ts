import { Types } from "modules/courses";

import { GENDER, JOB } from "./constants";

export namespace IEntity {
   export interface User {
      firstName: string;
      lastName: string;
      phone: string;
      img: string | null;
      balance: string;
      email: string;
      username: string;
      gender: GENDER;
      job: JOB;
      birthday: string;
      about: string;
      isActive: boolean;
      isSpiker: boolean;
      course: Types.IEntity.ICourseTop[];
   }
   export interface Tokens {
      email: any;
      access: string;
      refresh: string;
   }
}
export namespace IForm {
   export interface Login {
      username: string;
      password: string;
   }

   export interface Register {
      first_name: string;
      last_name: string;
      username: string;
      password: string;
      re_password: string;
   }
   export interface Verification {
      email: string;
   }
   export interface ResetEmail {
      email: string;
   }
   export interface Checkpassword {
      password: number | null;
   }
   export interface ResetPassword {
      email?: string;
      activation_code: string;
      new_password: string;
      confirm_password: string;
   }

   export interface UserProfil {
      first_name?: string;
      last_name?: string;
      birthday?: string;
      gender?: string;
      phone?: string;
      image: string;
      balance: string;
      email: string;
      job?: string;
      username: string;
      about: string;
      is_active: boolean;
      is_spiker: boolean;
   }
}

export interface IToken {
   access: string;
   refresh: string;
}

export namespace IApi {
   export namespace Register {
      export interface Request extends IForm.Register {}
      export interface Response extends IForm.Register {}
   }
   export namespace Profile {
      export interface Request {}
      export interface Response extends IEntity.User {}
   }
   export namespace Login {
      export interface Request extends IForm.Login {}
      export interface Response extends IToken {}
   }
   export namespace SendEmail {
      export type Request = {
         email: string;
      };
   }
   export namespace ResetEmail {
      export type Request = {
         email: string;
      };
   }
   export namespace ResetPassword {
      export type Request = {
         email: string;
         activation_code: number;
         new_password: string;
         confirm_password: string;
      };
   }
   export namespace Checkpassword {
      export type Request = {
         email: string;
         activation_code: number | null;
      };
   }
   export namespace EditProfil {
      export type Request = {
         first_name?: string;
         last_name?: string;
         phone?: string;
         image?: string;
         balance?: string;
         email?: string;
         username?: string;
         gender?: string;
         job?: string;
         birthday?: string;
         about?: string;
         is_active?: boolean;
         is_spiker?: boolean;
      };
   }
}
export namespace IContext {
   export interface Auth {
      user: IEntity.User | null;
      isLoading: boolean;
      methods: {
         login: (user: IEntity.User) => void;
         logout: () => void;
      };
   }
}
