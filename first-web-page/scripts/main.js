let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myImage =  document.querySelector('img');
let myButton = document.querySelector('button');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/header1.jpg'){
        myImage.setAttribute('src', 'images/header2.jpg')
    }
    else {
        myImage.setAttribute('src', 'images/header1.jpg')
    }
}

function setUserName(){
    let myName = prompt('Please Enter Name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }