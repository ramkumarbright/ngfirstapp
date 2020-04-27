import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const appRoutes: Routes = [
    { path: 'login', 
    loadChildren:()=> import('./authentication/authentication.module')
    .then(x=>x.AuthenticationModule)
}
];


@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
    providers: []
  })
  export class AppRoutingModule { }