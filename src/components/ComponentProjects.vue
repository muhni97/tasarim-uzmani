<template>
  <div class="col-xl-4 col-md-6 col-ms-12">
            <div
              class="project"
              data-aos="flip-up"
              v-for="content in galleryContent"
              :key="content.id"
            >
              <router-link
                :to="{
                  name: 'Project',
                  params: { id: content.images },
                }"
              >
                <img :src="content.images[0]" alt="" />
                <div class="project-overlay">
                  <div>
                    <h4 class="d-flex align-items-start text-white">
                      {{ content.title }}
                    </h4>
                    <h6 class="d-flex align-items-start text-white">
                      {{ content.subject }}
                    </h6>
                  </div>
                  <div class="buttons">
                    <div class="edit">
                      <router-link
                        :to="{
                          name: 'EditProject',
                          params: { id: content.id },
                        }"
                      >
                        <i class="fa-solid fa-pen-to-square"></i>
                      </router-link>
                    </div>
                    <div class="delete" v-if="admin">
                      <span
                        class="delete-img"
                        @click.prevent="deleteContent(content.id)"
                      >
                        <i class="fa-solid fa-circle-xmark dIcon"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
</template>

<script>
import db from "@/firebase/firebaseInit";
export default {
    name : 'ComponentProjects',
  data() {
    return {
      galleryContent: [],
    };
  },
  mounted() {
    db.collection("galleryContent")
      .get()
      .then((querySnapshot) => {
        this.galleryContent = [];
        querySnapshot.forEach((doc) => {
          this.galleryContent.push(doc.data());
        });
      });
  },

  methods: {
    deleteContent(id) {
      if (window.confirm("Silmek istediğinizden emin misiniz?")) {
        db.collection("galleryContent")
          .doc(id)
          .delete()
          .then(() => {
            this.$router.go();
          })
          .catch((error) => {});
      }
    },
  },
  computed: {
    admin() {
      return this.$store.state.userAdmin;
    },
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

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(46, 153, 121, 0.8);
  padding: 30px;
  display: flex;
  align-items: flex-end;
  transition: all 0.5s ease-in-out;
  opacity: 0;
}
.project img {
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out;
}
.project:hover .project-overlay {
  opacity: 1;
}

.project .img {
  transform: scale(1.1);
}
.project:hover .img {
  transform: scale(1.3);
}
.btn-primary {
  margin-right: 12px;
}
.project-overlay h4 {
  font-size: 0.9rem !important;
}
.project-overlay h6 {
  font-size: 1.1rem !important;
}
.project .buttons {
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
}
.project span.delete-img:hover {
  cursor: pointer;
}
.buttons i {
  font-size: 24px !important;
  color: #f8f8f8 !important;
  margin-left: 5px;
  transition: all 0.4s ease-in;
}
.buttons i:hover {
  color: rgb(201, 34, 34) !important;
}
</style>