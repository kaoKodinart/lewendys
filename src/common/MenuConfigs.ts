import { OTHER_PAGES, USER_PAGES } from "../routes/path";

export const OtherMenuItems = [
    {
      title: "404",
      path: OTHER_PAGES.page404,
    },
    {
        title: "500",
        path: OTHER_PAGES.page500,
    },
];

export const UserMenuItems = [
    {
        title: "Accueil",
        path: USER_PAGES.home
    },
    {
        title: "A Propos",
        path: ""
    },
    {
        title: "Menu",
        path: USER_PAGES.menu
    },
    {
        title: "Reservation",
        path: ""
    },
    {
        title: "Contact",
        path: ""
    },
];

export const HeaderConfig = {
    HEIGHT: 80,
    MAX_HEIGHT: 70,
  };