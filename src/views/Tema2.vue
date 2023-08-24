<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Internet
    img.img-a.img-t(src='@/assets/curso/temas/pages/tema_2/img_1.png').img-fluid
    
    p.mt-5 Antes de definir internet es importante mencionar ¿Cómo surgió internet?, es decir contar su historia, la cual “comienza a finales de los años 60 en Estados Unidos y se relaciona con un proyecto desarrollado por la Agencia de Proyectos de Investigación  Avanzados (ARPA) y el Departamento de Defensa estadounidense, que definieron el protocolo TC/IP con la finalidad de conectar ordenadores para facilitar trabajos sobre investigación” (Valentín López, 2015). 

    p Ahora se puede responder la pregunta, ¿Qué es la internet?, son “ordenadores conectados entre sí a través de redes o sistemas de comunicación que interconectan distintos tipos de dispositivos, con la finalidad de compartir información y ofrecer distintos servicios tales como correo electrónico, transferencia de ficheros vía FTP o acceso a la World Wide Web” (Valentín López, 2015).
    .row.justify-content-center.align-items-center          
      .col-lg-10
        .tarjeta.color-acento-botones.p-3.mt-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/icons/icon_navegacion.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Para consultar más información acerca del tema, se sugiere acceder al siguiente libro y consultar las páginas de la 61 a la 71.
                  p.mb-0 Valentín López, G.M. (2015). #[i Ofimática]. Editorial CEP.
                .col-sm-auto
                  a.boton.color-acento-contenido(href="https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/51049?page=16" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


</template>

<script>
export default {
  name: 'Tema2',
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
