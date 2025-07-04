<template>
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
</template>

<script setup lang="ts">
import { ref } from 'vue'

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

<style scoped>
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
