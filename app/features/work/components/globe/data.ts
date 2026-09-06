export type TransportMode = 'flight' | 'drive' | 'train' | 'ferry';

export type Destination = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  note: string;
  timeSpent: string;
  activities: string[];
  transportToNext?: TransportMode;
};

export type Trip = {
  id: string;
  name: string;
  season: string;
  destinations: Destination[];
};

export const myTrips: Trip[] = [
  {
    id: 'western-canada-2026',
    name: 'Western Canada Road Trip',
    season: 'Spring 2026',
    destinations: [
      {
        id: 'calgary',
        name: 'Calgary',
        lat: 51.0447,
        lng: -114.0719,
        note: 'Start of the trip',
        timeSpent: '2 Days',
        activities: ['Arrival', 'City Tour'],
        transportToNext: 'drive',
      },
      {
        id: 'canmore',
        name: 'Canmore',
        lat: 51.0899,
        lng: -115.3441,
        note: 'Mountain town vibe',
        timeSpent: '1 Day',
        activities: ['Hiking'],
        transportToNext: 'drive',
      },
      {
        id: 'banff',
        name: 'Banff',
        lat: 51.1784,
        lng: -115.5708,
        note: 'National Park',
        timeSpent: '2 Days',
        activities: ['Gondola', 'Hot Springs'],
        transportToNext: 'drive',
      },
      {
        id: 'lake-louise',
        name: 'Lake Louise',
        lat: 51.4254,
        lng: -116.1773,
        note: 'Iconic views',
        timeSpent: '1 Day',
        activities: ['Photography', 'Hiking'],
        transportToNext: 'drive',
      },
      {
        id: 'jasper',
        name: 'Jasper',
        lat: 52.8737,
        lng: -118.0814,
        note: 'Dark Sky Preserve',
        timeSpent: '2 Days',
        activities: ['Stargazing at Pyramid Lake'],
        transportToNext: 'drive',
      },
      {
        id: 'edmonton',
        name: 'Edmonton',
        lat: 53.5461,
        lng: -113.4938,
        note: 'Alberta capital',
        timeSpent: '1 Day',
        activities: ['Sightseeing'],
        transportToNext: 'flight',
      },
      {
        id: 'vancouver',
        name: 'Vancouver',
        lat: 49.2827,
        lng: -123.1207,
        note: 'Coastal city',
        timeSpent: '3 Days',
        activities: ['Cycling', 'Sushi'],
      },
    ],
  },
  {
    id: 'europe-2026',
    name: 'European Adventure',
    season: 'Summer 2026',
    destinations: [
      {
        id: 'glasgow',
        name: 'Glasgow',
        lat: 55.8642,
        lng: -4.2518,
        note: 'Scottish Highlands',
        timeSpent: '3 Days',
        activities: ['Architecture', 'Pubs'],
        transportToNext: 'flight',
      },
      {
        id: 'split',
        name: 'Split',
        lat: 43.5081,
        lng: 16.4402,
        note: 'Croatian coast',
        timeSpent: '4 Days',
        activities: ['Beaches', 'Palace Tour'],
        transportToNext: 'ferry',
      },
      {
        id: 'rome',
        name: 'Rome',
        lat: 41.9028,
        lng: 12.4964,
        note: 'Italian history',
        timeSpent: '4 Days',
        activities: ['Colosseum', 'Pasta'],
        transportToNext: 'flight',
      },
      {
        id: 'barcelona',
        name: 'Barcelona',
        lat: 41.3851,
        lng: 2.1734,
        note: 'Sunny Spain',
        timeSpent: '3 Days',
        activities: ['Gaudí Architecture', 'Tapas'],
      },
    ],
  },
];
