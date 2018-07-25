//////Getting the local storage

function getLocalStorage (nameTag) {
    const databaseString = localStorage.getItem(nameTag);
    return JSON.parse(databaseString);
}

getLocalStorage("af-personalityStuff");


/////////Adding the DOM


const tagGeneral = document.querySelector("#general");
const tagPeople = document.querySelector("#people");
const tagCommunication = document.querySelector("#communication");


const createDiv = document.createElement("div");

function getStatementsToDom () {
    let string = `<h3>Statements I Agree With</h3>
                    <ul>
                        <li>${myPersonality.statements[0].one}</li>
                        <li>${myPersonality.statements[0].two}</li>
                        <li>${myPersonality.statements[0].three}</li>
                    </ul>`
    let otherString = `<h3>Statements I Disagree With</h3>
                        <ul>
                        <li>${myPersonality.statements[1].one}</li>
                        <li>${myPersonality.statements[1].two}</li>
                        <li>${myPersonality.statements[1].three}</li>
                    </ul>`
                    return string + otherString;
};

createDiv.innerHTML = getStatementsToDom();
tagGeneral.appendChild(createDiv);

console.log(getStatementsToDom());

// function getStatementToDom () {
//     const createDiv = document.createElement("div");
//     createDiv.innerHTML = `<p>${myPersonality.statements[0]}</p>`;
//     fragmentForGen.appendChild(createDiv);
// }

// console.log(getStatementToDom())



// const statementsAgree = createDiv.innerHTML = myPersonality.statements[0];
// const statementsAgreeToDom = Object.values(statementsAgree).join(' ');

// console.log(statementsAgreeToDom);

// fragmentForGen.textContent = statementsAgreeToDom;

// // fragmentForGen.appendChild(statementsAgreeToDom);

// const statementsDisagree = document.createElement('div').innerHTML = myPersonality.statements[1];
// const statementsDisagreeToDom = Object.values(statementsDisagree).join(' ');

// fragmentForGen.textContent += ` ${statementsDisagreeToDom}`;


// console.log(statementsDisagreeToDom);

// tagGeneral.appendChild(fragmentForGen);



/////////People Who Share Personality 

createSection = document.createElement("section");

function getPeopleToDom () {
    let list = `<h3>People I Match With</h3>
                <ul>
                    <li>${myPersonality.peopleLikeMe[0].person}</li>
                    <li>${myPersonality.peopleLikeMe[1].person}</li>
                    <li>${myPersonality.peopleLikeMe[2].person}</li>
                    <li>${myPersonality.peopleLikeMe[3].person}</li>

                </ul>`
                return list;
};

console.log(getPeopleToDom());
createSection.innerHTML = getPeopleToDom();

tagPeople.appendChild(createSection);


////Communication

const createArticle = document.createElement('article');

function lastSection () {
    let areaOne = `<div>
                    <h4>How would I communicate best with my little sib:</h4>
                    <p>${myPersonality.communication[0].sib}</p>
                </div>` 
    let areaTwo = `<div>
                    <h4>How would I like my instructors to communicate with me:</h4>
                    <p>${myPersonality.communication[0].instructors}</p>
                </div>`
    let areaThree = `<div>
                        <h4>How would I like my instructors to teammates with me:</h4>
                        <p>${myPersonality.communication[0].team}</p>
                    </div>`
return areaOne + areaTwo + areaThree;
}

console.log(lastSection());

createArticle.innerHTML = lastSection();
tagCommunication.appendChild(createArticle);














