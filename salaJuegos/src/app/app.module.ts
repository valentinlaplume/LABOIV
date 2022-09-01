import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegoComponent } from './Vistas/juego/juego.component';
import { LoginComponent } from './Vistas/login/login.component';
import { BienvenidoComponent } from './Vistas/bienvenido/bienvenido.component';
import { ErrorComponent } from './Vistas/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegoComponent,
    LoginComponent,
    BienvenidoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
