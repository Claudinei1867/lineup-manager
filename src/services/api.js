export function loadLists() {
  return [
    { 
      title: 'RESERVAS', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'BANCO DE RESERVAS',
          labels: ['#FFFF00'],
        },
        {
          id: 2,
          content: 'Joao Santos - Auxiliar Tecnico',
          labels: ['#FFFF00'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 3,
          content: 'Fulano de Tal - Pitcher',
          labels: ['#FFFF00'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 4,
          content: 'Beltrano de souza - Catcher',
          labels: ['#FFFF00'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 5,
          content: 'Jose da Silva - First Baseman',
          labels: ['#FFFF00'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 6,
          content: 'Siclano Oliveira - second Baseman',
          labels: ['#FFFF00'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 7,
          content: 'Manoel Bastos - third Baseman',
          labels: ['#FFFF00'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 8,
          content: 'Pedro Ramos - Shortstop',
          labels: ['#FFFF00'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 9,
          content: 'Andre Manoel - Left Fielder',
          labels: ['#FFFF00'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 10,
          content: 'Cleiton Aparecido - Center Fielder',
          labels: ['#FFFF00'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
      ]
    },
    { 
      title: 'TITULARES', 
      creatable: false,
      cards: [
        {
          id: 11,
          content: 'JOGANDO',
          labels: ['#00FF7F'],
        },
        {
          id: 12,
          content: 'Alfredo da Siva - Tecnico',
          labels: ['#00FF7F'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 13,
          content: 'Julio Andrade - Pitcher',
          labels: ['#00FF7F'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 14,
          content: 'Gilson Serra - Catcher',
          labels: ['#00FF7F'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 15,
          content: 'Fabio de Moraes - First Baseman',
          labels: ['#00FF7F'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 16,
          content: 'Gabriel Anjos - second Baseman',
          labels: ['#00FF7F'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 17,
          content: 'Valdomiro Lopes - third Baseman',
          labels: ['#00FF7F'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 18,
          content: 'Matheus Aguiar - Shortstop',
          labels: ['#00FF7F'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 19,
          content: 'Tadeu Goes - Left Fielder',
          labels: ['#00FF7F'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 20,
          content: 'Carlos Braga - Center Fielder',
          labels: ['#00FF7F'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
      ]
    },
    { 
      title: 'SUBSTITUIDOS', 
      creatable: false,
      cards: [
        {
          id: 21,
          content: 'SUBSTITUIDOS',
          labels: ['#FF0000'],
        },
      ]
    },
  ];
}