import Link from "next/link"

export default function NotFound() {
    return (
        <div className="text-center">
            <p className="mt-10">Sorry, the requested post does not exist.</p>
            <Link href="/blog">Back to Blog page</Link>
        </div>
    )
}