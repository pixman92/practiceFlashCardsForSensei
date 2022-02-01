window.onload = ()=>{
    hide();
    show('study');
    
    makeInstanceFlashCards();
    firstIndex('DaveKovar');
    addQuestionAddAnswerToPushFlashCards('where to start?', 'whitebelt');
    addQuestionAddAnswerToPushFlashCards('does x = this?' , 'nope');
    
    // myJSONFlashCards.saveToLocalStorage('saveMeFlash');
  
    
    runClick();
    retrieveIt();

    populate();
    // startupCSS();

    buttonListeners();

    $('.QADiv').html("<h1>"+myJSONFlashCards.JSONobj.innerArray[1][0][0][1]+"</h1>");

    deleteButtons();
    // saveIt();
}