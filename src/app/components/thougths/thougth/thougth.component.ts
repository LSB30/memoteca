import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thougth',
  templateUrl: './thougth.component.html',
  styleUrls: ['./thougth.component.css']
})
export class ThougthComponent {
  @Input() pensamento = {
    conteudo: '',
    autoria: '',
    modelo : ''
  }

  larguraPensamentos() : string {
    if(this.pensamento.conteudo.length >= 256) {
      return "pensamento-g"
    }
    return "pensamento-p"
  }
}
