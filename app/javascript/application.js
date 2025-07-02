// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// Import Turbo and Stimulus
import "@hotwired/turbo-rails"
import "./controllers"

// Import Vue
import { createApp } from 'vue'

// Wait for the DOM to be loaded
document.addEventListener('turbo:load', () => {
  const vueElements = document.querySelectorAll('[data-vue-component]')
  
  if (vueElements.length > 0) {
    vueElements.forEach(element => {
      const app = createApp({
        template: element.innerHTML,
        data() {
          return {
            message: 'Vue is working!'
          }
        }
      })
      
      app.mount(element)
    })
  }
})
