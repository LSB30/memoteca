import { Component } from '@angular/core';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css'],
})
export class ListThoughtsComponent {
  listaPensamento = [
    {
      conteudo: 'lucas',
      autoria: 'santana',
      modelo: 'modelo2',
    },

    {
      conteudo: 'jasna',
      autoria: 'santos',
      modelo: 'modelo3',
    },
  ];
}
