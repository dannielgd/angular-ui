import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { TableModule } from 'primeng/components/table/table';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';



@NgModule({
  imports: [
	CommonModule,
	FormsModule,
	HttpClientModule,
	InputTextModule,
	ButtonModule,
	TableModule,
	TooltipModule,
	InputTextareaModule,
	CalendarModule,
	SelectButtonModule,
	DropdownModule,

	CurrencyMaskModule,

	SharedModule
  ],
  declarations: [
	  LancamentoCadastroComponent,
	  LancamentosPesquisaComponent
  ],
  exports: [
	  LancamentoCadastroComponent,
	  LancamentosPesquisaComponent
  ]
})
export class LancamentosModule { }
