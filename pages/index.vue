<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Posts</h1>
    <div class="grid gap-4 md:grid-cols-2">
      <PostCard v-for="p in posts" :key="p.id" :post="p" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePostsStore } from '@/stores/usePosts';
import PostCard from '@/components/PostCard.vue';

const store = usePostsStore();
await store.fetchAll();
const posts = computed(() => store.list);
</script>
