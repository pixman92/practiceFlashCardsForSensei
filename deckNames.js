var deckNameJSON;

function initializeDeckNameJSON(){          //initialized in onload.js
    deckNameJSON = new JSON_Instance();
}

function addToDeckNames(name){
    // retrieveDeckNameArray();

    var alreadyThereBool = false;
    // debugger;    //set to debug at this line
    if(deckNameJSON.JSONobj.innerArray.length==0){
        deckNameJSON.addToObj([[[0], ['deckName', name]]]);
    }else{
        // deckNameJSON.JSONobj.innerArray.forEach((item, index)=>{
        //     // debugger;    //set to debug at this line
        //     // if(item[0][1]!=name && index>=deckNameJSON.JSONobj.innerArray.length){
        //     if(item[0][1]==name){
        //         debugger;    //set to debug at this line
        //         console.log('Already a Name!');
        //     }else if(index==deckNameJSON.JSONobj.innerArray.length){
        //         console.log('still within index');
        //     }else{
        //         debugger;    //set to debug at this line
        //         deckNameJSON.addToObj([[[0], ['deckName', name]]]);
        //     }
        //     // debugger;    //set to debug at this line
        // });
        // var variableLength = deckNameJSON.JSONobj.innerArray.length;
        for(var i=0; i<deckNameJSON.JSONobj.innerArray.length; i++){
            // debugger;    //set to debug at this line
            if(deckNameJSON.JSONobj.innerArray[i][0][1]!=name && i==deckNameJSON.JSONobj.innerArray.length-1){
                debugger;    //set to debug at this line
                deckNameJSON.addToObj([[[0], ['deckName', name]]]);
                // variableLength++;
            }else if(deckNameJSON.JSONobj.innerArray[i][0][1]==name){
                alreadyThereBool = true
            }
        }
    }
    if(alreadyThereBool==true){
        console.log('Already Named!');
        alreadyThereBool=false;        
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

// =============================
// function saveDeckNames(){
//     deckNameJSON.
// }

function addAnotherDeck(){
    var tmpArray = ['<div class="w3-container">',
    '               <div class="deckStyling borderBlue widthFull center wayMarginTop">',
    '               <div class="deckNameClass paddy">SCK</div>',
    '               <div class="studyClass centerVertically"><button class="studyButton">Study</button></div>',
    '               <div class="editClass centerVertically"><button class="editButton">Edit</button></div>',
    '               <div class="tagsClass w3-white borderGreyAndLeft paddy">karate, awesomeness, peace, selfDefense</div>',
    '               <div class="sharedEmailsAndUID borderGreyAndRight paddingBottom w3-white">',
    '                  <div class="sharedEmailsClass center2"><button>Shared With</button></div>',
    '                  <div class="UIDClass center2"><button>UID</button></div>',
    '               </div>',
    '               </div>',
    '               </div>',
    '            </div>',
    '         </div>',
    ].join('');
    $('.decksHTML').html($('.decksHTML').html() + tmpArray)
}

// =============================

function printDeckNameArray(){
    deckNameJSON.print();
}