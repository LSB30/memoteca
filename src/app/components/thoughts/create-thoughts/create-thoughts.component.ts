import { Component } from '@angular/core';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css']
})
export class CreateThoughtsComponent {
  pensamento = {
    id: '1',
    conteudo: 'oi',
    autoria: 'das',
    modelo: ''
  }

  criarPensamento() {

  }

  cancelar() {

  }
}
