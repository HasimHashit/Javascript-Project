//Variables
var myVar;
var randomNames;
const timeMilliSec = 3000; //this is equal to 6hours when converted to hours
mayVar = setTimeout(random_Words,timeMilliSec);
console.log('waiting....');
clearTimeout(myVar);


//This is where the messages get picked at random and get sent
function random_Words(){
  var messagefun;
    var items = [
    'Be kind, for whenever kindness becomes part of something, it beautifies it. Whenever it is taken from something, it leaves it tarnished. Prophet Muhammad (peace be upon him)',

    'The best among you is the one who doesn’t harm others with his tongue and hands. Prophet Muhammad (peace be upon him)',

    'A good man treats women with honour. Prophet Muhammad (peace be upon him)',

    'The greatest of richness is the richness of the soul. Prophet Muhammad (peace be upon him)',

   'There is reward for kindness to every living thing.” Prophet Muhammad (peace be upon him)',

   'Strive always to excel in virtue and truth. Prophet Muhammad (peace be upon him)',

   'The greatest jihad (struggle/striving) is to battle your own soul, to fight the evil within yourself. Prophet Muhammad (peace be upon him)',

   'The strongest among you is the one who controls his anger. Prophet Muhammad (peace be upon him)',

   'God does not look at your forms and possessions but he looks at your hearts and your deeds. Prophet Muhammad (peace be upon him)',

   'Riches are not from an abundance of worldly good but from a contented mind. Prophet Muhammad (peace be upon him)',
   'Exchange gifts, you will love one another. Prophet Muhammad (peace be upon him)',

   'The best among you are those who have the best manners and character. Prophet Muhammad (peace be upon him)',

   'No two things have been combined better than knowledge and patience. Prophet Muhammad (peace be upon him)',

   'Tell people of glad tidings and do not push them away. Prophet Muhammad (peace be upon him)',

   'The best of houses is the house where an orphan gets love and kindness. Prophet Muhammad (peace be upon him)',

   'The believer does not slander, curse, or speak in an obscene or foul manner. Prophet Muhammad (peace be upon him)',

   'A kind word is a form of charity. Prophet Muhammad (peace be upon him)',

   'A father gives nothing better than good education. Prophet Muhammad (peace be upon him)',

   'Feed the hungry and visit a sick person, and free the captive, if he be unjustly confined. Assist any person oppressed whether Muslim or non-Muslim. Prophet Muhammad (peace be upon him)',

   'Seek knowledge from cradle to the grave. Prophet Muhammad (peace be upon him)',

   'Do not waste water even if you were at a running stream. Prophet Muhammad (peace be upon him)',

   'A white has no superiority over a black nor a black has any superiority over white except by piety and good actions. Prophet Muhammad (peace be upon him)',

   'When a thing disturbs the peace of your heart give it up. Prophet Muhammad (peace be upon him)',

   'You do not do evil to those who do evil to you, but you deal with them with forgiveness and kindness. Prophet Muhammad (peace be upon him)',

   'He is not a true believer who eats his fill while his neighbour is hungry. Prophet Muhammad (peace be upon him)',

   'However much the faith of a man increases, his regard for women increases. Prophet Muhammad (peace be upon him)',

   'What has reached you was never meant to miss you, and what has missed you was never meant to reach you. Prophet Muhammad (peace be upon him)',

   'When you see a person who has been given more than you in money and beauty. Look to those, who have been given less. Prophet Muhammad (peace be upon him)',

   'Speak good or remain silent. Prophet Muhammad (peace be upon him)',

   'Make things easy for people and not difficult. Give people good news and bring them joy, and do not turn them away. Prophet Muhammad (peace be upon him)',

   'Remember your own faults when you want to mention of others. Prophet Muhammad (peace be upon him)',

   'Those who are patient in adversity and forgive wrongs are the doers of excellence. Prophet Muhammad (peace be upon him)',

   'Modesty brings nothing except good. Prophet Muhammad (peace be upon him)',

   'The most perfect man in his faith among the believers is the one whose behaviour is most excellent, and the best of you are those who are the best to their wives. Prophet Muhammad (peace be upon him)',

   'Happy is the man who avoids hardship, but how fine is the man who is afflicted and shows endurance.Prophet Muhammad (peace be upon him)'
  ];

  var random = Math.floor((Math.random()* items.length));
  randomNames = items[random];
  console.log(randomNames);
  messagefun = setTimeout(twiliosms,1000);
}

// Twilio SMS this receives the randomNames.
function twiliosms(){
  const accountSid ='AC968bd313636392c13c674fc7f62d55a3';
  const authToken = '08ef460ff69edc389cf6f9e197b13975';
  const client = require('twilio')(accountSid, authToken);

  client.messages
     .create({
       body: randomNames,
       from: myNumber,
       to:number
     })
     .then(message => console.log(message.sid));
}




























var number = +2349060540946;

var myNumber = +16465533138;
