<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span i
      h1 Introducción   

    p.mb-5 Se invita a revisar el siguiente video para comprender algunas indicaciones iniciales del proceso de aprendizaje y los elementos de abordaje acerca de la violencia de género y su marco normativo.    
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/G_lQRaoIM10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
