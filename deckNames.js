var deckNameJSON;

function initializeDeckNameJSON(){
    deckNameJSON = new JSON_Instance();
}

function addToDeckNames(name){
    // retrieveDeckNameArray();

    // debugger;    //set to debug at this line
    if(deckNameJSON.JSONobj.innerArray.length==0){
        deckNameJSON.addToObj([[[0], ['deckName', name]]]);
    }else{
        deckNameJSON.JSONobj.innerArray.forEach((item, index)=>{
            // debugger;    //set to debug at this line
            // if(item[0][1]!=name && index>=deckNameJSON.JSONobj.innerArray.length){
            if(item[0][1]==name){
                debugger;    //set to debug at this line
                console.log('Already a Name!');
            }else if(index==deckNameJSON.JSONobj.innerArray.length){
                console.log('still within index');
            }else{
                debugger;    //set to debug at this line
                deckNameJSON.addToObj([[[0], ['deckName', name]]]);
            }
            // debugger;    //set to debug at this line
        });
    }
        // debugger;    //set to debug at this line
}

function removeDeckName(name){
    deckNameJSON.JSONobj.innerArray.forEach((item, index)=>{
        console.log(item[0][1])
        // pulledNamesArray.push(item[0][1]);
        if(item[0][1] == name){
            debugger;    //set to debug at this line
            deckNameJSON.JSONobj.innerArray.splice(index, 1);
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