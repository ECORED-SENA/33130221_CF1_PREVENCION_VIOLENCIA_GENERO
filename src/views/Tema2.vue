<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Violencia de género

    .bgImg--02    
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-lg-10
          .bloque-texto-g.btg--start.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema2/t2_01.svg')})`}"
            )
            .bloque-texto-g__texto.p-5
              p La violencia de género es una violación de derechos humanos y se ha considerado un problema de salud pública, debido a las consecuencias que esta puede tener para la vida de las personas, pero también por la magnitud de la problemática a nivel mundial.

    separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Génesis

    .row.justify-content-center
      .col-lg-6.mb-5.mb-lg-0
        p En primer lugar, es necesario comprender qué es la violencia, concepto que ha sido estudiado desde diversas perspectivas; sin embargo, su línea base está marcada en la lucha de poder. La violencia es una forma de eliminación del otro, no solo desde el punto de vista físico, la eliminación puede tener otras formas, psicológicas, emocionales, sociales, políticas.

        p Desde esta perspectiva la violencia de género se circunscribe en una lucha de poder basada en la diferencia de género, remontando su origen en lo que se ha denominado como el “patriarcado” o “sistema de dominación patriarcal”, el cual desde una perspectiva de estudios económicos y sociales surge con la primera división sexual del trabajo.
 
      .col-lg-6 
        figure(data-aos="fade-left")
          img(src="@/assets/curso/tema2/t2_02.svg", alt="alt").img600.m-auto

    .linebreak2.my-5

    .row.justify-content-center
      .col-lg-6.mb-5.mb-lg-0
        figure(data-aos="fade-right")
          img(src="@/assets/curso/tema2/t2_03.svg", alt="alt").img600.m-auto
      .col-lg-6
        p.mb-0 Las aldeas primitivas conformadas por hombres, mujeres e hijos recolectaban y se alimentaban de frutos, eran nómadas y tanto hombres como mujeres podían trabajar en las mismas actividades; sin embargo, con el desarrollo de nuevas tecnologías para la supervivencia y la elaboración de utensilios empezaron a explorar una nueva actividad, la caza. Esto significaba enfrentarse a animales salvajes y a utilizar la fuerza física, además de perseguir a los animales de forma discreta para ser cazados. Aquí varios factores empezaron a influir, como la necesidad de mayor fuerza física, necesidad de cuidado de los hijos y un factor biológico adicional que era el olor a sangre, que atraía a animales salvajes cuando las mujeres estaban menstruando.

    .linebreak2.my-5

    .row.justify-content-center.mb-4
      .col-lg-6.mb-5.mb-lg-0
        p Estas condiciones gestaron una de las primeras divisiones sexuales del trabajo, en la que la mujer se quedaba en la aldea con los hijos y en tareas de recolección, mientras los hombres por su fuerza física salían a cazar durante largos periodos de tiempo.

        p Aquí se configura un espacio privado y doméstico para las mujeres y, un espacio público y abierto para los hombres. Esta ha sido quizás una de las condenas más profundas para las mujeres a lo largo de la historia, ya que los hombres históricamente se convirtieron en proveedores del hogar y las mujeres en madres cuidadoras.
 
      .col-lg-6 
        figure(data-aos="fade-left")
          img(src="@/assets/curso/tema2/t2_04.svg", alt="alt").img600.m-auto

    p.mb-5 A lo largo del tiempo esta diferenciación y espacio de desarrollo por género se ha convertido en el caldo de cultivo para la desigualdad, ya que las connotaciones de poder han estado puestas en factores también de tipo económico, en las que el dinero y la autoridad son sinónimos y por razones de roles históricos, las mujeres durante grandes periodos de tiempo en la historia no podían trabajar, estudiar o producir, más allá de lo que el hogar permitía.        
  
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img.custom01(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/t2_05.svg')})`}"
      )
      .bloque-texto-g__texto.p-5
        p Esta lógica de forma inconsciente se fue transmitiendo de generación en generación y, las mujeres y todo lo relacionado con lo femenino fue perdiendo valor social, a tal punto que durante gran parte de la historia las mujeres no eran reconocidas, no tenían derechos, ni voz, ni poder de decisión.

    p De esta forma la violencia de género ha sido prehistórica y el sistema de dominación patriarcal se ha convertido en un paradigma que atraviesa el pensamiento y la realidad de las personas, generando escenario de desigualdad desde el momento mismo del nacimiento.

    separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Concepto y características de violencia de género

    .row.justify-content-center.mb-5
      .col-lg-6.mb-5.mb-lg-0
        figure(data-aos="fade-right")
          img(src="@/assets/curso/tema2/t2_06.svg", alt="alt").img600.m-auto
      .col-lg-6
        p La violencia de género debe ser comprendida como un constructo cultural, que se basa en la lucha de poder entre los géneros, lo que significa no necesariamente que es un tema de hombres contra las mujeres, ya que esta lucha que se torna violenta puede ser desde cualquier polo.

        p La Agencia de las Naciones Unidas para los Refugiados - ACNUR realiza aclaraciones muy importantes frente al concepto de violencia de género, ya que establece que esta surge en el marco de una normatividad que daña y genera desequilibrios entre las personas, derivados de la forma cómo se establecen las relaciones de poder.

        p En el siguiente recurso de aprendizaje se presentan las características de la violencia de género:

    .crd.crd--slyder
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
              .col.nm--l10
                p Es una pugna por el poder y se gesta en la asimetría del poder, donde quien se siente con poder sobre el otro ejerce dominación.
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
              .col.nm--l10
                p No necesariamente es una violencia que se ejerce de manera directa sobre la mujer, ya que puede ser ejercida tanto por  el hombre como por la mujer.
          .col-md-6
            figure
              img(src='@/assets/curso/tema2/t2_07.svg', alt='').img500.m-auto

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
              .col.nm--l10
                p La forma más frecuente de violencia de género es la ejercida contra las mujeres.
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
              .col.nm--l10
                p Es un fenómeno cultural y estructural.
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
              .col.nm--l10
                p Es sistémica, ya que traspasa todas las estructuras sociales en donde hombres y mujeres confluyen.
          .col-md-6
            figure
              img(src='@/assets/curso/tema2/t2_08.svg', alt='').img500.m-auto

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
              .col.nm--l10
                p Es una violencia que se hace invisible en muchos escenarios: los mecanismos de control, el aislamiento, la microfísica del poder se hace presente en todas las formas de relación.
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
              .col.nm--l10
                p Tiene un trasfondo de posesión y dominación del otro, “mi esposa”, “mi esposo”, las relaciones se convierten en propiedad privada.            
          .col-md-6
            figure
              img(src='@/assets/curso/tema2/t2_09.svg', alt='').img500.m-auto

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
              .col.nm--l10
                p La violencia contra la mujer se centra en la dominación del cuerpo femenino.
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
              .col.nm--l10
                p El amor romántico se convirtió en una forma de instrumentalización del cuerpo femenino, pero también de generar dependencia e inferioridad.        
          .col-md-6
            figure
              img(src='@/assets/curso/tema2/t2_10.svg', alt='').img500.m-auto

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
              .col.nm--l10
                p Se desarrolla y se gesta en cualquier clase social, no discrimina nivel educativo o edad.
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
              .col.nm--l10
                p Influenciada por estereotipos sociales, definición de espacio y roles que corresponde a lo femenino o masculino.        
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
              .col.nm--l10
                p Es una forma de anular y discriminar orientaciones sexuales que no encajen con la diada hombre - mujer.       
          .col-md-6
            figure
              img(src='@/assets/curso/tema2/t2_11.svg', alt='').img500.m-auto

    separador

    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Otros grupos vulnerables

    .row.justify-content-center
      .col-lg-8.mb-4.mb-lg-0
        p Frente a la violencia de género el grupo de mayor vulnerabilidad son las mujeres y las niñas; sin embargo, los grupos de personas con orientaciones sexuales diversas son también foco de discriminación y violencia por temas de género, ya que se salen del paradigma de la relación hombre - mujer, masculino – femenino, en donde el mundo desde los ojos de la desigualdad solo puede ser visto desde estas dos condiciones, todo lo que se aleje de esto, es rechazado, discriminado, violentado e incluso, eliminado.
      .col-lg-4
        figure(data-aos="fade-left")
          img(src="@/assets/curso/tema2/t2_12.svg", alt="alt").img400.m-auto

    separador

    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4 Aspectos culturales

    p.mb-5 La violencia de género es un fenómeno social que se enmarca en dos grandes paradigmas culturales:

    .row.justify-content-center.pb-5.mb-5
      .col-auto.mb-4.mb-lg-0
        .flip(data-aos="zoom-in")
          .flip-content.flip--coral
            .flip-front.py-4
              img(src="@/assets/curso/tema2/t2_13.svg", alt="alt").img300.m-auto
              h3.mb-0.text-center.text-white Paradigma patriarcal
            .flip-back.flip--coral.p-4.pt-5              
              h4.txt-mint.pt-3.mb-4 Paradigma patriarcal
              .row
                .col-auto
                  figure
                    img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
                .col.nm--l10
                  p Surge con la división sexual del trabajo.
              .row
                .col-auto
                  figure
                    img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
                .col.nm--l10
                  p Define roles, espacios y formas de relación.
              .row
                .col-auto
                  figure
                    img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
                .col.nm--l10
                  p Lucha de poder entre sexos.
              .row
                .col-auto
                  figure
                    img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
                .col.nm--l10
                  p Configura desigualdad y asimetría.
              .row
                .col-auto
                  figure
                    img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
                .col.nm--l10
                  p Atraviesa todos los espacios de socialización.            
                  
		
      .col-auto.mb-4.mb-lg-0
        .flip(data-aos="zoom-in")
          .flip-content.flip--blue
            .flip-front.py-4
              img(src="@/assets/curso/tema2/t2_14.svg", alt="alt").img300.m-auto
              h3.mb-0.text-center.text-white Paradigma capitalista
            .flip-back.flip--blue.p-4.pt-5             
              h4.txt-mint.mb-4 Paradigma capitalista                          
              .row
                .col-auto
                  figure
                    img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
                .col.nm--l10
                  p Quien tiene dinero - tiene poder.
              .row
                .col-auto
                  figure
                    img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
                .col.nm--l10
                  p Mujeres dependientes durante mucho tiempo en la historia.
              .row
                .col-auto
                  figure
                    img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
                .col.nm--l10
                  p Hombre proveedor.
              .row
                .col-auto
                  figure
                    img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
                .col.nm--l10
                  p Creencias frente a la posesión: “eres mía”
              .row
                .col-auto
                  figure
                    img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
                .col.nm--l10
                  p El “otro” se convierte en mi propiedad.
              .row
                .col-auto
                  figure
                    img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
                .col.nm--l10
                  p Derecho a violentar lo que me pertenece.

    .row.justify-content-center
      .col-auto
        figure
          img(src='@/assets/curso/icon_h3.svg', alt='').img20
      .col
        h3.cstm--h3 Mitos frente a la violencia de género

    p La cultura ha invisibilizado las violencias de género, naturalizando muchas conductas, pero también negando la existencia misma de la desigualdad entre hombres y mujeres. Parte de estos mitos o imaginarios tienen que ver con la forma cómo se establecen los procesos de socialización.

    .titulo-sexto.color-acento-contenido
      h5 Fígura 1.
      span  Mitos e imaginarios frente a la violencia de género.

    .row.justify-content-center.mb-5
      .col-lg-8
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/t2_15.svg", alt="alt").m-auto

    p.mb-5 Estas frases tan cotidianas dan cuenta de la naturalización de la violencia de género, son un aspecto sociocultural arraigado. 

    .row.justify-content-center
      .col-auto
        figure
          img(src='@/assets/curso/icon_h3.svg', alt='').img20
      .col
        h3.cstm--h3 Mitos del amor romántico

    p.mb-5 En el marco de la violencia de género y la violencia contra las mujeres, la forma como se construye el amor ha sido compleja, ya que se convierte en una forma de dominar y poner en condición de vulnerabilidad a las mujeres.

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        .bloque-texto-g.btg--start.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/t2_16.svg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p El amor romántico es aquel que se transmite a través de la publicidad, las redes sociales, las películas, los cuentos de princesas, es la manera como la mayoría de personas en el mundo aprenden a amar. 
            p El peligro de esta forma de ver el amor es que por lo general se basa en la indefensión femenina y el poder masculino. El hombre que salva, que rescata, al que se le debe la vida.

    p Los mitos son historias irreales que son trasmitidas de generación en generación y que por ello se asumen como reales y en ocasiones ni siquiera, son puestas en duda, por lo que se asume que son reales. Algunos mitos populares generan la idealización del amor, creando expectativas tan altas que cuando no se cumplen se genera la sensación de malestar emocional, que sumado a la concepción de género, podrían facilitar la violencia de género (García Ruíz, 2015). 

    p.mb-5 A continuación, se presentan algunas características de los mitos del amor romántico:

    AcordionA(tipo="b" clase-tarjeta="crd crd--acordeon").mb-5
      .row(titulo="Media naranja o predestinación")
        .col-md-6.mb-4.mb-md-0
          p Creencia que hemos escogido la pareja que de alguna manera tenemos predestinada.      
        .col-md-6
          figure(data-aos="fade-left")
            img(src='@/assets/curso/tema2/t2_17.jpg', alt='').img600.m-auto

      .row(titulo="Exclusividad")
        .col-md-6.mb-4.mb-md-0
          p El amor tan solo se puede sentir por una persona en un momento determinado.      
        .col-md-6
          figure(data-aos="fade-left")
            img(src='@/assets/curso/tema2/t2_18.jpg', alt='').img600.m-auto

      .row(titulo="Matrimonio o convivencia")
        .col-md-6.mb-4.mb-md-0
          p El amor conduce al matrimonio y es la base de este.      
        .col-md-6
          figure(data-aos="fade-left")
            img(src='@/assets/curso/tema2/t2_19.jpg', alt='').img600.m-auto

      .row(titulo="Omnipotencia")
        .col-md-6.mb-4.mb-md-0
          p El amor lo puede todo, si hay verdadero amor los obstáculos no deben influir sobre la pareja.      
        .col-md-6
          figure(data-aos="fade-left")
            img(src='@/assets/curso/tema2/t2_20.jpg', alt='').img600.m-auto

      .row(titulo="Perdurabilidad o pasión eterna")
        .col-md-6.mb-4.mb-md-0
          p El amor pasional de los primeros meses de relación amorosa debe continuar siempre.    
        .col-md-6
          figure(data-aos="fade-left")
            img(src='@/assets/curso/tema2/t2_21.jpg', alt='').img600.m-auto

      .row(titulo="Fidelidad")
        .col-md-6.mb-4.mb-md-0
          p El amor verdadero siempre es fiel a su pareja.    
        .col-md-6
          figure(data-aos="fade-left")
            img(src='@/assets/curso/tema2/t2_22.jpg', alt='').img600.m-auto

      .row(titulo="Libre albedrío")
        .col-md-6.mb-4.mb-md-0
          p Los sentimientos del amor son libres y no están influenciados por valores sociales, biológicos o culturales, ajenos a nuestra voluntad.    
        .col-md-6
          figure(data-aos="fade-left")
            img(src='@/assets/curso/tema2/t2_23.jpg', alt='').img600.m-auto

      .row(titulo="Equivalencia de amor enamoramiento")
        .col-md-6.mb-4.mb-md-0
          p Si desaparece la pasión es que se ha acabado el amor.  
        .col-md-6
          figure(data-aos="fade-left")
            img(src='@/assets/curso/tema2/t2_24.jpg', alt='').img600.m-auto

      .row(titulo="Emparejamiento")
        .col-md-6.mb-4.mb-md-0
          p La pareja es natural y universal en todas las épocas y culturas.  
        .col-md-6
          figure(data-aos="fade-left")
            img(src='@/assets/curso/tema2/t2_25.jpg', alt='').img600.m-auto

      .row(titulo="Celos")
        .col-md-6.mb-4.mb-md-0
          p Es el indicador del amor verdadero.  
        .col-md-6
          figure(data-aos="fade-left")
            img(src='@/assets/curso/tema2/t2_26.jpg', alt='').img600.m-auto

    p.mb-5 Y para complementar la temática se relaciona el siguiente video:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Myko9ZdrBzM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  
        
    .row.justify-content-center
      .col-auto
        figure
          img(src='@/assets/curso/icon_h3.svg', alt='').img20
      .col
        h3.cstm--h3 Imaginarios

    p.mb-5 Como parte de lo que la cultura genera en el pensamiento de la persona se construye una serie de imaginarios que justifican, niegan y naturalizan las violencias, en la siguiente tabla se relacionan algunos ejemplos.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Imaginarios sobre la violencia de género.

    .tabla-a.table--custom.mb-5 
      table.cstm-table--01        
        thead
          tr
            th(style="font-size:1em;").text-white Se piensa que...
            th(style="font-size:1em;").text-white La realidad es...
        tbody
          tr
            td Cuando una mujer dice #[strong no], quiere decir que #[strong s&iacute;].
            td Cuando una mujer dice #[strong no], es #[strong no], no es quiz&aacute;s, ni de pronto, mucho menos s&iacute;.
          tr
            td La naturaleza masculina es violenta y puede perder el control.
            td La testosterona no hace a un hombre maltratador, las ideas machistas #[strong s&iacute;].
          tr
            td La violencia de g&eacute;nero es una cosa rara, eso no pasa.
            td La violencia de g&eacute;nero, en especial la violencia contra las mujeres es la violaci&oacute;n de derechos humanos m&aacute;s grande en el planeta.
          tr
            td  El maltrato por razones de g&eacute;nero solo se da en estratos bajos y en personas de baja educaci&oacute;n.
            td La violencia de g&eacute;nero al ser un tema cultural afecta a todas las mujeres, independientemente de su estatus, clase social o nivel educativo.
          tr
            td Nadie tiene que meterse en lo que pasa en una pareja, es un asunto privado.
            td La violencia de g&eacute;nero es un delito que debe ser denunciado y castigado.
          tr
            td Los hombres maltratadores tienen una enfermedad mental.
            td Los hombres maltratadores son lo que son por lo que piensan y por la forma en que fueron educados desde la familia, la escuela y la sociedad, no est&aacute;n enfermos.
          tr
            td  A las mujeres les gusta que las maltraten y por eso siguen al lado de esa persona.
            td Ninguna persona disfruta con el maltrato, muchas mujeres se quedan al lado de sus parejas porque no encuentran salidas, se sienten d&eacute;biles, tienen miedo porque han generado dependencias emocionales. Estas son consecuencias derivadas de la misma situaci&oacute;n de violencia y se convierte en un c&iacute;rculo vicioso.
          tr
            td Consumir alcohol es la causa de las conductas violentas.
            td Las conductas violentas son aprendidas y pueden pronunciarse con el alcohol y las drogas, m&aacute;s no son las responsables de c&oacute;mo piensan las personas.
          tr
            td A las mujeres les encanta que las piropeen.
            td Los piropos son conductas machistas que invaden los espacios vitales, intimidan y generan miedo.
          tr
            td Hay que respetar las tradiciones culturales sin importar los efectos: mutilaciones genitales, aborto selectivo, matrimonios forzados.
            td La cultura no puede ir en contra de los derechos y la vida de ning&uacute;n ser humano.

    separador

    #t_2_5.titulo-segundo.color-acento-contenido
      h2 2.5 Concepto de <i>continuum</i>

    p.mb-5 Diferentes investigadores han hablado de este concepto, que se refiere a la violencia que se ha instaurado y naturalizado en la sociedad como una forma de relación, lo que es claro es que esta violencia atraviesa de forma inconsciente todos los procesos de socialización: familia, escuela, sociedad y se transmite la desigualdad desde el momento mismo del nacimiento de un niño y una niña.

    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img.imgbl(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/t2_27.svg')})`}"
      )
      .bloque-texto-g__texto.p-5
        p Este concepto lo que busca es visibilizar esas formas invisibles de violencia para analizarlas a la luz de las relaciones, aportando nuevos elementos para el diálogo, otras formas de relación y de educación, modelos de atención y políticas públicas a nivel mundial.

    separador

    .bgImg--03

      #t_2_6.titulo-segundo.color-acento-contenido
        h2 2.6 Perfil del maltratador y de la víctima

      p.mb-5 Los maltratadores no son personas que se puedan definir de forma clara, existen estereotipos que se convierten en falsos imaginarios y desvirtúan la lógica cultural de la problemática; sin embargo, se han identificado algunas características comunes, de acuerdo con Poggi (2019) son las siguientes:

      .row.justify-content-center
        .col-lg-7
          .row
            .col-auto
              figure
                img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
            .col.nm--l10
              p.mb-0 Se muestran violentos y agresivos en el ambiente familiar, mientras que presentan una gran capacidad de seducción y persuasión en los demás ambientes públicos.
          .linebreak2.my-3
          .row
            .col-auto
              figure
                img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
            .col.nm--l10
              p.mb-0 Un factor de riesgo es que hayan sido testigos de violencia en su familia de origen.
          .linebreak2.my-3
          .row
            .col-auto
              figure
                img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
            .col.nm--l10
              p.mb-0 Reitera estas conductas con otras mujeres con las que mantiene relaciones de pareja. 
          .linebreak2.my-3
          .row
            .col-auto
              figure
                img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
            .col.nm--l10
              p.mb-0 Muchos de ellos muestran un alto grado de dependencia hacia la mujer y un escaso desarrollo de su   autoestima.
          .linebreak2.my-3
          .row
            .col-auto
              figure
                img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
            .col.nm--l10
              p.mb-0 No asumen su violencia, ni la consideran un problema, tienden a justificarla y minimizarla.
          .linebreak2.my-3
          .row
            .col-auto
              figure
                img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
            .col.nm--l10
              p.mb-0 Suelen ser inseguros, celosos, dominantes y agresivos.
          .linebreak2.my-3
          .row
            .col-auto
              figure
                img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
            .col.nm--l10
              p.mb-0 Mantienen claras actitudes sexistas y se creen todos los estereotipos sobre la mujer.
          .linebreak2.my-3
          .row
            .col-auto
              figure
                img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
            .col.nm--l10
              p.mb-0 Son personas de valores tradicionales respecto al género y al papel tradicional que hombres y mujeres deben cumplir.
          .linebreak2.my-3
          .row
            .col-auto
              figure
                img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
            .col.nm--l10
              p.mb-0 No pertenece a ninguna clase social, económica o cultural, ni religión, ni grupo étnico determinado.

        .col-lg-5
          figure(data-aos="fade-left")
            img(src="@/assets/curso/tema2/t2_28.png", alt="alt").img500.m-auto

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.cjn--rosa.p-4.mb-4         
          p.mb-0 Las mujeres maltratadas no encajan en ningún perfil específico “cualquier mujer puede ser víctima de violencia de pareja”. La violencia inicia de una forma tan sutil que las personas no se dan cuenta que están siendo maltratadas, ya que el proceso no inicia con violencia física, por lo general se inicia con el control y el aislamiento, conductas que se justifican “en nombre del amor”. Expresiones como no puedo vivir sin ti, me preocupo, mándame fotos del lugar, te hago videollamada, son algunas de las formas de control más naturalizadas. 

    p Poco a poco lo que busca el victimario es que la mujer se sienta como una princesa débil y sumisa, que necesita de él para poder ser. Poco a poco esto se va haciendo más sistemático y repetitivo y, los gritos, insultos, humillaciones empiezan a aparecer siempre justificados con expresiones como “si ves lo que me haces hacer”, “es tu culpa por no llamarme”, así la víctima se va sintiendo culpable y que merece ser tratada de esa manera.

    separador

    #t_2_7.titulo-segundo.color-acento-contenido
      h2 2.7 Ciclo de la violencia 

    p A continuación, se presentan las fases que componen el ciclo de la violencia, en las que cada fase tiene duraciones distintas y el ciclo vuelve a repetirse de forma sistemática, la relación se va tornando dependiente y si había alguna decisión de salir de la relación o denunciar, por lo general, el maltratador logra manipular a la persona para que no lo haga, retire los cargos o no denuncie. Después de un tiempo de arrepentimiento y perdón la tensión vuelve a presentarse y el ciclo inicia nuevamente.

    p.mb-5 En el siguiente recurso de aprendizaje se presenta cada fase con su descripción: 

    ImagenInfografica.color-secundario.mb-5(data-aos="zoom-in")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema2/t2_29.svg', alt='Normativa internacional')         

      .crd.crd--info.p-3(x="16.2%" y="63%" numero="+")        
        h3 Fase 1 - Acumulación de tensión: 
        p.mb-0 Cambios en el estado de ánimo por cualquier razón aparente, durante esta fase inician los insultos y manifestaciones agresivas. El victimario necesita algo que justifique su estado emocional, por tanto, situaciones como la comida está fría, hay ruido, no encuentro lo que deje en casa, etc., son situaciones que empiezan a generar tensión e irritabilidad, esto puede durar un buen tiempo.

      .crd.crd--info.p-3(x="50%" y="63%" numero="+")        
        h3 Fase 2 - Explosión de la violencia:
        p.mb-0 Ya hay una descarga emocional fuerte, que genera crisis y que puede irse intensificando, las manifestaciones violentas pueden hacerse a través de gritos, golpes en las cosas, amenazas, indiferencia, golpes, empujones. Esta fase termina cuando el maltratador piensa que su víctima ha aprendido la lección.

      .crd.crd--info.p-3(x="84%" y="63%" numero="+")        
        h3 Fase 3 - Luna de miel:
        p.mb-0 En esta fase la tensión disminuye, hay arrepentimiento, perdón, promete no volver a hacer algo así, reconoce que se equivoca y dice que puede necesitar ayuda y poco a poco la relación vuelve a restablecerse. El maltratador siente que de igual forma ya ha castigado lo necesario y que ya conseguirá que la otra persona se comporte como él quiere.




    




    




    
 
      
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
