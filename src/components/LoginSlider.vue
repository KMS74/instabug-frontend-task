<template>
  <Carousel>
    <Slide v-for="(slide, index) in slides" :key="index">
      <div class="carousel__item">
        <div class="carousel__item__img">
          <img :src="slide.image" style="max-width: 100%" alt="slide-img" />
        </div>
        <h3>{{ slide.title }}</h3>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  data() {
    return {
      slides: [
        {
          image: "https://svgshare.com/i/hrA.svg",
          title: "Accelerate Your Entire Mobile Team Workflow",
        },
        {
          image: "https://svgshare.com/i/hrB.svg",
          title: "The Most Comprehensive Bug Reporting Tool For Mobile Apps",
        },
        {
          image: "https://svgshare.com/i/hrV.svg",
          title: "Secure Crash Reporting With Real-Time Alerts",
        },
      ],
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
});
</script>

<style lang="scss">
.carousel {
  background-color: #00287a;
  min-height: 100%;
  width: 50%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-self: center;
  font-size: 22px;
}

.carousel__item {
  color: #fff;
  padding: 20px;
  display: flex;
  flex-flow: column nowrap;
  gap: 24px;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  display: none;
}
.carousel__pagination-button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid #fff;
  background-color: transparent;
}

.carousel__pagination-button--active {
  background-color: #fff;
}
</style>
