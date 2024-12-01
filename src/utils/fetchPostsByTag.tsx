import { Posts } from "@/lib/dummydata";
export const fetchPostsByTag = (tag: string) => {
    return Posts.filter(post => post.tags?.[tag] === true);
};

