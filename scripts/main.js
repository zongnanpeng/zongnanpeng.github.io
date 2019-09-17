let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === '../images/firefox.icon.jpg') {
        myImage.setAttribute('src', '../images/th.jpg')
    } else[
        myImage.setAttribute('src', '../images/firefox.icon.jpg')
    ]
}




const setUserName = () => {
    let myName = prompt('请输入你的名字:');
    localStorage.setItem('name', myName);
    return myName;
}

const setHeading = () => {
    let username = setUserName();
    let myheading = document.querySelector('h1');
    myheading.textContent = 'Mozilla 酷毙了,' + username + '!';
}

let username = localStorage.getItem('name');
console.log(username);

if (username) {
    setHeading();
} else {
    setUserName();
    setHeading();
}
let myButton = document.querySelector('button');
myButton.addEventListener('click', setHeading);
