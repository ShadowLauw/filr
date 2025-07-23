import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const listBookmarks = query({
  args: {
    count: v.number(),
  },

  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      throw new Error("Client is not authenticated!");
    }
    const bookmarks = await ctx.db
      .query("bookmarks")
      .withIndex("by_user", (q) => q.eq("user", userId))
      .order("desc")
      .take(args.count);

    return bookmarks;
  },
});

export const addBookmark = mutation({
  args: {
    name: v.string(),
    link: v.string(),
  },

  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      throw new Error("Client is not authenticated!");
    }

    const id = await ctx.db.insert("bookmarks", {
      name: args.name,
      link: args.link,
      user: userId,
    });

    return id;
  },
});
