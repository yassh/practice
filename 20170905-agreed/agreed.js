module.exports = [
  {
    request: {
      path: '/user/:id',
      method: 'GET',
      values: {
        id: '1',
      },
    },
    response: {
      body: {
        id: '{:id}',
        name: 'Mao Asada',
        age: 26,
      },
    },
  },
  {
    request: {
      path: '/event/:yyyy/:mm/:dd',
      method: 'GET',
      values: {
        yyyy: '2017',
        mm: '12',
        dd: '20',
      },
    },
    response: {
      body: [
        {
          name: 'Japan Figure Skating Championships',
          city: 'Tokyo',
          date: '{:yyyy}-{:mm}-{:dd}',
        },
      ],
    },
  },
]
