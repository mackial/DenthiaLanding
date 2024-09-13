<template>
  <div class="gallery">
    <div class="slider">
      <div class="slides">
        <div v-for="({ image }, i) in gallery" :key="i">
          <img :src="images[`${image}`]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { filename } from 'pathe/utils';

const glob = import.meta.glob('~/assets/images/*.png', { eager: true });
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);

const gallery = [
  {
    image: 'gallery-01',
  },
  {
    image: 'gallery-02',
  },
  {
    image: 'gallery-03',
  },
  {
    image: 'gallery-04',
  },
];

// https://codepen.io/isz/pen/ayQvmb
</script>

<style lang="scss">
.gallery {
  .slides {
    display: flex;
    flex: row;
    flex-wrap: no-wrap;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .animate {
    animation: moveSlideshow 20s linear infinite;
  }

  @keyframes moveSlideshow {
    100% {
      transform: translate3d(calc(-100% + 100vw), 0, 0);
    }
  }

  .slides div {
    display: block;
    box-sizing: border-box;
    width: 33.33vw;
    height: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .slides li > div {
    display: flex;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border-radius: 30px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    text-align: center;
    justify-content: center;
    align-self: center;
  }

  .slides li span {
    display: block;
    font-size: 40vh;
    line-height: 100vh;
    font-weight: 800;
    letter-spacing: -0.06em;
    color: #00509a;
  }
}
</style>
