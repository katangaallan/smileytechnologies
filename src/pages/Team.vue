<template>
  <div class="section">
    <div class="container">
      <h2>Our Team</h2>
      <div class="team-grid">
        <div class="team-member" v-for="member in teamMembers" :key="member.id">
          <div class="member-avatar">{{ member.initials }}</div>
          <h3>{{ member.name }}</h3>
          <p class="role">{{ member.role }}</p>
          <p>{{ member.bio }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          name: 'John Doe',
          initials: 'JD',
          role: 'CEO & Founder',
          bio: 'Visionary leader with 15+ years of tech industry experience.'
        },
        {
          id: 2,
          name: 'Jane Smith',
          initials: 'JS',
          role: 'CTO',
          bio: 'Full-stack developer passionate about innovative solutions.'
        },
        {
          id: 3,
          name: 'Mike Johnson',
          initials: 'MJ',
          role: 'Lead Designer',
          bio: 'Creative designer focused on user experience and interfaces.'
        },
        {
          id: 4,
          name: 'Sarah Williams',
          initials: 'SW',
          role: 'Project Manager',
          bio: 'Strategic planner ensuring projects are delivered on time.'
        }
      ]
    }
  }
}
</script>

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

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.team-member {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.team-member:hover {
  transform: translateY(-5px);
}

.member-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto 1rem;
}

h3 {
  color: #333;
  margin-bottom: 0.5rem;
}

.role {
  color: #667eea;
  font-weight: bold;
  margin-bottom: 1rem;
}
</style>
