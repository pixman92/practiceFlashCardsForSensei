
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
      myJSONFlashCards.addMoreToIndex(0, [[[0], [['emailOwner', 'sam@gmail.com'],['deckTitle', deckTitle], ['sharedWithEmails', '-1'], ['deckScore', '0']]]]);
  }
  
  function addQuestionAddAnswerToPushFlashCards(question, answer){
      myJSONFlashCards.addToObj([[[0], [['question', question], ['answer', answer], ['score', -1]]]])
      myJSONFlashCards.print();
  
  }
  
  
  
  // =================
  function saveIt(){
    //save to local storage
    myJSONFlashCards.saveToLocalStorage("saveMeFlash")
  
  }
  function retrieveIt(){
    //retrieve from local storage
    myJSONFlashCards.getFromLocalStorage("saveMeFlash", true) 
  }

  // =============================
  var flipped=true;
  var cardPos=1;
  function runClick(cardPos){
    // flipped = false;
    // flipped=!flipped;
    // debugger;    //set to debug at this line
    $('.QADiv').on('click', ()=>{
      // debugger;    //set to debug at this line

      //first card
      
      flipped=!flipped
      if(flipped==false){
        // answer
        debugger;    //set to debug at this line
        $('.QADiv').html("<h1>"+myJSONFlashCards.JSONobj.innerArray[cardPos][1][1]+"</h1>");
        // flipped=!flipped
      }
      if(flipped==true){
        //question
        debugger;    //set to debug at this line
        $('.QADiv').html("<h1>"+myJSONFlashCards.JSONobj.innerArray[cardPos][0][1]+"</h1>");
        // flipped=!flipped;
      }
      // flipped=!flipped;
      // debugger;    //set to debug at this line
      // runClick();
    });
  }
  function proceedCard(){
    if(cardPos<myJSONFlashCards.JSONobj.innerArray.length){
      cardPos+=1;
      console.log('cardPos', cardPos);
      // runClick();
    }else{
      cardPos=1;
      console.log('cardPos', cardPos);
      // runClick();
    }

  }