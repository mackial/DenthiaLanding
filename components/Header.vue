<template>
  <header class="fs-5">
    <!-- Header advertising -->
    <div class="bg-secondary text-center">
      <a class="text-light text-decoration-none d-inline-block py-2" href="#">
        {{ advertising }}
      </a>
    </div>

    <!-- Header navigation -->
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="~/assets/images/branding/logotipo.png" alt="Denthia" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          style="border: 0; box-shadow: none"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-lg-end text-center text-lg-start"
          id="navbarSupportedContent">
          <ul class="navbar-nav me-lg-4 mb-2 mb-lg-0">
            <li v-for="(n, i) in navItems" :key="i" class="nav-item px-2">
              <a class="nav-link" :href="n.link">{{ n.name }}</a>
            </li>
          </ul>
          <a class="btn btn-primary" type="submit">Agenda tu cita</a>
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
</script>

<style lang="scss">
header {
  font-size: 10px !important;
}
.navbar {
  &-brand {
    img {
      width: 158px;
    }
  }
  &-nav {
    a {
      color: $dark-bg;
      text-decoration: none;
    }
  }
}

@media (min-width: 992px) {
  .navbar-brand {
    img {
      width: 203px;
    }
  }
}
</style>
