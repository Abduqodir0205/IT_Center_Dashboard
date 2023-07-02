
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './index.css'

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})


// optional options with default values and callback functions
const options = {
  onCollapse: () => {
      console.log('element has been collapsed')
  },
  onExpand: () => {
      console.log('element has been expanded')
  },
  onToggle: () => {
      console.log('element has been toggled')
  }
};

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
