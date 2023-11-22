import { useState } from "react";
import Stories from "react-insta-stories";

const burakHeading = {
  heading: "Burak Deniz",
  subheading: "burakdeniz@gmail.com",
  profileImage: "https://i.imgur.com/lq0DC3a.jpg",
};

const initialStories = [
  {
    url: "https://i.imgur.com/QpUEcfi.jpg",
    type: "image",
    header: burakHeading,
    duration: 1500,
  },

  {
    url: "https://i.imgur.com/Zo5Kpnd.mp4",
    type: "video",
    header: burakHeading,
  },
  {
    url: "https://i.imgur.com/LBRXhIq.jpg",
    type: "image",
    header: burakHeading,
    duration: 1500,
  },
  {
    url: "https://i.imgur.com/ARMxyC4.png",
    type: "image",
    header: burakHeading,
    duration: 1500,
  },
];

export default function Storys() {
  const [stories, setStories] = useState(initialStories);

  const storyContent = {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto",
  };
  return (
    <>
      <Stories
        stories={stories}
        defaultInterval={1500}
        width={"100%"}
        height={"100%"}
        storyStyles={storyContent}
        loop={false}
        keyboardNavigation={true}
        // isPaused={() => {}}
        // currentIndex={() => {}}
        // onStoryStart={() => {}}
        // onStoryEnd={() => {}}
        // onAllStoriesEnd={onAllStoriesEndHandler}
      />
    </>
  );
}
