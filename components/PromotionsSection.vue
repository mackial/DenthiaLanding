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

    <!-- Promotions slides -->
    <div
      ref="promoSlider"
      class="d-none promotions-slider position-relative container d-flex hide-scrollbar overflow-x-scroll">
      <div ref="promos" class="img-cards row flex-nowrap px-2 hide-scrollbar">
        <div
          v-for="({ image, alt }, i) in promotions"
          :key="i"
          class="promo-cards-item mx-2 px-0">
          <!-- @click="promoClick(index)"> -->
          <img
            class="d-block mx-auto w-100"
            :src="images[`${image}`]"
            :alt="alt" />
        </div>
      </div>

      <button
        v-if="promotions.length > 3"
        class="carousel-control-prev snap-scroll d-none d-lg-block"
        type="button">
        <!-- @click="snapSlide('prev')"> -->
        <span class="carousel-control-prev-icon"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        v-if="promotions.length > 3"
        class="carousel-control-next snap-scroll d-none d-lg-block"
        type="button">
        <!-- @click="snapSlide('next')"> -->
        <span class="carousel-control-next-icon"></span>
        <span class="visually-hidden">Next</span>
      </button>
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
