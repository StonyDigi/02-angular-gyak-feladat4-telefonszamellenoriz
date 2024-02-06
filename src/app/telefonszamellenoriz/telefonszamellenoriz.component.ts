import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TelefonszamController } from '../telefonszam.controller';
import { TelefonszamModel } from '../telefonszam.model';

@Component({
  selector: 'app-telefonszamellenoriz',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './telefonszamellenoriz.component.html',
  styleUrl: './telefonszamellenoriz.component.css'
})
export class TelefonszamellenorizComponent {

  private controller: TelefonszamController = new TelefonszamController(new TelefonszamModel());

  telefonszam: string = '';
  ervenyesFormatum: boolean | null = null;

  ellenorzes(): void {
    this.controller.setTelefonszam(this.telefonszam);
    this.ervenyesFormatum = this.telefonszam.match(/^\d{2}-\d{2}-\d{3}-\d{4}$/) !== null;
  }

}
