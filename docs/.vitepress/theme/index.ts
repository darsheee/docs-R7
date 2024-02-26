import { h } from 'vue'
import Theme from 'vitepress/theme'
import './styles/vars.css'
import HomeSponsors from './components/HomeSponsors.vue'
import AsideSponsors from './components/AsideSponsors.vue'
import Zooming from 'zooming'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'home-features-after': () => h(HomeSponsors),
      'aside-ads-before': () => h(AsideSponsors)
    })
  },
  // enhanceApp({ app }) {

  //   const zooming = new Zooming()
  //   zooming.config({
  //     scaleBase: 0.75,
  //     bgOpacity: 0,
  //   })
  //   app.provide('zoom', zooming)
  // }
}
