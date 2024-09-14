<template>
  <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        v-for="(s, i) in slides"
        :key="i"
        type="button"
        data-bs-target="#heroCarousel"
        :class="{ active: i == 0 }"
        :aria-label="`Slide ${i + 1}`"
        :aria-current="i == 0 ? true : false"
        :data-bs-slide-to="i"></button>
    </div>
    <div class="carousel-inner h-100">
      <div
        v-for="(s, i) in slides"
        :key="i"
        class="carousel-item"
        :class="{ active: i == 0 }">
        <div
          class="carousel-content h-100 d-lg-flex justify-content-center align-items-center">
          <div class="carousel-caption">
            <h2 class="display-1 mb-5">{{ s.title }}</h2>
            <p class="fs-3 mb-5">{{ s.description }}</p>
            <div class="carousel-cta">
              <a
                :href="s.buttonOne"
                class="btn btn-secondary"
                style="filter: drop-shadow(0px 10px 18px rgba(0, 0, 0, 0.1))">
                Agenda tu cita
              </a>
              <a :href="s.buttonTwo" class="btn">
                <span class="d-flex">
                  Ver servicios
                  <span class="material-symbols-rounded ms-3">
                    arrow_forward
                  </span>
                </span>
              </a>
            </div>
          </div>
          <img
            class="w-100 d-none d-lg-block"
            :src="images[`${s.image}`]"
            alt="..." />
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

const whatsLink =
  'https://api.whatsapp.com/send?phone=5213781108597&text=Hola%20me%20comunico%20para%20pedir%20informes';

const slides = [
  {
    title: 'Logra la sonrisa que tanto quieres',
    description:
      '¡Haz realidad la sonrisa de tus sueños! Nuestro equipo te ayudará a lograr la sonrisa que tanto deseas. Sonríe con seguridad, sonríe con nosotros.',
    image: 'slide-01',
    buttonOne: whatsLink,
    buttonTwo: '#services',
  },
  {
    title: 'Clínica dental para todos',
    description:
      'Ofrecemos atención odontológica de calidad para personas de todas las edades. Desde limpiezas preventivas hasta tratamientos avanzados, aquí encontrarás la atención que mereces',
    image: 'slide-02',
    buttonOne: whatsLink,
    buttonTwo: '#services',
  },
  {
    title: 'Tu sonrisa merece lo mejor',
    description:
      'Odontología moderna en un ambiente tranquilo y relajado. ¡Haz de cada visita una experiencia agradable!',
    image: 'slide-03',
    buttonOne: whatsLink,
    buttonTwo: '#services',
  },
  {
    title: 'Servicios dentales en los que puedes confiar',
    description:
      'Nuestro equipo te ofrece una experiencia dental exceptional. Cuidamos tu salud bucal de manera profesional y segura. ¡Ven y descubre por qué somos la elección confiable para tu bienestar dental',
    image: 'slide-04',
    buttonOne: whatsLink,
    buttonTwo: '#services',
  },
];
</script>

<style scoped lang="scss">
.carousel {
  height: calc(100% - 62px);
  &-indicators {
    button {
      width: 10px;
      height: 10px;
      margin: 0 8px 0 8px;
      border-radius: 50%;
    }
  }
  &-item {
    height: inherit;
    align-items: center;
  }
  &-caption {
    height: inherit;
    position: initial;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: start;
    padding: 1.6rem;
    h5 {
      line-height: 1;
    }
    p {
      line-height: 1.2;
      font-weight: 400;
    }
  }
}

@media (min-width: 992px) {
  .carousel {
    &-item {
      img {
        max-width: 400px;
        max-height: 400px;
      }
    }
    &-caption {
      max-width: 550px;
      margin-right: 40px;
    }
  }
}
</style>
