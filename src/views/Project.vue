<template>
  <div>
    <NavbarRoute data-aos="slide-down" data-aos-delay="500" />
    <div class="container">
      <div class="row">
        <div
          class="contentImage"
          v-for="contentImage in id"
          :key="contentImage"
        >
          <img :src="contentImage" class="mw-100" alt="..." />
        </div>

      </div>
    </div>

    <FooterPage />
  </div>
</template>

<script>
import NavbarRoute from "@/components/NavBarRoute";
import FooterPage from "@/components/FooterPage";
import db from "@/firebase/firebaseInit";
export default {
  name: "Project",
  components: {
    NavbarRoute,
    FooterPage,
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style scoped>
.row {
  margin-top: 150px !important;
}
.contentImage {
  margin-top: 50px !important;
  display: flex;
  justify-content: center;
}
img {
  border-radius: 20px;
  
}
</style>