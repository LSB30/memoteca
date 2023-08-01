import { Component, OnInit } from '@angular/core';
import { Thoughts } from '../thoughts';
import { ThoughtsService } from '../thoughts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-thoughts',
  templateUrl: './edit-thoughts.component.html',
  styleUrls: ['./edit-thoughts.component.css'],
})
export class EditThoughtsComponent implements OnInit {
  pensamento: Thoughts = {
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
      this.pensamento = thoughts;
    });
  }

  editarPensamento() {
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
}
