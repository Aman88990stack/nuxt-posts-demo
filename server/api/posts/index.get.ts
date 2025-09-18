type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: number;
  userId: number;
};

export default defineCachedEventHandler(async () => {
  const res = await $fetch<{ posts: Post[] }>('https://dummyjson.com/posts?limit=50');
  return res.posts.map((p) => ({
    id: p.id,
    title: p.title,
    body: p.body,
    tags: p.tags,
    reactions: p.reactions,
    userId: p.userId,
  }));
}, { maxAge: 60 * 15, swr: true });
