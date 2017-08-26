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
      { id: 0,  name: 'Flight', heroId: 12 },
      { id: 11, name: 'Superstrength', heroId: 12 },
      { id: 12, name: 'Immortality', heroId: 16 },
      { id: 13, name: 'Melee skills', heroId: 19 },
      { id: 24, name: 'Super speed', heroId: 18 },
      { id: 26, name: 'Genius-level intellect', heroId: 12 },
      { id: 45, name: 'Detective skills', heroId: 12 },
      { id: 56, name: 'Sword skills', heroId: 11 },
      { id: 70, name: 'Heat vision', heroId: 20 }        
    ];
    return {heroes, abilities};
  }
}