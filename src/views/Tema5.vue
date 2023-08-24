<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Mejora continua
    img.img-a(src='@/assets/curso/temas/pages/tema_5/img_1.png').img-fluid

    p.mt-5 La mejora continua en la empresa es una técnica que se utiliza para la gestión de procesos de negocio, centrados en la continua necesidad de revisar los procesos en busca de posibles problemas, como obstáculos y retrasos, para resolverlos y lograr una mayor eficiencia y productividad de las operaciones.

    Separador 
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.1 Optimización

    .row.justify-content-center
      .col-6
        p Después de haber realizado la evaluación de los procesos que se han trabajado, se deben tomar decisiones que serán cruciales para la organización, es decir buscar las mejores opciones para lograr la mejora continua. Además, teniendo en cuenta la afirmación de optimización en procesos, mencionada por Vergara (2005, p. 202), como la que "permite estudiar la forma de reducir los costos en el proceso de fabricación; mejorar la calidad del producto; minimizar la variabilidad del proceso; ajustar la respuesta de la variable en estudio lo más cerca de un valor objetivo o a una norma; obtener productos más robustos, etc". 

      .col-6
          img(src='@/assets/curso/temas/pages/tema_5/img_2.png').img-fluid

    Separador 
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.2 Mejora del producto

    p Desde el punto de vista de la informática, la calidad es súper importante y mucho más cuando después de haber presentado la evaluación se encontraron hallazgos negativos. Por tal motivo la optimización apunta a la mejora del producto para poder cumplir con todas las expectativas del mismo. Además, teniendo en cuenta que “esta es la fase en la que se determinan e implantan las soluciones para que el proceso alcance los resultados esperados” (Vergara, 2005, p. 136).

    img.mt-5.img-a.img-t(src='@/assets/curso/temas/pages/tema_5/img_3.png').img-fluid

    p.mt-5 La norma #[strong ITIL] menciona los pasos que se deben tener en cuenta para su aplicación, que según S.L (2019), son:

    img.mt-5.img-a.img-t(src='@/assets/curso/temas/pages/tema_5/img_4.png').img-fluid

    .row.justify-content-center.align-items-center.mt-5          
      .col-lg-10
        .bg2.p-5.brad    
          p.mb-0 Para consultar más información acerca de la norma ITIL, se sugiere acceder al material complementario.

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
