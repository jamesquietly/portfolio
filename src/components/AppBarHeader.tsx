"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportIcon from "@mui/icons-material/Support";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import GithubIcon from "../../public/images/github.svg";
import LinkedInIcon from "../../public/images/linkedin.svg";

const LINKS = [
  { text: "Projects", href: "/", icon: HomeIcon },
  {
    text: "jamesquietly@gmail.com",
    href: "mailto:jamesquietly@gmail.com",
    icon: EmailOutlinedIcon,
  },
  { text: "Github", href: "https://github.com/jamesquietly", icon: GithubIcon },
  {
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/jamesly3",
    icon: LinkedInIcon,
  },
];

const PLACEHOLDER_LINKS = [
  { text: "Settings", icon: SettingsIcon },
  { text: "Support", icon: SupportIcon },
  { text: "Logout", icon: LogoutIcon },
];

type AppBarHeaderArgs = {
  drawerWidth: number;
};

export function AppBarHeader({ drawerWidth }: AppBarHeaderArgs) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: 2000 }}>
        <Toolbar sx={{ backgroundColor: "background.paper" }}>
          <IconButton
            sx={{ color: "#444", mr: 2 }}
            onClick={() => toggleMenu()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="text.primary">
            James Ly
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            top: ["48px", "56px", "64px"],
            height: "auto",
            bottom: 0,
          },
        }}
        open={menuOpen}
        variant="temporary"
        anchor="left"
      >
        <Divider />
        <List>
          {LINKS.map(({ text, href, icon: Icon }) => (
            <ListItem key={href} disablePadding>
              <ListItemButton
                component={Link}
                href={href}
                onClick={() => toggleMenu()}
              >
                <ListItemIcon>
                  {text == "Github" || text == "LinkedIn" ? (
                    <Image src={Icon} width={25} height={25} alt="menu icon" />
                  ) : (
                    <Icon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ mt: "auto" }} />
        <List>
          {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default AppBarHeader;
