<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Marco normativo

    .bgImg--01
      p.mb-5 La violencia contra las mujeres y la violencia de género han sido temas en las agendas públicas mundiales durante las últimas décadas, debido a la necesidad imperante de trabajar en pro de la eliminación de todas las formas de violencia contra las mujeres y las niñas. En este sentido se han desarrollado normativas, debates y consensos para procurar el alcance de este objetivo.
     
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-lg-10
          .bloque-texto-a.cstm--color.p-4.p-md-5.mb-5 
            .row.m-0.align-items-center.justify-content-between
              .col-lg-8
                .bloque-texto-a__texto.p-4
                  p En Colombia se han ratificado acuerdos internacionales y se ha desarrollado un marco normativo, así como la estructuración de una política pública compilada en el Conpes 161 de 2013.
              .col-lg-4.mb-4.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1/t1_00.png", alt="alt").img300.m-auto
              

      p Sin embargo, las acciones no tienen que ver solamente con los lineamientos normativos, ya que las causas son multifactoriales y se remontan a condiciones históricas, culturales y sociales que requieren de transformaciones reales en el pensamiento, formas de hacer y sentir frente a las mujeres y niñas en Colombia.

      separador

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Concepto de violencia contra las mujeres 

    p.mb-5 La violencia contra las mujeres es una de las violaciones de derechos humanos más frecuentes y naturalizadas en el mundo, debido a sus raíces culturales y la aceptación de prácticas, normas y estructuras que lo permiten. En el siguiente recurso infográfico se detallan conceptos clave:

    .row.justify-content-center
      .col-lg-10
        ImagenInfografica.color-acento-botones.mb-5(data-aos="zoom-in")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/t1_01.svg', alt='Concepto de violencia contra las mujeres')

          .crd.crd--info.p-3(x="6.5%" y="88%" numero="+")
            .h5.mb-2 Convención de Belém do Pará
            p.mb-0 La Convención Interamericana para Prevenir, Sancionar y Erradicar la Violencia contra la Mujer, conocida como Convención de Belém do Pará (sitio de su adopción en 1994), define la violencia contra las mujeres, establece el derecho de las mujeres a vivir una vida libre de violencia y destaca a la violencia como una violación de los derechos humanos y de las libertades fundamentales.            
          
          .crd.crd--info.p-3(x="18.5%" y="36%" numero="+")
            .h5.mb-2 Clasificación
            p.mb-0 De esta forma la violencia contra las mujeres es una clasificación que permite diferenciar acciones específicas en contra de las mujeres, para su manejo y prevención, debido a las altas cifras y consecuencias sociales que este tipo de violencia genera.
            
          .crd.crd--info.p-3(x="49.2%" y="18%" numero="+")
            .h5.mb-2 La violencia contra las mujeres 
            p.mb-0 Es importante comprender que cuando se habla de violencia de género, esta incluye la violencia contra las mujeres, pero no se agota allí, debido a que la categoría en la perspectiva de género permite realizar un análisis frente a los diversos tipos de violencia que se pueden presentar por razones de género, hacia mujeres, hombres y poblaciones con orientaciones sexuales diversas.
                     
            
          .crd.crd--info.p-3(x="80%" y="36%" numero="+")
            .h5.mb-2 Ley 1257 de 2013
            p.mb-0 La violencia contra las mujeres y las niñas se reconoce en Colombia a partir de la Ley 1257 de 2013 y se define como todo acto de violencia, basado en el género, que tenga o pueda tener como resultado un daño o sufrimiento físico, sexual o mental para la mujer, así como las amenazas de tales actos, la coacción o la privación arbitraria de la libertad, tanto si se producen en la vida pública como en la vida privada.             

          .crd.crd--info.p-3(x="91.5%" y="88%" numero="+")
            .h5.mb-2 Manifestaciones en privado o en público
            p La violencia contra las mujeres se ejerce en el ámbito privado y público,  y esta puede ser llevada a cabo por cualquier persona.Estas manifestaciones pueden estar en el marco de la violencia física, el abuso sexual en todas sus formas, el secuestro, la trata de personas. 

            p.mb-0 Dentro de los escenarios públicos, esta violencia atraviesa la vida y la cotidianidad de las mujeres: los colegios, lugares de trabajo, la calle, la familia.

    separador

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Formas de violencia contra las mujeres

    p.mb-5 La violencia contra las mujeres representa un delito, que normativamente está sancionado y se puede manifestar de diferentes formas. La ley 1257 de 2013 clasifica las siguientes formas de violencia:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Violencia física" :icono="require('@/assets/curso/tema1/t1_06.svg')")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Violencia física: 
            p Se evidencia a través de toda señal de daño físico como golpes, quemaduras con fuego, ácido u otras sustancias, heridas o ataques con arma blanca o arma de fuego.        
          .col-md-6
            figure(data-aos="fade-left")
              img(src='@/assets/curso/tema1/t1_02.jpg', alt='')

      .py-4.py-md-5(titulo="Violencia psicológica" :icono="require('@/assets/curso/tema1/t1_07.svg')")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Violencia psicológica: 
            p Se refiere al daño infringido a través de la palabra, el desprecio, la indiferencia, las humillaciones, el miedo y el engaño. En el marco de esta violencia se presentan todas las formas de control y aislamiento.       
          .col-md-6
            figure
              img(src='@/assets/curso/tema1/t1_03.jpg', alt='')

      .py-4.py-md-5(titulo="Violencia sexual" :icono="require('@/assets/curso/tema1/t1_08.svg')")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Violencia sexual:  
            p Se refiere a todo acto o acercamiento sexual no consensuado, que hace daño y vulnera los derechos sexuales de las mujeres. Hacen parte de esta forma de violencia los tocamientos, acoso, relaciones sexuales forzadas.        
          .col-md-6
            figure(data-aos="fade-left")
              img(src='@/assets/curso/tema1/t1_04.jpg', alt='')

      .py-4.py-md-5(titulo="Violencia económica" :icono="require('@/assets/curso/tema1/t1_09.svg')")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Violencia económica:  
            p Es una de las formas de violencia más naturalizadas y difíciles de evidenciar; hace referencia a los controles, obstáculos y limitaciones que se imponen a las mujeres para hacer uso y manejo del dinero, la toma de decisiones sobre el uso y manejo de propiedades, destrucción de los equipos o instrumentos para trabajar, falsificación y manipulación de documentos para hacer aprovechamiento de los recursos económicos.       
          .col-md-6
            figure(data-aos="fade-left")
              img(src='@/assets/curso/tema1/t1_05.jpg', alt='')

    .bgGrad--01
      p.pt-5.mb-5 Por otro lado, la OMS realiza una clasificación que incluye las formas de violencia que se describen a continuación:

      .row.justify-content-center
        .col-auto
          figure
            img(src='@/assets/curso/icon_h3.svg', alt='').img20
        .col
          h3.cstm--h3 Violencia de pareja

      .row.justify-content-center.mb-5
        .col-lg-7
          p Es la manifestación de la violencia contra las mujeres más común, se encuentra enmarcada dentro de la violencia intrafamiliar y se refiere al daño que infringe la pareja hombre en contra de las mujeres. Esta violencia incluye en sí misma todas las formas de violencia que se pueden presentar de forma simultánea en una misma persona. Una mujer durante la convivencia con su pareja puede sufrir violencia psicológica, física, puede sufrir diversas formas de violencia invisible como el aislamiento, el control, puede ser abusada sexualmente y tener diferentes manifestaciones de violencia económica, tales como no tener la posibilidad de decidir sobre los recursos familiares, no poder manejar dinero, ser considerada inútil por no tener un trabajo.

          p.mb-0 Frente a lo anterior, es claro que se trata de un tema en el que la asimetría relacional genera condiciones para ejercer violencia en la intimidad de una relación; sin embargo, los factores sociales que inciden en este tipo de violencia tienen un peso enorme, ya que se basan en los paradigmas de la dominación patriarcal, que fomenta las conductas denominadas “machistas” y hacen que la prevalencia de la violencia de pareja sea más alta.

        .col-lg-5
          figure(data-aos="fade-left")
              img(src='@/assets/curso/tema1/t1_10.svg', alt='')

      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-lg-10
          .bloque-texto-g.btg--start.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema1/t1_11.svg')})`}"
            )
            .bloque-texto-g__texto.p-5
              p Uno de los hechos que vale la pena resaltar dentro de esta forma de violencia hace referencia al tiempo de exposición de la víctima, ya que por lo general una persona llega al momento de la denuncia por violencia física, después de haber vivido una condición sistemática de maltrato psicológico, emocional, incluso económica, por años de convivencia. 

      p Este hecho ha sido estudiado; sin embargo, existen diversos factores han permiten que la víctima decida permanecer en la relación, entre ellos el miedo, la dependencia, la autoestima que se ha deteriorado como parte de las condiciones de agresión y maltrato, configurándose un círculo para muchas mujeres sin salida, que incluso llega a poner en riesgo la vida.

    .bgGrad--02.mb-5
      .row.justify-content-center.pt-5
          .col-auto
            figure
              img(src='@/assets/curso/icon_h3.svg', alt='').img20
          .col
            h3.cstm--h3 Abuso sexual

      p Hace parte de la forma de violencia sexual contra las mujeres y niñas que se entiende como el aprovechamiento por parte del agresor de circunstancias que lo ponen en ventaja frente a la víctima, por lo general el abuso es cometido por personas que tienen una relación de poder claramente diferenciada con la víctima: jefes, sacerdotes, maestros, padres, pareja.

      p.mb-5 En el siguiente recurso interactivo se muestran diferentes maneras sobre cómo se presenta el abuso sexual:

      .row.justify-content-center
        .col-lg-6.mb-4(data-aos="zoom-in")
          .crd.crd--purple.crd--round
            .row
              .col-auto
                .avatar_01
              .col
                .crd--body.p-4
                  h3 El acoso sexual
                  p.mb-0 En donde la condición de “superioridad” por dinero, sexo, poder, edad es utilizada para perseguir, hostigar, amenazar de forma física o verbal a la mujer, con fines exclusivamente sexuales.   

        .col-lg-6.mb-4(data-aos="zoom-in")
          .crd.crd--pink.crd--round
            .row              
              .col
                .crd--body.p-4
                  h3 Explotación sexual
                  p.mb-0 En donde existe, por parte del victimario, el ofrecimiento de una transacción comercial por servicios sexuales. Esta condición puede darse de forma directa o a través de terceros.
              .col-auto
                .avatar_02

        .col-lg-6.mb-4(data-aos="zoom-in")
          .crd.crd--green.crd--round
            .row.hgt-100
              .col-auto
                .avatar_03
              .col
                .crd--body.p-4
                  h3 Trata de personas con fines de explotación sexual
                  p.mb-0 En donde el victimario capta a la víctima, con el fin de llevarla a un lugar distinto para ser vendida o explotada sexualmente. 

        .col-lg-6.mb-4(data-aos="zoom-in")
          .crd.crd--blue.crd--round
            .row              
              .col
                .crd--body.p-4
                  h3 Violencia sexual en el contexto del conflicto armado
                  p.mb-0 Puede manifestarse de las siguientes formas: acceso carnal violento en persona protegida, en la que el agresor quien pertenece al conflicto armado comete acceso carnal violento cuando la víctima es integrante de la población civil o no participa en el conflicto, está herida, enferma o puesta fuera del combate. Actos sexuales violentos con persona protegida, en la misma población descrita anteriormente el agresor realiza actos sexuales diferentes al acceso carnal.
              .col-auto
                .avatar_04

    .linebreak--100

    .bgImg--01.mb-3
      .row.justify-content-center
        .col-lg-10

          .row.justify-content-center
            .col-lg        
              .row.justify-content-center
                .col-auto
                  figure
                    img(src='@/assets/curso/icon_h3.svg', alt='').img20
                .col
                  h3.cstm--h3 Aborto forzado
              p.mb-5.mb-lg-0 Es una manifestación de violencia en el que una mujer es obligada a tener un aborto en contra de su voluntad, confinamiento ilícito de una mujer a la que se ha dejado embarazada y se le obliga por la fuerza y contra su voluntad a abortar, pero también puede ser el caso contrario y es negar la posibilidad del aborto cuando la víctima ha tenido un abuso sexual.
            .col-lg-4
              figure(data-aos="fade-left")
                img(src="@/assets/curso/tema1/t1_16.svg", alt="alt").img300.m-auto

          .linebreak  

          .row.justify-content-center
            .col-lg        
              .row.justify-content-center
                .col-auto
                  figure
                    img(src='@/assets/curso/icon_h3.svg', alt='').img20
                .col
                  h3.cstm--h3 Negación de la anticoncepción
              p.mb-5.mb-lg-0 Mujeres a las cuales se les niega su posibilidad de usar métodos anticonceptivos para tener relaciones sexuales, por razones ideológicas o religiosas.
            .col-lg-4
              figure(data-aos="fade-left")
                img(src="@/assets/curso/tema1/t1_17.svg", alt="alt").img300.m-auto

          .linebreak  

          .row.justify-content-center
            .col-lg          
              .row.justify-content-center
                .col-auto
                  figure
                    img(src='@/assets/curso/icon_h3.svg', alt='').img20
                .col
                  h3.cstm--h3 Negación del derecho a la protección contra ETS o VIH
              p.mb-5.mb-lg-0 Mujeres que por influencia de su pareja tienen relaciones sexuales sin protección de enfermedades de transmisión sexual, ya sea por el uso de condón femenino o masculino.
            .col-lg-4
              figure(data-aos="fade-left")
                img(src="@/assets/curso/tema1/t1_18.svg", alt="alt").img300.m-auto

          .linebreak  

          .row.justify-content-center
            .col-lg           
              .row.justify-content-center
                .col-auto
                  figure
                    img(src='@/assets/curso/icon_h3.svg', alt='').img20
                .col
                  h3.cstm--h3 Matrimonio forzado
              p.mb-5.mb-lg-0 Esta práctica es muy común en culturas en las que los matrimonios son arreglados y negociados, incluso desde el nacimiento de la mujer, también en este escenario el caso es de intercambio de la mujer por dinero o propiedades para ser entregada en matrimonio a un hombre por lo general mayor o  matrimonio entre menores de edad.
            .col-lg-4
              figure(data-aos="fade-left")
                img(src="@/assets/curso/tema1/t1_19.svg", alt="alt").img300.m-auto

          .linebreak  

          .row.justify-content-center.mb-4
            .col-lg           
              .row.justify-content-center
                .col-auto
                  figure
                    img(src='@/assets/curso/icon_h3.svg', alt='').img20
                .col
                  h3.cstm--h3 Feminicidio
              p.mb-5.mb-lg-0 Esta manifestación de violencia se refiere al asesinato de mujeres o niñas por el hecho de ser mujeres.
            .col-lg-4
              figure(data-aos="fade-left")
                img(src="@/assets/curso/tema1/t1_20.svg", alt="alt").img300.m-auto

    .linebreak--100

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/t1_21.svg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p En Colombia mediante la Ley 1761 de 2015, la Ley Rosa Elvira Cely se han ratificado las convenciones internacionales para erradicar la violencia por razones de género, mediante esta ley se tipifica el feminicidio como delito autónomo. 

    
    p Entender el feminicidio solo es posible desde las razones de género, es decir, que no todas las muertes violentas de las mujeres se configuran como un delito de género.  En Colombia se introduce el concepto de feminicidio como consecuencia del asesinato de Rosa Elvira Cely en el parque Nacional de Bogotá.  

    p Las víctimas de un feminicidio por lo general han sido víctimas de formas de violencia sistemática que se ha venido presentando al interior de la relación, y han sufrido un ciclo de violencia física, biológica, sexual o patrimonial. 

    p.mb-5 En el siguiente recurso de aprendizaje se presentan los tipos de feminicidio definidos en la Ley 1761 de 2015: 

    .crd.crd--slyder
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
              .col.nm--l10
                p #[strong Feminicidio no íntimo:] asesinato de una mujer por el hecho de ser mujer, causado por un desconocido o vecino con quien la víctima no tiene ninguna relación.
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
              .col.nm--l10
                p #[strong Feminicidio no íntimo infantil:] asesinato de una niña hasta los 14 años por el hecho de ser mujer, causado por un desconocido o vecino con quien la víctima no tiene ninguna relación.        
          .col-md-6
            figure
              img(src='@/assets/curso/tema1/t1_22.svg', alt='').img500.m-auto

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
              .col.nm--l10
                p #[strong Feminicidio por conexión:] se asesina a una mujer por su condición de mujer por encontrarse en la línea de fuego de otra.
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
              .col.nm--l10
                p #[strong Feminicidio por trata, prostitución o tráfico:] una mujer es asesinada por su condición de mujer como consecuencia de otros tipos de violencia, asociados por lo general a la violencia sexual.    
          .col-md-6
            figure
              img(src='@/assets/curso/tema1/t1_23.svg', alt='').img500.m-auto

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
              .col.nm--l10
                p #[strong Feminicidio racista:] se asesina a una mujer por su condición étnica.
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
              .col.nm--l10
                p #[strong Feminicidio transfóbico:] consiste en el asesinato de una mujer transgénero por su condición.  
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
              .col.nm--l10
                p #[strong Feminicidio lesbofóbico:] consiste en el asesinato de una mujer lesbiana por su condición.  
          .col-md-6
            figure
              img(src='@/assets/curso/tema1/t1_24.svg', alt='').img500.m-auto

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
              .col.nm--l10
                p #[strong Feminicidio por mutilación genital femenina:] una mujer muere como consecuencia de esta práctica.

            .row
              .col-auto
                figure
                  img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
              .col.nm--l10
                p #[strong Feminicidio como crimen internacional:] se puede presentar como genocidio, como crimen de lesa humanidad o como crimen de guerra.             
          .col-md-6
            figure
              img(src='@/assets/curso/tema1/t1_25.svg', alt='').img500.m-auto

    p.mb-5 Otras formas de violencia que se hacen menos visibles y que se han contemplado en el marco de la violación de los derechos sexuales y reproductivos son:

    .row.justify-content-center.pb-5
      .col-auto.mb-4.mb-lg-0
        .flip(data-aos="zoom-in")
          .flip-content.flip--coral
            .flip-front.py-4
              img(src="@/assets/curso/tema1/flip_01.svg", alt="alt").img270.m-auto
              h3.mb-0.text-center.text-white Violencia obstétrica
            .flip-back.flip--coral.p-4.pt-5              
              h4.text-center.txt-mint.pt-3 Violencia obstétrica
              p.mb-0 Esta manifestación de la violencia contra las mujeres combina la violencia de género con una mala práctica médica. La OMS establece que todas las mujeres tienen derecho a recibir el más alto nivel de cuidados en su salud, que incluye el derecho a una atención digna y respetuosa del embarazo, del parto, su puerperio, y el derecho a no sufrir violencia, ni discriminación.

      .col-auto.mb-4.mb-lg-0
        .flip(data-aos="zoom-in")
          .flip-content.flip--rosa
            .flip-front.py-4
              img(src="@/assets/curso/tema1/flip_02.svg", alt="alt").img270.m-auto
              h3.mb-0.text-center.text-white Violencia menstrual
            .flip-back.flip--rosa.p-4.pt-5              
              h4.text-center.txt-mint.pt-3 Violencia menstrual
              p.mb-0 Por las condiciones de pobreza y vulnerabilidad de muchas mujeres generan barreras para lograr adquirir los recursos y suministros para el cuidado de la higiene menstrual. La dificultad para obtener artículos para el manejo menstrual puede hacer que las niñas y adolescentes dejen de asistir al colegio o que les impida a las mujeres salir a trabajar, lo que representa una forma de violencia y una vulneración de derechos para las mujeres y niñas.

    separador

    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Situaciones, condiciones y ámbitos

    .row.justify-content-center.mb-5
      .col-lg-7.order-2.order-lg-1
        p La violencia contra las mujeres es una violencia basada en las desigualdades de género, las cuales se explican más adelante; sin embargo, estas violencias son principalmente vividas en los escenarios privados, cuyo referente por excelencia es la familia.
      .col-lg-5.order-1.order-lg-2.mb-5.mb-lg-0
        figure(data-aos="fade-left")
          img(src="@/assets/curso/tema1/t1_26.svg", alt="alt").img400.m-auto

   
    .bloque-texto-g.btg--start.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/t1_27.svg')})`}"
      )
      .bloque-texto-g__texto.p-5
        p Estas violencias tienen una característica fundamental y es que son cíclicas y sistemáticas, es decir, que se viven una serie de comportamientos maltratantes que recorren casi todas las formas de violencia y esto se repite en el tiempo. Cabe resaltar que al ser esta violencia de carácter social no está vinculada a la falta de educación o pobreza, ya que se presenta sin distinciones de edad, etnia, ideología o clase social.

    p.mb-5 De acuerdo con el informe defensorial sobre violencias basadas en género y discriminación, este tipo de violencia se desarrolla en cuatro ámbitos fundamentalmente:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--rosa")
      .row(titulo="Sociocultural (público - privado)").justify-content-center.ms-5
        .col-auto.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/t1_28.svg', alt='').img190.m-auto

        .col-sm
          p En este ámbito se perpetúan de forma inconsciente las manifestaciones y estructuras de poder en las cuales se basa la violencia de género. Es justamente en los procesos de socialización de la familia, la escuela, el trabajo y la sociedad en donde se viven las cotidianidades de la violencia de género y la discriminación. Basta con poner atención a los chistes, los dichos populares, los comentarios que naturalizan roles, expresiones de ofensa como “pareces una niña” como si eso fuera un tema de vergüenza, es solo un ejemplo de cómo se vive y se transmite, de igual manera, aquí es donde aún se siguen perpetuando los roles tradicionales en los que la mujer ocupa escenarios más significativos en lo doméstico y en la crianza de los hijos.
          p De igual forma, las personas con orientaciones de género diversas se ven enfrentadas a una serie de barreras de acceso, desprotección laboral y educativa. De este ámbito hacen parte la escuela, las organizaciones del trabajo, las instituciones del Estado y de salud, todas ellas como parte de momentos y situaciones en donde las mujeres son víctimas de diversas formas de discriminación y violencia, basadas en desigualdades de género, ya que constituyen espacio de convivencia, socialización, integración y crecimiento personal y laboral.

      .row(titulo="Familiar (privado)").justify-content-center.ms-5
        .col-auto.mb-4.mb-lg-0
          figure(data-aos="fade-right")
            img(src='@/assets/curso/tema1/t1_29.svg', alt='').img190.m-auto

        .col-sm
          p La violencia por razones de género al interior de la familia se enfoca principalmente en las mujeres y niñas, siendo estas víctimas de diversas formas de maltrato: psicológico, físico, sexual, patrimonial. 

          p En el ámbito familiar, además se realizan las primeras formas de socialización, en donde la crianza de niños y niñas se hace distinta en función de los roles, la fuerza y las libertades. 

          p En Colombia la violencia intrafamiliar se ha convertido en uno de los escenarios de mayor prevalencia. Dentro de las condiciones que se convierten en factor de riesgo se encuentra la dependencia económica, las condiciones sociales, la baja autoestima y la naturalización de roles tradicionales.

      .row(titulo="Conflicto armado (público)").justify-content-center.ms-5
        .col-auto.mb-4.mb-lg-0
          figure(data-aos="fade-right")
            img(src='@/assets/curso/tema1/t1_30.svg', alt='').img190.m-auto

        .col-sm
          p Colombia es un país que ha estado históricamente marcado por el conflicto armado, condición que impacta diversos sectores y poblaciones que se encuentran vinculados directamente con la guerra y la sociedad civil que se ha visto afectada por los actos de violencia y terrorismo. Se ha identificado que el conflicto impacta de forma agresiva el cuerpo femenino, pero también todas las manifestaciones diferenciales de las poblaciones LGBTI; es un hecho probado que ha sido documentado y analizado por distintas entidades gubernamentales, órganos judiciales, organizaciones de la sociedad civil, así́ como por organismos internacionales.

          p La Corte Constitucional constató en el auto 092 de 2008 que “la violencia sexual es una práctica habitual, extendida, sistemática e invisible en el contexto del conflicto armado colombiano, así́ como lo son la explotación y el abuso sexual”. Estas condiciones de violencia contra las mujeres desencadenan situaciones como el desplazamiento forzado, cargas psicológicas y emocionales de alto impacto. 

      .row(titulo="Defensa de los derechos humanos (público)").justify-content-center.ms-5
        .col-auto.mb-4.mb-lg-0
          figure(data-aos="fade-right")
            img(src='@/assets/curso/tema1/t1_31.svg', alt='').img190.m-auto

        .col-sm
          p La lucha por los derechos de las mujeres ha sido abanderada por mujeres líderes de diferentes sectores, sin embargo, se ha evidenciado que las amenazas y agresiones frente a estos grupos incrementa como consecuencia del activismo.

          p La Defensoría del Pueblo, a través del Sistema de Alertas Tempranas (SAT), evidencia que entre el 1 de enero de 2016 y el 31 de diciembre de 2018 fueron asesinados 431 líderes sociales y personas defensoras de los derechos humanos. 

          p Adicionalmente se ha creado un estigma histórico con las mujeres que trabajan en la defensa de los derechos de otras mujeres: expresiones como feminazis, por ejemplo, es una clara manifestación de rechazo y discriminación.

    separador

    .bgImg--01
      #t_1_4.titulo-segundo.color-acento-contenido
        h2 1.4 Normativa nacional e internacional
      .row.justify-content-center
        .col-lg-8
          p Para realizar un acercamiento a la normatividad internacional y nacional que afecta las condiciones de las mujeres en la sociedad frente a la violencia de género se ha realizado una compilación que se presenta a continuación.

          p Cabe resaltar que Colombia ha ratificado a través de la normatividad interna los tratados internacionales en materia de derechos y protección de las mujeres, de igual manera, en materia legislativa ha tenido grandes avances en las últimas décadas a reconocer la violencia contra las mujeres  como un fenómeno social específico que debe ser atendido de manera diferencial y con el reconocimiento del feminicidio como un crimen contra las mujeres, que se desencadena en el marco de la condición de género.

          p A continuación, se hace un compendio de algunas normas que han logrado cambiar la vida de las mujeres y que representan avances significativos en materia de protección y prevención de la violencia de género. Cabe resaltar que existe una amplia normatividad internacional y nacional; sin embargo, se hace alusión solo a las que se consideran más representativas, sin descartar la importancia e impacto de otras normas vigentes.

        .col-lg-4.mb-5
          figure(data-aos="fade-left")
            img(src="@/assets/curso/tema1/t1_32.svg", alt="alt").img400.m-auto

    .row.justify-content-center.my-5
      .col-lg-8(data-aos="zoom-in")
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/t1_33.png', alt='Normativa internacional')         

          .crd.crd--info.p-3(x="57%" y="33%" numero="+")
            .row.justify-content-center 
              .col-auto
                figure
                  img(src="@/assets/curso/tema1/t1_34.png", alt="alt").img90.m-auto
              .col
                h5.mb-2 2000 - Protocolo para prevenir, reprimir y sancionar la Trata de personas especialmente mujeres y niños. ONU.
                p.mb-0 Ratificada en Colombia por la Ley 800 de 2000. Establece acciones a seguir frente a la explotación, prostitución ajena u otras formas de explotación sexual, los trabajos o servicios forzados, la esclavitud o las prácticas análogas a la esclavitud, la servidumbre o la extracción de órganos.

          .crd.crd--info.p-3(x="66%" y="43%" numero="+")
            .row.justify-content-center 
              .col-auto
                figure
                  img(src="@/assets/curso/tema1/t1_35.png", alt="alt").img90.m-auto
              .col
                h5.mb-2 1999 - Protocolo facultativo de la Convención sobre la eliminación de todas las formas de discriminación contra la mujer.
                p.mb-0 Adoptada por la Asamblea General en su resolución, recordando, así mismo, la Convención sobre la eliminación de todas las formas de discriminación contra la mujer (“la Convención”), en la que los Estados parte en ella condenan la discriminación contra la mujer en todas sus formas y convienen en seguir, por todos los medios apropiados y sin dilaciones, una política encaminada a eliminar la discriminación contra la mujer.

          .crd.crd--info.p-3(x="67%" y="57%" numero="+")
            .row.justify-content-center 
              .col-auto
                figure
                  img(src="@/assets/curso/tema1/t1_36.png", alt="alt").img90.m-auto
              .col
                h5.mb-2 1998 - Estatuto de Roma de la Corte Penal Internacional Naciones Unidas.
                p.mb-0 Ratificada en Colombia por la Ley 742 del 2002. Establece direccionamientos frente a los crímenes de lesa humanidad. 

          .crd.crd--info.p-3(x="57%" y="67%" numero="+")
            .row.justify-content-center 
              .col-auto
                figure
                  img(src="@/assets/curso/tema1/t1_37.png", alt="alt").img90.m-auto
              .col
                h5.mb-2 1994 - Convención Interamericana para prevenir, sancionar y erradicar la violencia contra la Mujer. (Convención de Belém do Pará). OEA.
                p.mb-0 Celebrada en Belém do Pará, Brasil, ratificada en Colombia por la Ley 248 de 1995. Se reconoce el ejercicio pleno y libre de los derechos civiles, políticos, económicos, sociales y culturales de las mujeres y la protección a esos derechos consagrados en los instrumentos regionales e internacionales sobre derechos humanos. Los Estados parte reconocen que la violencia contra la mujer impide y anula el ejercicio de esos derechos.

          .crd.crd--info(x="43%" y="67%" numero="+")
            .row.justify-content-center
              .col-auto
                figure
                  img(src="@/assets/curso/tema1/t1_38.png", alt="alt").img90.m-auto
              .col
                h5.mb-2 1993 - Declaración sobre la Eliminación de la Violencia contra la Mujer. ONU.
                p.mb-0 Adoptada por la Asamblea General de Naciones Unidas, su importancia fundamental radica en que por primera vez en un instrumento internacional se reconoce “que la violencia contra la mujer constituye una violación de los derechos humanos y las libertades fundamentales” y se hace una firme condena a todas las formas de violencia física, sexual y psicológica.

          .crd.crd--info.p-3(x="33%" y="57%" numero="+")
            .row.justify-content-center 
              .col-auto
                figure
                  img(src="@/assets/curso/tema1/t1_39.png", alt="alt").img90.m-auto
              .col
                h5.mb-2 1993 - Conferencia Mundial sobre Derechos Humanos. ONU.
                p.mb-0 Celebrada en Viena. Reafirmó expresa y públicamente el reconocimiento de los derechos de las mujeres como Derechos Humanos. La Declaración y Programa de Acción de Viena reafirma el derecho de las mujeres a tener acceso a la más amplia gama de servicios de planificación familiar. 

          .crd.crd--info.p-3(x="33%" y="43%" numero="+")
            .row.justify-content-center 
              .col-auto
                figure
                  img(src="@/assets/curso/tema1/t1_40.png", alt="alt").img90.m-auto
              .col
                h5.mb-2 1979 - Convención Internacional Sobre la eliminación de todas las formas de discriminación contra la Mujer. ONU.
                p.mb-0 Ratificada por la Ley 51 de 1981, basada en la igualdad del hombre y la mujer, a partir de los derechos humanos y las libertades fundamentales en las esferas política, económica, social, cultural y civil o en cualquier otra esfera. 

          .crd.crd--info.p-3(x="43%" y="33%" numero="+")
            .row.justify-content-center 
              .col-auto
                figure
                  img(src="@/assets/curso/tema1/t1_41.png", alt="alt").img90.m-auto
              .col
                h5.mb-2 1975 - Primera Conferencia Internacional sobre la Mujer
                p Celebrada en México. El año 1975 fue declarado por Naciones Unidas como el año Internacional de la Mujer. Los objetivos de esta conferencia fueron:
                p 1) La igualdad plena de género y la eliminación de la discriminación por motivos de género.
                p 2) La integración y plena participación de la mujer en el desarrollo.
                p.mb-0 3) Una contribución cada vez mayor de la mujer al fortalecimiento de la paz mundial.

    .bgGrad--03
      h3.text-center.pt-5.mb-5 Normatividad nacional relacionada con las mujeres y sus derechos:
      .row.justify-content-center.py-5
        .col-lg-6
          LineaTiempoD.color-primario
            p(numero="1" titulo="1990 - Decreto 1398. Presidencia de la República") Por el cual se desarrolla la Ley 51 de 1981, que aprueba la Convención sobre Eliminación de todas las formas de discriminación contra la mujer, adoptada por las Naciones Unidas.

            p(numero="2" titulo="1995 - Ley 248. Congreso de Colombia") Con esta ley se convierte en legislación nacional la Convención Belem do Pará (contra la violencia hacia las mujeres) y se afirma el deber de “fomentar y apoyar programas de educación gubernamentales y del sector privado destinados a concienciar al público sobre los problemas relacionados con la violencia contra la mujer, los recursos legales y la reparación que corresponda” (art. 8).

            p(numero="3" titulo="2003 - Ley 823. Congreso de Colombia") “Por la cual se dictan normas sobre igualdad de oportunidades para las mujeres”. Promover y garantizar a las mujeres el ejercicio pleno de sus derechos políticos, civiles, económicos, sociales y culturales y el desarrollo de su personalidad, aptitudes y capacidades, que les permitan participar activamente en todos los campos de la vida nacional y el progreso de la Nación.

            p(numero="4" titulo="2005 - Ley 984. Congreso de Colombia") Por medio de la cual se aprueba el “Protocolo facultativo de la Convención sobre la eliminación de todas las formas de discriminación contra la mujer”, adoptado por la Asamblea General de las Naciones Unidas”.

            p(numero="5" titulo="2008 - Ley 1257") Adopción de normas que permitan garantizar para todas las mujeres una vida libre de violencia, tanto en el ámbito público como en el privado, el ejercicio de los derechos reconocidos en el ordenamiento jurídico interno e internacional, el acceso a los procedimientos administrativos y judiciales para su protección y atención, y la adopción de las políticas públicas necesarias para su realización.          

        .col-lg-6 
          figure(data-aos="fade-left")
            img(src="@/assets/curso/tema1/t1_42.svg", alt="alt").img600.m-auto
      
      .row.justify-content-center
        .col-lg-6.mb-5.mb-lg-0
          figure(data-aos="fade-right")
            img(src="@/assets/curso/tema1/t1_43.svg", alt="alt").img600.m-auto
        .col-lg-6
          LineaTiempoD.color-primario
            p(numero="6" titulo="2013 - Ley 1616") Ley de salud mental, para garantizar el ejercicio pleno de la salud mental a la población colombiana, priorizando los niños, niñas y adolescentes, mediante la promoción de la salud y la prevención del trastorno mental.

            p(numero="7" titulo="2013 - Ley 1930") Por el cual se adopta la Política Pública Nacional de Equidad de Género y se crea una Comisión Intersectorial para su implementación.

            p(numero="8" titulo="2013 - Ley 1639") Por medio de la cual se fortalecen las medidas de protección a la integridad de las víctimas de crímenes con ácido y se adiciona el artículo 113 de la Ley 599 de 2000.

            p(numero="9" titulo="2015 - Ley 1761") Tipificó el feminicidio como delito autónomo. Así, quien cause muerte o intente asesinar a una mujer por su condición de mujer o por motivos de su identidad de género, ya no solo será juzgado como homicida sino como quien perpetúa la peor forma y manifestación de las violencias de género.

    separador

    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5 Prevención y sanción

    .row.justify-content-center.mb-5
      .col-lg-6
        p La violencia de género y la violencia contra las mujeres se ha considerado una violación de los derechos humanos y así debe ser tratada para lograr sensibilizar y transformar estructuralmente a la sociedad.

        p En el marco de la Ley 1257 se establecen lineamientos para el establecimiento de medidas de sensibilización y prevención mencionadas en el Artículo 9°, acciones que están encaminadas a la formulación de planes, programas nacionales e integrales para la prevención y erradicación de todas las formas de violencia contra la mujer.

        p Respecto a las medidas de sensibilización y prevención todas las autoridades encargadas de formular e implementar políticas públicas deberán reconocer las diferencias y desigualdades sociales, biológicas en las relaciones entre las personas según el sexo, la edad, la etnia y el rol que desempeñan en la familia y en el grupo social, para esto el Gobierno Nacional indica las siguientes acciones: 

      .col-lg-6 
        figure(data-aos="fade-left")
          img(src="@/assets/curso/tema1/t1_44.svg", alt="alt").img600.m-auto

    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n").mb-4
          .row
            .col-12
              p Formulará, aplicará, actualizará estrategias, planes y programas nacionales integrales para la prevención y la erradicación de todas las formas de violencia contra la mujer.
          .row
            .col-12
              p Ejecutará programas de formación para los servidores públicos que garanticen la adecuada prevención, protección y atención a las mujeres víctimas de la violencia, con especial énfasis en los operadores/as de justicia, el personal de salud y las autoridades de policía.
          .row
            .col-12
              p Implementará en los ámbitos mencionados las recomendaciones de los organismos internacionales, en materia de Derechos Humanos de las mujeres.
          .row
            .col-12
              p Desarrollará planes de prevención, detección y atención de situaciones de acoso, agresión sexual o cualquier otra forma de violencia contra las mujeres. 
          .row
            .col-12
              p Implementará medidas para fomentar la sanción social y la denuncia de las prácticas discriminatorias y la violencia contra las mujeres. 
          .row
            .col-12
              p Fortalecerá la presencia de las instituciones encargadas de prevención, protección y atención de mujeres víctimas de violencia en las zonas geográficas en las que su vida e integridad corren especial peligro en virtud de situaciones de conflicto por acciones violentas de actores armados. 
          .row
            .col-12
              p Desarrollará programas de prevención, protección y atención para las mujeres en situación de desplazamiento frente a los actos de violencia.

        p De igual forma, en este escenario el Estado asume obligaciones en relación con los derechos de las mujeres a través de la legislación. Estas obligaciones están en el marco de:

        .row.justify-content-center.mb-4
          .col-lg-4
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
              .col.nm--l10
                p.mb-0 La sensibilización y prevención.
            .linebreak2  
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
              .col.nm--l10
                p.mb-0 La protección.
            .linebreak2  
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
              .col.nm--l10
                p.mb-0 La atención.
            .linebreak2  
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/icon_h3.svg", alt="alt").img10.m-auto
              .col.nm--l10
                p.mb-0 Las sanciones para los agresores.

          .col-lg-8
            figure(data-aos="fade-left")
              img(src="@/assets/curso/tema1/t1_45.svg", alt="alt").img600.m-auto

    separador

    #t_1_6.titulo-segundo.color-acento-contenido
      h2 1.6 Perspectiva de derechos

    p.mb-5 A través de este enfoque se busca reconocer y garantizar el reconocimiento, garantía y restablecimiento de los derechos de las mujeres para poder avanzar hacia el objetivo de la igualdad y de la eliminación de cualquier tipo de violencia contra las mujeres. Reconocer los derechos de las mujeres inicia desde las mismas mujeres y se extiende a la sociedad en general; no se trata de pensar en los derechos de las mujeres como derechos distintos a los derechos humanos; sin embargo, la desigualdad de género lleva a buscar herramientas de análisis más detalladas que permitan leer las realidades desde perspectivas distintas.

    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/t1_46.svg')})`}"
      )
      .bloque-texto-g__texto.p-5
        p En este sentido es importante hablar también de la perspectiva o enfoque de género, que busca reconocer, visibilizar y transformar las desigualdades que impiden el ejercicio de los derechos de las mujeres por diversas razones: raza, etnia, cultura, condiciones socioeconómicas, ideología, religión, género, orientación sexual. Este enfoque se constituye en una herramienta de análisis estratégico que apunta a la búsqueda del objetivo de igualdad y no discriminación.

    




         
            
        





             






    

  
  
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
