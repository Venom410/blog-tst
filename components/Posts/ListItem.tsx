import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
    post: Meta;
}

export default function ListItem({ post }: Props) {
    const { id, title, date, tags } = post;
    const formattedDate = getFormattedDate(date);

    return (
        <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto mb-6 transform transition-transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40 sm:w-80 w-full">
            <div className="relative h-40 overflow-hidden rounded-t-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg p-4 flex items-center justify-center">
                <h5 className="text-lg font-bold leading-snug tracking-normal antialiased text-center">
                    {title}
                </h5>
            </div>
            <div className="p-6">
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased mt-2">
                    {formattedDate}
                </p>
                {tags && (
                    <div className="mt-4">
                        {tags.map(tag => (
                            <span key={tag} className="text-xs font-semibold inline-block py-1 px-2 rounded text-blue-600 bg-blue-200 last:mr-0 mr-1">
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            <div className="p-6 pt-0">
                <Link href={`/posts/${id}`}>
                    <p className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        Read More
                    </p>
                </Link>
            </div>
        </div>
    );
}
