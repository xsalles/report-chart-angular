import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonComponent } from '../button/button.component';
import generatePDF, { EmployeeVoted } from '../../lib/pdf';

@Component({
  selector: 'component-table',
  imports: [TableModule, ButtonComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  tableData = [{ title: 'Eleitores votantes', date: '04/10/2023 às 11:32:14' }];

  employeeVoted: EmployeeVoted[] = [
    { name: 'Pedro', date: new Date('2023-10-01').toLocaleDateString('pt-BR'), ip: '192.168.0.1' },
    { name: 'Ana', date: new Date('2023-10-02').toLocaleDateString('pt-BR'), ip: '192.168.0.2' },
    { name: 'Carlos', date: new Date('2023-10-03').toLocaleDateString('pt-BR'), ip: '192.168.0.3' },
    { name: 'Mariana', date: new Date('2023-10-04').toLocaleDateString('pt-BR'), ip: '192.168.0.4' },
    { name: 'Lucas', date: new Date('2023-10-05').toLocaleDateString('pt-BR'), ip: '192.168.0.5' },
  ];

  onGeneratePDF() {
    generatePDF(this.employeeVoted, this.tableData[0].date);
  }

  ngOnInit(): void {
    console.log(this.tableData[0].date);
  }
}
