'use strict';

// localStorage.clear();
// localStorage.setItem('number', 5);
// localStorage.getItem('number');

// console.log(localStorage.getItem('number'));

const checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}


if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
}


checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';


    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const person = {
    name: "Alex",
    age: 35
};

const serializedPerson = JSON.stringify(person);
// localStorage.setItem('alex', serializedPerson);
localStorage.setItem('alex', person);
// console.log(JSON.parse(localStorage.getItem('alex')));
console.log(localStorage.getItem('alex'));