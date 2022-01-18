// styles
import 'normalize.css';
import './assets/styles/style.scss'

//components
import './ui-components/ui-sandwich/ui-sandwich'

// modules

// svg
import './js/svg-sprite'

// Добавить img из assets с хэшем через js
// import img from './assets/images/img.jpg';

const imgBlock = document.querySelector('.img-js-test');
imgBlock.innerHTML = `
    <img src=${img} alt="imj-js-test">
`;


const userStack = {
    language: 'JavaScript',
    framework: 'Vue'
}

const user = {
    name: 'Elena',
    age: 34,
    ...userStack
}

console.log(user)


