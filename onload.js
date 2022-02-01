window.onload = ()=>{
    hide();
    show('study');
    
    makeInstanceFlashCards();
    firstIndex('karate');
    addQuestionAddAnswerToPushFlashCards('', '');
    
    // myJSONFlashCards.saveToLocalStorage('saveMeFlash');
  
    
    runClick();
    retrieveIt();

    populate();
    // startupCSS();

    buttonListeners();

    if(myJSONFlashCards.JSONobj != undefined){
        $('.QADiv').html("<h1>"+myJSONFlashCards.JSONobj.innerArray[1][0][0][1]+"</h1>");
    }
    
    deleteButtons();
    // saveIt();
}