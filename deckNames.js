//file that deals with saving and creating Decks
// to and from LocalStorage
var deckNamesJSON;

function initializeDeckNamesJSON(){          //initialized in onload.js
    deckNamesJSON = new JSON_Instance();
}

function addToDeckNames(name){
    // retrieveDeckNameArray();
    retrieveDeckNames();

    var alreadyThereBool = false;           // is the deck already named? this BOOL keeps track!
    try{
        // if(deckNamesJSON.JSONobj.innerArray == null || deckNamesJSON.JSONobj.innerArray == undefined){
        // if(deckNamesJSON.JSONobj.innerArray == null || deckNamesJSON.JSONobj.innerArray == undefined){
            deckNamesJSON.addToObj([[[0], [['deckName', name]]]]);
            debugger;    //set to debug at this line    
        // }
    }catch(err){
        console.error('ERR ', err);
    }
    if(deckNamesJSON.JSONobj.innerArray >= 1){
               // deckNamesJSON.JSONobj.innerArray.forEach((item, index)=>{
            // debugger;    //set to debug at this line
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
        // for(var i=0; i<deckNamesJSON.JSONobj.innerArray.length; i++){
        //     debugger;    //set to debug at this line
        //     if(deckNamesJSON.JSONobj.innerArray[0][0][0][1]!=name && i==deckNamesJSON.JSONobj.innerArray.length){
        //         debugger;    //set to debug at this line
        //         deckNamesJSON.addToObj([[[0], [['deckName', name]]]]);
        //         // variableLength++;
        //     }else if(deckNamesJSON.JSONobj.innerArray[0][0][0][1]==name){
        //         alreadyThereBool = true
        //         debugger;    //set to debug at this line
        //     }
        // }

        for(var i=0; i<deckNamesJSON.JSONobj.innerArray.length; i++){
            debugger;    //set to debug at this line
            if(deckNamesJSON.JSONobj.innerArray[i][0][0][1]==name){
                alreadyThereBool = true;
                debugger;    //set to debug at this line
            }
          }
    }
    if(alreadyThereBool==true){
        console.log('Already Named!');
        alreadyThereBool=false;        
        debugger;    //set to debug at this line
    }else{
        console.log('NEW Deck Name');
        deckNamesJSON.addToObj([[[0], [['deckName', name]]]]);
        debugger;    //set to debug at this line
    }
    debugger;    //set to debug at this line
    saveDeckNames();
    debugger;    //set to debug at this line
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
        debugger;    //set to debug at this line
        console.log(item[0][1])
        pulledNamesArray.push(item[0][1]);
    });
}

// =============================
// function saveDeckNames(){
//     deckNamesJSON.saveToLocalStorage('deckNamesArray');
// }

function addAnotherDeckToHTML(index, deckName, tags){
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
        addAnotherDeckToHTML()
    });
    // var deckName = 

}


//=============================
function printDeckNameArray(){
    deckNamesJSON.print();
}