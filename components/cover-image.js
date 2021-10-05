import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

export default function CoverImage({ title, url, slug }) {
  const image = (
    <div
      className={cn("drop-shadow-small", {
        "hover:drop-shadow-medium transition-drop-shadow duration-200": slug,
      })}
    >
      <Image
        width={2000}
        height={1000}
        alt={`Cover Image for ${title}`}
        src={url}
      />
    </div>
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
