import { Component, OnInit, ViewChild } from '@angular/core';
import { PessoaFiltro, PessoaService } from '../pessoa.service';
import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { Table } from 'primeng/components/table/table';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

	totalRegistros = 0;
	filtro = new PessoaFiltro();

	pessoas = [ ];
	@ViewChild('tabela', {static: true}) grid: Table;

	constructor(
		private pessoaService: PessoaService,
		private errorHandler: ErrorHandlerService,
		private  toasty: ToastyService,
		private confirmation: ConfirmationService
	) { }

	pesquisar(pagina = 0) { /* Padrão de 0 se não passar nada */
		this.filtro.pagina = pagina;
		this.pessoaService.pesquisar(this.filtro)
			.then(resultado => {
				this.totalRegistros = resultado.total;

				this.pessoas = resultado.pessoas;
			})
			.catch(erro => this.errorHandler.handle(erro));
	}

	aoMudarPagina(event: LazyLoadEvent) {
		const pagina = event.first / event.rows;
		this.pesquisar(pagina);
	}

	confirmarExclusao(pessoa: any) {
		this.confirmation.confirm({
			message: 'Tem certeza que deseja excluir?',
			accept: () => {
				this.excluir(pessoa);
			},
			// reject: //trata se o usuário clicar em não
		});
	}

	excluir(pessoa: any) {
		this.pessoaService.excluir(pessoa.codigo)
		  .then(() => {
				this.toasty.success('Pessoa Excluída com Sucesso!');
				this.grid.reset(); // exibe a primeria pagina, resetando a tabela
		  })
		  .catch(erro => this.errorHandler.handle(erro));
	}

	alternarStatus(pessoa: any): void {

		const novoStatus = !pessoa.ativo;
		this.pessoaService.mudarStatus(pessoa.codigo, !pessoa.ativo)
		.then(() => {
			const acao = novoStatus ? 'Ativada' : 'Desativada';
			pessoa.ativo = novoStatus;
			this.toasty.success(`Pessoa ${acao} com Sucesso!`);
	  })
	  .catch(erro => this.errorHandler.handle(erro));
	}

}
