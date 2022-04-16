var theBIGJSON;
var singleDeckJSON;
var cardDataJSON;

function initJSONVariables(){
    theBIGJSON = new JSON_Instance();
    singleDeckJSON = new JSON_Instance();
    cardDataJSON = new JSON_Instance();
}
// =============================

function createsBIG(email, numberOfDecks){
    // sets up theBIGJSON with sample data
    theBIGJSON.JSONobj.innerArray[0] = [['email', email], ['numberOfDecks', numberOfDecks]];

    theBIGJSON.JSONobj.innerArray[1] = ['decks'];

}

function saveBIGToLocal(){
    theBIGJSON.saveToLocalStorage('sam');
}

function pullBIG(){
    theBIGJSON.insertJSON(localStorage.getItem('sam'));
    theBIGJSON.parseMe();
}


// =============================


function uuidv4() {
    // serial function
return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
});
}


function singleDeckJSONData(emailOwner, deckTitle, sharedWithEmails, deckScore, tags){
    // makes a single deck, to be strung and sent to BIGJSON

    sharedWithEmails == ""? sharedWithEmails = "": undefined;

    singleDeckJSON = new JSON_Instance();

    singleDeckJSON.JSONobj.innerArray[0] = [['emailOwner', emailOwner],['deckTitle', deckTitle], ['sharedWithEmails', sharedWithEmails], ['deckScore', deckScore], ['UID', uuidv4()], ['tags', tags], ['cardData']];

    theBIGJSON.JSONobj.innerArray[0][1][1]++;

}

function replaceDeckEmailOwner(index, newEmail){
    theBIGJSON.JSONobj.innerArray[1][index][0][0][1] = newEmail;

}

function replacDeckTitle(index, newTitle){
    theBIGJSON.JSONobj.innerArray[1][index][0][1][1] = newTitle;
}

function replacDeckSharedEmails(index, newArrayOfEmails){
    theBIGJSON.JSONobj.innerArray[1][index][0][2][1] = newArrayOfEmails;
}

function replacDeckDeckScore(index, newDeckScore){
    theBIGJSON.JSONobj.innerArray[1][index][0][3] = newDeckScore;
}

function replacDeckTags(index, newDeckTags){
    theBIGJSON.JSONobj.innerArray[1][index][0][5] = newDeckTags;
}
// ===================

// functions to Push and Pull, DECK Data, to and From String form
// function singleDeckToString(){
//     return singleDeckJSON.stringMe();
// }

// var deckParsedArray;
// function singleDeckParsed(str){
//     deckParsedArray = new JSON_Instance();
//     deckParsedArray.insertJSON(str);
//     return deckParsedArray.parseMe();
// }

// function saveADeck(){
//     singleDeckJSON.saveToLocalStorage(singleDeckJSON.JSONobj.innerArray[0][1][1]);

// }

// var pulledDeckStr;
// function pullDeckFromLocal(name){
//     pulledDeckStr = localStorage.getItem(name);
// }


// ===================

function pushDeckToBIG(){
    // actual function to send STRUNG JSON to BIGJSON
    theBIGJSON.JSONobj.innerArray[1].push(singleDeckJSON.JSONobj.innerArray);

    // increment the "DECK #" variable
    theBIGJSON.JSONobj.innerArray[0][1][1] = theBIGJSON.JSONobj.innerArray[1].length-1;
}

// =============================

function makeCardDataJSON(question, answer){
    // makes cad data, Q&A
    cardDataJSON.JSONobj.innerArray[0] = [[['question', question], ['answer', answer]]];
}

function pushCardDataToDeckAndReset(){
    // takes the DECK and adds 1 card to it, then Resets

    // singleDeckJSON.JSONobj.innerArray[0][6].push(['name', 'sam'])
    singleDeckJSON.JSONobj.innerArray[0][6].push(cardDataJSON.JSONobj.innerArray);
    cardDataJSON = new JSON_Instance();

}

// function pushCardDataToDeckAndReset(){

// }

function retrieveCardDataBasedOnIndex(deckIndex, cardIndex){
    //pulls back Q&A data

    // var question = singleDeckJSON.JSONobj.innerArray[0][6][index][0][0][0][1];
    // var answer = singleDeckJSON.JSONobj.innerArray[0][6][index][0][0][1][1];

    // theBIGJSON.JSONobj.innerArray[1][1][0][6][1][0][0][0][1]


    var question = theBIGJSON.JSONobj.innerArray[1][deckIndex][0][6][cardIndex][0][0][0][1];

    var answer = theBIGJSON.JSONobj.innerArray[1][deckIndex][0][6][cardIndex][0][0][1][1];


    console.log('Question? ', question);
    console.log('Answer? ', answer );

}

// ===================
function editCardQuestion(deckIndex, cardIndex, replacement){
    theBIGJSON.JSONobj.innerArray[1][deckIndex][0][6][cardIndex][0][0][0][1] = replacement;
}
function editCardAnswer(deckIndex, cardIndex, replacement){
    theBIGJSON.JSONobj.innerArray[1][deckIndex][0][6][cardIndex][0][0][1][1] = replacement;
}

function deleteCard(deckIndex, cardIndex, replacement){

}

function editDeck(deckIndex, replacement){

}

function deleteDeck(deckIndex, replacement){

}



// =============================
function run(){
    initJSONVariables();

    createsBIG('sam@gmail.com', 0);

    makeCardDataJSON('time of day?', 'noon'); 
    cardDataJSON.print();

    singleDeckJSONData('sam@gmail.com', 'math', 'leo@gmail.com', 10, 'nope');
    run2();

}
function run2(){
    pushCardDataToDeckAndReset();
    
    makeCardDataJSON('favorite food?', 'pizza');
    pushCardDataToDeckAndReset();

    pushDeckToBIG();


    singleDeckJSONData('leo@gmail.com', 'history', 'null', 10, 'nope');
    makeCardDataJSON('place to be?', 'home');
    pushCardDataToDeckAndReset();
    makeCardDataJSON('ice cream?', 'yes!');
    pushCardDataToDeckAndReset();

    pushDeckToBIG();
}

// ===================