<template>
  <div class="about-us">
    <div id="aboutUs" class="section-anchor-limit"></div>
    <div class="container px-3">
      <div class="about-us-headline text-center mb-4">
        <h2>Descubre Quienes Somos</h2>
      </div>
      <div class="about-us-content d-flex flex-column-reverse flex-lg-row">
        <div class="about-us-image">
          <img src="~/assets/images/about-us.png" alt="" />
        </div>
        <div class="about-us-text pb-4 ps-lg-5">
          <h3 class="mb-3">Conoce que nos hace diferente</h3>
          <p>
            En nuestra clínica dental, la calidad y la comodidad se unen.
            Descubre una atención personalizada y resultados que te harán
            sonreír.
          </p>
          <ul class="about-us-highlights p-0">
            <li
              v-for="({ title, description }, i) in highlights"
              :key="i"
              class="d-flex align-items-center mb-3">
              <img src="~/assets/images/about-us-icon.png" alt="" />
              <div class="ms-3">
                <strong class="display-4 mb-1">
                  {{ title }}
                </strong>
                <p class="fs-5 m-0">
                  {{ description }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const highlights = [
  {
    title: 'Comunicación Transparente',
    description:
      'Explicación clara de los procedimientos, costos y opciones de tratamiento.',
  },
  {
    title: 'Ambiente Cálido y Cómodo',
    description:
      'Instalaciones modernas y un ambiente relajado para una experiencia positiva.',
  },
  {
    title: 'Compromiso con la Seguridad',
    description:
      'Estándares de higiene y esterilización que garantizán la seguridad de los pacientes.',
  },
  {
    title: 'Tecnología Avanzada',
    description:
      'Uso de equipos y técnicas de vanguardia para tratamientos precisos y eficientes.',
  },
];
</script>

<style lang="scss">
.about-us {
  position: relative;
  padding: 6rem 0 5rem;
  &-highlights {
    img {
      width: 50px;
      height: 50px;
      filter: drop-shadow(0px 8px 20px rgba(13, 98, 0, 0.15));
    }
    strong {
      font-size: $ds-xs;
    }
  }
}

@media (min-width: 992px) {
  .about-us {
    &-headline h2 {
      margin-bottom: 5rem;
    }
    &-image {
      width: 100%;
    }
  }
}

@media (min-width: 1400px) {
  .about-us {
    &-image {
      width: 50%;
    }
  }
}
</style>
