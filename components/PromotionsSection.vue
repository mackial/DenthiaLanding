<template>
  <div class="promotions">
    <div id="aboutUs" class="section-anchor-limit"></div>
    <div class="container px-3">
      <div class="promotions-headline text-center mb-5 pb-3">
        <h2>Revisa Las Promociones Que Tenemos Para Tí</h2>
      </div>
    </div>

    <div class="slider">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel">
        <div class="carousel-inner">
          <div
            v-for="({ image, alt }, i) in promotions"
            :key="i"
            data-bs-toggle="modal"
            data-bs-target="#expandImage"
            class="carousel-promo-item"
            :class="i != 0 ? '' : 'active'">
            <!-- v-on:click="showImg(index)"> -->
            <img :src="images[`${image}`]" class="d-block w-100" :alt="alt" />
          </div>
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

const promotions = [
  {
    alt: 'Blanqueamiento dental',
    image: 'promo-01',
  },
  {
    alt: 'Cirugía 10% de descuento',
    image: 'promo-02',
  },
  {
    alt: 'Limpieza infantil más flúor',
    image: 'promo-03',
  },
  {
    alt: 'Limpieza dental 2x700',
    image: 'promo-04',
  },
  {
    alt: 'Blanqueamiento dental',
    image: 'promo-01',
  },
  {
    alt: 'Cirugía 10% de descuento',
    image: 'promo-02',
  },
  {
    alt: 'Limpieza infantil más flúor',
    image: 'promo-03',
  },
  {
    alt: 'Limpieza dental 2x700',
    image: 'promo-04',
  },
];
</script>

<style lang="scss">
.promotions {
  position: relative;
  padding: 10rem 0;
  &-headline {
    margin-bottom: 4rem;
  }
  .slider {
    max-width: 100%;
    .carousel {
      overflow-x: scroll;
      .carousel-inner {
        height: 418px;
        width: 3000px;
        display: flex;
        .carousel-promo-item {
          height: 100%;
          margin-right: initial;
          img {
            height: 100%;
            object-fit: contain;
          }
        }
      }
    }
  }
}
</style>
