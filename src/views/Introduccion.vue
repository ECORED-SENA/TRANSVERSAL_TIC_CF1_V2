<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p(data-aos="fade-down").mb-5 El conocimiento y apropiación de las herramientas de las Tecnologías de la información y la comunicación (TIC) se hace hoy en día indispensable para cualquier ámbito de la sociedad; no sólo por la inmersión en la que se está sino por su constante evolución. El siguiente video expone de manera genérica la importancia del dominio de estas herramientas, base que se desarrollará en este componente formativo.     
    .row.justify-content-center.align-items-center
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/CSHzCeiV5z0?si=TXKzZ3eFz6UMM1z1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Tecnologías de la información y la comunicación
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
