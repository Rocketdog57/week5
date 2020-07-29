console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}{{internet.email}}"));

function randomCard(){
var randomName = faker.name.findName();
document.getElementById("name").innerHTML = randomName;

var randomEmail = faker.internet.email();
document.getElementById("email").innerHTML = randomEmail;
  
var randomPic = faker.image.avatar(); 
document.getElementById("image").src = randomPic;

}

randomCard()
