<template>
  <div class="team container px-3">
    <div id="team" class="section-anchor-limit"></div>
    <div class="team-headline text-center">
      <h2 class="mb-3">Nuestros Especialistas</h2>
      <p class="m-auto" style="max-width: 659px">
        Nuestros especialistas dentales son la clave para tu sonrisa perfecta.
        Con habilidades especializadas y un enfoque meticuloso van a cuidar tu
        salud bucal y transformar tu sonrisa.
      </p>
    </div>

    <div class="team-cards row g-2 g-lg-3">
      <div
        v-for="({ name, rol, image }, i) in cards"
        :key="i"
        class="col-6 col-lg-3">
        <div class="team-cards-item h-100 pb-4">
          <img :src="images[`${image}`]" :alt="name" />
          <div class="text-center mt-4 px-4" style="margin-top: -20px">
            <p class="display-5">{{ name }}</p>
            <p class="fs-5 mb-3">{{ rol }}</p>
            <div class="team-links d-flex justify-content-center">
              <a href="#">
                <img
                  class="team-link-icon px-1"
                  :src="images['facebook-icon']" />
              </a>
              <a href="#">
                <img
                  class="team-link-icon px-1"
                  :src="images['instagram-icon']" />
              </a>
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

const cards = [
  {
    name: 'Dr. Rachel Parker',
    rol: 'Dentista',
    image: 'team-01',
  },
  {
    name: 'Dr. Lloyd Wilson',
    rol: 'Dentista',
    image: 'team-02',
  },
  {
    name: 'Dr. Alicia Henderson',
    rol: 'Dentista',
    image: 'team-03',
  },
  {
    name: 'Dr. Ian Smith',
    rol: 'Dentista',
    image: 'team-04',
  },
];
</script>

<style lang="scss">
.team {
  position: relative;
  padding: 6rem 0 5rem;
  &-headline {
    margin-bottom: 4rem;
    p {
      line-height: 1.2;
    }
  }
  &-cards {
    margin-bottom: 4rem;
    &-item {
      padding-bottom: 2.4rem;
      background: $light;
      filter: drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.1));
      .display-5 {
        font-size: 1.6rem;
      }
      p {
        line-height: 1.2;
      }
    }
  }
  &-link-icon {
    width: 35px;
  }
}

/* @media (min-width: 992px) {
  .team {
    padding-top: 8rem;
    padding-top: 6rem;
  }
} */
</style>
