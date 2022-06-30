<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <!-- sticky-top -->
    <div class="container">
      <a class="navbar-brand logo" href="#">Tasarım Uzmanı</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto f-style">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#banner"
              >Anasayfa</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#services"
              >Hizmetlerimiz</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#about">Hakkımızda</a>
          </li>
          <li class="nav-item">
            <router-link tag="a" to="/projects">

              <a class="nav-link" aria-current="page"
                >Projeler</a
              >
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#team">Ekibimiz</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#contact">İletişim</a>
          </li>

          <li class="nav-item" v-if="!user">
            <router-link tag="a" to="/Login">
              <a class="nav-link" aria-current="page" href=""
                >Giriş Yap & Kayıt Ol</a
              >
            </router-link>
          </li>
          <div class="navbar-collapse" id="navbarNavDarkDropdown" v-if="user">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa-solid fa-user"></i>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <small
                    class="
                      text-white
                      fs-6
                      d-flex
                      justify-content-center
                      align-items-center
                      my-3
                    "
                    >Kullanıcı Kısmı</small
                  >
                    <p class="mx-4">
                      {{ this.$store.state.userName }}
                      {{ this.$store.state.userSurname }}
                    </p>
                    <p class="mx-4">
                      {{ this.$store.state.userEmail }}
                    </p>
                    <li class="dropdown-item">
                    <router-link tag="a" to="/Account">
                      <a class="nav-link" aria-current="page" href=""
                        ><i class='bx bxs-user-circle' ></i> Hesabım</a
                      >
                    </router-link>
                  </li>
                  <li v-if="admin"><hr class="dropdown-divider" /></li>
                  <small
                    class="
                      text-white
                      fs-6
                      d-flex
                      justify-content-center
                      align-items-center
                      my-3
                    "
                    v-if="admin"
                    >Yönetici Kısmı</small
                  >
                  <li class="dropdown-item" v-if="admin">
                    <router-link tag="a" to="/AddProject">
                      <a class="nav-link" aria-current="page" href=""
                        ><i class="bx bx-plus-circle"></i> Proje Ekle</a
                      >
                    </router-link>
                  </li>
                  <li class="dropdown-item" v-if="admin">
                    <router-link tag="a" to="/Admin">
                      <a class="nav-link" aria-current="page" href=""
                        ><i class="fa-solid fa-crown"></i> Admin Ekle</a
                      >
                    </router-link>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li class="dropdown-item" v-if="user">
                    <router-link tag="a" to="/">
                      <a
                        class="nav-link"
                        aria-current="page"
                        href=""
                        @click="signOut"
                        ><i class="fa-solid fa-arrow-right-from-bracket"></i>
                        Çıkış Yap</a
                      >
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Navbar",
  data() {
    return {};
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          firebase.auth().onAuthStateChanged(() => {
            this.$router.push("/login");
          });
        });
    },
  },
  computed: {
    admin() {
      return this.$store.state.userAdmin;
    },
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style scoped>
.logo {
  font-family: Licorice;
  height: 60px;
  line-height: 60px;
  color: #000;
  font-weight: 700;
  font-size: 2em;
  letter-spacing: 3px;
  text-decoration: none;
  cursor: pointer;
  padding-left: 20px;
  transition: all 0.4s ease-in;
}

nav {
  background-color: var(--bg-color-white) !important;
}
nav .nav-link {
  color: #0a0c16 !important;
  transition: all 0.4s ease-in-out;
}
nav .nav-link.active {
  color: var(--color-green-second) !important;
}
body.dark-theme nav a {
  color: #fff !important;
}
nav .nav-link:hover {
  color: var(--color-green-second) !important;
}
body.dark-theme .btn {
  box-shadow: none;
}
a {
  text-decoration: none !important;
  letter-spacing: 1px;
}
.dropdown-item a {
  color: #fff !important;
}
.dropdown-item a{
  display: flex;
  align-items: center;
  text-align: center;
}
li i {
  font-size: 1.2rem;
  margin-right: 7px;
}
</style>