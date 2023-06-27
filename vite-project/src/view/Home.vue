<script>
export default {
  name: "Carousel",
  data() {
    return {
      banners: [
        {
          id: 1,
          imageUrl: "/src/assets/영진전문대4.jpg",
          altText: "Banner 1",
        },
        {
          id: 2,
          imageUrl: "/src/assets/영진전문대5.jpg",
          altText: "Banner 2",
        },
        {
          id: 3,
          imageUrl: "/src/assets/영진전문대6.jpg",
          altText: "Banner 3",
        },
      ],
      currentSlide: 0,
      slideInterval: null,
      slideDuration: 2000,
    };
  },
  mounted() {
    this.startSlideShow();
  },
  methods: {
    startSlideShow() {
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, this.slideDuration);
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.banners.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.banners.length) % this.banners.length;
    },
  },
  beforeDestroy() {
    clearInterval(this.slideInterval);
  },
};
</script>
<template>
<div class="carousel">
    <div
    class="banner"
    v-for="(banner, index) in banners"
    :key="banner.id"
    v-show="currentSlide === index"
    :style="{ zIndex: currentSlide === index ? '1' : '0' }"
    >
    <img :src="banner.imageUrl" :alt="banner.altText" />
    </div>
</div>
</template>
<style>
.carousel {
position: relative;
overflow: hidden;
height: 450px; 
}
.banner {
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
opacity: 0;
transition: all 3s;
}
.banner[style*="z-index: 1;"] {
opacity: 1;
}
.banner img {
height: 100%;
width: 100%;
object-fit: cover; 
}
</style> 
  