//file that deals with saving and creating Decks
// to and from LocalStorage
var deckNamesJSON;

function initializeDeckNamesJSON(){          //initialized in onload.js
    // this will pull the JSON data from localStorage, and reinitialize it
    
    if(localStorage.getItem('deckNamesJSON') == undefined){
        // if no old String found in localStorage, 
        // make new JSON! & initialize it!
        deckNamesJSON = new JSON_Instance();
        console.log('JSON Decks - initialized!');
    }else{
        // OR
        // make new JSON
        // and pull old localStorage - push to initiated JSON and parse into Array
        deckNamesJSON = new JSON_Instance();
        deckNamesJSON.insertJSON(localStorage.getItem('deckNamesJSON'));
        deckNamesJSON.parseMe();
        console.log('Old String - reinitialized');
    }  
}

function addToDeckNames(name){
    // retrieveDeckNameArray();


    var alreadyThereBool = false;           // is the deck already named? this BOOL keeps track!
    try{
        // if(deckNamesJSON.JSONobj.innerArray == null || deckNamesJSON.JSONobj.innerArray == undefined){
        if(deckNamesJSON.JSONobj.innerArray == null || deckNamesJSON.JSONobj.innerArray == undefined){
            // adding Deck Name to array
            deckNamesJSON.addToObj([[[0], [['deckName', name]]]]);
            // debugger;    //set to debug at this line    
        }
        for(var i=0; i<deckNamesJSON.JSONobj.innerArray.length; i++){
            // debugger;    //set to debug at this line
            if(deckNamesJSON.JSONobj.innerArray[i][0][0][1]==name){
                // making sure each name is unique
                alreadyThereBool = true;
                // debugger;    //set to debug at this line
            }
        }
    }catch(err){
        console.error('ERR ', err);
    }

    // code that makes sure that the Name is NOT already taken
    if(alreadyThereBool==true){
        console.log('Already Named!');
        alreadyThereBool=false;        
        // debugger;    //set to debug at this line
    }else{
        console.log('NEW Deck Name');
        deckNamesJSON.addToObj([[[0], [['deckName', name]]]]);
        // debugger;    //set to debug at this line
    }
    // debugger;    //set to debug at this line
    saveDeckNames();
    // debugger;    //set to debug at this line
}

function removeDeckName(name){
    // is the given 'name' parameter, already in the List??
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
    // add HTML for another Deck


    var tmpArray = ['<div class="decksAndDeletes">',
    '                  <div class="w3-container medMarginTop ">',
    '                      <div class="deckStyling borderBlue widthFull center wayMarginTop">',
    '                          <div class="deckNameClass'+index+' paddy">'+deckName+'</div>',
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

    // copy(tmpArray);


    $('.decksHTML').html($('.decksHTML').html() + tmpArray);
    return unjoined;
}

// =============================
function pullDeckNamesFromLocalStorage(){
    // 

    // initializeDeckNamesJSON();
    retrieveIt();
    debugger;    //set to debug at this line
    myJSONFlashCards.print();
    deckNamesJSON.JSONobj.innerArray.forEach((item, index)=>{
        debugger;    //set to debug at this line
        var tmpName = deckNamesJSON.JSONobj.innerArray[index][0][0][1];
        var tmpJSON = new JSON_Instance();
        var tmpString = localStorage.getItem(tmpName);

        debugger;    //set to debug at this line
        
        tmpJSON.insertJSON(tmpString);
        tmpJSON.parseMe();

        debugger;    //set to debug at this line

        var tags = tmpJSON.JSONobj.innerArray[index][0][5][1]
        debugger;    //set to debug at this line
        addAnotherDeckToHTML(index, deckNamesJSON.JSONobj.innerArray[index][0][0][1], tags)
    });
    // var deckName = 

}


//=============================
function printDeckNameArray(){
    deckNamesJSON.print();
}







// =========================================================
// NEWLY Updated data - April 2022
function pullOutAllDeckData(){
    $('.decksHTML').html("");
    for(var i=0; i<theBIGJSON.JSONobj.innerArray[1].length-1; i++){
        // debugger;
        console.log('name', theBIGJSON.JSONobj.innerArray[1][i][0][1][1]);
        console.log('tags', theBIGJSON.JSONobj.innerArray[1][i][0][5][1]);
        console.log('index', i);
        console.log('===================');
        
        // function that populates decks
        // needs, to index every keypoint
        console.log('i for index', i);
        addAnotherDeckToHTML(i, theBIGJSON.JSONobj.innerArray[1][i][0][1][1], theBIGJSON.JSONobj.innerArray[1][i][0][5][1]);    

    }
    // makes ever Deck Name Editible, then saves that edit to JSON
    // TODO - this for every DECK Name/Tags, shared emails
    // (TODO) Tags need to be separated by ','s
    for(var ii=0; ii<theBIGJSON.JSONobj.innerArray[1].length- 1; ii++){
        $('.deckNameClass'+ii).attr("contenteditable", "true");
        console.log('new Deckname:', $('.deckNameClass'+ii).val());
    }
    for(let iii=0; iii<theBIGJSON.JSONobj.innerArray[1].length; iii++){
        // debugger;
        $('.deckNameClass'+iii).on('blur keyup paste input', ()=>{
            
            console.log('iii', iii);
            replaceDeckTitle(iii, $('.deckNameClass'+iii).text());    
        });

    }
}

function newDeckAsk(){
    $('.decksHTML').hide();
    $('.decksHTML').html("<div class='newDeckName center fromTop'><textarea class='nameData'></textarea><div><button class='addNewDeckButton'>Add</div>");
    $('.decksHTML').show();
    
    // this is needed because the HTML added is dynamic
    newButtonListeners();
}

function newDeckMake(){
    var nameData = $('.nameData').val();
    console.log('nameData', nameData);

    // add name to NEW DECK
    singleDeckJSONData('sam', nameData, '...', 10, ['nope']);
    // push that new DECK to BIG JSON
    pushDeckToBIG();
    

    $('.decksHTML').show();
    // repouplate the DECK Screen
    pullOutAllDeckData();
}

// function 