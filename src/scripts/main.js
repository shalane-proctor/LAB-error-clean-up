import '../styles/main.scss';
import htmlStructure from './htmlStructure';
import header from './header';
import startSortingBtn from './startSortingBtn';
import events from './events';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

startApp();
