<template>

  <section id="contact">
    <div class="container">
      <row class="text-center">
        <h1 class="header">İletişim</h1>
      </row>

      <div class="row d-lg-flex">
        <div class="row col-lg-6 g-4 text-start" data-aos="slide-right">
          <div
            class="
              info-box
              d-flex
              justify-content-start
              align-items-start
              info-text
            "
          >
            <i class="bx bxs-check-circle me-3"></i>
            <h5>7/24 Destek</h5>
          </div>
          <div
            class="
              info-box
              d-flex
              justify-content-start
              align-items-start
              info-text
            "
          >
            <i class="bx bxs-check-circle me-3"></i>
            <h5>Anahtar Teslim Projeler</h5>
          </div>
          <div
            class="
              info-box
              d-flex
              justify-content-start
              align-items-start
              info-text
            "
          >
            <i class="bx bxs-check-circle me-3"></i>
            <h5>Google SEO</h5>
          </div>
          <div
            class="
              info-box
              d-flex
              justify-content-start
              align-items-start
              info-text
            "
          >
            <i class="bx bxs-check-circle me-3"></i>
            <h5>Uygun Fiyatlar</h5>
          </div>

          <p>
            Bizimle çalışma fırsatını kaçırmamak için hemen iletişime geçin. 
          </p>
        </div>

        <div class="row g-4 col-lg-6 info" data-aos="slide-left">
          <div class="col-lg-12">
            <div class="contact-box card-effect">
              <div class="contact-icon mx-1">
                <i class="bx bxs-phone-call"></i>
              </div>
              <div class="contact-text">
                <h4>Mustafa - İletişim</h4>
                <a href="tel:+905441451656" class="contact-a">0544-145-16-56</a>
              </div>
            </div>
          </div>

          <div class="col-lg-12">
            <div class="contact-box card-effect">
              <div class="contact-icon mx-2">
                <i class="bx bxs-phone-call"></i>
              </div>
              <div class="contact-text">
                <h4>Sertaç - İletişim</h4>
                <a href="tel:+905316650554">0531-665-05-54</a>
              </div>
            </div>
          </div>

          <div class="col-lg-12">
            <div class="contact-box card-effect">
              <div class="contact-icon mx-2">
                <i class="bx bx-envelope"></i>
              </div>
              <div class="contact-text">
                <h4>T.U. - Mail</h4>
                <a href="mailto:tasarinuzmanı@info.com"
                  >tasarinuzmanı@info.com</a
                >
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name : 'ContactPage',
};
</script>

<style>
#contact{
    display: flex;
    justify-content: center;
    align-items:center;
}
#contact .info{
    margin-top: 25px;
}
.info-box{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.info-box .bx{
    font-size: 2.5rem;
}
.info-box h5{
    margin-top: 10px;
}
.contact-box{
    width: 100%;
    background-color: var(--bg-card-effect);
    padding: 50px 0;
    margin: 30px 0;
    display: flex;
    justify-content:center;
    align-items: center;
    color: var(--bg-card-effect-text);
}
.contact-icon .bx{
    font-size: 2rem;
    padding-left: auto;
    margin-right: 15px;
}
body.dark-theme .contact-icon .bx{
    color: var(--color-white-second);
    transition: all .4s ease-in-out;
}
body.dark-theme .card-effect:hover .contact-icon .bx{
    color: var(--color-white-contact);
}
.contact-box a{
    text-decoration: none;
    list-style: none;
    color: var(--color-white-second);
    font-size: 1rem;
    font-weight: 700;
    transition: all .4s ease-in-out;
}
#contact .card-effect:hover a{
    color: var(--color-green);
}
body.dark-theme #contact .card-effect:hover a{
    color: var(--color-white-contact);
}
#contact .contact-text h4{
    color: var(--color-white-contact);
    transition: all .4s ease-in-out;
}
body.dark-theme #contact .contact-text  h4{
    color: var(--color-white-second);
}
#contact .card-effect:hover .contact-text  h4{
    color: var(--color-green-second) !important;
}

.info-text .bx{
    color: var(--color-green-second);
}
#contact h5{
    color: var(--color-dark) !important;
}
#contact p{
    color: var(--color-dark);
    font-size: 1rem;
    font-style: italic;
}
</style>