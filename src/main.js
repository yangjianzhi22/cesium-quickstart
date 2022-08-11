import Vue from 'vue'
import App from './App.vue'

import "cesium/Build/Cesium/Widgets/widgets.css";
import {Ion} from "cesium";

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2YzVlMWU5Zi1mODcwLTQzZDEtYTYwOS1hM2IyOTZkOWJkNDkiLCJpZCI6NTgxMjQsImlhdCI6MTYyMjg3OTkyM30.O7_u_MGY66QR8oJOmr1xgKHN_sd3cD2zL195HV7fRu8';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
