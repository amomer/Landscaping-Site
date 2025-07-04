<template>
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
</template>

<style scoped>
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
</style>
