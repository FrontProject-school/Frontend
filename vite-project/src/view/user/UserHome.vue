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

  <!-- <div class="slide-show p-80 pt-20 pb-60 pl-65 relative">
    <div class="slide-show2 mb-30">
      <h2 class="text-3xl font-bold inline-block ml-96 relative">
        공 지 사 항
        <span class="absolute bg-teal-500 w-10 h-10 rounded-full z-[-1] -top-1/2 -right-5 transform translate-y-1/8"></span>
      </h2>
    </div>
  </div>

  <div class="relative top-[-200px]">
    <ol class="flex">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="mr-1 mb-2 bg-white border border-gray-300 p-20 border-b-2"
        :class="{ active: currentSlide === index }"
      >
        <router-link
          to="/read"
          class="block border-b-2 border-green-500"
        >
          {{ item }}
        </router-link>
      </li>
    </ol>
  </div> -->
</template>

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
      items: [
        "id labore ex et quam laborum",
        "id labore ex et quam laborum",
        "id labore ex et quam laborum",
        "id labore ex et quam laborum",
      ],
      currentSlide: 0,
      slideInterval: null,
      slideDuration: 2000,
    };
  },

  mounted() {
    this.startSlideShow();
  },

  beforeDestroy() {
    this.stopSlideShow();
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
};
</script>

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
  transition: opacity 1s;
}
.banner[style*="z-index: 1;"] {
  opacity: 1;
}
.banner img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.carousel-slide-enter-active,
.carousel-slide-leave-active {
  transition: opacity 0.5s;
}
.carousel-slide-enter,
.carousel-slide-leave-to {
  opacity: 0;
}

@keyframes borderAnimation {
  0% {
    border-color: transparent;
    transform: translateX(-100%);
  }
  50% {
    border-color: green;
    transform: translateX(0);
  }
  100% {
    border-color: transparent;
    transform: translateX(100%);
  }
}

.active {
  font-weight: bold;
  animation: borderAnimation 4s infinite;
}
</style>
