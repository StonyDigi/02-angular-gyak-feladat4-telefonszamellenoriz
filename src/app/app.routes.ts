import { Routes } from '@angular/router';
import { TelefonszamellenorizComponent } from './telefonszamellenoriz/telefonszamellenoriz.component';

export const routes: Routes = [
    {path: 'telefonszamellenoriz', component: TelefonszamellenorizComponent},
    {path: '', redirectTo: '/telefonszamellenoriz', pathMatch: 'full'},
    {path: '**', redirectTo: '/telefonszamellenoriz', pathMatch: 'full'}
];
