<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="camo-background">
        <ion-title>Portfolio</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Portfolio</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid>
        <ion-row>
          <ion-col
            class="ion-margin-bottom"
            size-xl="6"
            size-lg="6"
            size-xs="12"
            size-md="10"
            offset-md="1"
            offset-lg="3"
            offset-xl="3"
            :key="a"
            v-for="a in dataObj.portfolioCount"
          >
            <PortfolioContainer />
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-infinite-scroll
        threshold="100px"
        id="infinite-scroll"
        @ionInfinite="ionInfinite"
      >
        <ion-infinite-scroll-content
          loading-spinner="dots"
          :loading-text="dataObj.loadingMessage"
        >
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from "@ionic/vue";
import PortfolioContainer from "@/components/PortfolioContainer.vue";
import util from "@/composables/misc.ts";
import { ref } from "vue";

const clearTimer = (v: number) => {
  clearTimeout(v);
};
// const ionTimer = ref(0);
// const portfolioCount = ref([2, 1, 3, 4, 5]);
const dataObj = ref({
  ionTimer: 0,
  portfolioCount: [2, 1, 3, 4, 5],
  clearTimer,
  loadingMessage: "",
  loadingMessages: [
    "Let's see what else...",
    `Follow me @Hvnray`,
    "Not sure we done here..",
  ],
});
export default {
  name: "Tab2",
  components: {
    PortfolioContainer,
    IonGrid,
    IonRow,
    IonCol,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
  },
  ionViewDidEnter() {
    console.log("PortfolioContainer page did enter");
  },
  ionViewDidLeave() {
    console.log("PortfolioContainer page did leave");
  },
  ionViewWillEnter() {
    console.log("PortfolioContainer page will enter");
  },
  ionViewWillLeave() {
    console.log("PortfolioContainer page will leave");
    util().clearTimer(dataObj.value.ionTimer);
  },
  setup() {
    const ionInfinite = (event: any) => {
      dataObj.value.loadingMessage =
        dataObj.value.loadingMessages[
          util().randomNumberBetween(
            0,
            dataObj.value.loadingMessages.length - 1
          )
        ];
      // let {letTimer,portfolioCount}= dataObj.value
      dataObj.value.ionTimer = setTimeout(() => {
        // App logic to fetch more grid data
        dataObj.value.portfolioCount = [
          ...Array.from(dataObj.value.portfolioCount),
          ...[1, 2, 3, 4, 5],
        ];

        console.log("portfolioCount", dataObj.value.portfolioCount);
        event.target.complete();

        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (dataObj.value.portfolioCount.length >= 30) {
          event.target.disabled = true;
        }
      }, 500);
    };
    return {
      ionInfinite,
      // clearTimer: dataObj.value.clearTimer,
      // portfolioCount: dataObj.value.portfolioCount,
      dataObj,
    };
  },
};
</script>
<style scoped>
.camo-background {
  --background: url("../assets/camo.png");
  --margin-bottom: 10px;
}
</style>
