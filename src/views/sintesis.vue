<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .bgImg--01
      p.mb-5 La violencia de género es un fenómeno estructural de carácter social, se ha instaurado a lo largo de la historia, esta violencia se basa en una desigualdad en las relaciones de poder que se establecen en una sociedad, cuando se habla de este tipo de violencia no se hace referencia solamente a la violencia contra las mujeres, ya que todas las formas de violencia que están dadas por razones de género pueden incluir hombres, mujeres y personas con orientaciones diversas. 

      .row.justify-content-center.mb-5
        .col-lg-10
          .bloque-texto-g.btg--start.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/sintesis_01.svg')})`}"
            )
            .bloque-texto-g__texto.p-5
              p En Colombia y mundialmente se han establecido normas que permiten proteger, prevenir, reconocer y sancionar la violencia de género; sin embargo, hasta que como sociedad no se logre establecer cambios reales en la forma de educar, socializar y enseñar a los hijos a ser hombres y mujeres, es muy difícil que esta violencia desaparezca.
    
      figure.mb-5
        img(src="@/assets/curso/sintesis.svg", alt="alt")
      

</template>

<script>
export default {
  name: 'Sintesis',
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
