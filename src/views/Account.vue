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
          class="
            title
            d-flex
            justify-content-center
            align-items-center
            mb-3
            mt-5
          "
        >
          <h2 class="text-white">Hesap Ayarları</h2>
        </div>
        <div class="box">
          <div class="mb-3 initials">
            <h3>{{ this.$store.state.profileInitials }}</h3>
          </div>
          <div class="admin-badge" v-if="admin">
            <i class="fa-solid fa-crown"></i>
            <span>Admin</span>
          </div>
          <div class="admin-badge" v-if="!admin">
            <i class="fa-solid fa-user"></i>
            <span>Kullanıcı</span>
          </div>
          <form @submit.prevent="updateProfile">
            <div class="mb-3">
              <label class="form-label">Ad</label>
              <input type="text" class="form-control" v-model="name" />
            </div>
            <div class="mb-3">
              <label class="form-label">Soyad</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                v-model="surName"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input type="email" class="form-control" v-model="email" />
            </div>
            <div class="mb-3">
              <router-link tag="span" class="forgotpass" to="/ForgotPassword">
                <span>Şifremi değiştir</span>
              </router-link>
            </div>
            <button type="submit" class="btn btn-primary">
              Değişiklikleri Kaydet
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarRoute from "@/components/NavBarRoute.vue";
import MessageBox from "@/components/MessageBox.vue";
export default {
  name: "Account",
  components: {
    NavBarRoute,
    MessageBox,
  },
  data() {
    return {
      mBoxMessage: "Değişiklikler Kayıt Edildi!",
      mBoxActive: null,
    };
  },
  methods: {
    closeMbox() {
      this.mBoxActive = !this.mBoxActive;
    },
    updateProfile() {
      this.$store.dispatch("updateUser");
      this.mBoxActive = !this.mBoxActive;
    },
  },
  computed: {
    name: {
      get() {
        return this.$store.state.userName;
      },
      set(payload) {
        this.$store.commit("changeUserName", payload);
      },
    },
    surName: {
      get() {
        return this.$store.state.userSurname;
      },
      set(payload) {
        this.$store.commit("changeUserSurName", payload);
      },
    },
    email: {
      get() {
        return this.$store.state.userEmail;
      },
      set(payload) {
        this.$store.commit("changeUserMail", payload);
      },
    },
    admin() {
      return this.$store.state.userAdmin;
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
  border-radius: 20px;
  display: flex;
  flex-direction: column;
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
.initials {
  /* position: relative; */
  width: 60px;
  height: 60px;
  font-size: 36px;
  background-color: #fff;
  color: #44a08d;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding-top: 10px;
}
.admin-badge {
  display: flex;
  align-self: center;
  color: #44a08d;
  font-size: 18px;
  padding: 8px 24px;
  border-radius: 8px;
  background-color: #fff;
  margin: 16px 0;
  text-align: center;
  text-transform: capitalize;
}
.admin-badge i {
  width: 14px;
  height: auto;
  margin-right: 10px;
  margin-top: 3px;
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
label {
  color: #fff;
  font-weight: 500;
}
.forgotpass {
  cursor: pointer;
  text-decoration: underline;
  color: #fff;
}
@media (max-width: 540px) {
  .box {
    max-width: 300px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
}
</style>