const myPersonality = {};

myPersonality.statements = [];
myPersonality.peopleLikeMe = [];
myPersonality.communication = [];

///functions for creating objects

///statements Array

function statementsforPartOne (one, two, three) {
    newObject = {}
    newObject.one = one;
    newObject.two = two;
    newObject.three = three;
    myPersonality.statements.push(newObject)
};

statementsforPartOne("Advocates have strong beliefs and take the actions that they do not because they are trying to advance themselves, but because they are trying to advance an idea that they truly believe will make the world a better place.", "Advocates tend to present themselves as the culmination of an idea.", "Advocates see how people and events are connected, and are able to use that insight to get to the heart of the matter.");

statementsforPartOne("Advocates get so caught up in the passion of their pursuits that any of the cumbersome administrative or maintenance work that comes between them and the ideal they see on the horizon is deeply unwelcome.", " Advocates are all but defined by their pursuit of ideals.", "When someone challenges or criticizes Advocates’ principles or values, they are likely to receive an alarmingly strong response.")

// console.log(myPersonality.statements);


////////People Like Me Array

function peopleLikeMe (person) {
    newObject = {};
    newObject.person = person;
    myPersonality.peopleLikeMe.push(newObject)
}

peopleLikeMe("Jon Snow");
peopleLikeMe("Galadriel");
peopleLikeMe("Desmond Hume");
peopleLikeMe("Martin Luther King");

// console.log(myPersonality.peopleLikeMe);


//////////Communication 


function communication (sib, instructors, team) {
    newObject = {};
    newObject.sib = sib;
    newObject.instructors = instructors;
    newObject.team = team; 
    myPersonality.communication.push(newObject)
}

communication("Take the time to know them and help out!", "As a young padawan on the quest to knowledge.", "On a personable level; we are in this together.");

// console.log(myPersonality.communication);

console.log(myPersonality); 

function saveDatabase (object, nameTag) {
    const strigify = JSON.stringify(object); 
    localStorage.setItem(nameTag, strigify);
}

saveDatabase(myPersonality, "af-personalityStuff");


