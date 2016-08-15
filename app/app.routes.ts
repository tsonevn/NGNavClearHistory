import { RouterConfig } from "@angular/router";
import { nsProvideRouter } from "nativescript-angular/router"

import { FirstComponent } from "./firstpage.component";
import { SecondComponent } from "./secondpage.component";


export const routes: RouterConfig = [
  { path: "", redirectTo: "/first", terminal: true },
  { path: "first", component: FirstComponent},
  { path: "second/:data", component: SecondComponent}
]


export const APP_ROUTER_PROVIDERS = [
    nsProvideRouter(routes, { enableTracing: false })
];