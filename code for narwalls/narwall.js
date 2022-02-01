console.log('Narwalls of the world, unite!');

chrome.runtime.onMessage.addListener(gotMessage);

let filenames = [
  "Narwall1.jpg",
  "Narwall2.jpg",
  "Narwall3.jpg",
  "Narwall4.jpg",
  "Narwall5.jpg"
];

let imgs = document.getElementsByTagName('img');

for (imgElt of imgs) {
  let r = Math.floor(Math.random() * filenames.length);
  let file = 'Narwalls/' + filenames[r];
  let url = chrome.extension.getURL(file);
    imgElt.src = url;
console.log(url);
}

function gotMessage(message, sender, sendResponse) {
console.log(message.txt);
if (message.txt === "hello") {
  let paragraphs = document.getElementsByTagName('p');
  for (elt of paragraphs) {
    elt.style['background-color'] = '#FF00FF';
  }
}
}
