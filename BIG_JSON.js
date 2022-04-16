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
    theBIGJSON.JSONobj.innerArray[0] = [['email', email], ['numberOfDecks', numberOfDecks]];

    theBIGJSON.JSONobj.innerArray[1] = ['decks'];

}



// =============================


function uuidv4() {
return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
});
}


function singleDeckJSONData(emailOwner, deckTitle, sharedWithEmails, deckScore, tags){
    sharedWithEmails == ""? sharedWithEmails = "": undefined;

    singleDeckJSON.JSONobj.innerArray[0] = [['emailOwner', emailOwner],['deckTitle', deckTitle], ['sharedWithEmails', sharedWithEmails], ['deckScore', deckScore], ['UID', uuidv4()], ['tags', tags], ['cardData']];

    theBIGJSON.JSONobj.innerArray[0][1][1]++;

}

function pushDeckToBIG(str){
    theBIGJSON.JSONobj.innerArray[1].push(str);
}

// =============================

function makeCardDataJSON(question, answer){
    cardDataJSON.JSONobj.innerArray[0] = [[['question', question], ['answer', answer]]];
}

function pushCardDataToDeckAndReset(){
    // singleDeckJSON.JSONobj.innerArray[0][6].push(['name', 'sam'])
    singleDeckJSON.JSONobj.innerArray[0][6].push(cardDataJSON.JSONobj.innerArray);
    cardDataJSON = new JSON_Instance();

}

// function pushCardDataToDeckAndReset(){

// }

function retrieveCardDataBasedOnIndex(index){
    var question = singleDeckJSON.JSONobj.innerArray[0][6][index][0][0][0][1];
    var answer = singleDeckJSON.JSONobj.innerArray[0][6][index][0][0][1][1];

    console.log('Question? ', question);
    console.log('Answer? ', answer );

}

// ===================
function saveToLocalStorage(){

}


// =============================
function run(){
    initJSONVariables();

    createsBIG('sam@gmail.com', 0);

    makeCardDataJSON('time of day?', 'noon'); 
    cardDataJSON.print();

    singleDeckJSONData('sam@gmail.com', 'math', 'leo@gmail.com', 10, 'nope');

}
function run2(){
    pushCardDataToDeckAndReset();
    
    makeCardDataJSON('favorite food?', 'pizza');
    pushCardDataToDeckAndReset();
}

// ===================