import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent{

	ultimoId = 0;
	nome = 'Danniel';
	adicionado = false;
	@Output() funcionarioAdicionado = new EventEmitter();
	
	adicionar() {
		console.log(`Adicionando ${this.nome}`);
		this.adicionado = true;

		const funcionario = {
			id: ++this.ultimoId,
			nome: this.nome
		};

		this.funcionarioAdicionado.emit(funcionario); //funcionario vai para a variavel $event lá no html
	}
}
