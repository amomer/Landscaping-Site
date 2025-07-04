<script setup lang="ts">
import HeroSection from './HeroSection.vue'
import AboutSection from './AboutSection.vue'
import ServicesSection from './ServicesSection.vue'
import ContactSection from './ContactSection.vue'

import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('home')

function setActiveSection(section: string) {
  activeSection.value = section
}

let observer: IntersectionObserver

onMounted(() => {
  const sections = document.querySelectorAll<HTMLElement>('.section')

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeSection.value = (entry.target as HTMLElement).id
        }
      }
    },
    { threshold: 0.6 },
  )

  sections.forEach((section) => observer.observe(section))
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <div class="home">
    <header class="site-header">
      <nav class="container">
        <a
          :class="{ active: activeSection === 'home' }"
          href="#home"
          @click="setActiveSection('home')"
          >Home</a
        >
        <a
          :class="{ active: activeSection === 'about' }"
          href="#about"
          @click="setActiveSection('about')"
          >About</a
        >
        <a
          :class="{ active: activeSection === 'services' }"
          href="#services"
          @click="setActiveSection('services')"
          >Services</a
        >
        <a
          :class="{ active: activeSection === 'contact' }"
          href="#contact"
          @click="setActiveSection('contact')"
          >Contact</a
        >
      </nav>
    </header>

    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ContactSection />
  </div>
</template>

<style scoped>
@import '/src/assets/base.css';

/* Utility container, wider on desktop */
.container {
  max-width: 90rem;
  margin-inline: auto;
  padding-inline: var(--space-m);
}

/* HEADER */
.site-header {
  background: var(--color-background-soft);
  position: sticky;
  top: 0;
  z-index: 10;
  padding-block: var(--space-s);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.site-header nav {
  display: flex;
  gap: var(--space-m);
  justify-content: center;
}

.site-header nav a {
  text-decoration: none;
  color: var(--color-heading);
  font-weight: 500;
  padding: var(--space-xs) var(--space-s);
  border-radius: 4px;
  transition: background 0.2s;
}

.site-header nav a:hover,
.site-header nav a.active {
  background: var(--vt-c-indigo);
  color: #fff;
}
</style>
