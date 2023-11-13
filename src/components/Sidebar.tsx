import { useState } from "react";
import { SegmentedControl, Text } from "@mantine/core";
import {
  IconHome,
  IconMessages,
  IconFileLike,
  IconPlus,
  IconSearch,
  IconLogout,
  IconUser,
  IconSwitchHorizontal,
} from "@tabler/icons-react";
import classes from "./style/Sidebar.module.css";
import { useRouter } from "next/router";

const tabs = {
  account: [
    { link: "/", label: "Home", icon: IconHome },
    { link: "/search", label: "Search", icon: IconSearch },
    { link: "/liked", label: "Liked", icon: IconFileLike },
    { link: "/create", label: "Create", icon: IconPlus },
    { link: "/profile", label: "Profile", icon: IconUser },
  ],
};

export default function Sidebar() {
  const [section, setSection] = useState<"account">("account");
  const navigete = useRouter();
  const [active, setActive] = useState(navigete.pathname);

  console.log(navigete.pathname.split("/")[1]);

  const links = tabs[section].map((item) => (
    <a
      className={classes.link}
      data-active={item.link == navigete.pathname || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);

        navigete.push(item.link);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div>
        <Text fw={500} size="sm" className={classes.title} mb="xs">
          Instagram
        </Text>
      </div>

      <div className={classes.navbarMain}>{links}</div>

      <div className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}
