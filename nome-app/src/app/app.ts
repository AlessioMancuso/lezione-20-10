import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Componente1 } from './componente1/componente1';
import { Post } from './post/post';
import { Esercizio1 } from './esercizio1/esercizio1';
import { Esercizio2 } from './esercizio2/esercizio2';
import { Esercizio3 } from './esercizio3/esercizio3';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, FormsModule, Componente1, Post, Esercizio1, Esercizio2, Esercizio3],
	templateUrl: './app.html',
	styleUrls: ['./app.css']
})
export class App {
	messaggio = 'Ciao dal componente padre!';
	posts = [
		{ titolo: 'titolo1', testo: 'esempio di testo1' },
		{ titolo: 'titolo2', testo: 'esempio di testo2 con più di venti caratteri' },
		{ titolo: 'titolo3', testo: 'esempio di testo3' }
	];
	// per mostrare numero di post effettivi dopo filtro:
	get visiblePosts() {
		return this.posts.filter(p => p.testo.length <= 20);
	}
}