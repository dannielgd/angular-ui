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

import { NavbarComponent } from './navbar/navbar.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { MessageComponent } from './message/message.component';
import { PessoasGridComponent } from './pessoas-grid/pessoas-grid.component';
import { LancamentosModule } from './lancamentos/lancamentos.module';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		PessoasPesquisaComponent,
		CampoColoridoDirective,
		PessoaCadastroComponent,
		MessageComponent,
		PessoasGridComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,

		LancamentosModule,

		InputTextModule,
		ButtonModule,
		TableModule,
		TooltipModule,
		InputTextareaModule,
		CalendarModule,
		SelectButtonModule,
		DropdownModule,
		InputMaskModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
