import trueImage from '../img/project-thumbs/true-image.png';
import khronotes from '../img/project-thumbs/khronotes.png';
import leo from '../img/project-thumbs/projectleo.png';
import android from '../img/project-thumbs/android-app.jpg';
import discord from '../img/project-thumbs/crowd-bot.png';

const portfolios = [
  {
    id: 1,
    category: 'Web Apps',
    image: trueImage,
    link1: 'http://ti-enterprise.com/',
    link2: 'https://github.com/josh7951/TI-Enterprise',
    title: 'TI-Enterprise',
    text: 'Brochure site created using Laravel, Vue.js, and Bulma.io. Created a custom CMS to give the admin the ability to update certain web pages'
  },
  {
    id: 2,
    category: 'Web Apps',
    image: leo,
    link1: 'https://project-leo.dev/',
    link2: 'https://github.com/josh7951/project-leo',
    title: 'Project-LEO',
    text: 'CSUN Senior Capstone project. Created an application geared towards teaching intermediate school students entry level programming'
  },
  {
    id: 3,
    category: 'Web Apps',
    image: khronotes,
    link1: 'https://khronotes.com/',
    link2: 'https://github.com/Inviro/584-scheduler',
    title: 'KhroNotes',
    text: 'Simple Web Application that features a working CRUD system to allow users to create and update their schedule planners. Built using Laravel and Vue.js'
  },
  {
    id: 4,
    category: 'Mobile Apps',
    image: android,
    link1: '',
    link2: 'https://github.com/CoconutFresh/RunningApp',
    title: 'Fitness App - Android',
    text: 'Developed the database architecture using Firebase Realtime/Firestore database to store user account information and fitness data'
  },
  {
    id: 5,
    category: 'Software',
    image: discord,
    link1: '',
    link2: 'https://github.com/josh7951/Crowd-Bot',
    title: 'Crowd Bot - Discord',
    text: 'A simple bot used to display the live crowd data from a user query input. Uses the Discord API and BestTime.app API. Written in Python'
  }
]

export default portfolios;