import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-esercizio2',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './esercizio2.html',
	styleUrls: ['./esercizio2.css']
})
export class Esercizio2 {
	items = ['Elemento A', 'Elemento B', 'Elemento C'];
}
