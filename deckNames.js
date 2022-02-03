var deckNameJSON;

function initializeDeckNameJSON(){
    deckNameJSON = new JSON_Instance();
}

function addToDeckNames(name){
    // retrieveDeckNameArray();

    // debugger;    //set to debug at this line
    deckNameJSON.addToObj([[[0], ['deckName', name]]]);
    // debugger;    //set to debug at this line
}

function removeDeckName(name){
    deckNameJSON.JSONobj.innerArray.forEach((item, index)=>{
        console.log(item[0][1])
        // pulledNamesArray.push(item[0][1]);
        if(item[0][1] == name){
            deckNameJSON.JSONobj.innerArray.slice(index, 1);
        }
    });
}

// =============================
var pulledNamesArray = [];
function retrieveDeckNameArray(){
    
    deckNameJSON.JSONobj.innerArray.forEach((item, index)=>{
        console.log(item[0][1])
        pulledNamesArray.push(item[0][1]);
    });
}


function printDeckNameArray(){
    deckNameJSON.print();
}