import type { UIStrings } from "../types";

export default {
  nav: {
    home: "首页",
    posts: "文章",
    tags: "标签",
    about: "关于",
    archives: "归档",
    search: "搜索",
  },
  post: {
    publishedAt: "发布于",
    updatedAt: "更新于",
    tagLabel: "标签",
    backToTop: "返回顶部",
    tableOfContents: "目录",
    goBack: "返回",
    editPage: "编辑页面",
    previousPost: "上一篇",
    nextPost: "下一篇",
  },
  pagination: {
    prev: "上一页",
    next: "下一页",
    page: "页",
  },
  home: {
    featured: "精选文章",
    recentPosts: "最新文章",
    allPosts: "全部文章",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "All rights reserved.",
  },
  pages: {
    tagTitle: "标签",
    tagDesc: "All the articles with the tag",

    tagsTitle: "标签",
    tagsDesc: "All the tags used in posts.",

    postsTitle: "文章",
    postsDesc: "All the articles I've posted.",

    archivesTitle: "归档",
    archivesDesc: "All the articles I've archived.",

    searchTitle: "搜索",
    searchDesc: "Search any article ...",
  },
  a11y: {
    choosePalette: "选择配色",
    skipToContent: "跳转到正文",
    skipTableOfContents: "跳过目录",
    openMenu: "展开菜单",
    closeMenu: "收起菜单",
    toggleTheme: "切换明暗主题",
    searchPlaceholder: "搜索文章...",
    noResults: "未找到相关文章",
    goToPreviousPage: "前往上一页",
    goToNextPage: "前往下一页",
  },
  notFound: {
    title: "404 Not Found",
    message: "页面未找到",
    goHome: "返回首页",
  },
} satisfies UIStrings;
