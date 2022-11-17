import { Router } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';
  favoritos: boolean = false;
  listaFavoritos: Pensamento[] = [];
  titulo: string = 'Meu Mural';

  constructor(private service: PensamentoService, private router: Router) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos) => {
      this.listaPensamentos.push(...listaPensamentos);
      if (listaPensamentos.length < 3) {
        this.haMaisPensamentos = false;
      }
    });
  }

  pesquisarPensamentos() {
    this.favoritos = false;
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.titulo = "Meu Mural"

    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe( (listaPensamentos) => {
        this.listaPensamentos = listaPensamentos
      });
  }

  listarFavoritos() {
    this.favoritos = true;
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.titulo = "Meus Favoritos"

    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe( (listaPensamentosFavoritos) => {
        this.listaPensamentos = listaPensamentosFavoritos
        this.listaFavoritos = listaPensamentosFavoritos;
      });
  }

  recarregarComponente() {
    this.favoritos = false;
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;

    this.router.routeReuseStrategy.shouldReuseRoute = () => false; // informar ao Angular para não usar a rota atual (padrão true)
    this.router.onSameUrlNavigation = 'reload'; // informa como será a atualização/recarregamento do componnet
    this.router.navigate([this.router.url]); //representa a url atual
  }

}
