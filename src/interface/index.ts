export interface ISidebarItem {
  link: string;
  label: string;
  icon: any;
}

export interface IFormRegisterValues {
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  re_password: string;
}

export interface IFormLoginValues {
  username: string;
  password: string;
}
export namespace IEntity {
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
}
