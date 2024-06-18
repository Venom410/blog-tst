import { getPostsMeta } from "@/lib/post";
import ListItem from "@/components/Posts/ListItem";
import Link from "next/link";

export const revalidate = 86400;

type Props = {
    params: {
        tag: string;
    };
};

export async function generateStaticParams() {
    const posts = await getPostsMeta(); // deduped!

    if (!posts) return [];

    const tags = new Set(posts.map(post => post.tags).flat());

    return Array.from(tags).map(tag => ({ tag }));
}

export function generateMetadata({ params: { tag } }: Props) {
    return {
        title: `Posts about ${tag}`,
    };
}

export default async function TagPostList({ params: { tag } }: Props) {
    const posts = await getPostsMeta(); // deduped!

    if (!posts) return <p className="mt-10 text-center">Sorry, no posts available.</p>;

    const tagPosts = posts.filter(post => post.tags.includes(tag));

    if (!tagPosts.length) {
        return (
            <div className="container mx-auto py-12 px-4 text-center">
                <p className="mt-10">Sorry, no posts for #{tag}.</p>
                <Link href="/">
                    <a className="text-blue-500 hover:underline">Back to Home</a>
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-12 px-4 mt-20">
            <h2 className="text-3xl font-semibold mt-4 mb-8">Results for: #{tag}</h2>
            <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {tagPosts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </section>
        </div>
    );
}
