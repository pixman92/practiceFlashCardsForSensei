window.onload = ()=>{
    hide();
    show('editingCards');
    
    makeInstanceFlashCards();
    firstIndex('DaveKovar');
    addQuestionAddAnswerToPushFlashCards('where to start?', 'whitebelt');
    addQuestionAddAnswerToPushFlashCards('does x = this?' , 'nope');
    
    // myJSONFlashCards.saveToLocalStorage('saveMeFlash');
  
    
    runClick();
    makeIndexJSON();
}