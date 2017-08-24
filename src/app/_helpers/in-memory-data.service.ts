import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Zero' },
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    const abilities = [
      { id: 0,  name: 'Flight' },
      { id: 11, name: 'Superstrength' },
      { id: 12, name: 'Immortality' },
      { id: 13, name: 'Melee skills' },
      { id: 24, name: 'Super speed' },
      { id: 26, name: 'Genius-level intellect' },
      { id: 45, name: 'Detective skills' },
      { id: 56, name: 'Sword skills' },
      { id: 70, name: 'Heat vision' }        
    ];
    return {heroes, abilities};
  }
}