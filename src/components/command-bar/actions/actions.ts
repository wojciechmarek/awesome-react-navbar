import { createAction } from "kbar";
import { HomeIcon } from "../icons";

// const history = useHistory();

export const initialActions = [
  {
    id: "homeAction",
    name: "Home",
    shortcut: ["h"],
    keywords: "back",
    section: "Navigation",
    perform: () => (window.location.href = "/"),
    // icon: HomeIcon,
    subtitle: "Subtitles can help add more context.",
  },
  {
    id: "changelogAction",
    name: "Docs",
    shortcut: ["g", "d"],
    keywords: "documentation changelog",
    section: "Navigation",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  {
    id: "other1Action",
    name: "Other 1",
    shortcut: ["g", "1"],
    keywords: "documentation changelog",
    section: "Navigation",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  {
    id: "other2Action",
    name: "Other 2",
    shortcut: ["g", "2"],
    keywords: "documentation changelog",
    section: "Navigation",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  {
    id: "contactAction",
    name: "Contact",
    shortcut: ["c"],
    keywords: "email hello",
    section: "Navigation",
    perform: () => window.open("mailto:timchang@hey.com", "_blank"),
  },
  {
    id: "onetAction",
    name: "Onet.pl",
    shortcut: ["g", "t"],
    keywords: "onet pl news portal",
    section: "Links",
    perform: () => window.open("https://onet.pl/", "_blank"),
  },
  createAction({
    name: "This repo on GitHub",
    shortcut: ["g", "h"],
    keywords: "github repo source code",
    section: "Links",
    perform: () => window.open("https://github.com/timc1/kbar", "_blank"),
  }),
];
