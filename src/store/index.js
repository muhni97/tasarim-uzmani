import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
import "firebase/auth";
import db from '@/firebase/firebaseInit'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    userId: null,
    userName: null,
    userSurname: null,
    userEmail: null,
    userAdmin: null,
    profileInitials: null,
  },
  getters: {
    
  },
  mutations: {
    setContentstate(state, payload) {
      state.galleryTitle = payload.galleryTitle
      state.gallerySubject = payload.gallerySubject
      state.galleryPhotoURL = payload.galleryPhotoURL
      state.galleryPhotoName = payload.galleryPhotoName
    },
    fileNameChange(state, payload) {
      state.galleryPhotoName = payload
    },
    createFileURL(state, payload) {
      state.galleryPhotoURL = payload
    },
    updateGalleryTitle(state, payload) {
      state.galleryTitle = payload
    },
    updateGallerySubject(state, payload) {
      state.gallerySubject = payload
    },
    setUserInfo(state, doc) {
      state.userId = doc.id
      state.userName = doc.data().name
      state.userSurname = doc.data().surName
      state.userEmail = doc.data().email
    },
    setUserAdmin(state, payload) {
      state.userAdmin = payload
    },
    updateUser(state, payload) {
      state.user = payload
    },
    setProfileInitials(state) {
      state.profileInitials = state.userName.match(/(\b\S)?/g).join("") + state.userSurname.match(/(\s|^)\p{L}\p{Mn}*/gu)
        ?.filter((el, i, array) => i === 0 || i === array.length - 1)
        .map(el => el.trimStart())
        .join("") || "";
    },
    changeUserName(state, payload) {
      state.userName = payload
    },
    changeUserSurName(state, payload) {
      state.userSurname = payload
    },
    changeUserMail(state, payload) {
      state.userEmail = payload
    },
  },
  actions: {
    
    async getUsers({
      commit
    }, user) {
      const dataBase = await db.collection('users').doc(firebase.auth().currentUser.uid)
      const dbResults = await dataBase.get()
      commit('setUserInfo', dbResults)
      /* commit("setProfileInitials") */
      const token = await user.getIdTokenResult()
      const admin = await token.claims.admin
      commit('setUserAdmin', admin)
    },
    async updateUser({commit, state}){
      const dataBase = await db.collection('users').doc(state.userId)
      await dataBase.update({
        name : state.userName,
        surName : state.userSurname,
        email : state.userEmail,
      })
      commit("setProfileInitials")
    }

  },
  modules: {}
})