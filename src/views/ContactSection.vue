<template>
  <section id="contact" class="section contact">
    <div class="container contact-inner">
      <h2>Contact Us</h2>
      <ContactForm />
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactForm from '../components/ContactForm.vue'
</script>

<style scoped>
.contact-inner {
  display: grid;
  justify-content: center;
}
</style>
