import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from "./about/about.component";
import { RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: "about", 
    component: AboutComponent 
  },
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
