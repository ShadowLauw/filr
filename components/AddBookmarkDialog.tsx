"use client";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FormEvent } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function AddBookmarkDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const addBookmarkMutation = useMutation(api.bookmarksFunctions.addBookmark);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    let link = formData.get("link") as string;
    //Normalize url
    if (!/^https?:\/\//i.test(link)) {
      link = "https://" + link;
    }

    await addBookmarkMutation({ name, link });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/60" />
      <div className="flex flex-col gap-8 items-center justify-center fixed inset-0">
        <DialogPanel className="relative border-8 border-violet-400 p-5 rounded-xl max-w-lg overflow-clip bg-background">
          <button
            onClick={onClose}
            className="absolute top-0 right-0 rounded-full size-6 flex items-center hover:cursor-pointer"
          >
            <XMarkIcon />
          </button>
          <DialogTitle className="flex justify-center mb-4">
            Add a bookmark
          </DialogTitle>
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <input
              placeholder="Name"
              name="name"
              type="text"
              className="border-violet-400 p-2 rounded-md border-1"
            />
            <input
              placeholder="Link"
              name="link"
              type="text"
              className="border-violet-400 p-2 rounded-md border-1"
            />
            <button
              type="submit"
              className="hover:cursor-pointer hover:bg-violet-500 bg-violet-400 rounded-md h-8"
            >
              Add
            </button>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
