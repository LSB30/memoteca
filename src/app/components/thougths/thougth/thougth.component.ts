import { Component, Input } from '@angular/core';
import { Thoughts } from '../../thoughts/thoughts';

@Component({
  selector: 'app-thougth',
  templateUrl: './thougth.component.html',
  styleUrls: ['./thougth.component.css']
})
export class ThougthComponent {
  @Input() pensamento : Thoughts = {
    id: 0,
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
