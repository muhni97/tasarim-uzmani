<template>
  <div class="template">
    <NavBarRoute></NavBarRoute>
    <MessageBox
      v-if="mBoxActive"
      :mBoxMessage="mBoxMessage"
      v-on:close-mbox="closeMbox"
    />
    <div class="container">
      <div class="row">
        <div
          class="title d-flex justify-content-center align-items-center mb-3"
        >
          <h2 class="text-white">Şifreni Sıfırla</h2>
        </div>
        <div class="box">
          <div class="mb-3 register">
            <router-link tag="a" to="/Login">
              <a class="nav-link" aria-current="page" href=""
                >Giriş sayfasına geri dön!</a
              >
            </router-link>
          </div>
          <form @submit.prevent="forgetPassword">
            <div class="mb-3">
              <label class="form-label">Yeni Şifre İçin Mail Giriniz!</label>
              <input
                class="form-control"
                type="email"
                required
                v-model="email"
              />
            </div>
            <button type="submit" class="btn">Sıfırla</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarRoute from "@/components/NavBarRoute.vue";
import MessageBox from "@/components/MessageBox.vue";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "ForgotPassword",
  components: {
    NavBarRoute,
    MessageBox,
  },
  data() {
    return {
      email: null,
      mBoxActive: false,
      mBoxMessage: "",
    };
  },
  methods: {
    forgetPassword() {
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.mBoxMessage = "Eğer hesabın mevcutsa, bir mail alacaksın";
          this.mBoxActive = true;
        })
        .catch((err) => {
          this.mBoxMessage = err.message;
          this.mBoxActive = true;
        });
    },
    closeMbox() {
      this.mBoxActive = !this.mBoxActive;
      this.email = "";
    },
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
.btn:hover {
  background: #cfd0d1 !important;
  color: #000 !important;
}
.register {
  position: relative;
  display: flex;
  justify-content: center;
  /* left: -17px; */
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
}
label {
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