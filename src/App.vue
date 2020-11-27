<template>
  <div>
    <section class="section">
      <navbar></navbar>
      <div class="container">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>
