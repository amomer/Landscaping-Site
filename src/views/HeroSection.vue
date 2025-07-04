<template>
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
</template>

<style scoped>
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
</style>
