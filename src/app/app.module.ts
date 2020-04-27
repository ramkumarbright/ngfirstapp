import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { PageNotFundComponent } from './page-not-fund/page-not-fund.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { UserService } from './services/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
//import { AppRoutingModule } from './app-routing.module';

import { ModalComponent as ModalComponent } from './modal-component/modal-component.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ExamplesComponent } from './examples/examples.component';


const appRoutes: Routes = [
   { path: '', component: HomeComponent },
  { path: 'home/:mode', component: HomeComponent },
  { path: 'examples', component: ExamplesComponent },

  { path: 'edituser/:id', component: EditUserComponent },
  { path: '**', component: PageNotFundComponent },
  { path: 'login', 
  loadChildren:()=> import('./authentication/authentication.module')
  .then(x=>x.AuthenticationModule)
}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFundComponent,
    AddUsersComponent,
    DisplayUserComponent,
    ModalComponent,
    EditUserComponent,
    ExamplesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatButtonModule,
    MatDialogModule,
    RouterModule.forRoot(
      appRoutes,
      
     // { enableTracing: true } // <-- debugging purposes only
    )
    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]

})
export class AppModule {


}

