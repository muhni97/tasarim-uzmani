<template>
  <div class="template">
    <NavBarRoute></NavBarRoute>
    <div class="container">
      <div class="row">
        <div
          class="title d-flex justify-content-center align-items-center mb-3"
        >
          <h2 class="text-white">Tasarım Uzmanı'na Admin Ekle</h2>
        </div>
        <div class="box">
          <form @submit.prevent="addAdmin">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >E-mail Giriniz!</label
              >
              <input
                type="email"
                class="form-control"
                required
                v-model="adminEmail"
              />
            </div>
            <span>{{ this.functionMessage }}</span>
            <button type="submit" class="btn btn-primary">Admini Ekle</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarRoute from "@/components/NavBarRoute";
import firebase from "firebase/app";
import "firebase/functions";
export default {
  name: "Admin",
  components: {
    NavBarRoute,
  },
  data() {
    return {
      adminEmail: "",
      functionMessage: null,
    };
  },
  methods: {
    async addAdmin() {
      const addAdmin = await firebase.functions().httpsCallable("addAdminRole");
      const result = await addAdmin({ email: this.adminEmail });
      this.functionMessage = result.data.message;
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
.btn:hover{
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
  color: #000;
  font-size: 20px;
  font-weight: 400;
  transition: all 0.4s ease-in;
}
a:hover {
  color: #44a08d;
}
span {
  cursor: pointer;
  transition: all 0.4s ease-in;
}
span:hover {
  color: #44a08d;
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