import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { ToastyModule } from 'ng2-toasty';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/api';

import { AppComponent } from './app.component';

import { CampoColoridoDirective } from './campo-colorido.directive';

import { CoreModule } from './core/core.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { LancamentoService } from './lancamentos/lancamento.service';
import { PessoaService } from './pessoas/pessoa.service';

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

		ToastyModule.forRoot(),
		ConfirmDialogModule,

		LancamentosModule,
		PessoasModule,

		CoreModule,
		HttpClientModule
	],
	providers: [
		LancamentoService,
		PessoaService,
		ConfirmationService,
		{ provide: LOCALE_ID, useValue: 'pt-BR' }
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
