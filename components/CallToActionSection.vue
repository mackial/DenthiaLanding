<template>
  <div class="call-to-action position-relative">
    <div class="call-to-action-bg-img"></div>
    <div class="container position-relative px-3">
      <div class="text-light">
        <h3 class="mb-5">
          ¡Agenda tu cita ahora y da el primer paso hacia una sonrisa saludable!
        </h3>
        <button class="btn btn-light">Solicitar una cita</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.call-to-action {
  padding: 6rem 0;
  background: linear-gradient(
    90deg,
    rgba(0, 204, 162, 0.8) 0%,
    rgba(81, 212, 43, 0.8) 100%
  );
  &-bg-img {
    background-image: url('~/assets/images/img-cta.png');
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    filter: opacity(0.3);
  }
  .container {
    z-index: 999;
  }
  h3 {
    max-width: 606px;
    line-height: 1.2;
    font-size: 3rem;
  }
  .btn-light {
    color: rgba(0, 221, 175, 1);
  }
}

@media (min-width: 992px) {
  .call-to-action {
    padding: 8rem 0;
  }
}
</style>
