// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'MuhammadBilal848', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
          // projects: [MuhammadBilal848/Power-BI-Dashboard-For-US-Mass-Shootings,MuhammadBilal848/Power-BI-Dashboard-For-Accidents,MuhammadBilal848/ChatGpt-Api-Fine-Tuning,
          //           MuhammadBilal848/Portfolio-Website,MuhammadBilal848/Vector-DB-Qdrant], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']

        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['MuhammadBilal848/Pytorch-Implementation-of-Image-Style-Transfer-Paper-', 'MuhammadBilal848/GenView','MuhammadBilal848/Bone-Fracture-Identifier',
                  'MuhammadBilal848/Next-Word-Predictor-LSTM-Implementation-','MuhammadBilal848/Query-X','MuhammadBilal848/Real-Time-License-Plate-Extraction-Using-Custom-Trained-YOLOv8',
                  'MuhammadBilal848/Student-Performance-Indicator','MuhammadBilal848/BlurX'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    // external: {
    //   header: 'My Projects',
    //   // To hide the `External Projects` section, keep it empty.
    //   projects: [
    //     {
    //       title: 'Project Name',
    //       description:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //       imageUrl:
    //         'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
    //       link: 'https://example.com',
    //     },
    //     {
    //       title: 'Project Name',
    //       description:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //       imageUrl:
    //         'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
    //       link: 'https://example.com',
    //     },
    //   ],
    // },
  },
  seo: {
    title: 'Bilal Haneef',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'bilal-haneef-32014a1a2',
    twitter: 'mbhqs',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: 'muhammadbilalhaneefqureshi48', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'bilalhanif848',
    dev: '',
    stackoverflow: '13754963/muhammad-bilal-haneef-qureshi', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'bilalhanif848@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'NLP',
    'LLMs',
    'Aws Cloud',
    'Azure Cloud',
    'Vector Databases',
    'Python',
    'C',
    'Bash',
    'Html / Css',
    'Sql',
    'TensorFlow',
    'Pytorch',
    'OpenCV',
    'Keras',
    'Scikit Image',
    'NLTK',
    'LangChain',
    'Scikit Learn',
    'Selenium',
    'Flask',
    'FastAPI',
    'Librosa',
  ],
  
  experiences: [
    
    {
      company: 'Phoenix Technologies',
      position: 'ML Engineer',
      from: 'February 2024',
      to: 'April 2024',
      companyLink: 'https://phoenixtechnologies.co/',
    },
    {
      company: 'Folio3 Pvt. Ltd.',
      position: 'AI Intern',
      from: 'July 2023',
      to: 'September 2023',
      companyLink: 'https://folio3.com/',
    },
    {
      company: 'Proxima AI',
      position: 'Data Science Intern',
      from: 'October 2022',
      to: 'March 2023',
      companyLink: 'https://www.proxima.pk/',
    },
  ],
  certifications: [
    {
      name: 'Machine Learning Specialization (Coursera)',
      body: '',
      year: 'February 8, 2023',
      link: 'https://www.coursera.org/account/accomplishments/specialization/XJP4NXRVSKLV',
    },
        {
      name: 'Deep Learning Specialization (Coursera)',
      body: '',
      year: 'April 12, 2023',
      link: 'https://www.coursera.org/account/accomplishments/specialization/DK75F53KP4AX',
    },
        {
      name: 'Natural Language Processing with Classification and Vector Spaces (Coursera)',
      body: '',
      year: 'November 18, 2023',
      link: 'https://coursera.org/share/87c6d5d270057cde5099ae75e50d1e9a',
    },
        {
      name: 'Statistics For Business Analysis (365DataScience)',
      body: '',
      year: 'November 16, 2022',
      link: 'https://learn.365datascience.com/certificates/CC-8BCBC8E2B1/',
    },
        {
      name: 'Optical Character Recognition (OCR) MasterClass in Python (Udemy)',
      body: '',
      year: 'May 05, 2023',
      link: 'https://www.udemy.com/certificate/UC-4042a651-fa67-444b-8f08-5060816b8cdf/',
    },
        {
      name: 'Data Analysis With Python (FreeCodeCamp)',
      body: '',
      year: 'September 26, 2022',
      link: 'https://www.freecodecamp.org/certification/fcc14953419-0316-46cd-9128-9a67a4d406b6/data-analysis-with-python-v7',
    },
  ],
  educations: [
    {
      institution: 'Karachi University - UBIT',
      degree: 'BSSE',
      from: '2020',
      to: '2023',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'bilalhanif848', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
