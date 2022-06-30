<template>
  <div>
    <NavBarRouteVue />
    <seciton id="projects">
      <div class="container text-center">
        <div class="row project-text header">
          <h6 class="upper-text text-capitalize">Projeler</h6>
          <h1 class="text-uppercase">Son Çalışmalarımız</h1>
        </div>
        <div class="row g-3">
          <ComponentProjects />
        </div>
      </div>
    </seciton>
    <ContactPage />
    <FooterPageVue />
  </div>
</template>

<script>
import NavBarRouteVue from "@/components/NavBarRoute.vue";
import ContactPage from "@/components/ContactPage.vue";
import FooterPageVue from "@/components/FooterPage.vue";
import ComponentProjects from "@/components/ComponentProjects.vue";
export default {
  name: "Projects",
  components: {
    NavBarRouteVue,
    ContactPage,
    FooterPageVue,
    ComponentProjects,
  },
  
};
</script>

<style>
#projects {
  position: relative;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
#projects .project-text {
  margin-bottom: 25px;
}
.project {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  max-width: 350px;
  height: 200px;
  margin-bottom: 50px;
  border-radius: 20px;
  box-shadow: 33px 33px 33px #d0d0d0, -13px -13px 13px #f8f8f8;
}

</style>