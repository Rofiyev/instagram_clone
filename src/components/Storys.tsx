import { ISorysUser } from "@/interface";
import Stories from "react-insta-stories";

export default function Storys({ storys }: { storys: ISorysUser[] }) {
  const storyContent = {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto",
  };

  return (
    <>
      <Stories
        stories={storys}
        defaultInterval={1500}
        width={"100%"}
        height={"100%"}
        storyStyles={storyContent}
        loop={false}
        keyboardNavigation={true}
      />
    </>
  );
}
