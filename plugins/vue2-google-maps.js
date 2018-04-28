import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

const options = {
  load: {
    key: 'AIzaSyDcfhKxHOFzUOtUxUXv_LQtkXzU8rr1pVY',
    libraries: 'places'
  }
}

Vue.use(VueGoogleMaps, options)
