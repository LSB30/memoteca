import { Component, OnInit } from '@angular/core';
import { Thoughts } from '../thoughts';
import { ThoughtsService } from '../thoughts.service';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css'],
})
export class ListThoughtsComponent implements OnInit {
  listaPensamento: Thoughts[] = [];

  constructor (private service: ThoughtsService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamento => {
      this.listaPensamento = listaPensamento
    }))
  }
}
