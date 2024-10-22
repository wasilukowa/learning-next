const data = require('./homePageData.json');

const express = require('express');
// import { createNavigationData } from './utils.js';

const app = express();
const PORT = 3001;

type TSingleDataItemInformation = {
  name: string;
  id: string;
  url: string;
};

type TData = {
  // home: TSingleDataItemInformation & {
  //   data: any;
  // {
  //   header: HeaderCacheProps;
  //   home: HomeProps;
  // };
  // };
  ratingStars: TSingleDataItemInformation & {
    data: any;
    // data: RatingStarsProps;
  };
  useMemo: TSingleDataItemInformation & {
    data: any;

    // data: UseMemoStateUsageProps;
  };
  useGeo: TSingleDataItemInformation & {
    data: any;
    // data: UseGeoUsageExampleProps;
  };
  modal: TSingleDataItemInformation & {
    data: any;
    // data: ModalUsageExampleProps;
  };
  searchWithDropdown: TSingleDataItemInformation & {
    data: any;
    // data: SearchWithDropdownProps;
  };
  tableWithPagination: TSingleDataItemInformation & {
    data: any;
    // data: PaginatedTableProps;
  };
  masonryGrid: TSingleDataItemInformation & {
    data: any;
    // data: MasonryGridProps;
  };
  useIntersectionObserver: TSingleDataItemInformation & {
    data: any;
    // data: TIntersectionObserverToAddClassUsageProps;
  };
  infiniteHumanList: TSingleDataItemInformation & {
    data: any;
    // data: InfiniteHumanListProps;
  };
  passwordInput: TSingleDataItemInformation & {
    data: any;
    // data: PasswordInputProps;
  };
  multistepForm: TSingleDataItemInformation & {
    data: any;
    // data: MultistepFormProps;
  };
};

const createNavigationData = (data: TData) => {
  const navigationItems: TSingleDataItemInformation[] = [];
  Object.keys(data).forEach((key) => {
    const item = data[key as keyof TData];
    const newItem = {
      name: item.name,
      id: item.id,
      url: item.url,
    };
    navigationItems.push(newItem);
  });
};

const navigationData = createNavigationData(data);

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

import { Request, Response } from 'express';

app.get('/api/data/navigationMenu', (req: Request, res: Response) => {
  res.json(navigationData);
});

app.get('/api/data/ratingStars', (req: Request, res: Response) => {
  res.json(data.ratingStars.data);
});

app.get('/api/data/searchData', (req: Request, res: Response) => {
  res.json(data.searchWithDropdown.data);
});

// app.get('/api/data/pagination-table', (req, res) => {
//   res.json(paginationData);
// });

app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
