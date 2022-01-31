window.onload=()=>{
    hide();
    show('editingCards');
    
    makeInstanceFlashCards();
    firstIndex('DaveKovar');
    addQuestionAddAnswerToPushFlashCards('where to begin?', 'white belt!');
    addQuestionAddAnswerToPushFlashCards('how to train?', 'everyday!');
    
    // myJSONFlashCards.saveToLocalStorage('saveMeFlash');
  
    
    runClick();
  
  }
  
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
  
  function runClick(){
    $('.QADiv').on('click', ()=>{
      console.log('clicked!');
    });
  }
  function saveIt(){
    myJSONFlashCards.saveToLocalStorage("saveMeFlash")
  
  }
  function retrieveIt(){
    myJSONFlashCards.getFromLocalStorage("saveMeFlash", true) 
  }
  
  // =================
  function addingCardsForEdit(){
    
    cardsArray = ['  <div class="boxData">',
  '      <div class="cardsFlex">',
  '      <div class="cards">',
  '         <div class="boxesAndDelete">',
  '            <!--      Boxes          -->',
  '           <div class="boxes cardsFlex">                 <div class="questionDiv">',
  '                  <textarea class="question1">question</textarea>',
  '                </div>',
  '    <div class="answerDiv">',
  '      <textarea class="answer1">answer</textarea>',
  '    </div>',
  '<!--      DeleteButton          --> ',
  '            <div class="deleteDiv center">',
  '              <button>X</button>',
  '            </div>',
  '            </div>',
  '           </div>',
  '        </div>  ',
  '    </div>',
  '  </div>',
  ].join('');
    $('.addingData').html($('.addingData').html()+cardsArray);
    
    
  }