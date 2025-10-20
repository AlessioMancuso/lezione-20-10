import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-esercizio1',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './esercizio1.html',
	styleUrls: ['./esercizio1.css']
})
export class Esercizio1 {
	show = true;
	toggle() { this.show = !this.show; }
}
