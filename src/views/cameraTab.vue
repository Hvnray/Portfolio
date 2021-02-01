<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="primary">
          <ion-button @click="takeNewPhoto()">
            <ion-icon slot="icon-only" :icon="camera"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title size="large">Photo Gallery</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button></ion-back-button>
          </ion-buttons>
          <ion-title size="large">Photo Gallery</ion-title>
        </ion-toolbar>
      </ion-header> -->
      <CameraContainer :key="counter" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  // IonFab,
  // IonFabButton,
} from "@ionic/vue";
import CameraContainer from "@/components/CameraContainer.vue";
import { camera } from "ionicons/icons";
import {
  usePhotoGallery,
  // Photo
} from "@/composables/usePhotoGallery";
import { ref } from "vue";

export default {
  name: "Tab3",
  components: {
    CameraContainer,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButtons,
    IonButton,
    // IonFab,
    // IonFabButton,
    IonIcon,
  },
  setup() {
    const counter = ref(0);
    const { takePhoto } = usePhotoGallery();
    const takeNewPhoto = () => {
      takePhoto();
      counter.value++;
    };
    return { camera, takeNewPhoto,counter };
  },
};
</script>
