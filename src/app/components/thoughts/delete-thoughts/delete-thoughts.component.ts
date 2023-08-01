import { Component, OnInit } from '@angular/core';
import { Thoughts } from '../thoughts';
import { ThoughtsService } from '../thoughts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-thoughts',
  templateUrl: './delete-thoughts.component.html',
  styleUrls: ['./delete-thoughts.component.css'],
})
export class DeleteThoughtsComponent implements OnInit {
  thoughts: Thoughts = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  };
  constructor(
    private service: ThoughtsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((thoughts) => {
      this.thoughts = thoughts;
    });
  }

  excluirPensamentos() {
    if (this.thoughts.id) {
      this.service.excluir(this.thoughts.id).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
  }
  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
}
