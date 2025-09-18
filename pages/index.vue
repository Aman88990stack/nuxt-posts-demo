<!-- pages/index.vue -->
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

// when component loads, redirect to /posts
router.replace('/posts')
</script>

<template>
  <div class="flex items-center justify-center h-screen text-gray-500">
    Redirecting to posts...
  </div>
</template>
