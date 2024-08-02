<template>
  <div class="services text-center text-light overflow-hidden">
    <div id="services" class="section-anchor-limit"></div>
    <div class="services-headline px-3 px-lg-0">
      <h2 class="mb-3">Nuestros Servicios Dentales</h2>
      <p class="m-auto" style="max-width: 597px">
        Descubre la excelencia en nuestros servicios dentales. Cuidamos cada
        detalle para brindarte una sonrisa radiante y saludable.
      </p>
    </div>
    <!-- Services slides -->
    <div
      ref="cardSlider"
      class="services-slider position-relative container d-flex hide-scrollbar overflow-x-scroll">
      <div
        ref="cards"
        class="services-cards row flex-nowrap px-2 hide-scrollbar">
        <div
          v-for="({ title, description, image }, i) in cards"
          :key="i"
          class="services-cards-item col-3 mx-2 px-0">
          <!-- @click="promoClick(index)"> -->
          <img :src="images[`${image}`]" :alt="title" />
          <img class="services-cards-icon" :src="images['service-card-icon']" />
          <!-- :data-src="images[`${image}`]" -->
          <div class="px-4" style="margin-top: -20px">
            <p class="display-4 mb-4">{{ title }}</p>
            <p class="mb-2">{{ description }}</p>
            <button class="btn display-5 fw-normal">Conoce más</button>
          </div>
        </div>
      </div>

      <button
        v-if="cards.length > 3"
        class="carousel-control-prev snap-scroll d-none d-lg-block"
        type="button">
        <!-- @click="snapSlide('prev')"> -->
        <span class="carousel-control-prev-icon"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        v-if="cards.length > 3"
        class="carousel-control-next snap-scroll d-none d-lg-block"
        type="button">
        <!-- @click="snapSlide('next')"> -->
        <span class="carousel-control-next-icon"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <button class="btn btn-outline-light">
      Descubre todos los tratamientos
    </button>
  </div>
</template>

<script setup lang="ts">
import { filename } from 'pathe/utils';

const glob = import.meta.glob('~/assets/images/*.png', { eager: true });
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);

const cards = [
  {
    title: 'Blanqueamiento dental',
    description:
      'El blanqueamiento dental aclara y embellece tus dientes, eliminando manchas y devolviendo un blanco radiante a tu sonrisa.',
    image: 'service-card-01',
  },
  {
    title: 'Implantes dentales',
    description:
      'Los implantes son una solución efectiva para restaurar la función y estética de la sonrisa de manera duradera y natural.',
    image: 'service-card-02',
  },
  {
    title: 'Ortodoncia brackets',
    description:
      'Corrige la alineación de tus dientes y mejora tu mordida. Obten una sonisa más alineada y funcional.',
    image: 'service-card-03',
  },
  {
    title: 'Blanqueamiento dental',
    description:
      'El blanqueamiento dental aclara y embellece tus dientes, eliminando manchas y devolviendo un blanco radiante a tu sonrisa.',
    image: 'service-card-01',
  },
  {
    title: 'Implantes dentales',
    description:
      'Los implantes son una solución efectiva para restaurar la función y estética de la sonrisa de manera duradera y natural.',
    image: 'service-card-02',
  },
  {
    title: 'Ortodoncia brackets',
    description:
      'Corrige la alineación de tus dientes y mejora tu mordida. Obten una sonisa más alineada y funcional.',
    image: 'service-card-03',
  },
];

// const promoClick = function (index) {
//   this.$emit('click', index);
// };

// const snapSlide = function (side) {
//   const childWidth = (this.$refs.cardSlider.clientWidth / 12) * 3;
//   if (side === 'next' && this.promotions.length > this.slide) {
//     setTimeout(() => {
//       this.$refs.cards.scrollBy(childWidth, 0);
//       this.slide++;
//     }, 200);
//   } else if (side === 'prev' && this.slide > 1) {
//     setTimeout(() => {
//       this.$refs.cards.scrollBy(-childWidth, 0);
//       this.slide--;
//     }, 200);
//   }
// };
</script>

<style lang="scss">
.services {
  position: relative;
  padding: 6rem 0 5rem;
  background-color: $dark-x-gray-bg;
  &-headline {
    margin-bottom: 4rem;
    p {
      line-height: 1.2;
    }
  }
  &-cards {
    margin-bottom: 4rem;
    &-item {
      /* width: 25%; */
      padding-bottom: 2.4rem;
      background: $dark-gray-bg;
      filter: drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.1));
      p {
        line-height: 1.2;
      }
      button {
        color: $primary-x-light;
      }
    }
    &-icon {
      position: relative;
      width: 100px;
      top: -50px;
    }
  }
}

/* @media (min-width: 992px) {
  .services {
    padding-top: 8rem;
    padding-top: 6rem;
  }
} */
</style>
