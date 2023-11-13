export interface ISidebarItem {
  link: string;
  label: string;
  icon: any;
}

export interface IFormRegisterValues {
  first_name:string,
  last_name:string,
  username:string,
  password:string,
  re_password:string,
}

export interface IFormLoginValues {
  username: string;
  password: string;
}