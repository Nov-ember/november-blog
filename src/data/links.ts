export type FriendLink = {
  name: string;
  url: `https://${string}` | `http://${string}`;
  description: string;
  /** 可选：头像放在 public/images/friends/，填写 /images/friends/文件名。也支持 HTTPS 图片地址。 */
  avatar?: string;
};

// 按这里的顺序展示。复制这条示例并替换信息，即可添加友链。
export const friends: FriendLink[] = [
  {
    name: "Example",
    url: "https://example.com",
    description: "这是一条示例友链，可以替换为朋友的博客。",
    // avatar: "/images/friends/example.webp",
  },
];
