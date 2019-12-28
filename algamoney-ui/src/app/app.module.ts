import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastyModule } from 'ng2-toasty';

import { AppComponent } from './app.component';

import { CampoColoridoDirective } from './campo-colorido.directive';

import { CoreModule } from './core/core.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { LancamentoService } from './lancamentos/lancamento.service';

@NgModule({
	declarations: [
		AppComponent,
		CampoColoridoDirective,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,

		ToastyModule.forRoot(),

		LancamentosModule,
		PessoasModule,

		CoreModule,
		HttpClientModule
	],
	providers: [LancamentoService],
	bootstrap: [AppComponent]
})
export class AppModule {}
