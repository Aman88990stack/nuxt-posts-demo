import { useFetch } from 'nuxt/app';
import { defineStore } from 'pinia';

export type Post = {
  id: number;
  title: string;
  body: string;
  tags?: string[];
  reactions?: number;
  userId?: number;
};

export const usePostsStore = defineStore('posts', {
  state: () => ({
    list: [] as Post[],
    loaded: false,
  }),
  actions: {
    async fetchAll() {
      if (this.loaded && this.list.length) return;
      const { data, error } = await useFetch<Post[]>('/api/posts', { key: 'posts-list' });
      if (error.value) throw error.value;
      this.list = data.value ?? [];
      this.loaded = true;
    },
    async fetchOne(id: number) {
      const existing = this.list.find(p => p.id === id);
      if (existing) return existing;
      const { data, error } = await useFetch<Post>(`/api/posts/${id}`, { key: `post-${id}` });
      if (error.value) throw error.value;
      const post = data.value!;
      if (!this.list.find(p => p.id === post.id)) this.list.push(post);
      return post;
    }
  }
});
