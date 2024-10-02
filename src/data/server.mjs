import express from 'express';

const app = express();
const PORT = 3001;

const navigationData = [
  {
    name: 'Home Page',
    id: 'home',
    url: '/',
  },
  {
    name: 'Rating Stars',
    id: 'rating-stars',
    url: '/rating-stars',
  },

  {
    name: 'UseMemo Hook usage',
    id: 'use-memo',
    url: '/use-memo',
  },
  {
    name: 'UseGeo Hook usage',
    id: 'use-geo',
    url: '/use-geo',
  },
  {
    name: 'Modal',
    id: 'modal',
    url: '/modal',
  },

  {
    name: 'Search with dropdown',
    id: 'search',
    url: '/search',
  },
  {
    name: 'Table with pagination',
    id: 'pagination-table',
    url: '/paginated-table',
  },
  {
    name: 'Masonry grid',
    id: 'masonry-grid',
    url: '/masonry-grid',
  },
  {
    name: 'useIntersectionObserver',
    id: 'intersection-observer',
    url: '/intersection-observer',
  },
  {
    name: 'Infinite Human List',
    id: 'infinite-human-list',
    url: '/infinite-human-list',
  },
  {
    name: 'Password Input',
    id: 'password-input',
    url: '/password-input',
  },
  {
    name: 'Multistep Form',
    id: 'multistep-form',
    url: '/multistep-form',
  },
];

const ratingStarsData = {
  name: 'Rating Stars',
  id: 'rating-stars',
  url: '/rating-stars',
  data: {
    ratings: [
      {
        recordId: '5e95aa806e575fbe1fa78dff',
        name: 'Kellie Mccormick',
        score: 4,
        content:
          'Mollit anim adipisicing adipisicing officia. Reprehenderit cupidatat qui amet pariatur voluptate commodo ea culpa aute incididunt duis.',
      },
      {
        recordId: '5e95aa808a001857492fd90e',
        name: 'Allison Ratliff',
        score: 1,
        content:
          'Do ipsum fugiat nisi ea laboris sit pariatur aliqua proident. Qui cillum veniam incididunt cupidatat mollit commodo tempor nisi ad ex duis ullamco ea ut.',
      },
      {
        recordId: '5e95aa80c9f766d3146aef4b',
        name: 'Mccray Byers',
        score: 4,
        content:
          'Lorem minim pariatur deserunt laborum cillum enim velit veniam duis tempor dolor consectetur incididunt. Ullamco velit eiusmod Lorem consectetur exercitation aliquip occaecat.',
      },
      {
        recordId: '5e95aa80a4781bd158f3e9a3',
        name: 'Boyd Forbes',
        score: 4,
        content:
          'Mollit id nulla consectetur ipsum proident culpa ea est sit. Consectetur sint sit cupidatat incididunt.',
      },
      {
        recordId: '5e95aa805a7e1f538fe541f5',
        name: 'Millicent Larsen',
        score: 5,
        content:
          'Est ut dolor consequat sunt occaecat adipisicing mollit aute. Adipisicing sunt nisi irure et irure mollit ex incididunt.',
      },
      {
        recordId: '5e95aa80881a5c74274c1dba',
        name: 'Odessa Greer',
        score: 1,
        content:
          'Aliqua voluptate duis dolore non culpa elit officia tempor. Ex proident incididunt Lorem amet non proident.',
      },
      {
        recordId: '5e95aa80e2d31d22e7dbec80',
        name: 'Alejandra Petersen',
        score: 3,
        content:
          'Aliquip duis et eiusmod aute nostrud nisi in do. Reprehenderit minim et reprehenderit eiusmod proident excepteur occaecat enim magna nulla commodo veniam.',
      },
      {
        recordId: '5e95aa808cb8c63b4e6d2e35',
        name: 'Solis Donovan',
        score: 5,
        content:
          'Enim in nisi sunt est velit aliquip. Aliqua pariatur nostrud exercitation esse voluptate mollit in eiusmod mollit.',
      },
      {
        recordId: '5e95aa80a98558752d8df890',
        name: 'Neal Sims',
        score: 4,
        content:
          'Eu magna Lorem excepteur non adipisicing aliqua laboris minim nisi tempor cillum magna nostrud. Irure enim amet aute ipsum.',
      },
      {
        recordId: '5e95aa80243c1c9ef58eaaa0',
        name: 'Alisa Mcneil',
        score: 5,
        content:
          'Tempor deserunt officia laboris excepteur laboris eu laboris minim occaecat. Duis amet enim pariatur nostrud adipisicing velit nostrud in dolor exercitation dolor.',
      },
      {
        recordId: '5e95aa804828562f7e8a1d36',
        name: 'Campos Sanders',
        score: 5,
        content:
          'Duis magna proident adipisicing pariatur ea occaecat commodo. Minim aute nisi mollit enim incididunt nostrud ad esse nostrud sint adipisicing.',
      },
      {
        recordId: '5e95aa806305f8b0fb2ebe8b',
        name: 'Ferguson Kerr',
        score: 2,
        content:
          'Sint consectetur et do et reprehenderit non incididunt reprehenderit. Sint ad reprehenderit elit exercitation fugiat.',
      },
      {
        recordId: '5e95aa807cd9d4dd4fb06ccf',
        name: 'Abbott Mejia',
        score: 1,
        content:
          'Consequat ipsum incididunt ullamco eu in id cupidatat cupidatat veniam commodo exercitation. Velit ullamco nulla id consequat consectetur nostrud exercitation velit.',
      },
      {
        recordId: '5e95aa80d1925060b252a129',
        name: 'Keisha Holmes',
        score: 3,
        content:
          'Eu officia elit sit duis voluptate ea. In laborum irure officia ex nisi nisi cupidatat consequat elit eu et.',
      },
    ],
  },
};

