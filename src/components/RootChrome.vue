<template>
  <div class="root-chrome-container">
      <Navbar />
      <transition>
        <router-view />
      </transition>
      <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
</style>
