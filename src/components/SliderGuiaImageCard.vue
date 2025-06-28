<script setup>
import { onMounted } from "vue";
import { register } from "swiper/element/bundle";

defineProps({
  guias: {
    type: Array,
    required: true,
  },
});

onMounted(() => {
  register();
});

function scaleClass(i) {
  const classes = [
    "scale-[1.05]",
    "scale-[0.99]",
    "scale-[1.28]",
    "scale-[1.3]",
    "scale-[1.4]",
    "scale-[1.22]",
  ];
  return classes[i] || "scale-100"; 
}
</script>

<template>
  <div>
    <swiper-container
      class="w-full h-full overflow-y-visible md:h-[600px] xl:h-[1000px]"
      space-between="10"
      slides-per-view="3"
      loop="true"
      pagination
      navigation
      breakpoints='{
        "768": { "slidesPerView": 2 },
        "1024": { "slidesPerView": 3 }
      }'
    >
      <swiper-slide
        v-for="(guia, index) in guias"
        :key="index"
        class="flex justify-center items-center w-full h-full"
      >
        <div class="card-container-vue">
          <article class="card-vue">
            <img :src="guia.imageBg" :alt="guia.tag" />
            <img
              :src="guia.imageHover"
              :alt="guia.tag"
              class="transition-all duration-300 transform"
              :class="scaleClass(index)"
            />
          </article>
          <a
            :href="`/#${guia.tag}`"
            class="mt-2 text-center inline-block w-full font-robotika text-lg font-semibold underline relative z-10"
          >
            {{ guia.tag }}
          </a>
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style>
.card-vue {
  position: relative;
  width: 80%;
  height: auto;
  transition: all 0.3s ease;
  margin: 0 auto;
  z-index: 1;
  display: flex;
  justify-content: center;
}
.card-vue img:first-child {
  width: 100%;
  height: 100%;
}
.card-vue img:last-child {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  margin: 0 auto;
}
.card-vue::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
}
.card-vue:hover img:first-child {
  opacity: 0;
}
.card-vue:hover::before {
  opacity: 1;
}
.card-vue:hover img:last-child {
  opacity: 1;
}
</style>
