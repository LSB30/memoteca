import { Component } from '@angular/core';
import { Thoughts } from '../thoughts';
import { ThoughtsService } from '../thoughts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css'],
})
export class CreateThoughtsComponent {
  pensamento: Thoughts = {
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor(private service: ThoughtsService, private router: Router) {}

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
}
