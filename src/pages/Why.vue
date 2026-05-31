<template>
  <div class="section">
    <div class="container">
      <h1>Why Choose Smiley Technologies?</h1>
      <div class="reasons">
        <div class="reason">
          <h3>✨ Quality First</h3>
          <p>
            We prioritize quality in every aspect of our work. Our rigorous quality assurance
            process ensures that every project meets the highest standards.
          </p>
        </div>
        <div class="reason">
          <h3>🎯 Results-Driven</h3>
          <p>
            We focus on delivering measurable results that directly impact your business goals.
            Your success is our success.
          </p>
        </div>
        <div class="reason">
          <h3>💡 Innovation</h3>
          <p>
            We stay ahead of industry trends and leverage the latest technologies to provide
            innovative solutions.
          </p>
        </div>
        <div class="reason">
          <h3>🤝 Partnership</h3>
          <p>
            We view our clients as partners. We work closely with you to understand your needs
            and deliver solutions that exceed expectations.
          </p>
        </div>
        <div class="reason">
          <h3>⏰ Timely Delivery</h3>
          <p>
            We respect your time and deadlines. Our project management ensures on-time delivery
            without compromising quality.
          </p>
        </div>
        <div class="reason">
          <h3>📞 24/7 Support</h3>
          <p>
            Our dedicated support team is always available to assist you. We provide comprehensive
            support throughout and beyond the project lifecycle.
          </p>
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
  max-width: 1000px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #667eea;
  margin-bottom: 3rem;
}

.reasons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.reason {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #667eea;
}

.reason h3 {
  color: #667eea;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.reason p {
  line-height: 1.6;
}
</style>
