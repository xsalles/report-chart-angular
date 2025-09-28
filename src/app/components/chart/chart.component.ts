import { Component, inject } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import type { ChartData, ChartOptions } from 'chart.js';
import { VotesDataService } from '../../services/votes-data.service';

@Component({
  selector: 'component-chart',
  imports: [ChartModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent {
  private votesDataService = inject(VotesDataService)

  votes = this.votesDataService.getVotesData();

  data: ChartData<'bar'> = {
    labels: this.votesDataService.getVotesData().map(vote => vote.date.toDateString()),
    datasets: [
      {
        label: 'Votes',
        data: this.votes.map(vote => vote.votes),
        backgroundColor: '#42A5F5',
        borderColor: '#1E88E5',
        borderWidth: 1,
      }
    ]
  }

  options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      bar: {
        hoverBackgroundColor: '#1E88E5',
        borderRadius: 8,
        borderSkipped: false,
      }
    },
    plugins: {
      legend: {
        display: true,
      }
    }
  }
}
