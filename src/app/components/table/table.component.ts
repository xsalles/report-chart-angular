import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'component-table',
  imports: [TableModule, ButtonComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  tableData = [
    { title: 'Eleitores votantes', date: '04/10/2023 às 11:32:14' }
  ]
}
