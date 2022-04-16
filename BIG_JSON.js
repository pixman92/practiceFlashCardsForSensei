var theBIGJSON;
var singleDeckJSON;
var cardDataJSON;

function initJSONVariables(){
    theBIGJSON = new JSON_Instance();
    singleDeckJSON = new JSON_Instance();
    cardDataJSON = new JSON_Instance();
}
// =============================

function uuidv4() {
return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
});
}


function singleDeckJSONData(emailOwner, deckTitle, sharedWithEmails, deckScore){
    sharedWithEmails == ""? sharedWithEmails = "": undefined;

    singleDeckJSON.JSONobj.innerArray[0] = [[[0], [['emailOwner', emailOwner],['deckTitle', deckTitle], ['sharedWithEmails', sharedWithEmails], ['deckScore', deckScore], ['UID', uuidv4()]]]];
}

// =============================

function makeCardDataJSON(question, answer){
    cardDataJSON.JSONobj.innerArray[0] = [[[0], ['question', question], ['answer', answer]]];
}




// =============================
function run(){
    initJSONVariables();
    makeCardDataJSON('time of day?', 'noon'); 
    cardDataJSON.print();


}