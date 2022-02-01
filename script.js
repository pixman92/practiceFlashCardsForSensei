
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
  function runClick(){
    $('.QADiv').on('click', ()=>{
      // debugger;    //set to debug at this line

      //first card
      $('.QADiv').html("<h3>"+myJSONFlashCards.JSONobj.innerArray[1][0][0][1]+"</h3>");


      debugger;    //set to debug at this line
    });
  }