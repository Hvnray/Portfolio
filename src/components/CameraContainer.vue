<template>
  <ion-grid>
    <ion-row>
      <ion-col size="4" :key="photo" v-for="photo in photos">
        <ion-img
          :src="photo.webviewPath"
          @click="showActionSheet(photo)"
        ></ion-img>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script lang="ts">
import { trash, close } from "ionicons/icons";
import {
  actionSheetController,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
} from "@ionic/vue";
import { usePhotoGallery, Photo } from "@/composables/usePhotoGallery";
export default {
  name: "CameraContainer",
  props: {
    name: String,
  },
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
  },
  ionViewDidEnter() {
    console.log("Camera page did enter");
  },
  ionViewDidLeave() {
    console.log("Camera page did leave");
  },
  ionViewWillEnter() {
    console.log("Camera page will enter");
  },
  ionViewWillLeave() {
    console.log("Camera page will leave");
  },
  setup() {
    const {
      photos, 
      //takePhoto,
      deletePhoto,
    } = usePhotoGallery();
    const showActionSheet = async (photo: Photo) => {
      const actionSheet = await actionSheetController.create({
        header: "Photos",
        buttons: [
          {
            text: "Delete",
            role: "destructive",
            icon: trash,
            handler: () => {
              deletePhoto(photo);
            },
          },
          {
            text: "Cancel",
            icon: close,
            role: "cancel",
            handler: () => {
              // Nothing to do, action sheet is automatically closed
            },
          },
        ],
      });
      await actionSheet.present();
    };
    return {
      showActionSheet,
      photos,
      // takePhoto,
      deletePhoto,
      // camera,
      trash,
      close,
    };
  },
};
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
