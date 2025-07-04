<template>
  <section id="services" class="section services">
    <div class="container">
      <h2>Services</h2>
      <div class="services-grid">
        <ServiceCard image="./images/service1-placeholder.jpg" title="Lawn Care" />
        <ServiceCard image="./images/service2-placeholder.jpg" title="Garden Design" />
        <ServiceCard image="./images/service3-placeholder.jpg" title="Tree Maintenance" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ServiceCard from '../components/ServiceCard.vue'
</script>

<style scoped>
.services-grid {
  display: grid;
  gap: var(--space-m);
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
}
</style>
