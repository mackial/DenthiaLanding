<template>
  <div class="contact">
    <div id="contact" class="section-anchor-limit"></div>
    <div class="text-center mb-5">
      <h2>Contacto</h2>
    </div>
    <div class="container row px-3 m-auto flex-column-reverse flex-lg-row">
      <div class="col-lg-6">
        <a :href="maps">
          <img src="~/assets/images/contact-map.png" />
        </a>
      </div>
      <div class="col-lg-6">
        <div class="contact-info ps-lg-5">
          <div>
            <a class="contact-item" :href="maps">
              <img src="~/assets/images/contact-icon-01.png" />
              <div class="contact-item-info">
                <p>Dirección</p>
                <p>Calle Antiguo Camino #9 Casimiro Castillo, Jal</p>
              </div>
            </a>
            <a class="contact-item" href="tel:3781108597">
              <img src="~/assets/images/contact-icon-02.png" />
              <div class="contact-item-info">
                <p>Teléfono</p>
                <p>378 110 8597</p>
              </div>
            </a>
            <a class="contact-item" href="mailto:clinicadentadenthia@gmail.com">
              <img src="~/assets/images/contact-icon-03.png" />
              <div class="contact-item-info">
                <p>Correo</p>
                <p>clinicadentadenthia@gmail.com</p>
              </div>
            </a>
            <div class="contact-item">
              <img src="~/assets/images/contact-icon-04.png" />
              <div class="contact-item-info">
                <p>Horario</p>
                <p>Lunes - Sábado</p>
                <p>10:00 am - 2:00 pm</p>
                <p>4:00 pm - 8:00 pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const maps =
  'https://www.google.com/maps/place/Denthia/@19.6151111,-104.4577339,17z/data=!3m1!4b1!4m6!3m5!1s0x8424fb95741584a9:0x98526ae67e2bc4ba!8m2!3d19.6151061!4d-104.4551536!16s%2Fg%2F11syf8svxs?entry=ttu';
</script>

<style lang="scss">
.contact {
  position: relative;
  padding: 10rem 0 5rem;
  &-item {
    display: flex;
    text-decoration: none;
    color: initial;
    img {
      width: 70px;
      height: 70px;
    }
    &-info {
      margin-bottom: 4rem;
      margin-left: 1.6rem;
      p:nth-child(1) {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 4px;
      }
      p:nth-child(2) {
        font-size: 1.8rem;
        margin-bottom: 0;
      }
      p:nth-child(3) {
        font-size: 1.8rem;
        margin-bottom: 0;
      }
      p:nth-child(4) {
        font-size: 1.8rem;
        margin-bottom: 0;
      }
    }
  }
}

@media (min-width: 992px) {
}
</style>
