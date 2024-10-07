import { MultistepForm } from '@/components/11_MultistepForm-hard/components';

const data = {
  'navigation-labels': {
    'next-button-label': 'Next',
    'prev-button-label': 'Prev',
    'submit-button-label': 'Submit',
    'step-naming': 'Step',
    'summary-naming': 'Summary',
  },
  form: [
    {
      title: 'Your details',
      questions: [
        {
          type: 'text',
          id: 'form-surnname',
          name: 'surname',
          label: 'Your Surname:',
          validationMessage:
            'Surname needs to be at least 2 and less than 30 characters long bla bla bla',
          validationRegexp: '^[a-zA-Z\\s\\-]{2,30}$',
        },
        {
          type: 'text',
          id: 'form-first-name',
          name: 'first-name',
          label: 'Your Name: ',
          validationMessage:
            'Surname needs to be at least 2 and less than 30 characters long bla bla bla',
          validationRegexp: '^[a-zA-Z\\s\\-]{2,30}$',
        },
        {
          type: 'text',
          id: 'form-second-name',
          name: 'second-name',
          label: 'Your second Name: ',
          validationMessage:
            'Surname needs to be at least 2 and less than 30 characters long bla bla bla',
          validationRegexp: '^[a-zA-Z\\s\\-]{2,30}$',
        },
        {
          type: 'email',
          id: 'form-email',
          name: 'email',
          label: 'Email: ',
          validationMessage:
            'Surname needs to be at least 2 and less than 30 characters long bla bla bla',
          validationRegexp: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
        },
      ],
    },
    {
      title: 'Your address',
      questions: [
        {
          label: 'City',
          type: 'text',
          id: 'form-city',
          name: 'city',
          validationMessage:
            'Surname needs to be at least 2 and less than 30 characters long bla bla bla',
          validationRegexp: '^[a-zA-Z\\s\\-]{2,200}$',
        },
        {
          label: 'Street',
          type: 'text',
          id: 'form-street',
          name: 'form-street',
          validationMessage:
            'Surname needs to be at least 2 and less than 30 characters long bla bla bla',
          validationRegexp: '^[a-zA-Z\\s\\-]{2,200}$',
        },
        {
          label: 'Postal Code',
          type: 'text',
          id: 'form-postal-code',
          name: 'postal-code',
          validationMessage: 'Postral code needs to have format: XX-XXX',
          validationRegexp: '^\\d{2}-\\d{3}$',
        },
      ],
    },
    {
      title: 'Something about you ',
      questions: [
        {
          label: 'Age',
          type: 'number',
          id: 'form-age',
          name: 'age',
          validationMessage:
            'Surname needs to be at least 2 and less than 30 characters long bla bla bla',
          validationRegexp: '^(?:130|1[0-2][0-9]|[1-9]?[0-9])$',
        },
        {
          label: 'Hobby',
          type: 'text',
          id: 'form-hobby',
          name: 'hobby',
          validationMessage:
            'Surname needs to be at least 2 and less than 30 characters long bla bla bla',
          validationRegexp: '^[a-zA-Z\\s\\-]{2,30}$',
        },
      ],
    },
    {
      title: 'Last step...',
      questions: [
        {
          label: 'Bleh',
          type: 'text',
          id: 'form-bleh',
          name: 'bleh',
          validationMessage:
            'Surname needs to be at least 2 and less than 30 characters long bla bla bla',
          validationRegexp: '^[a-zA-Z\\s\\-]{2,200}$',
        },
        {
          label: 'Favourite pet',
          type: 'text',
          id: 'form-pet',
          name: 'pet',
          validationMessage:
            'Surname needs to be at least 2 and less than 30 characters long bla bla bla',
          validationRegexp: '^[a-zA-Z\\s\\-]{2,200}$',
        },
        {
          label: 'Elementary School Name: ',
          type: 'text',
          id: 'form-elementary-school',
          name: 'elementary-school',
          validationMessage:
            'Surname needs to be at least 2 and less than 30 characters long bla bla bla',
          validationRegexp: '^[a-zA-Z\\s\\-]{2,200}$',
        },
      ],
    },
  ],
};

const MultistepFormPage = () => {
  return <MultistepForm data={data} />;
};

export default MultistepFormPage;
