import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';

import { CampoColoridoDirective } from './campo-colorido.directive';

import { CoreModule } from './core/core.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
	declarations: [
		AppComponent,
		CampoColoridoDirective,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,

		LancamentosModule,
		PessoasModule,

		CoreModule,
		HttpClientModule
	],
	providers: [

	],
	bootstrap: [AppComponent]
})
export class AppModule {}
