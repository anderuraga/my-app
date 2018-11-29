import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { FlujoInformacionComponent } from './components/flujo-informacion/flujo-informacion.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { VideojuegoDetalleComponent } from './components/videojuego-detalle/videojuego-detalle.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { EjercicioFrutasComponent } from './components/ejercicio-frutas/ejercicio-frutas.component';

// Pipes
import { VideojuegoPipe } from './pipes/videojuego.pipe';

// Providers o servicios


@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    FlujoInformacionComponent,
    HomeComponent,
    Page404Component,
    VideojuegoDetalleComponent,
    PipeComponent,
    VideojuegoPipe,
    EjercicioFrutasComponent
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
