<template>
  <div>
    <NavBarRoute></NavBarRoute>
    <div class="container">
      <div class="row">
        <div class="title col-lg-12 text-center">
          <h1>Projeyi Güncelle</h1>
        </div>
      </div>
      <form @submit.prevent="updateForm">
        <div class="row mt-5 text-center">
          <div class="col-lg-6 mb-3">
            <input
              v-model="content.title"
              type="text"
              class="form-control"
              placeholder="Başlık Girin"
              required
            />
          </div>
          <div class="col-lg-6 mb-3">
            <input
              v-model="content.subject"
              type="text"
              class="form-control"
              placeholder="Konu Girin"
              required
            />
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-lg-12">
            <div class="mb-3">
              <input
                class="form-control"
                type="file"
                id="formFileMultiple"
                multiple
                @change="uploadImage"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 projectImg">
            <div class="d-flex">
              <div
                class="card m-2 img-wrapp"
                v-for="image in content.images"
                :key="image"
              >
                <img :src="image" />
                <span class="delete-img" @click="deleteImage(image)">
                  <i class="fa-solid fa-circle-xmark"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 mt-4">
            <button class="form-control">Güncelle</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/storage";
import db from "@/firebase/firebaseInit";
import NavBarRoute from "@/components/NavBarRoute.vue";
export default {
  name: "EditProject",
  components: {
    NavBarRoute,
  },
  data() {
    return {
      content: {

      },
    };
  },
  created(){
    let dbRef = db.collection('galleryContent').doc(this.$route.params.id)
    dbRef.get().then((doc) => {
      this.content = doc.data()
    }).catch((error) => {
      console.log(error);
    })
  },
  methods: {
    updateForm(event){
      event.preventDefault()
      db.collection('galleryContent').doc(this.$route.params.id)
      .update(this.content).then( () => {
        console.log("Content successfully updated!!");
        this.$router.push('/Projects')
      }).catch((error) => {
        console.log(error)
      })
    },
     uploadImage(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];
        var storageRef = firebase
          .storage()
          .ref("ProjectGallery/" + Math.random() + "_" + file.name);
        let uploadTask = storageRef.put(file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => {},
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.content.images.push(downloadURL);
              console.log(uploadTask);
            });
          }
        );
      }
    },
    deleteImage(img) {
      let image = firebase.storage().refFromURL(img);
      this.content.images.splice(img, 1);
      image
        .delete()
        .then( () => {
        })
        .catch( () => {
        });
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 250px;
}
.title {
  background: #44a08d;
  padding: 50px;
  border-radius: 10px;
}
.title h1 {
  color: #fff;
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
.projectImg {
  min-width: 100%;
}
.card {
  border: 1px solid transparent;
  border-radius: 10px;
}
.projectImg img {
  width: 100%;
  border-radius: 10px;
}
.img-wrapp {
  position: relative;
}
.img-wrapp span.delete-img {
  position: absolute;
  top: 0px;
  left: 5px;
}
.img-wrapp span.delete-img:hover {
  cursor: pointer;
}
i {
  font-size: 24px !important;
  color: #f8f8f8 !important;
  margin-left: 5px;
  transition: all 0.4s ease-in;
}
i:hover {
  color: rgb(201, 34, 34) !important;
}
</style>