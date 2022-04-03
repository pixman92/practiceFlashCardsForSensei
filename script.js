
  // =================
  var arrayOfClasses = ["study", "editingCards"];
  function hide() {
      for (var i = 0; i < arrayOfClasses.length; i++) {
          // document.querySelector('.' + arrayOfClasses[i]).style.display = 'none';
        $('.'+arrayOfClasses[i]).hide();
      }
   
  }
   
  function show(classIt) {
      // document.querySelector("." + classIt).style.display = 'block';
    $('.'+classIt).show();
  }
  
  // =================
  
  var myJSONFlashCards;       // global variable for 'pushed' variable
  
  // =============================
  function makeInstanceFlashCards(){
      //creates the myJSONFlashCards instance
      myJSONFlashCards = new JSON_Instance();
  }
  // =================
  function firstIndex(deckTitle){
      // creates the 0th index, of Meta Data

      // email owner 
      // Deck Title
      // who has this Deck been shared with
      // deck Score - % of correct, overall, option
      // UID - unique Identifier ID, to help with "same name Decks", though this should not be a problem
      myJSONFlashCards.addMoreToIndex(0, [[[0], [['emailOwner', 'sam@gmail.com'],['deckTitle', deckTitle], ['sharedWithEmails', '-1'], ['deckScore', '0'], ['UID', uuidv4()]]]]);
      
      // addToDeckNames(deckTitle);
  }

  function addTags(tagsArray){
    myJSONFlashCards.JSONobj.innerArray[0][0][5] = [['tags'], tagsArray];
    // myJSONFlashCards.JSONobj.innerArray[0][0].push([['tags', tagsArray]])

  }
  
  function addQuestionAddAnswerToPushFlashCards(question, answer){
      myJSONFlashCards.addToObj([[[0], [['question', question], ['answer', answer], ['score', -1]]]])
      myJSONFlashCards.print();
  
  }
// =============================  
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
  
  
  // =================
  function saveIt(){
    //save to local storage
    myJSONFlashCards.saveToLocalStorage(myJSONFlashCards.JSONobj.innerArray[0][0][1][1]);     //save the Deck
  }
  
  function retrieveIt(){
    //retrieve from local storage
    myJSONFlashCards.getFromLocalStorage(myJSONFlashCards.JSONobj.innerArray[0][0][1][1], true);
  }

  // these 2 functions save and pull deckNames - from localStorage
  function saveDeckNames(){
    //save the namesArray JSON String
    deckNamesJSON.saveToLocalStorage('deckNamesJSON');
  }

  // this function is depreciated - compared to the initializeDeckNamesJSON() function in deckNames.js
  // function retrieveDeckNames(){
  //   deckNamesJSON.getFromLocalStorage('deckNamesJSON', true);
  // }
  

  // =============================
  var flipped=false;
  var cardPos=1;
  function runClick(){
    // flipped = false;
    // flipped=!flipped;
    // debugger;    //set to debug at this line
    $('.QADiv').on('click', ()=>{
      // debugger;    //set to debug at this line

      //first card
      
      flipped=!flipped
      if(flipped==false){
        // answer
        $('.QADiv').html("<h1>"+myJSONFlashCards.JSONobj.innerArray[cardPos][0][1][1]+"</h1>");
        // flipped=!flipped
      }
      if(flipped==true){
        //question
        
        $('.QADiv').html("<h1>"+myJSONFlashCards.JSONobj.innerArray[cardPos][0][0][1]+"</h1>");
        // flipped=!flipped;
      }
    });
  }
  function proceedCard(){
    if(cardPos<myJSONFlashCards.JSONobj.innerArray.length){
      cardPos+=1;
      console.log('cardPos', cardPos);
      // debugger;    //set to debug at this line
      // runClick();
    }else{
      cardPos=1;
      console.log('cardPos', cardPos);
      // debugger;    //set to debug at this line
      // runClick();
    }
    // flipped=true;
    // runClick();

  }

  function backACard(){
    if(cardPos>=2){
      cardPos-=1;
      console.log('cardPos', cardPos);
      // debugger;    //set to debug at this line
      // runClick();
    }else{
      cardPos=myJSONFlashCards.JSONobj.innerArray.length-1;
      console.log('cardPos', cardPos);
      // debugger;    //set to debug at this line
      // runClick();
    }
    // flipped=true;
    // runClick();

  }

  // =============================
  function makeNewDeck(deckName){
    // debugger;    //set to debug at this line
    makeInstanceFlashCards();
    firstIndex(deckName);
    
    addQuestionAddAnswerToPushFlashCards('time?', 'noon');
    addQuestionAddAnswerToPushFlashCards('place?', 'home');
    addQuestionAddAnswerToPushFlashCards('age?', '16');
    
    saveDeckNames();
    // debugger;    //set to debug at this line
  }