let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === '../images/firefox.icon.jpg') {
        myImage.setAttribute('src', '../images/th.jpg')
    } else[
        myImage.setAttribute('src', '../images/firefox.icon.jpg')
    ]
}


