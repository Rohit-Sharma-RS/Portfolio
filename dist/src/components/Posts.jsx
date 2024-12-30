import { formatDate } from "../lib/utils";
import Link from "next/link";
import { Card } from "./ui/Card";
import { Separator } from "./ui/Separator";
export default function Posts(_a) {
    var posts = _a.posts;
    return (posts.length > 0 && (<Card>
        <ul className="flex flex-col">
          {posts.map(function (post, i) { return (<li key={i}>
              {i !== 0 && i !== posts.length && <Separator />}
              <Link href={"/blog/".concat(post.slug)}>
                <div className="flex flex-col justify-between p-6 sm:flex-row sm:items-center">
                  <div className="max-w-md md:max-w-lg">
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                    <p className="mt-1 line-clamp-2 text-sm font-light text-muted-foreground">
                      {post.summary}
                    </p>
                  </div>

                  {post.publishedAt && (<p className="mt-2 flex w-full justify-end text-sm font-light sm:mt-0 sm:w-auto">
                      {formatDate(post.publishedAt)}
                    </p>)}
                </div>
              </Link>
            </li>); })}
        </ul>
      </Card>));
}
