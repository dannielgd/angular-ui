import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	nome = "Danniel Oliveira";
	dataAniversario = new Date(1993, 3, 4);
	preco = 2777849.97;
	troco = 0.52299;

}
