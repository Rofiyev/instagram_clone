import { ISidebarItem } from "@/interface";
import {
  IconHome,
  IconFileLike,
  IconPlus,
  IconSearch,
  IconUser,
  IconVideo,
} from "@tabler/icons-react";

export const sidebarItems: ISidebarItem[] = [
  { link: "/", label: "Home", icon: IconHome },
  { link: "/search", label: "Search", icon: IconSearch },
  { link: "/liked", label: "Liked", icon: IconFileLike },
  { link: "/reels", label: "Reels", icon: IconVideo },
  { link: "/create", label: "Create", icon: IconPlus },
  { link: "/profile", label: "Profile", icon: IconUser },
];
