import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';

import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';

import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { TableModule } from 'primeng/components/table/table';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

@NgModule({
  declarations: [
	  PessoaCadastroComponent,
	  PessoasPesquisaComponent
  ],
  imports: [
	CommonModule,
	FormsModule,

	InputTextModule,
	ButtonModule,
	TableModule,
	TooltipModule,
	CalendarModule,
	SelectButtonModule,
	DropdownModule,
	InputMaskModule,

	SharedModule
  ],
  exports: [
	PessoaCadastroComponent,
	PessoasPesquisaComponent
  ]
})
export class PessoasModule { }
