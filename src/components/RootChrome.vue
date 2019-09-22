<template>
  <div class="root-chrome-container">
      <Navbar />
      <transition appear appear-active-class="fade-enter-active">
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
.root-chrome-container {
  overflow: hidden;
}
.fade-enter-active {
  animation: fade 2s;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
