import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros:Array<Livro> = [
    {codigo: 1, codEditora:1, titulo:'Livro dos Numeros 1', resumo:'Um livro mostrando todos os numeros 1 do mundo',autores : ['O. Melhor', 'A. Maioral']},
    {codigo: 2, codEditora:2, titulo:'Os numeros pares', resumo:'Um compilado de números pares', autores : ['D. Ois', 'Dra. A. Mais', 'P. Ares']},
    {codigo: 3, codEditora:3, titulo:'Três nunca é demais', resumo:'Um livro de imagens mostrando objetos em grupos de três.', autores : ['T. Res', 'T. Riade']},

  ]

  constructor() { }

  obterLivros(){
    return this.livros;
  }
  incluir(livro:Livro){
    const novoCodigo = Math.max(...(this.livros.map( livro => livro.codigo))) + 1
    livro.codigo = novoCodigo
    this.livros.push(livro)
  }
  excluir(cod:number){
    const index = this.livros.findIndex( ( livro ) => {
      return livro.codigo === cod; 
    });
    this.livros.splice(index,1);
  }

}
