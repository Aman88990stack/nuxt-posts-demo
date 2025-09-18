<template>
  <NuxtLink :to="`/posts/${post.id}`" class="block">
    <article class="rounded-2xl border p-5 shadow hover:shadow-md transition">
      <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
      <p class="text-sm text-gray-600 line-clamp-3">{{ post.body }}</p>

      <div class="mt-3 flex flex-wrap gap-2">
        <span
          v-for="t in (post.tags || [])"
          :key="t"
          class="text-xs px-2 py-1 rounded-full bg-gray-100"
        >
          #{{ t }}
        </span>
      </div>

      <div class="mt-4 text-xs text-gray-500">
        👍 {{ post.reactions ?? 0 }}
      </div>
    </article>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Post } from '@/stores/usePosts';
defineProps<{ post: Post }>();
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
