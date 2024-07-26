<template>
  <header class="header fs-5">
    <!-- Header advertising -->
    <div class="bg-secondary text-center">
      <a
        class="text-light text-decoration-none d-inline-block py-2"
        href="#"
        style="filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5))">
        {{ advertising }}
      </a>
    </div>

    <!-- Header navigation -->
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-lg">
        <a class="navbar-brand" href="#">
          <img src="~/assets/images/branding/logotipo.png" alt="Denthia" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          style="border: 0; box-shadow: none"
          data-bs-toggle="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="() => (isNavbarSideActive = !isNavbarSideActive)">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Desktop navbar only, default bootstrap mobile is disabled -->
        <div
          class="collapse navbar-collapse justify-content-lg-end text-lg-start">
          <ul class="navbar-nav me-lg-4 mb-2 mb-lg-0">
            <li v-for="(n, i) in navItems" :key="i" class="nav-item">
              <a class="nav-link" :href="n.link">{{ n.name }}</a>
            </li>
          </ul>
          <a class="btn btn-primary text-light" type="submit">Agenda tu cita</a>
        </div>
        <!-- Mobile navbar -->
        <div
          class="navbar-side d-lg-none"
          :class="{ 'navbar-side-active': isNavbarSideActive }">
          <div class="navbar-side-content fs-2">
            <button
              type="button"
              class="navbar-side-close btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="
                () => (isNavbarSideActive = !isNavbarSideActive)
              "></button>
            <ul class="navbar-nav">
              <li v-for="(n, i) in navItems" :key="i" class="nav-item mb-2">
                <a class="nav-link" :href="n.link">{{ n.name }}</a>
              </li>
              <li class="nav-item mt-3">
                <a class="btn btn-primary text-light fs-3" type="submit">
                  Agenda tu cita
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const advertising = '¡Valoración dental GRATIS en tu primer cita!';

const navItems = [
  { name: 'Servicios', link: '#' },
  { name: 'Nosotros', link: '#' },
  { name: 'Promociones', link: '#' },
  { name: 'Contáctanos', link: '#' },
];

const isNavbarSideActive = ref(false);
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  z-index: 1020;
  width: 100%;
}
.navbar {
  &-brand {
    img {
      width: 158px;
    }
  }
  &-collapse {
    .navbar-nav {
      font-size: 1.6rem;
    }
  }
  &-nav {
    a {
      color: $dark;
      text-decoration: none;
    }
  }
  &-side {
    width: 110%;
    height: 100vh;
    position: absolute;
    background: linear-gradient(
      90deg,
      rgba(226, 226, 226, 0.2) 0%,
      rgba(0, 0, 0, 1) 80%
    );
    top: -30px;
    left: 110%;
    opacity: 0;
    transition:
      left 0.5s ease-in-out,
      opacity 0.5s ease-in-out;
    &-close {
      position: absolute;
      top: 5rem;
      right: 2rem;
      font-size: 2rem;
    }
    &-content {
      width: 70%;
      height: 100%;
      padding: 4rem;
      padding-top: 8rem;
      background-color: $light;
      float: right;
    }
    &-active {
      left: -10%;
      opacity: 1;
    }
  }
}

@media (min-width: 992px) {
  .header {
    position: sticky;
    top: 0;
    z-index: 1020;
    width: 100%;
  }
  .navbar-brand {
    img {
      width: 203px;
    }
  }
}
</style>
