import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/components/button/button';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';

import { AppComponent } from './app.component';

import { CampoColoridoDirective } from './campo-colorido.directive';

import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';



@NgModule({
	declarations: [
		AppComponent,
		LancamentosPesquisaComponent,
		NavbarComponent,
		PessoasPesquisaComponent,
		CampoColoridoDirective,
		LancamentoCadastroComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		InputTextModule,
		ButtonModule,
		TableModule,
		TooltipModule,
		InputTextareaModule,
		CalendarModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
