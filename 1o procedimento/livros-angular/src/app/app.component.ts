import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LivroDadosComponent, LivroListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ControleEditoraService, ControleLivrosService],
})
export class AppComponent {
  title = 'livros-angular';
}
