<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="profile" href="/tabs/profile">
          <ion-icon :icon="man" />
          <ion-label>Profile</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="portfolio" href="/tabs/portfolio">
          <ion-icon :icon="ellipse" />
          <ion-label>PortFolio</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="camera" href="/tabs/camera">
          <ion-icon :icon="camera" />
          <ion-label>Photo</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
} from "@ionic/vue";
import { ellipse, camera, man } from "ionicons/icons";

export default {
  name: "Tabs",
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      ellipse,
      camera,
      man,
    };
  },
};
</script>
