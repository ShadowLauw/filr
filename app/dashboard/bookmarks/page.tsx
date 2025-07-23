"use client";
import { api } from "@/convex/_generated/api";
import { useMutation, usePaginatedQuery } from "convex/react";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function Bookmarks() {
  const { results, status, loadMore } = usePaginatedQuery(
    api.bookmarksFunctions.pagingBookmarks,
    {},
    { initialNumItems: 5 },
  );

  const deleteBookmark = useMutation(api.bookmarksFunctions.deleteBookmark);

  return (
    <>
      <main className="w-3/4 m-auto">
        <h1 className="flex text-center justify-center m-6 text-3xl">
          My bookmarks
        </h1>
        <div className="flex w-full text-left">
          <p className="w-1/5 border-l px-2">Name</p>
          <p className="w-1/2 border-l px-2">Link</p>
          <p className="w-1/5 border-l px-2">Creation date</p>
          <p className="w-1/10 border-l px-2">Delete</p>
        </div>
        <hr className="my-2" />
        <div>
          {results?.map((bookmark) => (
            <div key={bookmark._id} className="flex w-full text-left mb-6">
              <p className="w-1/5 border-l px-2 break-words">{bookmark.name}</p>
              <a
                className="w-1/2 border-l px-2 break-all"
                href={bookmark.link}
                target="blank"
              >
                {bookmark.link //Remove useless prefix
                  .replace(/^https?:\/\//i, "")
                  .replace(/^www\./i, "")}
              </a>
              <p className="w-1/5 border-l px-2">
                {new Date(bookmark._creationTime).toLocaleDateString()}
              </p>
              <button
                className="m-auto flex justify-center hover:cursor-pointer"
                onClick={async () => await deleteBookmark({ id: bookmark._id })}
              >
                <TrashIcon className="size-6 hover:stroke-red-500" />
              </button>
            </div>
          ))}
          <button
            className="hover:cursor-pointer hover:bg-violet-500 bg-violet-400 w-full rounded-md h-10"
            hidden={status === "Exhausted"}
            onClick={() => loadMore(5)}
          >
            Load more
          </button>
        </div>
      </main>
    </>
  );
}
