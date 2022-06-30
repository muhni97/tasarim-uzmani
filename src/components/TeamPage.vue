<template>
  <section id="team">
    <div class="container">
      <div class="row text-center">
        <h1 class="mb-5 header">Ekibimiz</h1>

        <div class="col-md-6 team-member" data-aos="slide-right">
          <div class="member">
            <img src="../assets/img/admin_1.2.jpg" />
            <div class="social-icons">
              <a href="https://www.linkedin.com/in/mustafa-sarıgöl-ab1308203/" target="_blank"><i class='bx bxl-linkedin'></i></a>
              <a href="https://www.instagram.com/muhni.97/" target="_blank"><i class="bx bxl-instagram"></i></a>
              <a href="https://github.com/muhni97" target="_blank"><i class="bx bxl-github"></i></a>
            </div>
          </div>

          <div class="member-info">
            <h4>Mustafa Sarıgöl</h4>
            <small>Web Tasarım & UX/UI Uzmanı</small>
            <hr class="hr" />
            <p class="lead exp">
              HTML5, CSS3 & BOOTSTRAP Uzmanı. Responsive web siteleri yapabiliriz. UX/UI tasarımları yapabiliriz ve
              sosyal medya gönderileri hazırlayabiliriz.
            </p>
          </div>
        </div>

        <div class="col-md-6 team-member" data-aos="slide-left">
          <div class="member">
            <img src="../assets/img/admin_2.1.jpeg" />
            <div class="social-icons">
              <a href="#"><i class='bx bxl-linkedin'></i></a>
              <a href="#"><i class="bx bxl-instagram"></i></a>
              <a href="#"><i class="bx bxl-github"></i></a>
            </div>
          </div>

          <div class="member-info">
            <h4>Sertaç Haloğlu</h4>
            <small>Sosyal Medya & UX/UI Uzmanı</small>
            <hr class="hr" />
            <p class="lead exp">
              Projelerinizin tasarımlarını UX/UI'dan tasarlayabiliriz. Ayrıca
              sosyal medya hesaplarınızı profesyönel bir şekilde üst seviyelere
              çıkarabiliriz.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TeamPage",
};
</script>

<style>
#team {
  display: flex;
  align-items: center;
  margin-top: 50px;
  margin-bottom: -50px;
}
#team h4 {
  color: var(--color-dark);
}
.team-member img,
.team-member .member .social-icons,
.member .social-icons a,
.team-member .member-info .exp {
  transition: all 0.5s ease-in-out;
}

.team-member .member {
  min-width: 100%;
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 33px 33px 33px #d0d0d0, -13px -13px 13px #f8f8f8;
}
.team-member img {
  width: 100%;
}
.team-member .member .social-icons {
  width: 100%;
  height: 60px;
  background-color: var(--bg-color-green-second);
  position: absolute;
  bottom: -100px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
}
.team-member .member .social-icons a {
  width: 40px;
  height: 40px;
  font-size: 1.3rem;
  border: 3px dotted var(--color-white-second);
  border-radius: 5px;
  color: var(--color-white-second);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  margin-right: 4px;
  margin-left: 4px;
  text-decoration: none;
}
.member .social-icons a:hover {
  background-color: var(--bg-color-white-second);
  border-radius: 50%;
  border: 1px solid var(--color-white-second);
  color: var(--color-green-second);
}
.team-member:hover .member .social-icons {
  bottom: 0;
  opacity: 1;
}
.team-member:hover img {
  transform: translateY(-60px);
}
.team-member .member-info {
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
}
.team-member .member-info .exp {
  width: 100%;
  height: 150px;
  position: absolute;
  top: -100px;
  font-size: 0.9rem;
  left: 0;
  opacity: 0;
}
.team-member:hover .member-info .exp {
  top: 70px;
  opacity: 1;
}
.exp {
  color: var(--color-dark);
}
.hr {
  margin: 0;
}
@media (max-width: 991px) {
  .team-member .member-info .exp {
    font-size: 0.9rem;
  }
  #team h4, #team small {
    font-size: 1rem !important;
  }
}
</style>