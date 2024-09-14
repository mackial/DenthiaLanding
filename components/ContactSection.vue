<template>
  <div class="contact">
    <div id="contact" class="section-anchor-limit"></div>
    <div class="text-center mb-5">
      <h2>Contacto</h2>
    </div>
    <div class="container row px-3 m-auto flex-column-reverse flex-lg-row">
      <div class="col-lg-6">
        <img src="~/assets/images/contact-map.png" />
      </div>
      <div class="col-lg-6">
        <div class="contact-info ps-lg-5">
          <div>
            <div class="contact-item">
              <img src="~/assets/images/contact-icon-01.png" />
              <div class="contact-item-info">
                <p>Dirección</p>
                <p>Calle Antiguo Camino #9 Casimiro Castillo, Jal</p>
              </div>
            </div>
            <div class="contact-item">
              <img src="~/assets/images/contact-icon-02.png" />
              <div class="contact-item-info">
                <p>Teléfono</p>
                <p>378 110 8597</p>
              </div>
            </div>
            <div class="contact-item">
              <img src="~/assets/images/contact-icon-03.png" />
              <div class="contact-item-info">
                <p>Correo</p>
                <p>example@denthia.com.mx</p>
              </div>
            </div>
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

<script setup lang="ts"></script>

<style lang="scss">
.contact {
  position: relative;
  padding: 10rem 0 5rem;
  &-item {
    display: flex;
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
