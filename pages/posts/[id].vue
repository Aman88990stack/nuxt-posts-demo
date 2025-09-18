<template>
  <div class="max-w-3xl mx-auto px-4 py-8">
    <NuxtLink to="/posts" class="text-sm text-blue-600">&larr; Back to Posts</NuxtLink>

    <article v-if="post" class="mt-4">
      <h1 class="text-3xl font-bold mb-3">{{ post.title }}</h1>
      <div class="text-gray-700 leading-7 whitespace-pre-line">{{ post.body }}</div>

      <div class="mt-6 flex flex-wrap gap-2">
        <span
          v-for="t in (post.tags || [])"
          :key="t"
          class="text-xs px-2 py-1 rounded-full bg-gray-100"
        >#{{ t }}</span>
      </div>

      <div class="mt-4 text-sm text-gray-500">
        👍 {{ post.reactions ?? 0 }} • Author ID: {{ post.userId }}
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { usePostsStore, type Post } from '@/stores/usePosts';

const route = useRoute();
const id = Number(route.params.id);
const store = usePostsStore();

const post = ref<Post | null>(null);
try {
  post.value = await store.fetchOne(id);
} catch {
  post.value = null;
}
</script>
