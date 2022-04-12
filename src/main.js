import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueViewer from "v-viewer";
import "viewerjs/dist/viewer.css";

const appInstance = createApp(App);
appInstance.use(router);
appInstance.use(VueViewer);
appInstance.mount("#app");
