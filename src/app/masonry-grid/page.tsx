import { MasonryGrid } from '@/components/7_MasonryGrid-medium/components';

const data = {
  gridOptions: {
    gridGap: 20,
    gridAutoRows: 1,
  },
  images: [
    {
      id: '000-pic',
      src: '/masonry/0.jpg',
      alt: 'Short description',
      comment:
        'We denounce with righteous, the charms of pleasure of the moment.',
    },
    {
      id: '001-pic',
      src: '/masonry/1.jpg',
      alt: 'Short description',
      comment:
        'On the other hand, we denounce with righteous, the charms of pleasure of the moment, so blinded by desire.',
    },
    {
      id: '002-pic',
      src: '/masonry/2.jpg',
      alt: 'Short description',
      comment:
        'Demoralized by the charms of pleasure of the moment, so blinded by desire.',
    },
    {
      id: '003-pic',
      src: '/masonry/3.jpg',
      alt: 'Short description',
      comment:
        'Denounce with righteous indignation and dislike men of the moment, so blinded by desire.',
    },
    {
      id: '004-pic',
      src: '/masonry/4.jpg',
      alt: 'Short description',
      comment:
        'On the other hand, we denounce with righteous, the charms of pleasure of the moment, so blinded by desire.',
    },
    {
      id: '005-pic',
      src: '/masonry/5.jpg',
      alt: 'Short description',
      comment:
        'Demoralized by the charms of pleasure of the moment, so blinded by desire.',
    },
    {
      id: '006-pic',
      src: '/masonry/6.jpg',
      alt: 'Short description',
      comment:
        'Denounce with righteous indignation and dislike men of the moment, so blinded by desire.',
    },
    {
      id: '007-pic',
      src: '/masonry/7.jpg',
      alt: 'Short description',
      comment:
        'On the other hand, we denounce with righteous, the charms of pleasure of the moment, so blinded by desire.',
    },
    {
      id: '008-pic',
      src: '/masonry/8.jpg',
      alt: 'Short description',
      comment:
        'Denounce with righteous indignation and dislike men of the moment, so blinded by desire.',
    },
    {
      id: '009-pic',
      src: '/masonry/9.jpg',
      alt: 'Short description',
      comment:
        'Denounce with righteous indignation and dislike men of the moment, so blinded by desire.',
    },
    {
      id: '010-pic',
      src: '/masonry/10.jpg',
      alt: 'Short description',
      comment:
        'On the other hand, we denounce with righteous, the charms of pleasure of the moment, so blinded by desire.',
    },
    {
      id: '011-pic',
      src: '/masonry/11.jpg',
      alt: 'Short description',
      comment:
        'On eguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.',
    },
    {
      id: '012-pic',
      src: '/masonry/12.jpg',
      alt: 'Short description',
      comment: 'Charms of pleasure of the moment, so blinded by desire.',
    },
    {
      id: '013-pic',
      src: '/masonry/13.jpg',
      alt: 'Short description',
      comment:
        'We denounce with righteous indignation and dislike of the moment, so blinded by desire.',
    },
    {
      id: '014-pic',
      src: '/masonry/14.jpg',
      alt: 'Short description',
      comment: 'On the moment, so blinded by desire.',
    },
    {
      id: '015-pic',
      src: '/masonry/15.jpg',
      alt: 'Short description',
      comment:
        'Denounce with righteous indignation and dislike men of the moment, so blinded by desire.',
    },
    {
      id: '016-pic',
      src: '/masonry/16.jpg',
      alt: 'Short description',
      comment: 'On the moment, so blinded by desire.',
    },
    {
      id: '017-pic',
      src: '/masonry/17.jpg',
      alt: 'Short description',
      comment:
        'Denounce with righteous indignation and dislike men of the moment, so blinded by desire.',
    },
    {
      id: '018-pic',
      src: '/masonry/18.jpg',
      alt: 'Short description',
      comment: 'On the moment, so blinded by desire.',
    },
    {
      id: '019-pic',
      src: '/masonry/19.jpg',
      alt: 'Short description',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.',
    },
    {
      id: '020-pic',
      src: '/masonry/20.jpg',
      alt: 'Short description',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius..',
    },
  ],
};

const MasonryGridPage = async () => {
  return <MasonryGrid images={data.images} />;
};

export default MasonryGridPage;
