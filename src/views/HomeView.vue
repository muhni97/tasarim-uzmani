<template >
  <div id="app">
    <Navbar data-aos="slide-down" data-aos-delay="500" />
    <BannerPage />
    <ServicesPage />
    <AboutPage />
    <TeamPage />
    <ContactPage />
    <FooterPage />
  </div>
</template>

<script>
import Navbar from "@/components/NavBar";
import BannerPage from "@/components/BannerPage";
import ServicesPage from "@/components/ServicesPage";
import AboutPage from "@/components/AboutPage";
import TeamPage from "@/components/TeamPage";
import ContactPage from "@/components/ContactPage";
import FooterPage from "@/components/FooterPage";


export default {
  name: "HomeView",
  components: {
    Navbar,
    BannerPage,
    ServicesPage,
    AboutPage,
    TeamPage,
    ContactPage,
    FooterPage,
  },
};
</script>

<style>
@import "../assets/css/style.css";
</style>