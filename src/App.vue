<template>
  <Transition name="fade" mode="out-in">
    <router-view />
  </Transition>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "app",
  created() {
    firebase.auth().onAuthStateChanged( (user) => {
      this.$store.commit("updateUser", user)
      if(user){
        this.$store.dispatch("getUsers",user)
      }
    })
  },
 
};
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.4s ease-in-out;
}
/* .fade-leave{} */
.fade-leave-active {
  transition: opacity 0.4s ease-in-out;
  opacity: 0;
}
</style>
