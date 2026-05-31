<template>
  <div>
    <section class="hero">
      <div class="container">
        <h1>Welcome to Smiley Technologies</h1>
        <p>Innovative Solutions for Modern Challenges</p>
        <RouterLink to="/services" class="btn">Explore Our Services</RouterLink>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2>Why Choose Us?</h2>
        <div class="cards">
          <div class="card">
            <h3>🚀 Innovation</h3>
            <p>Cutting-edge technology and creative solutions for your business needs.</p>
          </div>
          <div class="card">
            <h3>👥 Expert Team</h3>
            <p>Experienced professionals dedicated to delivering excellence.</p>
          </div>
          <div class="card">
            <h3>💼 Professional</h3>
            <p>Professional approach to every project with guaranteed quality.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  components: {
    RouterLink
  }
}
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
</style>
