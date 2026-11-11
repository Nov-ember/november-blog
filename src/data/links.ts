import type { ImageMetadata } from "astro";

// 添加头像后，在这里导入，例如：
import hanyeAvatar from "@/assets/images/friends/hanye.png";

export type FriendLink = {
  name: string;
  url: `https://${string}` | `http://${string}`;
  description: string;
  /** 可选：从 src/assets/images/friends/ 导入的本地头像。 */
  avatar?: ImageMetadata;
};

// 按这里的顺序展示。复制这条示例并替换信息，即可添加友链。
export const friends: FriendLink[] = [
  {
    name: "寒叶",
    url: "https://hanye.netlify.app",
    description: "充满好奇心的学生，不懈造梦的人。",
    avatar: hanyeAvatar,
  },
];
