<template>
  <section id="about">
    <div class="container text-center">
      <div class="row header">
        <h1 class="text-uppercase">Hakkımızda</h1>
      </div>

      <div class="row">
        <!-- d-lg-none d-xl-block -->
        <div class="col-lg-12 col-xl-6">
          <div class="img-box">
            <div class="img-overlay" data-aos="slide-right">
              <img src="../assets/img/admin_2.jpg" />
            </div>
          </div>
        </div>

        <div class="col-lg-12 col-xl-6">
          <div class="img-box">
            <div class="img-overlay" data-aos="slide-left">
              <img src="../assets/img/admin_1.jpg" />
            </div>
          </div>
          <div class="text-box text-xl-end about-text">
            <h1 data-aos="slide-down" data-aos-delay="100">Tasarım Uzmanı</h1>
            <p data-aos="zoom-in" data-aos-delay="200">
              Html5, Css3 ve Bootsrap ile eşsiz tasarımlar ortaya koyuyoruz.
              Ufkumuzu genişletmek için sizlere daha iyi projeler sunmak adına
              var gücümüzle çalışıyoruz. Ekibimiz ile çalışmak isterseniz aşağıdaki İletişim kısmından bizlere ulaşabilirsiniz.
            </p>
            <!--  Html5, Css3 ve Bootsrap ile eşsiz tasarımlar ortaya koyuyoruz.
            Ufkumuzu genişletmek için sizlere daha iyi projeler sunmak için var gücümüzle çalışıyoruz. -->
            <a href="#contact">
              <button class="btn" data-aos="slide-up" data-aos-delay="500">
                İletişim
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
#about {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
}

.img-box {
  width: 100%;
  margin-top: 50px;
}
.img-box .img-overlay img {
  max-width: 100%;
  margin-bottom: 50px;
  border-radius: 20px;
}
.img-overlay:nth-child(2) {
  position: relative;
  left: 50px;
  top: -350px;
  transform: scale(1.1);
  margin-bottom: -250px !important;
}
.img-overlay img {
  transition: all 0.4s ease-in-out;
  overflow: hidden;
}
.img-overlay img:hover {
  transform: translateY(-50px);
}
#about .text-box p {
  color: var(--color-dark);
}
</style>