import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export function RecentBookmarks() {
  const recentBookmarks = useQuery(api.bookmarksFunctions.listBookmarks, {
    count: 5,
  });

  return (
    <>
      <h2 className="text-center m-4 font-semibold text-lg">
        Most recent bookmarks
      </h2>
      <div className="flex w-full text-left">
        <p className="w-1/4 border-l px-2">Name</p>
        <p className="w-1/2 border-l px-2">Link</p>
        <p className="w-1/4 border-l px-2">Creation date</p>
      </div>
      <hr className="my-2" />
      {recentBookmarks?.map((bookmark) => (
        <div key={bookmark._id} className="flex w-full text-left mb-2">
          <p className="w-1/4 border-l px-2 break-words">{bookmark.name}</p>
          <a
            className="w-1/2 border-l px-2 break-all"
            href={bookmark.link}
            target="blank"
          >
            {bookmark.link //Remove useless prefix
              .replace(/^https?:\/\//i, "")
              .replace(/^www\./i, "")}
          </a>
          <p className="w-1/4 border-l px-2">
            {new Date(bookmark._creationTime).toLocaleDateString()}
          </p>
        </div>
      ))}
      {!recentBookmarks && <p>Loading...</p>}
    </>
  );
}
