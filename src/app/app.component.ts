import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChartComponent } from "./components/chart/chart.component";
import { TableComponent } from "./components/table/table.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChartComponent, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'report-chart-angular';
}
