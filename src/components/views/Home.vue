<template>
  <div class="home-container">
    <div class="home">
      <div class="intro-container">
        <div class="container">
          <div class="intro-panel row">
            <div class="intro-text col-md-6">
              <h1>
                <span>PROFESSIONAL ENGINEERING CONSULTANT</span>
              </h1>
              <div class="intro-subtext mt-4">
                Engineering Services for Electrical, Mechanical, Plumbing and Fire Fighting System
              </div>
            </div>
            <div class="col-md-6" />
          </div>
        </div>
      </div>
      <div class="company-container">
        <div class="company-panel row">
          <div class="col-md-6">
            <div class="company-img" />
          </div>
          <div class="company-text col-md-6">
            <h1>Why placing your trust with EXM Consultant?</h1>
            <div class="mt-4 text-grey">
              EXM CONSULTANT CO.,LTD. has a commitment to provide construction services
              through our expertise in construction and engineering to meet various expectations from project owners.
            </div>
          </div>
        </div>
      </div>
      <div class="expertise-panel row">
        <h3 class="col-md-12 text-center mt-4 mb-4 p-4">EXPERT CONSULTANT FOR FOLLOWING TOPICS</h3>
        <div class="expertise-text  col-md-4 text-center">
          <h1 class="text-primary">
            <i class="fa fa-pencil-ruler" />
          </h1>
          <h5 class="mt-4">DESIGNING</h5>
          <ul class="mt-3 list-group">
            <li class="mt-3 list-group-item">HVAC System</li>
            <li class="list-group-item">Plumbing & Fire Protection System</li>
            <li class="list-group-item">Electrical & Communication System</li>
          </ul>
        </div>
        <div class="expertise-text col-md-4 text-center">
          <h1 class="text-primary">
            <i class="fa fa-drafting-compass" />
          </h1>
          <h5 class="mt-4">VALUE MEASUREMENT</h5>
          <ul class="mt-3 list-group">
            <li class="mt-3 list-group-item">
              Provide consultation on engineering solutions whereby the construction costs are optimized.
            </li>
          </ul>
        </div>
        <div class="expertise-text col-md-4 text-center">
          <h1 class="text-primary">
            <i class="fa fa-chalkboard-teacher" />
          </h1>
          <h5 class="mt-4">CORRECTIVITY CONSULTING</h5>
          <ul class="mt-3 list-group">
            <li class="mt-3 list-group-item">
              Providing expert solutions and consultation from specialists for the most effective decision making.
            </li>
          </ul>
        </div>
      </div>
      <!-- <div class="service-container">
        <div class="service-panel row">
          <div class="service-text col-md-6">
            <h1>What we offer</h1>
            <div class="mt-4">
              <div class="mb-4">
                Interested? See what we can achieve for you.
              </div>
              <button class="btn btn-primary primary-light">Check out our available services <i class="fa fa-long-arrow-alt-right pl-2" /></button>
            </div>
          </div>
          <div class="col-md-6 service-img-container">
            <img class="img-fluid" src="../../assets/background/restaurant.jpeg" />
          </div>
        </div>
      </div> -->
      <div class="teams-container">
        <div class="teams-panel row">
          <div class="col-md-6 teams-img-container">
            <img class="img-fluid" src="../../assets/background/team.jpg" />
          </div>
          <div class="teams-text text-right col-md-6">
            <h1>Meet the Team</h1>
            <div class="mt-4">
              <div class="mb-4">
                Meet our talented individuals with brilliant mind and great design thoughts.
              </div>
              <button class="btn btn-primary">Check out our team <i class="fa fa-long-arrow-alt-right" /></button>
            </div>
          </div>
        </div>
      </div>
      <div class="service-container">
        <div class="service-panel row">
          <div class="col-md-12 service-img-container text-center">
            <h1>As trusted by our customers</h1>
          </div>
          <div class="col-md-12">
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

.intro-container:before {
  content: '';
  display: block;
  position: absolute;
  top: $spacer;
  height: 600px;
  width: 100%;
  z-index: -1;
  background-image: url('../../assets/background/intro-background.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(5px);
}
.intro-container {
  z-index: 0;
}

.intro-panel {
  color: $white;
  min-height: 500px;
}
.intro-text {
  text-shadow: 0px 0px 7px black;
  align-self: center;
  margin-top: $spacer * 3;
  margin-bottom: $spacer * 3;
  padding: $spacer * 3;
  .intro-subtext {
    background-color: rgba(0, 0, 0, .5);
    padding: $spacer;
  }
  h1 {
    font-size: 46px;
  }
}

.company-container {
  background-color: $primary;
}
.company-panel {
  color: $gray-200;
  min-height: 500px;
}
.company-text {
  align-self: center;
  padding: $spacer * 3;
}
.company-img {
  height: 500px;
  width: 100%;
  background-image: url('../../assets/background/company-background-2.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.expertise-container {
  height: 460px;
}

.expertise-text {
  padding: $spacer * 2;
  h5 {
    font-weight: 200;
  }
}

.service-container {
  padding: $spacer * 3;
}
.service-img {
  width: 80%;
  height: 80%;
  object-fit: cover;
  overflow: hidden;
  box-shadow: 5px 5px 3px 0 $gray-500;
}
.service-text {
  align-self: center;
}

.teams-container {
  padding: $spacer * 3;
}
.teams-img-container {
  text-align: center;
}
.teams-img {
  width: 80%;
  height: 80%;
  object-fit: cover;
  overflow: hidden;
  box-shadow: 5px 5px 3px 0 $gray-500;
}
.teams-text {
  align-self: center;
}
</style>
