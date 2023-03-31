import axios from "axios";

//vue type extension
declare module "vue" {
  interface ComponentCustomProperties {
    $http: typeof axios;
  }
}
