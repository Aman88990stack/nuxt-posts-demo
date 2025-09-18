import { getRouterParam } from 'h3';

type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: number;
  userId: number;
};

export default defineCachedEventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'));
  const post = await $fetch<Post>(`https://dummyjson.com/posts/${id}`);
  return post;
}, {
  maxAge: 60 * 15,
  swr: true,
});
