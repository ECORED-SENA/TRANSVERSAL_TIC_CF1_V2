<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Evaluación
    img.img-a.img-t(src='@/assets/curso/temas/pages/tema_4/img_1.png').img-fluid

    p.mt-5 Sin duda alguna la evaluación es una de las etapas fundamentales en el desarrollo de proyectos porque permite identificar, cuantificar y valorar el impacto de los resultados, bajo el criterio de costo y beneficio. Por tal razón, las herramientas informáticas se convierten en un apoyo fundamental en la etapa de evaluación, porque generan estadísticas e informes compilados y consolidados que facilitan visualizar los resultados y la toma de decisiones.

    Separador 
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.1 Reportes

    img.img-a(src='@/assets/curso/temas/pages/tema_4/img_2.png').img-fluid

    p.mt-5 Según Española & Madrid (1970), un reporte puede ser un informe o una noticia. Este tipo de documento (que puede ser impreso, digital, audiovisual, etc.) tiene como objetivo presentar una información, normalmente compilada y estadística que contextualice una situación o el resultado de un proyecto. En este sentido, las herramientas informáticas como por ejemplo procesadores de texto, presentaciones ejecutivas y las hojas electrónicas, facilitan la elaboración de textos, presentaciones con elementos multimediales, cuadros con fórmulas de todo tipo y gráficos estadísticos que permiten visualizar de una manera eficiente el resultado de un proyecto.

    Separador 
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.2 Análisis informático

    img.img-a.img-t(src='@/assets/curso/temas/pages/tema_4/img_3.png').img-fluid

    p.mt-5 En este punto, es importante el manejo de herramientas informáticas, como Excel, que permite realizar análisis informático, a través de procesos estadísticos, tales como, análisis de varianzas, coeficiente de correlación, estadística descriptiva, suavización exponencial, análisis de regresión, muestras e histogramas, entre otras.

    .row.justify-content-center.align-items-center.mt-5          
      .col-lg-10
        .bg2.p-5.brad    
          p.mb-0 Para más información acerca del tema análisis de datos en Microsoft Excel, se sugiere revisar el material complementario. 

    p.mt-5 En otro aspecto, cuando se habla de auditoría, en especial de los sistemas, se deben mencionar como temas importantes, la redundancia, el ruido y la entropía.

    .row.justify-content-center.mt-5
      .col-md-4.my-6.my-md-0
        .bg1.h-100.p-4.brad
          h2.text-center Ruido                                    
          p Según Manani et al. (s.f.), “en primer lugar, se debe considerar como comunicación:

          p La transferencia de información del emisor al receptor de manera que este la comprenda.
          p El ruido es todo aquello que interfiere en una adecuada comunicación; no solamente los sonidos sino todo aquello que impida la adecuada comunicación”.

          p Por ejemplo, si en la casa la niña se encuentra jugando silenciosamente y otra persona se encuentra hablando en una conferencia o presentación, se considera ruido, debido a la distracción que genera la niña para el sistema. 

          img.img-t.mt-5.img-a(src='@/assets/curso/temas/pages/tema_4/img_7.png').img-icon


      .col-md-4.my-6.my-md-0
        .bg2.h-100.p-4.brad
          h2.text-center Redundancia
          p Se le llama redundancia a toda aquella duplicidad que tiene el sistema. Los sistemas con redundancia son aquellos en los que se repiten los datos o #[i hardware] de carácter crítico para asegurarlos ante cualquier posible fallo que pueda surgir por su uso continuo. Sin embargo, se debe definir con claridad su estructura o funcionamiento, para no caer en duplicidades innecesarias de información, que terminen en inconsistencias.
          img.img-t.mt-5.img-a(src='@/assets/curso/temas/pages/tema_4/img_8.png').img-icon

      .col-12.col-md-4.my-6.my-md-0
        .bg3.h-100.p-4.brad
          h2.text-center Entropía
          p Según Española & Madrid (1970), la entropía es definida como: “Magnitud termodinámica que mide la parte de la energía no utilizable para realizar trabajo y que se expresa como el cociente entre el calor cedido por un cuerpo y su temperatura absoluta”. En otras palabras, la entropía hace referencia a las fallas o inconvenientes de los elementos del sistema que pueden afectar el funcionamiento de este. Si se toma como ejemplo un sistema de producción de una empresa industrial, la entropía se podría presentar por fallas en las máquinas por falta de mantenimiento, insumos de mala calidad u operarios sin capacitación para el manejo de su puesto de trabajo.

          p Todo lo anterior se debe tener en cuenta a la hora de analizar los reportes entregados, en cuanto al análisis del ruido o sea las interferencias, la redundancia que se pueda dar en los reportes y la entropía hablando en términos de la energía desaprovechada.
</template>

<script>
export default {
  name: 'Tema4',
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
