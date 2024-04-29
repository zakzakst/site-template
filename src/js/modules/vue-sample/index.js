import { createApp } from 'vue'
// import Sample from './sample'
import Sample from './Sample.vue'

const vueSampleInit = () => {
  const app = createApp(Sample)
  // const app = createApp({
  //   data() {
  //     return {
  //       message: 'Hello Vue!',
  //     }
  //   },
  //   template: `
  //     <div id="rendered">{{ message }}</div>
  //   `,
  // })
  // console.log(app)
  app.mount('#app')
}

export default vueSampleInit
