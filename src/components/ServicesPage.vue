<template>

  <section id="services">
      <div class="container text-center">

        <div class="row header mb-5">
          <h6 class="upper-text text-capitalize">Neler Yapıyoruz?</h6>
          <h1 class="text-uppercase h1">Hizmetlerimiz</h1>
          <p class="explanation">"Yaptığımız her işi büyük bir titizlikle ve profesyonellikle yapıyoruz."</p>
        </div>

        <div class="row g-4">

          <div class="col-lg-4 col-md-6" data-aos="flip-up">
            <div class="service card-effect">

              <div class="icon-box">
                <i class="fas fa-code"></i>
              </div>
              <div class="text-box">
                <h4 class="my-3">Kodlama</h4>
                <p>Yılların verdiği birikim ile HTML5, CSS3 ve Bootsrap ile tasarımlarımızı yapıyoruz.</p>
              </div>

            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="flip-up" data-aos-delay="200">
            <div class="service card-effect">

              <div class="icon-box">
                <i class="far fa-image"></i>
              </div>
              <div class="text-box">
                <h4 class="my-3">UX/UI</h4>
                <p>UX/UI tasarımları yapabiliyoruz yada UX/UI tasarımlarınızı koda dökebiliriz.</p>
              </div>

            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="flip-up" data-aos-delay="300">
            <div class="service card-effect">

              <div class="icon-box">
                <i class='bx bx-devices'></i>
              </div>
              <div class="text-box">
                <h4 class="my-3">Mobil Uyumlu</h4>
                <p>Yaptığımız bütün siteler her platform ile uyumludur. Bilgisayar, tablet ve mobilde eşsiz bir kullanım
                  imkanı.</p>
              </div>

            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="flip-up" data-aos-delay="400">
            <div class="service card-effect">

              <div class="icon-box">
                <i class="fas fa-icons"></i>
              </div>
              <div class="text-box">
                <h4 class="my-3">LOGO</h4>
                <p>Siteniz için logo tasarımları yapabiliriz.</p>
              </div>

            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="flip-up" data-aos-delay="500">
            <div class="service card-effect">

              <div class="icon-box">
                <i class="fab fa-google"></i>
              </div>
              <div class="text-box">
                <h4 class="my-3">SEO</h4>
                <p>Seo çalışmalarımız ile de siteniz üst sıralarda gözüksün.</p>
              </div>

            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="flip-up" data-aos-delay="600">
            <div class="service card-effect">

              <div class="icon-box">
                <i class='bx bxs-check-shield'></i>
              </div>
              <div class="text-box">
                <h4 class="my-3">Güvenlik</h4>
                <p>Sitelerimiz için gerekli sertifikaları alıp kullanıcılara güven için de bir kullanım sunuyoruz.</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>

</template>

<script>
export default {
    name : 'ServicesPage'
}
</script>

<style scoped>
#services{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}
#services  h4{
    color: var(--color-white);
}
#services p{
    font-size: 1rem;
    font-style: italic;
    color: var(--color-white);
}
body.dark-theme #services h4,
body.dark-theme #services p{
    color: #fff;
    transition: all .5s ease-in-out;
}
#services .explanation{
    color: var(--color-dark);
}
.service-header{
    margin-bottom: 50px;
}
#services .card-effect:hover h4, 
#services .card-effect:hover p{
    color: var(--color-dark-second);
}
body.dark-theme .card-effect{
    box-shadow: 33px 33px 33px #0d2e33;
}
body.dark-theme .card-effect:hover{
    box-shadow: inset 3px 3px 3px #d0d0d0, inset -3px -3px 3px #f8f8f8;
}
</style>