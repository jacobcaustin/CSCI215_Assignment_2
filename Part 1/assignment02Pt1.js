
//this generates a random number between one and 4 and assigns it to the var 'pic'
var pic = Math.floor((Math.random() * 4));

//creates an array to store the website URLS
var picList = [];
picList[0] = "http://cdn.ebaumsworld.com/mediaFiles/picture/1035099/85708057.jpg";
picList[1] = "https://404store.com/2017/12/08/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg";
picList[2] = "http://www.lozano-hemmer.com/image_sets/method_random/method_random2.jpg";
picList[3] = "https://www.theguardian.pe.ca/media/photologue/photos/cache/NYET112-618_2018_222425_large.jpg";
picList[4] = "https://media0ch-a.akamaihd.net/26/15/dee141146f93984daf47757c9f92b9d7.jpeg";


//this uses the DOM to grab the picture element in the html, and create the img and src tags, and link them by
//calling a link from the array using the random number generatd in the pic variable
var divNode = document.getElementById("picture");
var imgNode = document.createElement("img");
var srcAttr = document.createAttribute("src");
srcAttr.value = picList[pic];
imgNode.setAttributeNode(srcAttr);
divNode.appendChild(imgNode);
alert("CONGRATS HOMIE YOU GOT PICTURE #" + (pic + 1) + " ");






