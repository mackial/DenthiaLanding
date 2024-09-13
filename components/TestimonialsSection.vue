<template>
  <div class="team container px-3">
    <div id="team" class="section-anchor-limit"></div>
    <div class="team-headline text-center">
      <h2 class="mb-3">Lo Que Dicen Nuestro Pacientes</h2>
      <p class="m-auto" style="max-width: 659px">
        Conoce la experiencia de nuestros pacientes. Únete a la familia de
        pacientes satisfechos y déjanos cuidar tu salud dental hoy mismo.
      </p>
    </div>
    <!-- Carousel desktop -->
    <div
      id="testimonialsCarousel"
      class="carousel slide d-none d-lg-block"
      data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          v-for="(s, i) in users"
          :key="i"
          type="button"
          data-bs-target="#testimonialsCarousel"
          :class="{ active: i == 0 }"
          :aria-label="`Slide ${i + 1}`"
          :aria-current="i == 0 ? true : false"
          :data-bs-slide-to="i"></button>
      </div>
      <div class="carousel-inner h-100">
        <div
          v-for="(s, i) in users"
          :key="i"
          class="carousel-item justify-content-center"
          :class="{ active: i == 0 }">
          <div class="d-flex justify-content-center">
            <div
              v-for="({ name, description, location, image }, j) in s"
              :key="j"
              class="carousel-content rounded-4 px-4 py-3">
              <p class="fs-4 mb-3">
                <span>
                  <img
                    style="width: 29px"
                    :src="images['quotes-left']"
                    :alt="name" />
                </span>
                {{ description }}
                <span>
                  <img
                    style="width: 29px"
                    :src="images['quotes-right']"
                    :alt="name" />
                </span>
              </p>
              <div class="carousel-user d-flex align-items-center">
                <img :src="images[`${image}`]" :alt="name" />
                <div>
                  <p class="carousel-user-name fw-semibold mb-1">{{ name }}</p>
                  <p class="carousel-user-location mb-0">{{ location }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Carousel mobile -->
    <div
      id="testimonialsCarouselMobile"
      class="carousel slide d-lg-none"
      data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          v-for="(s, i) in usersMobile"
          :key="i"
          type="button"
          data-bs-target="#testimonialsCarouselMobile"
          :class="{ active: i == 0 }"
          :aria-label="`Slide ${i + 1}`"
          :aria-current="i == 0 ? true : false"
          :data-bs-slide-to="i"></button>
      </div>
      <div class="carousel-inner h-100">
        <div
          v-for="(s, i) in usersMobile"
          :key="i"
          class="carousel-item carousel-item-mobile rounded-4 px-4 py-3 justify-content-center"
          :class="{ active: i == 0 }">
          <p class="fs-4 mb-3">
            <span>
              <img
                style="width: 29px"
                :src="images['quotes-left']"
                :alt="s.name" />
            </span>
            {{ s.description }}
            <span>
              <img
                style="width: 29px"
                :src="images['quotes-right']"
                :alt="s.name" />
            </span>
          </p>
          <div class="carousel-user d-flex align-items-center">
            <img :src="images[`${s.image}`]" :alt="s.name" />
            <div>
              <p class="carousel-user-name fw-semibold mb-1">{{ s.name }}</p>
              <p class="carousel-user-location mb-0">{{ s.location }}</p>
            </div>
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

const users = [
  [
    {
      name: 'Roberto Díaz',
      description:
        '        Estoy muy feliz con mi nueva sonrisa. El dentista fue muy amable. Recomiendo esta clínica a todos mis amigos y familiares.',
      location: 'Casimiro Castillo, Jal',
      image: 'user-01',
    },
    {
      name: 'Laura Moreno',
      description:
        '        ¡Increíble experiencia! El equipo de la clínica fue muy profesional y atento. Mi tratamiento fue sin dolor y los resultados superaron mis expectativas.',
      location: 'Autlán de Navarro, Jal',
      image: 'user-02',
    },
  ],
  [
    {
      name: 'Roberto Díaz',
      description:
        '        Estoy muy feliz con mi nueva sonrisa. El dentista fue muy amable. Recomiendo esta clínica a todos mis amigos y familiares.',
      location: 'Casimiro Castillo, Jal',
      image: 'user-01',
    },
    {
      name: 'Laura Moreno',
      description:
        '        ¡Increíble experiencia! El equipo de la clínica fue muy profesional y atento. Mi tratamiento fue sin dolor y los resultados superaron mis expectativas.',
      location: 'Autlán de Navarro, Jal',
      image: 'user-02',
    },
  ],
];

const usersMobile = [
  {
    name: 'Roberto Díaz',
    description:
      '        Estoy muy feliz con mi nueva sonrisa. El dentista fue muy amable. Recomiendo esta clínica a todos mis amigos y familiares.',
    location: 'Casimiro Castillo, Jal',
    image: 'user-01',
  },
  {
    name: 'Laura Moreno',
    description:
      '        ¡Increíble experiencia! El equipo de la clínica fue muy profesional y atento. Mi tratamiento fue sin dolor y los resultados superaron mis expectativas.',
    location: 'Autlán de Navarro, Jal',
    image: 'user-02',
  },
];
</script>

<style lang="scss">
.team {
  position: relative;
  padding: 6rem 0 15rem;
  &-headline {
    margin-bottom: 4rem;
    p {
      line-height: 1.2;
    }
  }
  .carousel {
    &-indicators {
      bottom: -90px;
      button {
        width: 15px;
        height: 15px;
        margin: 0 8px 0 8px;
        border-radius: 50%;
        background: $secondary-light;
        border: 0;
      }
    }
    &-item-mobile {
      background: rgba($secondary, 0.1);
      font-size: 1.6rem;
    }
    &-content {
      background: rgba($secondary, 0.1);
      max-width: 500px;
      margin: 0 2.5rem;
    }
    &-user {
      &-name {
        font-size: 1.6rem;
      }
      &-location {
        font-size: 1.2rem;
      }
      img {
        width: 50px;
        margin-right: 1.2rem;
      }
    }
  }
}

/* @media (min-width: 992px) {
  .team {
    padding-top: 8rem;
    padding-top: 6rem;
  }
} */
</style>
