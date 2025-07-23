"use client";

import { useState } from "react";
import AddBookmarkDialog from "@/components/AddBookmarkDialog";
import { RecentBookmarks } from "@/components/RecentBookmarks";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [addBookmark, setAddBookmark] = useState(false);
  const router = useRouter();

  return (
    <>
      <h1 className="justify-center flex text-3xl m-8">My dashboard</h1>
      <div className="flex justify-evenly mb-20">
        <button
          className="inline-block border-2 border-violet-400 rounded-3xl w-40 h-50 hover:cursor-pointer"
          onClick={() => setAddBookmark(true)}
        >
          Create a new bookmark
        </button>
        <AddBookmarkDialog
          open={addBookmark}
          onClose={() => setAddBookmark(false)}
        />
        <button className="inline-block border-2 border-violet-400 rounded-3xl w-40 h-50 hover:cursor-pointer">
          Upload a new file
        </button>
      </div>
      <div className="flex">
        <div className="w-1/2 flex flex-col px-6">
          <RecentBookmarks />
          <div className="flex justify-center">
            <button
              className="hover:cursor-pointer hover:bg-violet-500 bg-violet-400 rounded-md mt-4 h-10 w-50 flex items-center justify-center"
              onClick={() => router.push("/dashboard/bookmarks")}
            >
              See all my bookmarks
            </button>
          </div>
        </div>
        <div className="w-1/2 flex flex-col px-6">
          <h2 className="text-center m-4 font-semibold text-lg">
            Most recent files
          </h2>
          <div className="flex w-full text-left">
            <p className="w-1/2 border-l px-2">Name</p>
            <p className="w-1/4 border-l px-2">Size</p>
            <p className="w-1/4 border-l px-2">Creation date</p>
          </div>
          <hr className="my-2" />
        </div>
      </div>
    </>
  );
}
