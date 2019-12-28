import { LancamentoFiltro } from './../lancamento.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LancamentoService } from '../lancamento.service';
import {LazyLoadEvent} from 'primeng/components/common/api';
import { Table } from 'primeng/components/table/table';

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

	constructor(private lancamentoService: LancamentoService) { }

	ngOnInit(): void {
		 // this.pesquisar();
	}

	pesquisar(pagina = 0) { /* Padrão de 0 se não passar nada */
		this.filtro.pagina = pagina;
		this.lancamentoService.pesquisar(this.filtro)
			.then(resultado => {
				this.totalRegistros = resultado.total;
				this.lancamentos = resultado.lancamentos;
			});
	}

	aoMudarPagina(event: LazyLoadEvent) {
		const pagina = event.first / event.rows;
		this.pesquisar(pagina);
	}

	excluir(lancamento: any) {
		this.lancamentoService.excluir(lancamento.codigo)
		  .then(() => {
			this.grid.reset(); //exibe a primeria pagina, resetando a tabela
		  });
	}
}
