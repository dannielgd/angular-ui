import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CampoColoridoDirective } from './campo-colorido.directive';

import { CoreModule } from './core/core.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';

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

		CoreModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
