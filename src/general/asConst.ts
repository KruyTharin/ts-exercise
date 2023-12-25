// as const
const logLevel = ["DEBUG", "WARNING", "ERROR"] as const;

const tabs = ["dashboard", "home", "about"] as const;
type Tabs = (typeof tabs)[number];

const switchTabs = (tabs: Tabs) => {};
switchTabs("about");

const tabsObject = {
  dashboard: "dashboard",
  home: "home",
  about: "about",
} as const;

type TabsObject = keyof typeof tabsObject;
const switchTabsObj = (tabs: TabsObject) => {};
switchTabsObj("dashboard");

// Special Type
type ArrayValueType<T> = T extends readonly string[] ? T[number] : never;
let myDashboard: ArrayValueType<typeof tabs>;
