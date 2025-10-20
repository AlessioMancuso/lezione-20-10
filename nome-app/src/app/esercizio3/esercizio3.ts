import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Studente { nome: string; voto: number; }

@Component({
	selector: 'app-esercizio3',
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: './esercizio3.html',
	styleUrls: ['./esercizio3.css']
})
export class Esercizio3 {
	students: Studente[] = [
		{ nome: 'Mario', voto: 28 },
		{ nome: 'Lucia', voto: 30 }
	];
	newName = '';
	newVoto: number | null = null;

	add() {
		if (!this.newName || this.newVoto === null) return;
		this.students.push({ nome: this.newName.trim(), voto: this.newVoto });
		this.newName = '';
		this.newVoto = null;
	}

	remove(i: number) {
		this.students.splice(i, 1);
	}
}
