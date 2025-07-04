<template>
  <div class="service">
    <!--
      If your images are in the public/images folder, use /images/...
      If your images are in src/assets, use require or import and bind the image.
    -->
    <img :src="image" :alt="title" />
    <p>{{ title }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.service {
  text-align: center;
  display: grid;
  gap: var(--space-xs);
}

.service img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 8px;
}
</style>
