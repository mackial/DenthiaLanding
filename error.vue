<template>
  <NuxtLayout name="404">
    <div class="100vh">
      <div class="position-center text-center">
        <div style="font-size: 15rem">Oops!</div>
        <p class="fs-1 mb-1">No encontramos la página</p>
        <p class="fs-5 text-body-secondary mb-5">
          No pudimos encontrar la página que estabas buscando
        </p>
        <button class="btn btn-lg btn-primary" @click="goBack">
          Regresar al inicio
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.button {
  padding: 4px 6px;
  margin: 10px 0px;
  background: black;
  color: white;
}
</style>
