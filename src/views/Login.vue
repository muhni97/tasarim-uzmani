<template>
  <div class="template">
    <NavBarRoute></NavBarRoute>

    <div class="container">
      <div class="row">
        <div
          class="title d-flex justify-content-center align-items-center mb-3"
        >
          <h2 class="text-white">Tasarım Uzmanı'na Giriş Yap</h2>
        </div>
        <div class="box">
          <div class="mb-3 register">
            <router-link tag="a" to="/Register">
              <a class="nav-link" aria-current="page" href=""
                >Kayıt olmak için tıklayınız!</a
              >
            </router-link>
          </div>
          <form @submit.prevent="signIn">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                required
                v-model="email"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Şifre</label
              >
              <input
                type="password"
                class="form-control"
                required
                v-model="password"
              />
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              @click.prevent="signIn"
            >
              Giriş Yap
            </button>
          </form>
          <div class="mb-3">
            <router-link tag="span" class="forgotpass" to="/ForgotPassword">
              <span>Şifremi unuttum!</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarRoute from "@/components/NavBarRoute.vue";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Login",
  components: {
    NavBarRoute,
  },
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    signIn(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.$router.push('/')
      }).catch( () => {
      })
    }
  },
};
</script>

<style scoped>
.template {
  background: url("@/assets/img/triangles.png") !important;
  background-size: cover;
  background-position: center;
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.row {
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  max-width: 500px;
  padding: 50px 50px;
  border-radius: 20px;
}
input {
  font-size: 18px;
  border: none;
  border: 1px solid #44a08d;
}
input:focus {
  outline: none !important;
  box-shadow: none !important;
  border: 1px solid #44a08d;
}
button {
  font-size: 18px;
  background: #44a08d;
  color: #fff;
  transition: all 0.4s;
}
button:focus {
  outline: none !important;
  box-shadow: none !important;
  border: 1px solid #44a08d;
}
.btn {
  margin-top: 25px;
  margin-bottom: 25px;
  width: 100%;
  box-shadow: none;
  background-color: #fff !important;
  color: #44a08d !important;
}
.register {
  position: relative;
  display: flex;
  justify-content: center;
  /* left: -17px; */
}
.btn:hover{
  background: #cfd0d1 !important;
  color: #000 !important;
}
a {
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  transition: all 0.4s ease-in;
}
a:hover {
  color: #fff;
}
span {
  color: #fff;
  cursor: pointer;
  transition: all 0.4s ease-in;
  text-decoration: underline;
}
label{
  color: #fff;
  font-weight: 500;
}
@media (max-width: 540px) {
  .box {
    max-width: 300px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
}
</style>