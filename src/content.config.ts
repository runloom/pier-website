import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/** 博客文章：glob 加载 src/content/blog 下全部 markdown，按语言分子目录（zh、en），文件名即 slug。 */
const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    lang: z.enum(["zh", "en"]),
  }),
});

export const collections = { blog };
