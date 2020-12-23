import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ademola | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is ',
  name: 'Ademola Ogunmokun',
  subtitle:
    'I am a web developer skilled in both front-end and back-end web development. My stacks include Django, Bootstrap, CSS and JavaScript. I am also a skilled data analyst, comfortable with Excel, Pandas and SQL',
  cta: 'know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile_pic.jpg',
  paragraphOne:
    'I am a passion driven young man with excellent human skills. I have always enjoyed the challenges posed by problems that needs to be solved and I derives great joy in problem solving.',
  paragraphTwo:
    'I am a graduate of Industrial Chemistry from Federal University of Technology Akure, and I posses excellent analytical and problems solving skills',
  paragraphThree:
    'My area of concentration in IT include automation, web proramming and data analysis. I am confortable working with Python programming language, JavaScript, and SQL ',
  resume: '', // if no resume, the button will not show ,https://www.resumemaker.online/es.php
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'django-admin.png',
    title: 'Django-admin user interface extension',
    info:
      'An extension of django admin change list page displaying user metrics and also custom action button, in addition with email functionality ',
    info2: '',
    url: 'http://myprojectusermetrics.herokuapp.com/myapp/profile/',
    repo: 'https://github.com/Ademola101/Django-back-end-extension-', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Django_board.png',
    title: 'Django board application',
    info:
      'A web app in which topics are created under each appopriate sections and other registered users contributes',
    info2: '',
    url: '',
    repo: 'https://github.com/Ademola101/My-Django-project-', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'data.png',
    title: 'Story telling with data',
    info:
      'Data analysis and visualization of some selected raw data in order to gain valuable insight on the data. This is using Python data science libraries. ',
    info2: '',
    url: '',
    repo: 'https://github.com/Ademola101/Data-visualization-', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'For any information or enquiries please contact me through email',
  btn: 'Click to send email ',
  email: 'ademolaogunmokun@yahoo.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'http://www.twitter.com/ademola_isr',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'http://www.linkedin.com/in/ademola-ogunmokun',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Ademola101',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
