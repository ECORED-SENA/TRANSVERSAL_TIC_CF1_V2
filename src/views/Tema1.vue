<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1.fst-italic Software
      
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 Definición
    img.img-a(src='@/assets/curso/temas/pages/tema_1/img_1.png').img-fluid

    p.mt-5 Se define #[i software] como “el conjunto de componentes lógicos que hacen posible la realización de tareas específicas” (Carmona Romera, 2017).

    p Tomando como base esta definición y su aplicación en el área de la confección, será de gran utilidad el conocimiento y dominio de herramientas tecnológicas que permitan mejorar la productividad en los   procesos de diseño y  confección de modas, tales como,   procesadores de texto, hojas electrónicas, presentaciones ejecutivas y bases de datos, junto con el conocimiento y dominio del ciberespacio y herramientas colaborativas.   

    .row.justify-content-center.align-items-center         
      .col-lg-10
        .tarjeta.color-acento-botones.p-3.mt-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/icons/icon_navegacion.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Para consultar más información acerca del tema acceder al libro sistema operativo, búsqueda de información: Internet/Intranet y correo electrónico Página 16-17.
                  p.mb-0 Ibarra Sixto, J. I. (2013). #[i Manual sistema operativo, búsqueda de la información: Internet/intranet y correo electrónico]. Editorial CEP. 
                .col-sm-auto
                  a.boton.color-acento-contenido(href="https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/50724?page=19" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2 Clasificación
    .row.justify-content-center.align-items-center       
      .col-lg-10    
        img.img-a(src='@/assets/curso/temas/pages/tema_1/img_2.png').img-fluid

    .color-1.p-5.brad
      p En el campo de las TIC se encuentran diferentes tipos de #[i software] de acuerdo con la función que realizan, bien sea en la administración de los recursos del computador o en las aplicaciones que el usuario necesite para el desempeño de su trabajo. 

      .row.justify-content-center.align-items-center
          .col-auto
              img.img-a.img-t(src='@/assets/curso/temas/pages/tema_1/img_3.png').img-fluid
          .col
              p Según (Gómez de Silva Garza & Ania Briseño, 2008), el #[i software] de sistema está constituido por los programas que se encargan del control y administración de los recursos de cómputo y los que permiten la interacción entre los usuarios y los sistemas de aplicación o el hardware. 

              p Ejemplos de este tipo de #[i software] son los traductores (compiladores, intérpretes y ensambladores) y los sistemas operativos como Windows, XP o Vista, y varias versiones de Unix, por ejemplo, AIX de IBM. En la actualidad se cuenta con versiones más actualizadas como son Android, IOS, Windows 10, que funcionan inclusive en equipos móviles, generando mayor rendimiento en los dispositivos.

      hr.border-color-primary.border-2

      .row.justify-content-center.align-items-center
          .col-auto
              img.img-a.img-t(src='@/assets/curso/temas/pages/tema_1/img_4.png').img-fluid
          .col
              p El #[i software] o sistemas de aplicación son los programas que permiten a una computadora realizar actividades específicas de procesamiento de información y ofrecer una funcionalidad a los usuarios finales. (Gómez de Silva Garza & Ania Briseño, 2008). 

              p Ejemplo de este tipo de #[i software] son los editores o procesadores de texto como Word, hojas de cálculo como Excel, presentaciones ejecutivas como Power Point y antivirus como McAfee o Avast, entre otros.

      hr.border-color-primary.border-2

      .row.justify-content-center.align-items-center
          .col-auto
              img.img-a.img-t(src='@/assets/curso/temas/pages/tema_1/img_5.png').img-fluid
          .col
              p El #[i software] de programación permite a determinados usuarios, la comunicación con la máquina o dispositivo, para el desarrollo de aplicaciones que facilitan el manejo de la información y con ello la toma de decisiones; también se denominan lenguajes de programación⁠. 

              p Los lenguajes de programación se clasifican en tres niveles, alto, medio y bajo de acuerdo con su comprensión y cercanía con la máquina o dispositivo. El nivel bajo, se denomina lenguaje de máquina y es utilizado para la creación y administración del #[i software] del sistema o sistema operativo y el nivel más alto es utilizado por los programadores en la creación de aplicaciones comerciales o científicas.

              p EL #[i software] de programación se presenta a través de Entornos Integrados de Desarrollo (IDE), que ofrecen la posibilidad de construir aplicaciones para diferentes ambientes como la Web y/o dispositivos móviles. ⁠ Algunos ejemplos de IDE son Netbeans, Eclipse y otros conocidos como editores de programación, entre los cuales se encuentran Visual Studio, Sublime Text, Brackets, Atom, Etc.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
