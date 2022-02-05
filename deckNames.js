//file that deals with saving and creating Decks
// to and from LocalStorage
var deckNamesJSON;

function initializeDeckNamesJSON(){          //initialized in onload.js
    deckNamesJSON = new JSON_Instance();
}

function addToDeckNames(name){
    // retrieveDeckNameArray();
    retrieveDeckNames();

    var alreadyThereBool = false;
    // debugger;    //set to debug at this line
    if(deckNamesJSON.JSONobj.innerArray.length==0){
        deckNamesJSON.addToObj([[[0], [['deckName', name]]]]);
    }else{
        // deckNamesJSON.JSONobj.innerArray.forEach((item, index)=>{
        //     // debugger;    //set to debug at this line
        //     // if(item[0][1]!=name && index>=deckNamesJSON.JSONobj.innerArray.length){
        //     if(item[0][1]==name){
        //         debugger;    //set to debug at this line
        //         console.log('Already a Name!');
        //     }else if(index==deckNamesJSON.JSONobj.innerArray.length){
        //         console.log('still within index');
        //     }else{
        //         debugger;    //set to debug at this line
        //         deckNamesJSON.addToObj([[[0], ['deckName', name]]]);
        //     }
        //     // debugger;    //set to debug at this line
        // });
        // var variableLength = deckNamesJSON.JSONobj.innerArray.length;
        for(var i=0; i<deckNamesJSON.JSONobj.innerArray.length; i++){
            // debugger;    //set to debug at this line
            if(deckNamesJSON.JSONobj.innerArray[0][0][0][1]!=name && i==deckNamesJSON.JSONobj.innerArray.length-1){
                // debugger;    //set to debug at this line
                deckNamesJSON.addToObj([[[0], [['deckName', name]]]]);
                // variableLength++;
            }else if(deckNamesJSON.JSONobj.innerArray[0][0][0][1]==name){
                alreadyThereBool = true
            }
        }
    }
    if(alreadyThereBool==true){
        console.log('Already Named!');
        alreadyThereBool=false;        
    }
    // debugger;    //set to debug at this line
    saveDeckNames();
    // debugger;    //set to debug at this line
}

function removeDeckName(name){
    deckNamesJSON.JSONobj.innerArray.forEach((item, index)=>{
        console.log(item[0][1])
        // pulledNamesArray.push(item[0][1]);
        if(item[0][1] == name){
            debugger;    //set to debug at this line
            deckNamesJSON.JSONobj.innerArray.splice(index, 1);
        }
    });
    saveDeckNames();
}

// =============================
var pulledNamesArray = [];
function extractDeckNameArray(){
    
    deckNamesJSON.JSONobj.innerArray.forEach((item, index)=>{
        console.log(item[0][1])
        pulledNamesArray.push(item[0][1]);
    });
}

// =============================
// function saveDeckNames(){
//     deckNamesJSON.saveToLocalStorage('deckNamesArray');
// }

function addAnotherDeck(index, deckName, tags){
    var tmpArray = ['<div class="decksAndDeletes">',
    '                  <div class="w3-container medMarginTop widthFull ">',
    '                      <div class="deckStyling borderBlue widthFull center wayMarginTop">',
    '                          <div class="deckNameClass paddy">'+deckName+'</div>',
    '                          <div class="studyClass centerVertically">',
    '                              <button class="studyButton'+index+'">Study</button>',
    '                          </div>',
    '                          <div class="editClass centerVertically">',
    '                              <button class="editButton'+index+'">Edit</button>',
    '                          </div>',
    '                          <div class="tagsClass w3-white borderGreyAndLeft paddy">'+tags.toString()+'</div>',
    '                          <div class="sharedEmailsAndUID borderGreyAndRight paddingBottom w3-white">',
    '                              <div class="sharedEmailsClass center2">',
    '                                  <button class="sharedEmailButton'+index+'">Shared With</button>',
    '                              </div>',
    '                              <div class="UIDClass center2">',
    '                                  <button class="UIDButton'+index+'">UID</button>',
    '                              </div>',
    '                          </div>',
    '                      </div>',
    '                  </div>',
    '                  <div class="deleteClass centerVertically"><button class="deckDelete'+index+'">X</button></div>',
    '               </div>',
    ]
    // .join('');
    var unjoined = tmpArray;
    tmpArray = tmpArray.join('');

    copy(tmpArray);

    $('.decksHTML').html($('.decksHTML').html() + tmpArray);
    return unjoined;
}

// =============================
function loopingThroughDeckNames(){
    // initializeDeckNamesJSON();
    retrieveIt();
    debugger;    //set to debug at this line
    myJSONFlashCards.print();
    deckNamesJSON.JSONobj.innerArray.forEach((item, index)=>{
        addAnotherDeck()
    });
    // var deckName = 

}


//=============================
function printDeckNameArray(){
    deckNamesJSON.print();
}