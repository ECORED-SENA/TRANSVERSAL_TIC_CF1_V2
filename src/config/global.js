export default {
  global: {
    componenteFormativo:
      'Tecnologías de la información y la comunicación (TIC)',
    descripcionCurso:
      'La sociedad ha avanzado a pasos agigantados en la moda, en la tecnología, en la ciencia y en muchas otras áreas del conocimiento. La informática se encarga del estudio del <i>hardware</i>, las redes de datos y el <i>software</i> necesario, para tratar la información de manera automática y el cual se convierte en factor primordial a la hora de gestionar la información y datos en formato digital. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: '<i>Software</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición',
            hash: 't_1_1',
          },
          {
            numero: '2.1',
            titulo: 'Clasificación',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Internet',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Ofimática',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Introducción a la ofimática',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Funcionalidad de los sistemas operativos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Herramientas ofimáticas: procesador de texto, hoja de cálculo, presentación de diapositivas, gestores de bases de datos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Motores de búsqueda, páginas sociales',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Herramientas de trabajo colaborativo',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Evaluación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Reportes',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Análisis informático',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Mejora continua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Optimización',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Mejora del producto',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        '3.3. Herramientas ofimáticas: procesador de texto, hoja de cálculo, presentación de diapositivas, gestores de bases de datos',
      referencia:
        'Escuela al revés UNLINE, (2019). Análisis de datos para la toma de decisiones con Excel. [Archivo de video]. Youtube',
      tipo: 'Video',
      link: '',
    },
    {
      tema:
        '3.3. Herramientas ofimáticas: procesador de texto, hoja de cálculo, presentación de diapositivas, gestores de bases de datos',
      referencia:
        'Learnit Training. (2022). Tutorial para principiantes de Word 2021. [Archivo de video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7hPcdNAS0v4',
    },
    {
      tema:
        '3.3. Herramientas ofimáticas: procesador de texto, hoja de cálculo, presentación de diapositivas, gestores de bases de datos',
      referencia:
        'Learnit Training. (2022). Tutorial para principiantes de Excel 2021. [Archivo de video]. Youtube. .',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=bF31VEFvMmY',
    },
    {
      tema:
        '3.3. Herramientas ofimáticas: procesador de texto, hoja de cálculo, presentación de diapositivas, gestores de bases de datos',
      referencia:
        'Learnit Training. (2022). PowerPoint 2021 para principiantes. [Archivo de video]. Youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=VODDnOHko7o',
    },
    {
      tema: '3.5. Herramientas de trabajo colaborativo',
      referencia:
        'Grupo Bancolombia. (2018). 10 herramientas de trabajo colaborativo para tu empresa.',
      tipo: 'Sitio web',
      link:
        'https://www.bancolombia.com/negocios/actualizate/tendencias/herramientas-trabajo-colaborativo',
    },
    {
      tema: '3.5. Herramientas de trabajo colaborativo',
      referencia:
        'EducaTIC. (2022). Tutorial TRELLO ACTUALIZADO 2022. [Archivo de video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=sZd7uUPigk8',
    },
    {
      tema: '5.2. Mejora del producto',
      referencia:
        'CertCampus. (2020). ITIL Ciclo de vida. [Archivo de video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qLSk1Ctl51I',
    },
  ],
  glosario: [
    {
      termino: 'CAD',
      significado:
        'sigla de Diseño Asistido por Computador,  son herramientas para computadores que permiten crear, modificar, analizar y optimizar diseños. ',
    },
    {
      termino: 'CPU',
      significado:
        'sigla de la expresión inglesa Central Processing Unit, &#39;unidad central de proceso&#39;, que es la parte de una computadora en la que se encuentran los elementos que sirven para procesar datos.',
    },
    {
      termino: '<i>Hardware</i>',
      significado:
        'conjunto de conocimientos científicos y técnicas que hacen posible el tratamiento automático de la información por medio de computadoras.',
    },
    {
      termino: 'Informática',
      significado:
        'conjunto de conocimientos científicos y técnicas que hacen posible el tratamiento automático de la información por medio de computadoras.',
    },
    {
      termino: 'ITIL',
      significado:
        'Information Technology Infrastructure Library, corresponde a una metodología de gestión que propone una serie de prácticas estandarizadas que nos ayudan a mejorar la prestación de un servicio, reorganizando la manera que tiene la empresa de trabajar y en particular, la del departamento de tecnologías de información.',
    },
    {
      termino: 'LibreOffice',
      significado:
        'es un paquete de software de oficina libre y de código abierto desarrollado por The Document Foundation.',
    },
    {
      termino: 'Microsoft',
      significado:
        'es una compañía tecnológica multinacional con sede en Redmond, Washington, EE.UU. Microsoft es el acrónimo de microcomputer y <i>software</i>',
    },
    {
      termino: 'Ofimática',
      significado:
        'automatización, mediante sistemas electrónicos, de las comunicaciones y procesos administrativos en las oficinas.',
    },
    {
      termino: 'OpenOffice',
      significado:
        'es una suite ofimática libre, de código abierto, que incluye procesador de textos, hoja de cálculo, presentaciones, herramientas para el dibujo vectorial y base de datos.',
    },
    {
      termino: 'Periférico',
      significado:
        'aparato auxiliar e independiente conectado a la unidad central de una computadora.',
    },
    {
      termino: 'RAM',
      significado:
        'sigla de Random Access Memory (‘memoria de acceso aleatorio’), memoria principal de la computadora, donde residen programas y datos, sobre la que se pueden efectuar operaciones de lectura y escritura.',
    },
    {
      termino: 'Sistema operativo',
      significado:
        'es el conjunto de programas informáticos que permite la administración eficaz de los recursos de una computadora es conocido como sistema operativo o software de sistema. Estos programas comienzan a trabajar apenas se enciende el equipo, ya que gestionan el hardware desde los niveles más básicos y permiten además la interacción con el usuario.',
    },
    {
      termino: '<i>Software</i>',
      significado:
        'conjunto de programas, instrucciones y reglas informáticas para ejecutar ciertas tareas en una computadora.',
    },
    {
      termino: 'TIC',
      significado:
        'son el conjunto de tecnologías desarrolladas en la actualidad para una información y comunicación más eficiente, las cuales han modificado tanto la forma de acceder al conocimiento como las relaciones humanas.',
    },
    {
      termino: 'WWW',
      significado:
        'son las iniciales que identifican a la expresión inglesa World Wide Web, el sistema de documentos de hipertexto que se encuentran enlazados entre sí y a los que se accede por medio de internet. A través de un software conocido como navegador, los usuarios pueden visualizar diversos sitios web (los cuales contienen texto, imágenes, videos y otros contenidos multimedia) y navegar a través de ellos mediante los hipervínculos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Andrade, A. M., Del Río, C. A., & Alvear, D. L. (2019). A study on time and motion to increase the efficiency of a shoe manufacturing company | Estudio de Tiempos y Movimientos para Incrementar la Eficiencia en una Empresa de Producción de Calzado. <i>Información Tecnológica</i>, 30(3), 83–94.',
      link: 'https://doi.org/10.4067/S0718-07642019000300083',
    },
    {
      referencia:
        'Carmona Romera, G. (2017). <i>Sistema operativo, búsqueda de información: Internet - Intranet y correo electrónico</i>. IC Editorial.',
    },
    {
      referencia:
        'Eíto Brun, R. (2014). Gestión de contenidos. Universitat Oberta de Catalunya (Vol. 17). Editorial UOC.',
    },
    {
      referencia:
        'Española, R. A., & Madrid, E. (1970). Diccionario de la lengua española (Vol. 19). Espasa-Calpe.',
    },
    {
      referencia:
        'Fresno Chávez, C. (2018). <i>¿Cómo funciona Internet?</i>. El Cid Editor.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/36728/?page=34',
    },
    {
      referencia:
        'Gaskin, S. (2014). <i>GO! Microsoft Word 2013</i> (1st ed.). Pearson Educación.',
    },
    {
      referencia:
        'Gómez de Silva Garza, A., & Ania Briseño, I. (2008). <i>Software</i> (pp. 23–44). Cengage Learning.',
      link:
        'https://link.gale.com/apps/doc/CX3004400004/GVRL?u=sena&sid=GVRL&xid=d8990326',
    },
    {
      referencia:
        'Ibarra Sixto, J. I. (2013). <i>Manual sistema operativo, búsqueda de la información: Internet/intranet y correo electrónico</i>. Editorial CEP.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/50724?page=19',
    },
    {
      referencia:
        'Ladrón de Guevara, M. A. (2018). <i>Sistema operativo, búsqueda de la información: internet/intranet y correo electrónico UF0319</i> (2a. ed.). Editorial Tutor Formación.',
      link:
        'Https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/44263',
    },
    {
      referencia:
        'Mamani, O., Arohuanca, M., Mamani, W., Quiñonez, C., Muñoz, M., & Pocohualca, N. (s.f.). <i>Auditoría informática</i>. In Informatica (pp. 1–6).',
    },
    {
      referencia:
        'Naranjo González, M. R. (2010). Manual: ofimática básica para formación continua. Formación para el empleo. Editorial CEP.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/50987?page=1',
    },
    {
      referencia:
        'Servicetonic. (2019). 8. <i>ITIL, Mejora continua del servicio</i>.',
      link:
        'https://www.servicetonic.com/es/itil/8-itil-mejora-continua-del-servicio',
    },
    {
      referencia:
        'Valentín López, G.M. (2015). <i>Ofimática</i> (S. L. Editorial CEP (ed.)). Editorial CEP, S. L.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/51049?page=16',
    },
    {
      referencia:
        'Vergara, P. (2005). <i>Optimización de Procesos Industriales y Control de Calidad</i>. Pedro Vergara Vera. I.S.B.N: 956-7359-45-8. Ediciones Universidad Tecnológica.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
