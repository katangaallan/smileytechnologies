<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-container">
        <RouterLink to="/" class="logo">SmileyTech</RouterLink>
        <ul class="nav-menu">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/services">Services</RouterLink></li>
          <li><RouterLink to="/team">Team</RouterLink></li>
          <li><RouterLink to="/why">Why Us</RouterLink></li>
        </ul>
      </div>
    </nav>

    <main>
      <RouterView />
    </main>

    <footer class="footer">
      <p>&copy; 2026 Smiley Technologies. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    RouterLink,
    RouterView
  }
}
</script>

<style scoped>
.navbar {
  background-color: #333;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-menu a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-menu a:hover,
.nav-menu a.router-link-active {
  color: #4CAF50;
}

main {
  min-height: calc(100vh - 200px);
}

.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 2rem;
  margin-top: 2rem;
}
</style>
