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

export interface IFormRegister {
  username: string;
  email: string;
  password: string;
}

export interface IUserProfile {
  bio: null | string;
  first_name: string;
  followers: number;
  following: number;
  fullname: string;
  gender: string;
  id: number;
  image: string | null;
  is_public: boolean;
  last_login: null | string;
  last_name: string;
  social_links: string;
  user_highlights: [];
  user_posts: [];
  user_reels: [];
  user_stories: [];
  username: string;
}
export interface IPosts {
  alt_text: null | string;
  audio_description: null | string;
  created_at: string;
  date: string;
  id: string;
  image_description: null | string;
  is_liked: boolean;
  location: null | string;
  location_description: null | string;
  media: string[];
  tag: null | string;
  text: string;
  updated_at: string;
  username: string;
}

export interface IReels {
  caption: null | string;
  created_at: Date;
  id: string;
  is_liked: boolean;
  media: string;
  updated_at: Date;
  username: string;
}

export interface IStorys {
  created_at: Date;
  date: Date;
  id: string;
  is_liked: false;
  mention: null;
  story: string;
  updated_at: Date;
  username: string;
  viewer: null | number;
}

export interface ISorysUser {
  url: string;
  type: string;
  duration: number;
  header: {
    heading: string;
    subheading: string;
    profileImage: string;
  };
}

export namespace IEntity {
  export interface Tokens {
    // email: any;
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
