<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
// @ts-expect-error: No TypeScript types available for 'pageable' package
import Pageable from 'pageable'

import HeroSection from './HeroSection.vue'
import AboutSection from './AboutSection.vue'
import ServicesSection from './ServicesSection.vue'
import ContactSection from './ContactSection.vue'

const activeSection = ref('home')
let pager: Pageable | undefined

function go(section: string) {
  pager?.scrollToAnchor(section) // smooth jump via Pageable
  activeSection.value = section
}

onMounted(() => {
  pager = new Pageable('#page-container', {
    anchors: ['home', 'about', 'services', 'contact'],
    animation: 600,
    pips: false,
    onFinish: (data: { index: string | number }) => {
      activeSection.value = pager?.pages[data.index].dataset.anchor ?? 'home'
    },
  })
})

onUnmounted(() => pager?.destroy())
</script>

<template>
  <div class="home">
    <!-- sticky nav (move outside of #page-container) -->
    <header class="site-header">
      <nav class="container">
        <a :class="{ active: activeSection === 'home' }" href="#home" @click.prevent="go('home')"
          >Home</a
        >
        <a :class="{ active: activeSection === 'about' }" href="#about" @click.prevent="go('about')"
          >About</a
        >
        <a
          :class="{ active: activeSection === 'services' }"
          href="#services"
          @click.prevent="go('services')"
          >Services</a
        >
        <a
          :class="{ active: activeSection === 'contact' }"
          href="#contact"
          @click.prevent="go('contact')"
          >Contact</a
        >
      </nav>
    </header>

    <!-- Pageable container (header is now outside) -->
    <div id="page-container">
      <section data-anchor="home"><HeroSection /></section>
      <section data-anchor="about"><AboutSection /></section>
      <section data-anchor="services"><ServicesSection /></section>
      <section data-anchor="contact"><ContactSection /></section>
    </div>
  </div>
</template>

<style scoped>
@import '/src/assets/base.css';

.home {
  /* Remove overflow-x: hidden unless you see horizontal scroll */
}
.container {
  margin: 0 auto;
  padding-inline: var(--space-xs);
}
.site-header {
  background: var(--color-background-soft);
  position: sticky;
  top: 0;
  z-index: 10;
  padding-block: var(--space-s);
  box-shadow: 0 2px 4px rgb(0 0 0 / 0.08);
}
.site-header nav {
  display: flex;
  gap: var(--space-m);
  justify-content: center;
}
.site-header nav a {
  color: var(--color-heading);
  font-weight: 500;
  padding: var(--space-xs) var(--space-s);
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.3s;
}
.site-header nav a:hover,
.site-header nav a.active {
  background: var(--vt-c-indigo);
  color: #fff;
}

#page-container {
  scroll-padding-top: var(--header-height, 4.5rem);
}
#page-container section {
  display: block;
  box-sizing: border-box;
  height: 100dvh;
  /* Remove min-height, width, and overflow-x */
}
</style>
