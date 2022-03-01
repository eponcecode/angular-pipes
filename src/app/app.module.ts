import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//@Angular Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Modulos personalizados

import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el local de la app
import localEs from '@angular/common/locales/es-MX'
import{ registerLocaleData } from '@angular/common'

registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
   // {provide: LOCALE_ID, useValue: localEs}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
