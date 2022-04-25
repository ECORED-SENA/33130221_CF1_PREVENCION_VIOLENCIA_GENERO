export default {
  global: {
    componenteFormativo: 'La violencia de género y su marco normativo',
    descripcionCurso:
      'La violencia de género es un fenómeno social con causas multifactoriales, que lo hacen un tema complejo, porque su eliminación no depende de la norma o la sanción impuesta, sino del cambio de conciencia frente a las estructuras básicas de poder dentro la sociedad, por eso, en este componente se abordarán los conceptos para una comprensión más amplia de la problemática y las normativas que enmarcan las acciones de prevención e intervención.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Marco normativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto de violencia contra las mujeres',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Formas de violencia contra las mujeres',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Situaciones, condiciones y ámbitos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Normativa nacional e internacional',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Prevención y sanción',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Perspectiva de derechos',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Violencia de género',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Génesis',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Concepto y características de violencia de género',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Otros grupos vulnerables',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Aspectos culturales',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Concepto de <i>continuum</i>',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Perfil del maltratador y de la víctima',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Ciclo de la violencia',
            hash: 't_2_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'García, M., Grande, M., González, E., Álvarez, M., García, I., Peña, A., Sáez, C. & Díez, P. (2015). Material didáctico para la educación sexual en centros de menores. Instituto Asturiano de Administración Pública.',
      link:
        'https://www.asturias.es/RecursosWeb/iaap/contenidos/Articulos/Formacion/Materiales%20did%C3%A1cticos%20para%20la%20educaci%C3%B3n%20sexual%20en%20centros%20de%20menores.pdf',
    },
    {
      referencia:
        'Ley 1257 de 2008. Por la cual se dictan las normas de sensibilización, prevención y sanción de formas de violencia y discriminación contra las mujeres. Diciembre 4 de 2008. ',
      link: 'https://oig.cepal.org/sites/default/files/2008_col_ley1257.pdf',
    },
    {
      referencia:
        'Ley 1761 de 2015. Por la cual se crea el tipo penal de feminicidio como delito autónomo y se dictan otras disposiciones. ',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/30019921',
    },
    {
      referencia:
        'Poggi, F. (2019). Sobre el concepto de violencia de género y su relevancia para el derecho. Corte IDH. ',
      link: 'https://www.corteidh.or.cr/tablas/r6522.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Femenino',
      significado:
        'Construcción social que establece roles y lugares de ser, pensar y sentir desde lo femenino y que establecen una serie de diferencias y características frente a lo masculino.',
    },
    {
      termino: 'Identidad de género',
      significado:
        'Se refiere a la construcción de la feminidad o masculinidad desde una construcción social y cultural. Esta identidad no necesariamente está basada en el sexo biológico.',
    },
    {
      termino: 'Masculino',
      significado:
        'Construcción social que establece roles y lugares de ser, pensar y sentir desde lo masculino y que establecen una serie de diferencias y características frente a lo femenino.',
    },
    {
      termino: 'Mujer',
      significado:
        'Condición dada por las características que corresponden a este sexo. Esta clasificación se encuentra dada por lo que se determina biológicamente, para que en la especie humana se realice una clasificación como hombre o mujer.',
    },
    {
      termino: 'Mujeres víctimas',
      significado:
        'Todas las mujeres que hayan sufrido de forma directa o indirecta cualquier manifestación de violencia ya sea física, psicológica, sexual o económica en los ámbitos públicos o privados.',
    },
    {
      termino: 'Orientación sexual',
      significado:
        'Atracción, deseo sexual y afectivo hacia otros, sean del mismo sexo o de sexos distintos.',
    },
    {
      termino: 'Patriarcal',
      significado:
        'Sistema de dominación que surge en la prehistoria, que ha generado una desigualdad en las relaciones de poder entre hombres y mujeres.',
    },
    {
      termino: 'Violencia contra la mujer',
      significado:
        'Según la Ley 1257 de 2008 es cualquier acción u omisión que le cause muerte, daño o sufrimiento físico, sexual, psicológico, económico o patrimonial por su condición de mujer, así́ como las amenazas de tales actos, la coacción arbitraria de la libertad bien sea que se presente en el ámbito público o en el privado.',
    },
    {
      termino: 'Violencia de género',
      significado:
        'Corresponde a todas las formas de violencia que se generen por condiciones de género. Esta violencia se da en los desequilibrios relacionales entre hombres y mujeres y no solo se refiere a la violencia contra las mujeres, sino que es incluyente frente a hombres y personas con orientaciones sexuales diversas.',
    },
  ],
  complementario: [
    {
      texto:
        'OMS. (s.f.). Violencia contra la mujer - Respuesta del sector de la salud. Observatorio de igualdad de género de América Latina y El Caribe.',
      tipo: 'PDF',
      descarga: '/downloads/who_nmh_vip_pvl_13_1_spa.pdf',
    },
    {
      texto:
        'ONU Mujeres. (s.f). Preguntas frecuentes: Tipos de violencia contra las mujeres y las niñas. unwomen.org.',
      tipo: 'Artículo',
      link:
        'https://www.unwomen.org/es/what-we-do/ending-violence-against-women/faqs/types-of-violence',
    },
    {
      texto:
        'Espinar, E. (2007). Las raíces socioculturales de la violencia de género. Universidad de Alicante.',
      tipo: 'PDF',
      descarga: '/downloads/02espinar.pdf',
    },
    {
      texto:
        'Conpes Social 161. (2013). Equidad de género para las mujeres. Consejo Nacional de Política Económica y Social.',
      tipo: 'PDF',
      descarga: '/downloads/colombia_2013-2016.pdf',
    },
    {
      texto:
        'Sistema Único de Información Normativa. (s.f). Protección y defensa de los derechos de las mujeres',
      tipo: 'Página web',
      link: 'http://www.suin-juriscol.gov.co/legislacion/diadelamujer.html',
    },
    {
      texto:
        'Alonso, C., Cacho, R., González, I., Herrera, E. y Ramírez, J. (s.f.). Guía de buen trato y prevención de la violencia de género en el ámbito educativo. Junta de Andalucía- España.',
      tipo: 'PDF',
      descarga: '/downloads/Guía_buenostratos.pdf',
    },
    {
      texto: 'Infogénero. (2019). Video pedagógico de la Ley 1257',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=JEfFoiGsBEc',
    },
    {
      texto: 'OMS. (2021). Violencia contra la mujer. OMS. ',
      tipo: 'Página web',
      link:
        'https://www.who.int/es/news-room/fact-sheets/detail/violence-against-women',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sonia Margarita Leal Cruz',
        cargo: 'Experta técnica',
        centro:
          'Centro de Formación de Talento Humano en Salud - Regional Distrito Capital',
      },
      {
        nombre: 'Giovanna Andrea Escobar Ospina',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Edison Eduardo Mantilla Cuadros',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Magdi Khalifah',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '---',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Perez',
        cargo: 'Validación de diseño',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Veimar Celis',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
