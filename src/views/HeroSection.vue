<template>
  <section id="home" class="section hero">
    <picture>
      <source srcset="/images/hero-placeholder.png" media="(min-width: 48rem)" />
      <img src="/images/hero-placeholder.png" alt="Lush landscape" class="hero-img" />
    </picture>
    <div class="hero-text">
      <h1>GSD Property Enchancement</h1>
      <p>We get stuff done!</p>
    </div>
  </section>
</template>

<style scoped>
:root {
  --header-height: 4.5rem;
  --section-padding: 3rem;
  --section-margin: 2rem;
}
.hero {
  position: relative;
  padding: 0;
  text-align: center;
  min-height: calc(
    100dvh - var(--header-height, 4.5rem) - 2 * var(--section-padding, 3rem) -
      var(--section-margin, 2rem)
  );
}

.hero-img {
  width: 100%;
  height: calc(100dvh - var(--header-height, 4.5rem));
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
  backdrop-filter: blur(1px);
  background: rgba(255, 255, 255, 0.45);
  border-radius: 8px;
  color: var(--color-heading);
}
</style>
