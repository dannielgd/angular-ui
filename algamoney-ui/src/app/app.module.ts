import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/components/button/button';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import {SelectButtonModule} from 'primeng/components/selectbutton/selectbutton';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {InputMaskModule} from 'primeng/components/inputmask/inputmask';

import { AppComponent } from './app.component';

import { CampoColoridoDirective } from './campo-colorido.directive';

import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { MessageComponent } from './message/message.component';
import { LancamentosGridComponent } from './lancamentos-grid/lancamentos-grid.component';
import { PessoasGridComponent } from './pessoas-grid/pessoas-grid.component';

@NgModule({
	declarations: [
		AppComponent,
		LancamentosPesquisaComponent,
		NavbarComponent,
		PessoasPesquisaComponent,
		CampoColoridoDirective,
		LancamentoCadastroComponent,
		PessoaCadastroComponent,
		MessageComponent,
		LancamentosGridComponent,
		PessoasGridComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,

		InputTextModule,
		ButtonModule,
		TableModule,
		TooltipModule,
		InputTextareaModule,
		CalendarModule,
		SelectButtonModule,
		DropdownModule,
		InputMaskModule,

		CurrencyMaskModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
