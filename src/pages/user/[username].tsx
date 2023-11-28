import { useRouter } from "next/router";
import { FunctionComponent } from "react";

interface UserDetailtProps {}

const UserDetailt: FunctionComponent<UserDetailtProps> = () => {
  const {
    query: { username },
  } = useRouter();
  return <h1>{username}</h1>;
};

export default UserDetailt;
