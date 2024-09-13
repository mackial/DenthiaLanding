<template>
  <div class="faq">
    <div id="FAQ" class="section-anchor-limit"></div>
    <div class="container row px-3 m-auto">
      <div class="d-none d-lg-block col-0 col-lg-5">
        <img src="~/assets/images/faq.png" />
      </div>
      <div class="faq-accordion col-12 col-lg-7">
        <h2 class="mb-4">Preguntas Frecuentes</h2>
        <div class="faq-accordion-items">
          <div id="faqAccordion" class="accordion">
            <div
              v-for="({ question, answer }, i) in FAQ"
              :key="i"
              class="accordion-item mb-3">
              <h2 class="accordion-header">
                <button
                  class="accordion-button fs-3 fw-bold"
                  :class="{ collapsed: i != 0 }"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="'#collapse' + i"
                  :aria-expanded="i == 0"
                  :aria-controls="'collapse' + i">
                  {{ question }}
                </button>
              </h2>
              <div
                :id="'collapse' + i"
                class="accordion-collapse collapse"
                :class="{ show: i == 0 }"
                data-bs-parent="#faqAccordion">
                <div class="accordion-body fs-4 pt-0">
                  {{ answer }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const FAQ = [
  {
    question: '¿Con qué frecuencia debo ir al dentista?',
    answer:
      'Lo ideal es visitar al dentista cada seis meses para chequeos regulares y limpiezas.',
  },
  {
    question: '¿Cómo puedo prevenir las caries?',
    answer:
      'Manteniendo una buena higiene bucal (cepillarse, usar hilo dental, y enjuague con flúor), evitando el consumo excesivo de azúcares y acudiendo a revisiones periódicas.',
  },
  {
    question: '¿Cuál es la mejor pasta de dientes para mí o para mis hijos?',
    answer:
      'Una pasta con flúor es la recomendada para la mayoría de las personas, pero es ideal que tu dentista te recomiende una específica según tus necesidades.',
  },
  {
    question: '¿Cuándo debería llevar a mi hijo al dentista por primera vez?',
    answer:
      'Al aparecer el primer diente o al cumplir un año, lo que ocurra primero.',
  },
  {
    question: '¿Por qué me sangran las encías cuando me cepillo?',
    answer:
      'El sangrado de las encías puede ser un signo de gingivitis o enfermedad periodontal. Es recomendable acudir al dentista para una evaluación.',
  },
  {
    question: '¿Necesito usar hilo dental todos los días?',
    answer:
      'Sí, el hilo dental elimina la placa y los restos de alimentos entre los dientes que el cepillo no puede alcanzar.',
  },
  {
    question: '¿Son seguros los tratamientos con flúor?',
    answer:
      'Sí, cuando se usan de manera adecuada, los tratamientos con flúor son seguros y efectivos para prevenir caries.',
  },
  {
    question: '¿Por qué mis dientes son sensibles?',
    answer:
      'La sensibilidad dental puede deberse a la exposición de la dentina por desgaste del esmalte, encías retraídas, caries, o bruxismo (rechinar los dientes). Es importante consultarlo con el dentista para determinar la causa exacta.',
  },
  {
    question: '¿Qué debo hacer si se me rompe o cae un diente?',
    answer:
      'Si se te cae un diente permanente, intenta reinsertarlo si es posible, o mantenlo en leche o solución salina y acude de inmediato al dentista. Si se rompe, guarda la pieza y consulta a tu dentista para saber cómo proceder.',
  },
  {
    question: '¿Es normal rechinar los dientes durante la noche?',
    answer:
      'El bruxismo (rechinar de dientes) es común, pero puede causar desgaste dental y dolores de cabeza o mandíbula. Si esto ocurre, el dentista puede recomendar una férula o protector nocturno.',
  },
];
</script>

<style lang="scss">
.faq {
  position: relative;
  padding: 10rem 0 5rem;
  background-color: rgba(#003f00, 0.04);
  .accordion {
    &-button {
      line-height: 1.5;
    }
    &-button {
      line-height: 1.25;
    }
  }
}

@media (min-width: 992px) {
  .faq {
    &-accordion {
      position: relative;
      &-items {
        position: absolute;
        height: calc(100% - 58px);
        overflow: auto;
      }
    }
  }
}
</style>
