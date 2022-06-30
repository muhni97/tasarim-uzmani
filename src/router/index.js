import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from "firebase/app"
import "firebase/auth"
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Anasayfa',
    component: HomeView,
    meta: {
      title: 'Anasayfa',
      requiresAuth: false
    }
  },
  {
    path: '/AddProject',
    name: 'AddProject',
    component: () => import("../views/AddProject.vue"),
    meta: {
      title: 'Proje Ekle',
      requiresAuth: true,
      requiresAdmin: true
    }
  },
  {
    path: '/EditProject/:id',
    name: 'EditProject',
    component: () => import("../views/EditProject.vue"),
    meta: {
      title: 'Projeyi Editle',
      requiresAuth: true,
      requiresAdmin: true

    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import("../views/Projects.vue"),
    meta: {
      title: 'Projeler',
      /* requiresAuth: true, */
    }
  },
  {
    path: '/project/:id',
    name: 'Project',
    component: () => import("../views/Project.vue"),
    meta: {
      title: 'Proje',
      /* requiresAuth: true, */
      //props:true
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import("../views/Login.vue"),
    meta: {
      title: 'Giriş Yap',
      requiresAuth: false
    }
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import("../views/Register.vue"),
    meta: {
      title: 'Kayıt Ol',
      requiresAuth: false
    }
  },
  {
    path: '/ForgotPassword',
    name: 'ForgotPassword',
    component: () => import("../views/ForgotPassword.vue"),
    meta: {
      title: 'Anasayfa',
      requiresAuth: false
    }
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: () => import("../views/Admin.vue"),
    meta: {
      title: 'Yönetici',
      requiresAuth: true,
      requiresAdmin: true
    }
  },
  {
    path: '/Account',
    name: 'Account',
    component: () => import("../views/Account.vue"),
    meta: {
      title: 'Hesabım',
      requiresAuth: true,
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    };
  }
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Tasarım Uzmanı`;
  document.title = `Tasarım Uzmanı`;
  next();
});

router.beforeEach(async (to, from, next) => {
  let user = firebase.auth().currentUser;
  let admin = null;
  if (user) {
    let token = await user.getIdTokenResult();
    admin = token.claims.admin
  }
  if (to.matched.some((res) => res.meta.requiresAuth)) {
    if (user) {
      if (to.matched.some((res) => res.meta.requiresAdmin)) {
        if (admin) {
          return next();
        }
        return next({
          name: "Anasayfa"
        })

      }
      return next()
    }
    return next({
      name: "Anasayfa"
    })
  }
  return next()
});

/* 
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userID}{
      allow read;
      allow write: if request.auth.uid != null;
    }
    match /galleryContent/{contentID}{
      allow read;
      allow write: if request.auth.token.admin == true;
    }
  }
}
*/


export default router