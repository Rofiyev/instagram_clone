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

const tabs = {
  account: [
    { link: "", label: "Home", icon: IconHome },
    { link: "", label: "Search", icon: IconSearch },
    { link: "", label: "Liked", icon: IconFileLike },
    { link: "", label: "Create", icon: IconPlus },
    { link: "", label: "Profile", icon: IconUser },
  ],
};

export default function Sidebar() {
  const [section, setSection] = useState<"account">("account");
  const [active, setActive] = useState("Billing");

  const links = tabs[section].map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div>
        <Text fw={500} size="sm" className={classes.title} c="dimmed" mb="xs">
          bgluesticker@mantine.dev
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
