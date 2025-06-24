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
      <nav>
        <a
          :class="{ active: activeSection === 'home' }"
          href="#home"
          @click="setActiveSection('home')"
        >
          Home
        </a>
        <a
          :class="{ active: activeSection === 'about' }"
          href="#about"
          @click="setActiveSection('about')"
        >
          About
        </a>
        <a
          :class="{ active: activeSection === 'services' }"
          href="#services"
          @click="setActiveSection('services')"
        >
          Services
        </a>
        <a
          :class="{ active: activeSection === 'contact' }"
          href="#contact"
          @click="setActiveSection('contact')"
        >
          Contact
        </a>
      </nav>
    </header>

    <section id="home" class="section hero">
      <img src="/images/hero-placeholder.png" alt="Lush landscape" class="hero-img" />
      <div class="hero-text">
        <h1>Welcome to Our Company</h1>
        <p>Your satisfaction is our priority.</p>
      </div>
    </section>

    <section id="about" class="section about">
      <div class="about-content">
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
        </div>
      </div>
    </section>

    <section id="services" class="section services">
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
    </section>

    <section id="contact" class="section contact">
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
    </section>
  </div>
</template>

<style scoped>
.site-header {
  background: var(--color-background-soft);
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}

.site-header nav a {
  margin-right: 1rem;
  color: var(--color-heading);
}

.site-header nav a.active {
  font-weight: bold;
  text-decoration: underline;
}

.section {
  padding: 8vh 5vw;
  min-height: 100vh;
}

.hero {
  position: relative;
  padding: 0;
  text-align: center;
}

.hero-img {
  width: 100%;
  height: auto;
  display: block;
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.8);
  padding: 1rem 2rem;
  border-radius: 4px;
  color: var(--color-heading);
}

.about-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.about-img {
  max-width: 600px;
  width: 100%;
  border-radius: 8px;
}

@media (min-width: 768px) {
  .about-content {
    flex-direction: row;
    text-align: left;
  }
}

.services-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.service {
  text-align: center;
  width: min(400px, 30vw);
}

.service img {
  width: 100%;
  border-radius: 8px;
  height: auto;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 30vw;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.5rem;
}
</style>
