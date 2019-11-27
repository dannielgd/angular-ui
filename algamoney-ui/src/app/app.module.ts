import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CampoColoridoDirective } from './campo-colorido.directive';

import { NavbarComponent } from './navbar/navbar.component';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		CampoColoridoDirective,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,

		LancamentosModule,
		PessoasModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
