import { PensamentoService } from './../pensamento.service';
import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Pensamento } from './../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css'],
})
export class PensamentoComponent implements OnInit {
  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'Teste Angular',
    autoria: 'Dev',
    modelo: 'modelo3',
    favorito: false,
  };

  @Input() listaFavoritos: Pensamento[] = [];

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {}

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 255) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  mudarIconeFavorito(): string {
    if (!this.pensamento.favorito) {
      return 'inativo';
    } else {
      return 'ativo';
    }
  }

  atualizarFavoritos() {
    this.service.mudarFavorito(this.pensamento).subscribe( () => {
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento),1)
    });
  }
}
