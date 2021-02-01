<template
  ><div>
    <ion-card button class="shadow">
      <ion-img
        class="ion-justify-content-center ion-padding"
        style="width:100%"
        src="https://images.dog.ceo/breeds/bulldog-french/n02108915_5337.jpg"
        alt="Icon Core Banking"
      ></ion-img>
      <ion-card-header>
        <ion-card-subtitle>
          <ion-chip :key="stack.name" v-for="stack in stackList">
            <ion-avatar>
              <img :src="getImgUrl(stack.logo)" style="width:100%" />
            </ion-avatar>
            <ion-label>{{ stack.name }}</ion-label></ion-chip
          ></ion-card-subtitle
        >
        <ion-card-title>Icon Core Banking</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit
        clean.
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script lang="ts">
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
    IonImg,
  //   IonItem,
  IonLabel,
  //   IonButton,
  IonAvatar,
  IonChip,
} from "@ionic/vue";
import { pin, walk, warning, wifi, wine } from "ionicons/icons";
import //   actionSheetController,
// IonPage,
// IonHeader,
//   IonFab,
//   IonFabButton,
//   IonIcon,
// IonToolbar,
// IonTitle,
// IonContent,
//   IonGrid,
//   IonRow,
//   IonCol,
//   IonImg,
"@ionic/vue";
// import { usePhotoGallery, Photo } from "@/composables/usePhotoGallery";
const stackList = [
  { name: "VueJs", logo: "vue.png" },
  { name: "ReactJs", logo: "react.png" },
  { name: "AntDesign", logo: "antd.png" },
  { name: "Bootstrap", logo: "antd.png" },
];
export default {
  name: "PortfolioContainer",
  props: {
    name: String,
  },
  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonImg,
    // IonItem,
    IonLabel,
    // IonButton,
    IonAvatar,
    IonChip,
  },
  setup() {
    const getImgUrl = (pet: string) => {
      //   const images = require.context("../assets/", false, /\.png$/);
      //   return images("./" + pet);
      return require("../assets/" + pet);
    };
    // const { photos, takePhoto, deletePhoto } = usePhotoGallery();
    // const showActionSheet = async (photo: Photo) => {
    //   const actionSheet = await actionSheetController.create({
    //     header: "Photos",
    //     buttons: [
    //       {
    //         text: "Delete",
    //         role: "destructive",
    //         icon: trash,
    //         handler: () => {
    //           deletePhoto(photo);
    //         },
    //       },
    //       {
    //         text: "Cancel",
    //         icon: close,
    //         role: "cancel",
    //         handler: () => {
    //           // Nothing to do, action sheet is automatically closed
    //         },
    //       },
    //     ],
    //   });
    //   await actionSheet.present();
    // };
    return {
      stackList,
      getImgUrl,
      //   ICONS,
      pin,
      walk,
      warning,
      wifi,
      wine,
    };
  },
};
</script>

<style lang="css" scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.shadow {
  box-shadow: 0 4px 8px 0 rgba(187, 187, 187, 0.3),
    0 4px 8px 0 rgba(156, 156, 156, 0.4);
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
