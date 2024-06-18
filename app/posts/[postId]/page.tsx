import getFormattedDate from "@/lib/getFormattedDate";
import { getPostsMeta, getPostByName } from "@/lib/post";
import { notFound } from "next/navigation";
import Link from "next/link";
import 'highlight.js/styles/github-dark.css';
import Head from 'next/head';

export const revalidate = 86400;

type Props = {
  params: {
    postId: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta(); // deduped!

  if (!posts) return [];

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`); // deduped!

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.meta.title,
  };
}

export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`); // deduped!

  if (!post) notFound();

  const { meta, content } = post;
  const pubDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`} className="text-blue-600 hover:underline dark:text-blue-400">
      #{tag}
    </Link>
  ));

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;700&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet" />
      </Head>
      <div className="container mx-auto py-12 px-4">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-gray-900 mt-8 mb-4 font-serif">
            {meta.title}
          </h2>
          <p className="text-md text-gray-500 dark:text-gray-400 font-sans">
            {pubDate}
          </p>
        </div>
        <article className="prose lg:prose-xl dark:prose-dark mt-6 mx-auto font-sans">
          {content}
        </article>
        <section className="mt-8 text-center">
          <h3 className="text-3xl font-semibold text-gray-800 font-serif">
            Related:
          </h3>
          <div className="flex justify-center flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-semibold inline-block py-1 px-2 rounded text-blue-600 bg-blue-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
        <div className="text-center mt-10">
          <Link href="/blog">
            <p className="text-blue-500 hover:underline dark:text-blue-400 font-sans">← Back to home</p>
          </Link>
        </div>
      </div>
    </>
  );
}
