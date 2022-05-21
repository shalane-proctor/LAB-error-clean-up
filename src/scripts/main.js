import '../styles/main.scss';
import htmlStructure from './components/htmlElements/htmlStructure';
import header from './components/htmlElements/header';
import startSortingBtn from './components/buttonElements/startSortingBtn';
import events from './components/events';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

startApp();
