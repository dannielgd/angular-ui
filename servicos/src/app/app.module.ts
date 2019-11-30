import { FuncionarioModule } from './funcionario/funcionario.module';
import { LogService } from './log.service';
import { FuncionarioService } from './funcionario/funcionario.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { FuncionarioCardComponent } from './funcionario/funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario/funcionario-form/funcionario-form.component';
import { CampoColoridoDirective } from './campo-colorido.directive';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BemVindoComponent,
    CampoColoridoDirective
  ],
  imports: [
	BrowserModule,
	FormsModule,
	FuncionarioModule
  ],
  providers: [
	  LogService
	 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
