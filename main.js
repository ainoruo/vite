import './style.css'
import { setupCounter } from './counter.js'
import { showJoke } from './joke.js';
import {showPics} from './catpics.js';
import {showEntries} from './diary.js';

document.querySelector('#app').innerHTML = `Moi täällä ollaan`

//haetaan nappula ja tarjotaan showJoke funktiolle
let element = document.querySelector('.chuck');
showJoke(element);

showJoke(document.querySelector('.toinen'));

showPics(document.querySelector('.pics'));

showEntries(document.querySelector('.diary'));


  


