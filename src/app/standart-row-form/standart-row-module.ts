import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandartRowFormComponent } from './standart-row-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [StandartRowFormComponent],
  exports: [StandartRowFormComponent]
})
export class StandartRowModule {}
