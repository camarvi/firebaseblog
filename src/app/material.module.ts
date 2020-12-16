import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
    MatCardModule,
    MatButtonModule, 
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule
  } from '@angular/material';



const myModule = [
    MatCardModule,
    MatButtonModule, 
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule 
                ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    myModule
  ],
  exports : [myModule]
})
export class MaterialModule { }