const searchWithDropdownData = {
  labels: {
    loading: 'Searching...',
    noResults: 'Sorry, nothing to show.',
    toShortQuery: 'Your query needs to have more than 3 characters.',
  },
  data: [
    {
      name: 'Fixed TOC - table of contents for WordPress plugin',
      regularPrice: 20,
      salePrice: 18,
      currency: '$',
      id: '23234098AED',
    },
    {
      name: 'Jobify - The Most Popular WordpPress Job Board Theme',
      regularPrice: 0,
      salePrice: 3.99123,
      currency: 'zł',
      id: '23234238WER',
    },
    {
      name: 'Lorem ipsum',
      regularPrice: 99,
      salePrice: 99,
      currency: '$',
      id: '23423498AAA',
    },
    {
      name: 'Lorem ipsum negative',
      regularPrice: 99,
      salePrice: -99,
      currency: 'zł',
      id: '23423498AAA',
    },
    {
      name: 'Lorem ipsum lorem negative lorem',
      regularPrice: 99,
      salePrice: -99,
      currency: 'zł',
      id: '23423498AAA',
    },
  ],
};

const paginationData = {
  entriesOnPage: 10,
  siblingCount: 1,
  headers: ['ID', 'First name', 'Last name', 'Age', 'Email'],
  data: [
    {
      id: '1',
      firstName: 'Terry',
      lastName: 'Medhurst',
      age: 50,
      email: 'atuny0@sohu.com',
    },
    {
      id: '2',
      firstName: 'Sheldon',
      lastName: 'Quigley',
      age: 28,
      email: 'hbingley1@plala.or.jp',
    },
    {
      id: '3',
      firstName: 'Terrill',
      lastName: 'Hills',
      age: 38,
      email: 'rshawe2@51.la',
    },
    {
      id: '4',
      firstName: 'Miles',
      lastName: 'Cummerata',
      age: 49,
      email: 'yraigatt3@nature.com',
    },
    {
      id: '5',
      firstName: 'Mavis',
      lastName: 'Schultz',
      age: 38,
      email: 'kmeus4@upenn.edu',
    },
    {
      id: '6',
      firstName: 'Alison',
      lastName: 'Reichert',
      age: 21,
      email: 'jtreleven5@nhs.uk',
    },
    {
      id: '7',
      firstName: 'Oleta',
      lastName: 'Abbott',
      age: 31,
      email: 'dpettegre6@columbia.edu',
    },
    {
      id: '8',
      firstName: 'Ewell',
      lastName: 'Mueller',
      age: 29,
      email: 'ggude7@chron.com',
    },
    {
      id: '9',
      firstName: 'Demetrius',
      lastName: 'Corkery',
      age: 22,
      email: 'nloiterton8@aol.com',
    },
    {
      id: '10',
      firstName: 'Eleanora',
      lastName: 'Price',
      age: 37,
      email: 'umcgourty9@jalbum.net',
    },
    {
      id: '11',
      firstName: 'Marcel',
      lastName: 'Jones',
      age: 39,
      email: 'acharlota@liveinternet.ru',
    },
    {
      id: '12',
      firstName: 'Assunta',
      lastName: 'Rath',
      age: 42,
      email: 'rhallawellb@dropbox.com',
    },
    {
      id: '13',
      firstName: 'Trace',
      lastName: 'Douglas',
      age: 26,
      email: 'lgribbinc@posterous.com',
    },
    {
      id: '14',
      firstName: 'Enoch',
      lastName: 'Lynch',
      age: 21,
      email: 'mturleyd@tumblr.com',
    },
    {
      id: '15',
      firstName: 'Jeanne',
      lastName: 'Halvorson',
      age: 26,
      email: 'kminchelle@qq.com',
    },
    {
      id: '16',
      firstName: 'Trycia',
      lastName: 'Fadel',
      age: 41,
      email: 'dpierrof@vimeo.com',
    },
    {
      id: '17',
      firstName: 'Bradford',
      lastName: 'Prohaska',
      age: 43,
      email: 'vcholdcroftg@ucoz.com',
    },
    {
      id: '18',
      firstName: 'Arely',
      lastName: 'Skiles',
      age: 42,
      email: 'sberminghamh@chron.com',
    },
    {
      id: '19',
      firstName: 'Gust',
      lastName: 'Purdy',
      age: 46,
      email: 'bleveragei@so-net.ne.jp',
    },
    {
      id: '20',
      firstName: 'Lenna',
      lastName: 'Renner',
      age: 41,
      email: 'aeatockj@psu.edu',
    },
    {
      id: '21',
      firstName: 'Doyle',
      lastName: 'Ernser',
      age: 23,
      email: 'ckensleyk@pen.io',
    },
    {
      id: '22',
      firstName: 'Tressa',
      lastName: 'Weber',
      age: 41,
      email: 'froachel@howstuffworks.com',
    },
    {
      id: '23',
      firstName: 'Felicity',
      lastName: "O'Reilly",
      age: 46,
      email: 'beykelhofm@wikispaces.com',
    },
    {
      id: '24',
      firstName: 'Jocelyn',
      lastName: 'Schuster',
      age: 19,
      email: 'brickeardn@fema.gov',
    },
    {
      id: '25',
      firstName: 'Edwina',
      lastName: 'Ernser',
      age: 21,
      email: 'dfundello@amazon.co.jp',
    },
    {
      id: '26',
      firstName: 'Griffin',
      lastName: 'Braun',
      age: 35,
      email: 'lgronaverp@cornell.edu',
    },
    {
      id: '27',
      firstName: 'Piper',
      lastName: 'Schowalter',
      age: 47,
      email: 'fokillq@amazon.co.jp',
    },
    {
      id: '28',
      firstName: 'Kody',
      lastName: 'Terry',
      age: 28,
      email: 'xisherwoodr@ask.com',
    },
    {
      id: '29',
      firstName: 'Macy',
      lastName: 'Greenfelder',
      age: 45,
      email: 'jissetts@hostgator.com',
    },
    {
      id: '30',
      firstName: 'Maurine',
      lastName: 'Stracke',
      age: 31,
      email: 'kdulyt@umich.edu',
    },
    {
      id: '31',
      firstName: 'Ben',
      lastName: 'Hoffmann',
      age: 61,
      email: 'hoff.ben@mee.edu',
    },
    {
      id: '32',
      firstName: 'Sheldon',
      lastName: 'Quigley',
      age: 28,
      email: 'hbingley1@plala.or.jp',
    },
    {
      id: '33',
      firstName: 'Terrill',
      lastName: 'Hills',
      age: 38,
      email: 'rshawe2@51.la',
    },
    {
      id: '34',
      firstName: 'Miles',
      lastName: 'Cummerata',
      age: 49,
      email: 'yraigatt3@nature.com',
    },
    {
      id: '35',
      firstName: 'Mavis',
      lastName: 'Schultz',
      age: 38,
      email: 'kmeus4@upenn.edu',
    },
    {
      id: '36',
      firstName: 'Alison',
      lastName: 'Reichert',
      age: 21,
      email: 'jtreleven5@nhs.uk',
    },
    {
      id: '37',
      firstName: 'Oleta',
      lastName: 'Abbott',
      age: 31,
      email: 'dpettegre6@columbia.edu',
    },
    {
      id: '38',
      firstName: 'Ewell',
      lastName: 'Mueller',
      age: 29,
      email: 'ggude7@chron.com',
    },
    {
      id: '39',
      firstName: 'Demetrius',
      lastName: 'Corkery',
      age: 22,
      email: 'nloiterton8@aol.com',
    },
    {
      id: '40',
      firstName: 'Eleanora',
      lastName: 'Price',
      age: 37,
      email: 'umcgourty9@jalbum.net',
    },
    {
      id: '41',
      firstName: 'Marcel',
      lastName: 'Jones',
      age: 39,
      email: 'acharlota@liveinternet.ru',
    },
    {
      id: '42',
      firstName: 'Assunta',
      lastName: 'Rath',
      age: 42,
      email: 'rhallawellb@dropbox.com',
    },
    {
      id: '43',
      firstName: 'Trace',
      lastName: 'Douglas',
      age: 26,
      email: 'lgribbinc@posterous.com',
    },
    {
      id: '44',
      firstName: 'Enoch',
      lastName: 'Lynch',
      age: 21,
      email: 'mturleyd@tumblr.com',
    },
    {
      id: '45',
      firstName: 'Jeanne',
      lastName: 'Halvorson',
      age: 26,
      email: 'kminchelle@qq.com',
    },
    {
      id: '46',
      firstName: 'Trycia',
      lastName: 'Fadel',
      age: 41,
      email: 'dpierrof@vimeo.com',
    },
    {
      id: '47',
      firstName: 'Bradford',
      lastName: 'Prohaska',
      age: 43,
      email: 'vcholdcroftg@ucoz.com',
    },
    {
      id: '48',
      firstName: 'Arely',
      lastName: 'Skiles',
      age: 42,
      email: 'sberminghamh@chron.com',
    },
    {
      id: '49',
      firstName: 'Gust',
      lastName: 'Purdy',
      age: 46,
      email: 'bleveragei@so-net.ne.jp',
    },
    {
      id: '50',
      firstName: 'Lenna',
      lastName: 'Renner',
      age: 41,
      email: 'aeatockj@psu.edu',
    },
    {
      id: '51',
      firstName: 'Doyle',
      lastName: 'Ernser',
      age: 23,
      email: 'ckensleyk@pen.io',
    },
    {
      id: '52',
      firstName: 'Tressa',
      lastName: 'Weber',
      age: 41,
      email: 'froachel@howstuffworks.com',
    },
    {
      id: '53',
      firstName: 'Felicity',
      lastName: "O'Reilly",
      age: 46,
      email: 'beykelhofm@wikispaces.com',
    },
    {
      id: '54',
      firstName: 'Jocelyn',
      lastName: 'Schuster',
      age: 19,
      email: 'brickeardn@fema.gov',
    },
    {
      id: '55',
      firstName: 'Edwina',
      lastName: 'Ernser',
      age: 21,
      email: 'dfundello@amazon.co.jp',
    },
    {
      id: '56',
      firstName: 'Griffin',
      lastName: 'Braun',
      age: 35,
      email: 'lgronaverp@cornell.edu',
    },
    {
      id: '57',
      firstName: 'Piper',
      lastName: 'Schowalter',
      age: 47,
      email: 'fokillq@amazon.co.jp',
    },
    {
      id: '58',
      firstName: 'Kody',
      lastName: 'Terry',
      age: 28,
      email: 'xisherwoodr@ask.com',
    },
    {
      id: '59',
      firstName: 'Macy',
      lastName: 'Greenfelder',
      age: 45,
      email: 'jissetts@hostgator.com',
    },
    {
      id: '60',
      firstName: 'Maurine',
      lastName: 'Stracke',
      age: 31,
      email: 'kdulyt@umich.edu',
    },
    {
      id: '61',
      firstName: 'Ben',
      lastName: 'Hoffmann',
      age: 61,
      email: 'hoff.ben@mee.edu',
    },
    {
      id: '62',
      firstName: 'Assunta',
      lastName: 'Rath',
      age: 42,
      email: 'rhallawellb@dropbox.com',
    },
    {
      id: '63',
      firstName: 'Trace',
      lastName: 'Douglas',
      age: 26,
      email: 'lgribbinc@posterous.com',
    },
    {
      id: '64',
      firstName: 'Enoch',
      lastName: 'Lynch',
      age: 21,
      email: 'mturleyd@tumblr.com',
    },
    {
      id: '65',
      firstName: 'Jeanne',
      lastName: 'Halvorson',
      age: 26,
      email: 'kminchelle@qq.com',
    },
    {
      id: '66',
      firstName: 'Trycia',
      lastName: 'Fadel',
      age: 41,
      email: 'dpierrof@vimeo.com',
    },
    {
      id: '67',
      firstName: 'Bradford',
      lastName: 'Prohaska',
      age: 43,
      email: 'vcholdcroftg@ucoz.com',
    },
    {
      id: '68',
      firstName: 'Arely',
      lastName: 'Skiles',
      age: 42,
      email: 'sberminghamh@chron.com',
    },
    {
      id: '69',
      firstName: 'Gust',
      lastName: 'Purdy',
      age: 46,
      email: 'bleveragei@so-net.ne.jp',
    },
    {
      id: '70',
      firstName: 'Lenna',
      lastName: 'Renner',
      age: 41,
      email: 'aeatockj@psu.edu',
    },
    {
      id: '71',
      firstName: 'Doyle',
      lastName: 'Ernser',
      age: 23,
      email: 'ckensleyk@pen.io',
    },
    {
      id: '72',
      firstName: 'Tressa',
      lastName: 'Weber',
      age: 41,
      email: 'froachel@howstuffworks.com',
    },
    {
      id: '73',
      firstName: 'Felicity',
      lastName: "O'Reilly",
      age: 46,
      email: 'beykelhofm@wikispaces.com',
    },
    {
      id: '74',
      firstName: 'Jocelyn',
      lastName: 'Schuster',
      age: 19,
      email: 'brickeardn@fema.gov',
    },
    {
      id: '75',
      firstName: 'Edwina',
      lastName: 'Ernser',
      age: 21,
      email: 'dfundello@amazon.co.jp',
    },
    {
      id: '76',
      firstName: 'Griffin',
      lastName: 'Braun',
      age: 35,
      email: 'lgronaverp@cornell.edu',
    },
    {
      id: '77',
      firstName: 'Piper',
      lastName: 'Schowalter',
      age: 47,
      email: 'fokillq@amazon.co.jp',
    },
    {
      id: '78',
      firstName: 'Kody',
      lastName: 'Terry',
      age: 28,
      email: 'xisherwoodr@ask.com',
    },
    {
      id: '79',
      firstName: 'Macy',
      lastName: 'Greenfelder',
      age: 45,
      email: 'jissetts@hostgator.com',
    },
    {
      id: '80',
      firstName: 'Maurine',
      lastName: 'Stracke',
      age: 31,
      email: 'kdulyt@umich.edu',
    },
  ],
};

app.get('/api/data/ratingStars', (req, res) => {
  res.json(ratingStarsData);
});

app.get('/api/data/navigationMenu', (req, res) => {
  res.json(navigationData);
});

app.get('/api/data/searchData', (req, res) => {
  res.json(searchWithDropdownData);
});

app.get('/api/data/pagination-table', (req, res) => {
  res.json(paginationData);
});

app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
