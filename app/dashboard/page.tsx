"use client";

import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import AddBookmarkDialog from "@/components/AddBookmarkDialog";

export default function Dashboard() {
  const addBookmarkMutation = useMutation(api.bookmarksFunctions.addBookmark);
  const [addBookmark, setAddBookmark] = useState(false);

  return (
    <>
      <h1 className="justify-center flex text-3xl m-8">My dashboard</h1>
      <div className="flex justify-evenly">
        <button
          className="inline-block border-2 border-violet-400 rounded-3xl w-40 h-50 hover:cursor-pointer"
          onClick={() => setAddBookmark(true)}
        >
          Create a new bookmark
        </button>
        <AddBookmarkDialog open={addBookmark} onClose={() => setAddBookmark(false)} />
        <button className="inline-block border-2 border-violet-400 rounded-3xl w-40 h-50 hover:cursor-pointer">
          Upload a new file
        </button>
      </div>
    </>
  );
}
