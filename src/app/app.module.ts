import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { EventoModule } from './evento/evento.module';

// Rota de redirecionamento apenas. Redirecionando para a rota de login
const appRoutes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    LoginModule,
    CadastroModule,
    DashboardModule,
    EventoModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ],
})

export class AppModule { }
