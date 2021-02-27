'use strict';

// const box = document.getElementById('box');
// //console.log(box);

// const btns = document.getElementsByTagName('button');
// console.log(btns[1]);

// const circles = document.getElementsByClassName("circle");
// console.log(circles[2]);

// const hearts = document.querySelectorAll('.heart');
// console.log(hearts);
// // hearts.forEach(item => {
// //     console.log(item);
// // });

// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);


const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName("circle"),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for(let i = 0; i< hearts.length; i++){
//     hearts[i].style.backgroundColor = 'purple';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'purple';
});

const div = document.createElement('div');
//const text = document.createTextNode('I am here');

div.classList.add('black');

document.body.append(div);
//wrapper.prepend(div);

//hearts[0].before(div);
//hearts[1].after(div);

//circles[0].remove();

//hearts[1].replaceWith(circles[0]);

div.innerHTML = '<h1>Hello World!</h1>';
//div.textContent = 'Hello World';

div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');