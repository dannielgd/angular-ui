import { LancamentoFiltro } from './../lancamento.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LancamentoService } from '../lancamento.service';
import {LazyLoadEvent, ConfirmationService} from 'primeng/components/common/api';
import { Table } from 'primeng/components/table/table';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from '../../core/error-handler.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

	totalRegistros = 0;
	filtro = new LancamentoFiltro();
	lancamentos = [ ];
	@ViewChild('tabela', {static: true}) grid: Table;

	constructor(
		private lancamentoService: LancamentoService,
		private errorHandler: ErrorHandlerService,
		private  toasty: ToastyService,
		private confirmation: ConfirmationService
	) { }

	ngOnInit(): void {
		 // this.pesquisar();
	}

	pesquisar(pagina = 0) { /* Padrão de 0 se não passar nada */
		this.filtro.pagina = pagina;
		this.lancamentoService.pesquisar(this.filtro)
			.then(resultado => {
				this.totalRegistros = resultado.total;
				this.lancamentos = resultado.lancamentos;
			})
			.catch(erro => this.errorHandler.handle(erro));
	}

	aoMudarPagina(event: LazyLoadEvent) {
		const pagina = event.first / event.rows;
		this.pesquisar(pagina);
	}

	confirmarExclusao(lancamento: any) {
		this.confirmation.confirm({
			message: 'Tem certeza que deseja excluir?',
			accept: () => {
				this.excluir(lancamento);
			},
			// reject: //trata se o usuário clicar em não
		});
	}

	excluir(lancamento: any) {
		this.lancamentoService.excluir(lancamento.codigo)
		  .then(() => {
				this.toasty.success('Lançamento Excluído com Sucesso!');
				this.grid.reset(); // exibe a primeria pagina, resetando a tabela
		  })
		  .catch(erro => this.errorHandler.handle(erro));
	}
}
