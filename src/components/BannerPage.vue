<template>
  <section id="banner" class="d-flex align-items-center">
    <div class="container banner text-white text-center">
      <div class="row">
        <div class="col-lg-12 banner-text">
          <h1 class="my-4" data-aos="fade-down">Tasarım Uzmanı</h1>
          <h3 data-aos="zoom-in" data-aos-delay="300">"Nitelik nicelikten daha önemlidir."</h3>
          <h5 class="mb-4" data-aos="fade-up" data-aos-delay="400">Steve Jobs</h5>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BannerPage",
};
</script>

<style scoped>
#banner {
  background: 
    url(../assets/img/cool-background.png);
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
}

.banner p {
  color: var(--color-white-second);
}
.banner h1 {
  color: var(--color-white-second);
}
.banner h3 {
  font-style: italic;
}
.banner {
  padding: 50px 0;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
}
</style>