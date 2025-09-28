import { Injectable } from '@angular/core';

interface dayVotes {
  votes: number;
  date: Date;
}

@Injectable({
  providedIn: 'root',
})
export class VotesDataService {
  votesData: dayVotes[] = [
    {
      date: new Date('2023-10-01'),
      votes: 6,
    },
    {
      date: new Date('2023-10-02'),
      votes: 5,
    },
    {
      date: new Date('2023-10-03'),
      votes: 2,
    },
    {
      date: new Date('2023-10-04'),
      votes: 20,
    },
    {
      date: new Date('2023-10-05'),
      votes: 1,
    },
  ];

  getVotesData(): dayVotes[] {
    return this.votesData;
  }
}
