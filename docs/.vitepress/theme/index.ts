import Theme from 'vitepress/theme'



import ZoomImg from './components/ZoomImg.vue'

import './styles/index.scss'
import 'uno.css'



export default {
  ...Theme,


  enhanceApp({ app }) {
    app.component('ZoomImg', ZoomImg)
}

  // enhanceApp({ app }) {

  //   const zooming = new Zooming()
  //   zooming.config({
  //     scaleBase: 0.75,
  //     bgOpacity: 0,
  //   })
  //   app.provide('zoom', zooming)
  // }
}
