<template>
  <div class="template">
    <NavBarRoute></NavBarRoute>

    <div class="container">
      <div class="row">
        <div
          class="
            title
            d-flex
            justify-content-center
            align-items-center
            mb-3
            mt-5
          "
        >
          <h2 class="text-white">Tasarım Uzmanı'na Kayıt Olun</h2>
        </div>
        <div class="box">
          <div class="mb-3 register">
            <router-link tag="a" to="/Login">
              <a class="nav-link" aria-current="page" href=""
                >Giriş yapmak için tıklayınız!</a
              >
            </router-link>
          </div>
          <form @submit.prevent="signUp">
            <div class="mb-3">
              <label class="form-label">Ad</label>
              <input type="text" class="form-control" required v-model="name" />
            </div>
            <div class="mb-3">
              <label class="form-label">Soyad</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                required
                v-model="surName"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                required
                v-model="email"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Şifre</label>
              <input
                type="password"
                class="form-control"
                required
                v-model="password"
              />
            </div>
            <button type="submit" class="btn btn-primary">Kayıt Ol</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarRoute from "@/components/NavBarRoute.vue";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";
export default {
  name: "Register",
  components: {
    NavBarRoute,
  },
  data() {
    return {
      name: "",
      surName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      if (
        this.name !== "" &&
        this.surName !== "" &&
        this.email !== "" &&
        this.password !== ""
      ) {
        const firebaeAuth = await firebase.auth();
        const createUser = await firebaeAuth
          .createUserWithEmailAndPassword(this.email, this.password)
          .catch(() => {});
        const result = await createUser;
        const database = db.collection("users").doc(result.user.uid);
        await database.set({
          name: this.name,
          surName: this.surName,
          email: this.email,
          password: this.password,
        });
        this.$router.push("/");
        return;
      }
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
  padding: 25px 50px;
  border-radius: 10px;
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