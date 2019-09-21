<template>
  <div class="home-container">
    <div class="home">
      <div class="intro-container">
        <div class="container">
          <div class="intro-panel row">
            <div class="intro-text col-md-12">
              <h1>VALUED ENGINEERING SERVICE.</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="company-container">
        <div class="container">
          <div class="company-panel col-md-12 row">
            <div class="company-img col-md-6">
            </div>
            <div class="col-md-6">
              <h1>Why placing your trust with EXM Consultant?</h1>
              <h5>Engineering services for electrical, mechanical, plumbing and fire fighting systems.</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/themes/variables.scss';

.home:before {
  content: '';
  height: 500px;
  width: 100%;

  position: fixed;
  left: 0;
  right: 0;
  z-index: -1;
  background-image: url('../../assets/background/intro-background.jpg');
  background-position: right center;
  background-repeat: no-repeat;
  background-size: cover;
}

.home {
  z-index: 0;
}

.intro-panel {
  color: black;
  min-height: 500px;
}
.intro-text {
  margin-top: $spacer * 3;
  margin-bottom: $spacer * 3;
  padding: $spacer * 3;
}

.company-container {
  background-color: $primary;
}
.company-panel {
  color: $gray-200;
  min-height: 300px;
}
.company-img {
  background-image: url('../../assets/background/company-background.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

h1 {

}
</style>
