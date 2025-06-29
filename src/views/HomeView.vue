<script setup lang="ts">
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

const form = ref({ name: '', email: '', message: '' })

const submitForm = () => {
  const body = `Name: ${form.value.name}\nEmail: ${form.value.email}\n\n${form.value.message}`
  const mailto =
    'mailto:aomer4540@outlook.com?subject=' +
    encodeURIComponent('Contact Form Submission') +
    '&body=' +
    encodeURIComponent(body)
  window.location.href = mailto
}
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

    <!-- HERO -->
    <section id="home" class="section hero">
      <picture>
        <source srcset="/images/hero-placeholder.png" media="(min-width: 48rem)" />
        <img src="/images/hero-placeholder.png" alt="Lush landscape" class="hero-img" />
      </picture>
      <div class="hero-text">
        <h1>Welcome to Our Company</h1>
        <p>Your satisfaction is our priority.</p>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="section about">
      <div class="about-content container">
        <img src="/images/about-placeholder.png" alt="About us" class="about-img" />
        <div>
          <h2>About Us</h2>
          <p>
            Our landscaping company was founded with a single goal in mind: to provide exceptional
            outdoor services to our community. Over the years we have grown into a team of
            professionals who take pride in every project, big or small.
          </p>
          <p>
            While this page is a placeholder, it highlights our commitment to craftsmanship,
            reliability, and customer satisfaction. We work closely with clients to understand their
            needs and deliver results that enhance their outdoor living spaces.
          </p>
          <h3>Contact Information</h3>
          <ul class="company-info">
            <li>Phone: (123) 456-7890</li>
            <li>Email: info@landscapingco.com</li>
            <li>Address: 123 Greenway Blvd, Hometown, USA</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- SERVICES --->
    <section id="services" class="section services">
      <div class="container">
        <h2>Services</h2>
        <div class="services-grid">
          <div class="service">
            <img src="/images/service1-placeholder.jpg" alt="Lawn Care" />
            <p>Lawn Care</p>
          </div>
          <div class="service">
            <img src="/images/service2-placeholder.jpg" alt="Garden Design" />
            <p>Garden Design</p>
          </div>
          <div class="service">
            <img src="/images/service3-placeholder.jpg" alt="Tree Maintenance" />
            <p>Tree Maintenance</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="section contact">
      <div class="container contact-inner">
        <h2>Contact Us</h2>
        <form @submit.prevent="submitForm" class="contact-form">
          <div>
            <label for="name">Name</label>
            <input id="name" v-model="form.name" required />
          </div>
          <div>
            <label for="email">Email</label>
            <input id="email" v-model="form.email" type="email" required />
          </div>
          <div>
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
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

/* SECTION WRAPPER */
.section {
  padding-block: calc(var(--space-l) * 1.25);
}

/* HERO */
.hero {
  position: relative;
  padding: 0;
  text-align: center;
}

.hero-img {
  width: 100%;
  height: 55vh;
  object-fit: cover;
  display: block;
}

.hero-text {
  position: absolute;
  inset: 0;
  display: grid;
  place-content: center;
  gap: var(--space-s);
  text-align: center;
  backdrop-filter: blur(2px);
  background: rgba(255, 255, 255, 0.45);
  border-radius: 8px;
  color: var(--color-heading);
}

/* ABOUT */
.about-content {
  display: grid;
  gap: var(--space-m);
}

@media (min-width: 48rem) {
  .about-content {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
}

.about-img {
  width: 100%;
  border-radius: 8px;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

/* SERVICES */
.services-grid {
  display: grid;
  gap: var(--space-m);
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
}

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

/* CONTACT */
.contact-inner {
  display: grid;
  justify-content: center;
}

.contact-form {
  display: grid;
  gap: var(--space-s);
  width: min(100%, 35rem);
  padding: var(--space-m);
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: var(--space-s);
  font: inherit;
  border: 1px solid var(--color-border);
  border-radius: 4px;
}

.contact-form button {
  justify-self: start;
  padding: var(--space-s) var(--space-m);
  background: var(--vt-c-indigo);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: filter 0.2s;
}

.contact-form button:hover {
  filter: brightness(1.15);
}
</style>
