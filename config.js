/**
 * Config
 */
module.exports = {
  // String[] - Array of names
  names: ['Link', 'Zelda'],
  // Date - Date of the event
  date: 'January 23, 2021',
  // String - Location of the event
  location: 'Hyrule, HY',
  // URL - Main invite image
  // sample photo by unsplash.com/@alexiby
  imageLink: 'sample/alex-iby-LaHo9Set3bI-unsplash.jpg',
  // Date - Date by which guests should RSVP
  rsvpDate: 'Jan 1, 2021',
  // URL - URL to RSVP website. Maybe through anrsvp.com?
  rsvpUrl: 'https://github.com/',
  // String - Menu bar link text
  homeTitle: '#linkedup',
  // URL - URL for menu bar link
  homeUrl: '#',
  sections: {
    // Object[] - List of wedding events
    events: [
      {
        // String
        title: 'Welcome Happy Hour',
        // String
        description: `Grab a drink and mingle at Gerudo Town's famous bar.`,
        // HTML
        time: 'Friday <br> January 22, 2021 <br> 7:00 pm - 10:00 pm',
        // HTML
        location: 'The Noble Canteen <br> 1 Gerudo St. <br> Gerudo Town, HY',
        // String
        dressCode: 'Smart Casual',
        // URL - Map button URL
        mapUrl: 'https://github.com/',
        // URL - Calendar button URL
        calendarUrl: 'https://github.com/',
      },
      {
        title: 'Ceremony & Reception',
        description: `The main event!`,
        time: 'Saturday <br> January 23, 2021 <br> 4:00 pm',
        location: 'Hyrule Castle <br> 100 Castle Ln. <br> Hyrule, HY',
        dressCode: 'Cocktail Attire',
        mapUrl: 'https://github.com/',
        calendarUrl: 'https://github.com/',
      },
    ],
    // Object - Photos section
    photos: {
      // String
      description: 'Our Story',
      // URL - Link to photo album
      link: 'https://github.com/',
      // Object[]
      images: [
        {
          // URL
          // sample photo by unsplash.com/@alexiby
          src: 'sample/alex-iby-LaHo9Set3bI-unsplash.jpg',
          // String - Title/year of photo
          year: '2010',
          // String
          description: 'The quick brown fox jumps over the lazy dog.',
        },
        {
          // sample photo by unsplash.com/@madveloso
          src: 'sample/madalena-veloso-qE24hyVwAdU-unsplash.jpg',
          year: '2015',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          // sample photo by unsplash.com/@jenellehayes
          src: 'sample/jenelle-hayes-DYEpCQUyPXQ-unsplash.jpg',
          year: '2020',
          description: 'But wait there\'s more!',
        },
      ],
    },
    // Object[] - List of FAQs sections
    details: [
      {
        title: 'Event FAQs',
        // Object[] - List of FAQs about the event
        faqs: [
          {
            // String
            question: 'By when should I RSVP?',
            // String
            answer: 'Jan 1, 2021 please!',
          },
          {
            question: 'Any attire notes I should be aware of',
            answer: 'The quick brown fox jumps over the lazy dog.',
          },
          {
            question: 'Will there be parking?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
        ],
      },
      {
        title: 'Visiting Hyrule',
        // Object[] - List of FAQs about the event
        faqs: [
          {
            question: 'Where is a good place to stay?',
            answer: 'The quick brown fox jumps over the lazy dog.',
          },
          {
            question: 'What should I know about getting around?',
            answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
          },
        ],
      },
    ],
    registry: {
      // HTML
      description: `Celebrating with you is the greatest present! Should you choose to additionally get us a gift, we would graciously accept gifts from the registries below.<br><br><span class='subtitle is-6'>Password: <i>triforce</i><span>`,
      charities: [
        {
          // String
          description: 'ACLU',
          // URL
          link: 'https://action.aclu.org/give/now',
        },
        {
          description: 'Sierra Club',
          link: 'https://www.sierraclub.org/ways-to-give',
        },
      ],
      stores: [
        {
          description: 'Giant Hearty Radishes',
          link: 'https://github.com/',
        },
        {
          description: 'Korok Seeds',
          link: 'https://github.com/',
        },
      ],
    },
  },
  style: {
    // CSS - Style for the background of a few interface elements.
    // pink-peach gradient
    backgroundStyle: 'background-color: #d9e4f5;background-image: linear-gradient(315deg, #ffedc8 0%, #ffbfa9 74%);',
    // URL - Photo after event section
    // sample photo by unsplash.com/@synysternl
    interstitialPhoto1: 'sample/dennis-flinsenberg-RAZM-x9BjQU-unsplash.jpg',
    // URL - Photo in FAQs section
    // sample photo by unsplash.com/@synysternl
    interstitialPhoto2: 'sample/dennis-flinsenberg-RAZM-x9BjQU-unsplash.jpg',
    // URL - Photo after registry section
    // sample photo by unsplash.com/@synysternl
    interstitialPhoto3: 'sample/dennis-flinsenberg-RAZM-x9BjQU-unsplash.jpg',
  },
  // Object - Stuff specific for the save-the-date template
  save: {
    // URL - Link to RSVP/interest form
    formLink: 'https://github.com/',
    // URL
    calendarLink: 'https://github.com/',
    // HTML
    footnote: `We're excited to celebrate with you!`,
  }
};
