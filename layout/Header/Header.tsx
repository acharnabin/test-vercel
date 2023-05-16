import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { logout } from "@/reduxtoolkit/slices/userSlice";
import styles from "@/styles/layout/header.module.scss";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Container, ListItemIcon, Popover } from "@mui/material";
import Image from "next/image";
import assest from "@/json/assest";
import CustomButtonWithIcon from "@/ui/Buttons/CustomButtonWithIcon";
import { checkWindow } from "@/lib/functions/_helpers.lib";
import { setCookieClient } from "@/lib/functions/storage.lib";
import useTheme from "@/hooks/useTheme";
import FacebookIcon from "@/ui/Icons/FacebookIcon";
import TwitterIcon from "@/ui/Icons/TwitterIcon";
import Youtubeicon from "@/ui/Icons/Youtubeicon";
import LightMode from "@/ui/Icons/LightMode";
import DarkModeIcon from "@/ui/Icons/DarkModeIcon";
import LoginModalWrapper from "@/components/LoginModal";

const CustomButton = dynamic(() => import("@/ui/Buttons/CustomButton"));

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  {
    name: "Favourites",
    route: "/favourites",
  },
  {
    name: "Discover",
    route: "/discover/chat-gpt",
  },
  {
    name: "Deals",
    route: "/?pricing=Deals",
  },
  {
    name: "Submit",
    route: "/submit-tool",
    type: "button",
    children: [
      {
        name: "Submit Tools",
        route: "/submit-tool",
        icon: assest.iconTools,
      },
      {
        name: "Submit News",
        route: "/submit-news",
        icon: assest.iconNews,
      },
    ],
  },
  {
    name: "Community",
    route: "/community",
    type: "button",
    children: [
      {
        name: "Newsletter Issues",
        route: "/newsletter",
      },
      {
        name: "Latest AI News",
        route: "/submit-tool",
      },
      {
        name: "Join Discord",
        route: "/submit-tool",
      },
    ],
  },
];

const MenuItemLink = ({ item }) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  if (item?.type === "button") {
    return (
      <>
        <Button
          onClick={handlePopoverOpen}
          key={item.name}
          className={
            item?.route === router.pathname
              ? `${styles.active} ${styles.menu_btn}`
              : styles.menu_btn
          }
        >
          <span>{item?.name}</span>
        </Button>
        <Popover
          id="mouse-over-popover"
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <List>
            {item?.children?.map((_children) => (
              <ListItem>
                <Link href={_children.route}>
                  <Button
                    startIcon={
                      _children?.icon ? (
                        <Image
                          src={_children?.icon}
                          alt="etxt"
                          height={20}
                          width={20}
                        />
                      ) : null
                    }
                    className={styles.submenuBtn}
                  >
                    {_children?.name}
                  </Button>
                </Link>
              </ListItem>
            ))}
          </List>
        </Popover>
      </>
    );
  }

  return (
    <Link
      href={item?.route}
      key={item.name}
      className={
        item?.route === router.pathname
          ? `${styles.active} ${styles.menu_btn}`
          : styles.menu_btn
      }
    >
      <span>{item?.name}</span>
    </Link>
  );
};

export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { userData, isLoggedIn } = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { toogleDarkMode } = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };
  const { theme } = useTheme();
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box className={styles.logoarea_drawer}>
        {theme === "dark-mode" ? (
          <Link href="/">
            <Image src={assest.logo} alt="img" width={132} height={45} />
          </Link>
        ) : (
          <Link href="/">
            <Image src={assest.logo2} alt="img" width={132} height={45} />
          </Link>
        )}
      </Box>
      <Divider />
      <List className={styles.head_menu}>
        {navItems.map((item) => (
          <Link href={item?.route} key={item.name}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <Box className={styles.for_drawer}>
        <Box className={styles.social_icon}>
          <Link href="/" title="Facebook">
            <FacebookIcon />
          </Link>
          <Link href="/" title="Twitter">
            <TwitterIcon />
          </Link>
          <Link href="/" title="Youtube">
            <Youtubeicon />
          </Link>
        </Box>

        <Box className={styles.hdr_cmn_btn}>
          {isLoggedIn ? (
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <CustomButton onClick={handleLogout} type="button" variant="text">
                <span>Logout</span>
              </CustomButton>

              <CustomButton type="button" variant="text">
                <span>{userData?.email}</span>
              </CustomButton>
            </Box>
          ) : (
            <LoginModalWrapper>
              <CustomButtonWithIcon type="button">
                <Typography variant="body1">
                  <span>
                    {<Image
                      src={assest.google_icon}
                      alt="icon"
                      width={22}
                      height={22}
                    />}
                  </span>
                  Login
                </Typography>
              </CustomButtonWithIcon>
            </LoginModalWrapper>
          )}
        </Box>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} className={styles.header_wrapper}>
      <AppBar
        component="nav"
        position="static"
        elevation={0}
        className={styles.headerContainer}
      >
        <Container fixed>
          <Box className={styles.header_content}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { lg: "none" } }}
              className={styles.drawer_icon}
            >
              <MenuIcon />
            </IconButton>
            <Box className={styles.logoarea}>
              {theme === "dark-mode" ? (
                <Link href="/">
                  <Image src={assest.logo} alt="img" width={132} height={45} />
                </Link>
              ) : (
                <Link href="/">
                  <Image src={assest.logo2} alt="img" width={132} height={45} />
                </Link>
              )}
            </Box>
            <Box
              className={styles.head_menu}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              {navItems.map((item) => (
                <MenuItemLink item={item} />
              ))}
            </Box>

            <Box className={styles.icon_area}>
              <Box className={styles.social_icon}>
                <Link href="/" title="Facebook">
                  <FacebookIcon />
                </Link>
                <Link href="/" title="Twitter">
                  <TwitterIcon />
                </Link>
                <Link href="/" title="Youtube">
                  <Youtubeicon />
                </Link>
              </Box>
              <Button onClick={toogleDarkMode} className={styles.mood_btn}>
                {theme === "dark-mode" ? <DarkModeIcon /> : <LightMode />}
              </Button>
              <Box className={styles.hdr_cmn_btn}>
                {isLoggedIn ? (
                  <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    <CustomButton
                      onClick={handleLogout}
                      type="button"
                      variant="text"
                    >
                      <span>Logout</span>
                    </CustomButton>

                    <CustomButton type="button" variant="text">
                      <span>{userData?.email}</span>
                    </CustomButton>
                  </Box>
                ) : (
                  <LoginModalWrapper>
                    <CustomButtonWithIcon type="button">
                      <Typography variant="body1">
                        <span>
                          {<Image
                            src={assest.google_icon}
                            alt="icon"
                            width={22}
                            height={22}
                          />}
                        </span>
                        Login
                      </Typography>
                    </CustomButtonWithIcon>
                  </LoginModalWrapper>
                )}
              </Box>
            </Box>
          </Box>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          className={styles.drawer_wrapper}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
