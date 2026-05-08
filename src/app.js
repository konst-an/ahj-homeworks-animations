import './style.css';
import Collapse from './Collapse';

const button = document.querySelector('.collapse-btn');
const content = document.querySelector('.collapse-content');

new Collapse(button, content);