<template>
  <div class="hero-bg position-relative mt-lg-0">
    <HeroCarousel />
    <div class="hero-content h-100"></div>
    <div class="position-absolute bottom-0 start-0 end-0">
      <img class="d-lg-none" src="~/assets/images/img-01.png" />
      <img class="d-none d-lg-block w-100" src="~/assets/images/img-02.png" />
    </div>
    <a class="hero-next py-1 d-inline-block" href="#">Ir a servicios</a>
    <div
      class="hero-highlights d-none d-lg-flex position-absolute bottom-0 start-0 end-0 justify-content-between mx-4 pb-3">
      <div class="left d-flex align-items-center">
        <span class="me-2">13</span>
        <span>
          <p class="mb-0">Logra una mejor sonrisa con</p>
          <p class="mb-0">Nuestra variedad de servicios</p>
        </span>
      </div>
      <div class="right d-flex align-items-center">
        <!-- eslint-disable-next-line -->
        <span class="me-2">500<b class="text-primary">+</b></span>
        <span>
          <p class="mb-0">Pacientes cambiaron su sonrisa y</p>
          <p class="mb-0">Mejoraron su salud bucal</p>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.hero {
  &-bg {
    width: 100%;
    height: calc(100vh - 90px);
    margin-top: 90px;
    background: linear-gradient(290deg, #00dd90 5.9%, #8fd400 169.04%);
  }
  &-next {
    position: absolute;
    bottom: 0;
    left: 50%;
    padding-left: 2rem;
    padding-right: 2rem;
    background-color: $dark-x-gray-bg;
    font-size: $ds-xs;
    color: $light;
    text-decoration: none;
    border-radius: 20px 20px 0px 0px;
    transform: translate(-50%);
  }
  &-highlights {
    span:first-child {
      font-weight: 700;
      font-size: $ds-xl;
    }
    span:last-child {
      font-size: $ds-xs;
    }
  }
  &-content {
    .carousel {
      height: calc(100% - 62px);
      &-indicators {
        button {
          width: 10px;
          height: 10px;
          margin: 0 9px 0 9px;
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
        padding: 1rem;
        h5 {
          margin-bottom: 32px;
          line-height: 1;
          font-size: 2.4rem;
          font-weight: 700;
        }
        p {
          margin-bottom: 32px;
          line-height: 1.3;
          font-size: 1.2rem;
          font-weight: 400;
        }
      }
      &-cta .btn-primary {
        filter: drop-shadow(0px 10px 18px rgba(0, 0, 0, 0.1));
      }
    }
  }
}

@media (min-width: 992px) {
  .hero {
    &-bg {
      width: 100%;
      height: calc(100vh - 102px);
    }
  }

  .carousel {
    &-item {
      img {
        max-width: 400px;
        max-height: 400px;
      }
    }
    &-caption {
      max-width: 450px;
      margin-right: 40px;
    }
  }

  .right,
  .left {
    font-size: 1.3rem;
    line-height: 1.2;
    .big-size {
      font-weight: 700;
      font-size: 3rem;
    }
  }
}
</style>
