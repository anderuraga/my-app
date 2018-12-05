import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes propios
import { FrutaComponent } from './components/fruta/fruta.component';
import { FlujoInformacionComponent } from './components/flujo-informacion/flujo-informacion.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { VideojuegoDetalleComponent } from './components/videojuego-detalle/videojuego-detalle.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { EjercicioFrutasComponent } from './components/ejercicio-frutas/ejercicio-frutas.component';
import { ComparadorComponent } from './components/comparador/comparador.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { DetalleComponent } from './components/detalle/detalle.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'fruta', component: FrutaComponent},
    { path: 'formulario', component: FormularioComponent},
    { path: 'pipe', component: PipeComponent},
    { path: 'arrays', component: EjercicioFrutasComponent},
    { path: 'videojuego-detalle', component: VideojuegoDetalleComponent },
    { path: 'flujo', component: FlujoInformacionComponent},
    { path: 'tareas', component: TareaComponent},
    { path: 'comparador', component: ComparadorComponent},
    { path: 'detalle/:id', component: DetalleComponent},
    { path: '',  redirectTo: '/home',  pathMatch: 'full'},
    { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
