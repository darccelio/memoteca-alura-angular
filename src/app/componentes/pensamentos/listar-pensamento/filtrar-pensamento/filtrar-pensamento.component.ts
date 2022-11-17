// import { PensamentoService } from './../../pensamento.service';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-filtrar-pensamento',
//   templateUrl: './filtrar-pensamento.component.html',
//   styleUrls: ['./filtrar-pensamento.component.css']
// })
// export class FiltrarPensamentoComponent implements OnInit {

//   filtro: string = '';

//   constructor(private service: PensamentoService) { }

//   ngOnInit(): void {

//   }

//   pesquisarPensamentos() {
//     this.haMaisPensamentos = true;
//     this.paginaAtual = 1;

//     this.service.listar(this.paginaAtual, this.filtro)
//       .subscribe( (listaPensamentos) => {
//         this.listaPensamentos = listaPensamentos
//       });
//   }

// }
