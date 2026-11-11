import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://nov-ember.github.io",
    title: "November Notes",
    description: "十一月手记",
    author: "Nov",
    profile: "https://github.com/Nov-ember",
    lang: "zh-CN",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
  },
  features: {
    lightAndDarkMode: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
    toc: true,
  },
  socials: [
    { name: "github",   url: "https://github.com/Nov-ember" },
  ],
});
