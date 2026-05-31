<template>
  <div class="section">
    <div class="container">
      <h2>Our Services</h2>
      <div class="cards">
        <div class="card">
          <h3>Web Development</h3>
          <p>Professional web development services using the latest technologies and best practices.</p>
        </div>
        <div class="card">
          <h3>Mobile App Development</h3>
          <p>Native and cross-platform mobile applications for iOS and Android.</p>
        </div>
        <div class="card">
          <h3>Cloud Solutions</h3>
          <p>Scalable cloud infrastructure and migration services.</p>
        </div>
        <div class="card">
          <h3>Consulting</h3>
          <p>Strategic technology consulting to transform your business.</p>
        </div>
        <div class="card">
          <h3>Support & Maintenance</h3>
          <p>24/7 technical support and maintenance for your systems.</p>
        </div>
        <div class="card">
          <h3>AI & Machine Learning</h3>
          <p>Intelligent solutions powered by artificial intelligence.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  padding: 4rem 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2rem;
  color: #333;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.card {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.card h3 {
  color: #667eea;
  margin-bottom: 1rem;
}
</style>
