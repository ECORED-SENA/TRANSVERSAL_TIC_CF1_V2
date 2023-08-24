<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Ofimática

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.1 Introducción a la ofimática
    img.mt-5.img-a.img-t(src='@/assets/curso/temas/pages/tema_3/img_1.png').img-fluid

    p.mt-5 En la oficina es necesario agilizar y automatizar los procesos, con el objetivo de mejorar la productividad y con ello la competitividad. Por esta razón, la ofimática se convierte en factor primordial para la gestión de la información y la reducción de tiempos de respuesta en los procesos que antes se realizaban de manera manual.

    p Es importante conocer las herramientas informáticas más usadas en la oficina, tanto las de uso bajo licencia, como el caso de Office de la empresa Microsoft, como las de uso libre, como el caso de LibreOffice, OpenOffice, etc.

    .row.justify-content-center.align-items-center          
      .col-lg-10
        .tarjeta.color-acento-botones.p-3.mt-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/icons/icon_navegacion.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Para consultar más información acerca del tema, acceder al libro «Ofimática», página 32.
                  p.mb-0 Valentín López, G.M. (2015). #[i Ofimática]. Editorial CEP.
                .col-sm-auto
                  a.boton.color-acento-contenido(href="https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/51049?page=16" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    Separador 
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.2 Funcionalidad de los sistemas operativos

    .row.justify-content-center.align-items-center
        .col
            p Los sistemas operativos son el corazón de los dispositivos informáticos, es decir: “realizan la gestión del #[i hardware] del equipo informático y la supervisión de la ejecución de los programas.” (Valentín López, 2015, p. 32). Además, estos cumplen diferentes funciones dentro del equipo, como son:

        .col-auto
            img.img-a.img-t(src='@/assets/curso/temas/pages/tema_3/img_2.png').img-fluid

    .color-1.p-4.brad.mt-4
      p #[strong Gestionar los recursos del ordenador, los cuales son:]

      .row.justify-content-center.align-items-center
        .col-auto
            img.img-a.img-t(src='@/assets/curso/temas/pages/tema_3/img_3.png').img-fluid
        .col
            p La CPU (microprocesador) que maneja los programas en ejecución y las instrucciones a ejecutar.

      .row.justify-content-center.align-items-center.mt-5
        .col-auto
            img.img-a.img-t(src='@/assets/curso/temas/pages/tema_3/img_4.png').img-fluid
        .col
            p La memoria principal (RAM), de lectura y escritura, gestionando su ocupación y asignación para cada proceso.

      .row.justify-content-center.align-items-center.mt-5
        .col-auto
            img.img-a.img-t(src='@/assets/curso/temas/pages/tema_3/img_5.png').img-fluid
        .col
            p Los distintos dispositivos de almacenamiento secundario (discos duros, discos ópticos, etc.). Esto implica el control de los archivos en estos dispositivos.

      .row.justify-content-center.align-items-center.mt-5
        .col-auto
            img.img-a.img-t(src='@/assets/curso/temas/pages/tema_3/img_6.png').img-fluid
        .col
            p Los demás periféricos del sistema, tanto de entrada (teclado, ratón, etc.) como de salida (monitor, impresoras, etc.), así como los sistemas de telecomunicaciones.

      img.mt-5.img-a.img-t(src='@/assets/curso/temas/pages/tema_3/img_7.png').img-fluid 

      p.mt-5 Gestionar los procesos en ejecución, es decir, los distintos programas y tareas que se encuentran en proceso. El sistema operativo es el responsable de crear, mantener, detener temporalmente o finalizar esos procesos, asignando los recursos necesarios de CPU, RAM, etc. También debe detectar y controlar los posibles conflictos, por ejemplo, si dos programas intentan escribir en la misma posición de memoria. Además, el sistema operativo debe ser capaz también de planificar las tareas correctamente, por ejemplo, asignando más recursos a los programas que ralenticen el sistema.

      img.mt-5.img-a.img-t(src='@/assets/curso/temas/pages/tema_3/img_8.png').img-fluid 

      p.mt-5 Controlar la seguridad del sistema en todo momento, comprobando que todos los sistemas funcionan correctamente. (Ibarra Sixto, 2013, pp. 26-27).

      .row.justify-content-center.align-items-center          
        .col-lg-10
          .tarjeta.color-acento-botones.p-3.mt-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/icons/icon_navegacion.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p Para consultar más información acerca del tema, acceder al libro «Ofimática», página 33.
                    p.mb-0 Valentín López, G.M. (2015). #[i Ofimática]. Editorial CEP.
                  .col-sm-auto
                    a.boton.color-acento-contenido(href="https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/51049?page=16" target="_blank")
                      span Descargar
                      i.fas.fa-file-download

    Separador 
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.3 Herramientas ofimáticas: procesador de texto, hoja de cálculo, presentación de diapositivas, gestores de bases de datos

    img.img-a.img-t(src='@/assets/curso/temas/pages/tema_3/img_9.png').img-fluid 

    p.mt-5 Existen herramientas ofimáticas como procesadores de texto, hojas de cálculo, presentaciones ejecutivas y gestores de base de datos muy utilizadas por las empresas de la confección, para optimizar la gestión de la información y los datos mejorando la productividad.  Para su estudio se recomienda la metodología de trabajo del autor (Naranjo González, 2010), enfocada en procesos de trabajo con énfasis en la formación para el empleo.

    .row.justify-content-center.align-items-center          
      .col-lg-10
        .tarjeta.color-acento-botones.p-3.mt-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/icons/icon_navegacion.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Para consultar más información acerca del tema, se sugiere acceder al siguiente libro:
                  p.mb-0 Naranjo González, M. R. (2010). #[i Manual: ofimática básica para formación continua]. Formación para el empleo. Editorial CEP. 
                .col-sm-auto
                  a.boton.color-acento-contenido(href="https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/50987?page=1" target="_blank")
                    span Descargar
                    i.fas.fa-file-download 
    .row.justify-content-center.align-items-center.mt-5          
      .col-lg-10
        .bg2.p-5.brad    
          p.mb-0 Se sugiere la consulta del material complementario sobre el uso de los softwares Microsoft Office (como procesador de texto), Microsoft Excel (hojas de cálculo) y Microsoft PowerPoint (para la presentación con diapositivas).    

    Separador 
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.4 Motores de búsqueda, páginas sociales

    img.img-a.img-t(src='@/assets/curso/temas/pages/tema_3/img_10.png').img-fluid 

    p.mt-5 Desde los años 90 cuando se popularizó el internet nacieron los motores de búsqueda o buscadores, programas informáticos para la búsqueda de información en el ciberespacio. Entre los buscadores más populares se encuentran: Netscape, con aparición en el año 1994, y Google, que aparece en el año 1998, convirtiéndose en uno de los más populares.

    p Asociado a estos cambios, entre los años 2002 y 2004, surgen las redes sociales o también conocidas como páginas sociales, que permiten el desarrollo del concepto de aldea virtual. Entre las redes sociales más conocidas, a lo largo de la historia, se tienen My Space, Friendster, Facebook y, hoy en día, Instagram. 

    .row.justify-content-center.align-items-center          
      .col-lg-10
        .tarjeta.color-acento-botones.p-3.mt-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/icons/icon_navegacion.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Para conocer más sobre la temática, se sugiere acceder al siguiente libro y consultar las páginas de la 101 a la 106.
                  p.mb-0 Ladrón de Guevara, M. A. (2018). #[i Sistema operativo, búsqueda de la información: internet/intranet y correo electrónico UF0319] (2a. ed.). Editorial Tutor Formación
                .col-sm-auto
                  a.boton.color-acento-contenido(href="Https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/44263" target="_blank")
                    span Descargar
                    i.fas.fa-file-download 


    .row.justify-content-center.align-items-center          
      .col-lg-10
        .tarjeta.color-acento-botones.p-3.mt-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/icons/icon_navegacion.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Para conocer más sobre la temática, se sugiere acceder al siguiente libro y consultar las páginas de la 33 a la 55.
                  p.mb-0 Fresno Chávez, C. (2018). #[i ¿Cómo funciona Internet?]. El Cid Editor. 
                .col-sm-auto
                  a.boton.color-acento-contenido(href="https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/36728?page=34" target="_blank")
                    span Descargar
                    i.fas.fa-file-download 


    Separador 
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.5 Herramientas de trabajo colaborativo

    img.img-a.img-t(src='@/assets/curso/temas/pages/tema_3/img_11.png').img-fluid 

    p.mt-5 Con el avance de las Tecnologías de la Información y la Comunicación (TIC) han aparecido una gran cantidad de herramientas en la Web, que se pueden clasificar en diferentes ejes temáticos, tales como herramientas para presentaciones, herramientas para gestión de videos, herramientas para compartir y comunicar, herramientas para organizar ideas, como mapas conceptuales y mapas mentales, herramientas para evaluaciones en línea, entre otras. Una de ellas, que aporta significativamente al desarrollo de actividades grupales en el ciberespacio, es la de trabajo colaborativo, por lo cual se presenta su definición y funciones principales. 

    p Las herramientas de trabajo colaborativo son soluciones informáticas para apoyar el trabajo en grupo de varios usuarios. Incorporan funciones para publicar documentos en espacios compartidos, enviar correos electrónicos, participar en foros de discusión, mantener listas de contactos, agendas compartidas, etc. Las herramientas de colaboración (inicialmente conocidas como #[i groupware]) permiten la gestión de documentos y contenidos circunscritos al grupo de usuarios que necesitan compartir esa información. (Eíto-Brun, 2014, p. 49).

    .row.justify-content-center.align-items-center          
      .col-lg-10
        .tarjeta.color-acento-botones.p-3.mt-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/icons/icon_navegacion.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Se sugiere consultar este sitio web para obtener más información sobre el tema.
                  p.mb-0 Grupo Bancolombia. (2018). 10 herramientas de trabajo colaborativo para tu empresa.
                .col-sm-auto
                  a.boton.color-acento-contenido(href="https://www.grupobancolombia.com/wps/portal/negocios/actualizate/tendencias/herramientas-trabajo-colaborativo" target="_blank")
                    span Descargar
                    i.fas.fa-file-download 

    .row.justify-content-center.align-items-center.mt-5          
      .col-lg-10
        .bg2.p-5.brad    
          p.mb-0 Finalmente, en el material complementario, se encontrará más información acerca de la herramienta Trello, como ejemplo adicional para realizar trabajo colaborativo.

</template>

<script>
export default {
  name: 'Tema3',
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
