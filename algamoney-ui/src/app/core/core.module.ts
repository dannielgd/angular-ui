import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';

import { ToastyModule } from 'ng2-toasty';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ErrorHandlerService } from './error-handler.service';
import { LancamentoService } from '../lancamentos/lancamento.service';
import { PessoaService } from '../pessoas/pessoa.service';
import { ConfirmationService } from 'primeng/components/common/api';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
	CommonModule,

	ToastyModule.forRoot(), //o forRoot pode ser utilizado aqui porque o coreModule é importado apenas pelo app module, sendo assim parte dele.
	ConfirmDialogModule,
  ],
  exports: [
	  NavbarComponent,
	  ToastyModule,
	  ConfirmDialogModule
	 ],
  providers: [
	LancamentoService,
	PessoaService,

	ConfirmationService,

	{ provide: LOCALE_ID, useValue: 'pt-BR' },

	ErrorHandlerService
  ]
})
export class CoreModule { }
