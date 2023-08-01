import { Component } from '@angular/core';
import { Thoughts } from '../thoughts';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css'],
})
export class ListThoughtsComponent {
  listaPensamento: Thoughts[] = [];
}
