<template>
  <div class="navbar-container" id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <div class="img-container">
          <img alt="EXM Logo" src="@/assets/exm-logo.png">
        </div>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse text-right" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="#">About Us</a>
          <a class="nav-item nav-link" href="#">Services</a>
          <a class="nav-item nav-link" href="#">Projects</a>
          <a class="nav-item nav-link" href="#">Contacts</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/themes/variables.scss';

.img-container {
  height: 30px;
  img {
    // filter: grayscale(100%);
    max-height: 30px;
  }
}
.navbar {
  padding-right: $spacer;
}
</style>
