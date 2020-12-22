export let easy; 
export let medium = []; 
export let hard = []; 
import {easyQuestions} from './base.js';
if (localStorage.getItem('easyStorage') == null) {       
    easy = easyQuestions;
} else {
    easy = JSON.parse(localStorage.getItem('easyStorage'));    
}
if (localStorage.getItem('mediumStorage') == null) {       
    medium = [];
} else {
    medium = JSON.parse(localStorage.getItem('mediumStorage'));    
}
if (localStorage.getItem('hardStorage') == null) {       
    hard = [];
} else {
    hard = JSON.parse(localStorage.getItem('hardStorage'));    
}


