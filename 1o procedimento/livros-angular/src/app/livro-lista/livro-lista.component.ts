import { Component, OnInit } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleLivrosService } from '../controle-livros.service';
import { ControleEditoraService } from '../controle-editora.service';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './livro-lista.component.html',
  styleUrl: './livro-lista.component.css'
})
export class LivroListaComponent implements OnInit{
  public editoras:Array<Editora> = []
  public livros:Array<Livro> = []

  constructor(private servLivro:ControleLivrosService, private servEditora:ControleEditoraService){
    this.servLivro = servLivro
    this.servEditora = servEditora
  }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras()
    this.livros = this.servLivro.obterLivros()
  }

  excluir = (cod:number):void => {
    this.servLivro.excluir(cod);
    this.livros = this.servLivro.obterLivros();
  }

  obterNome = (codEditora:number):string | undefined => {
    return this.servEditora.getNomeEditora(codEditora)
  }
}
