<template>
  <div class="home">
    <header class="site-header">
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <section id="home" class="section hero">
      <h1>Welcome to Our Company</h1>
      <p>Your satisfaction is our priority.</p>
    </section>

    <section id="about" class="section about">
      <h2>About Us</h2>
      <p>We provide landscaping services for residential and commercial clients.</p>
    </section>

    <section id="services" class="section services">
      <h2>Services</h2>
      <ul>
        <li>Lawn Care</li>
        <li>Garden Design</li>
        <li>Tree Maintenance</li>
      </ul>
    </section>

    <section id="contact" class="section contact">
      <h2>Contact Us</h2>
      <p>Email: info@landscaping.com</p>
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

.section {
  padding: 100px 1rem 60px; /* offset for fixed header */
  min-height: 100vh;
}

.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
