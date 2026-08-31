import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { withBase } from "../i18n";

export async function GET(context: APIContext) {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return rss({
    title: "Pier 博客",
    description: "Pier — 本地 AI 开发工作台的版本更新",
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link:
        post.data.lang === "zh"
          ? withBase(`/blog/${post.id.split("/")[1]}/`)
          : withBase(`/${post.data.lang}/blog/${post.id.split("/")[1]}/`),
    })),
    customData: "<language>zh-CN</language>",
  });
}
