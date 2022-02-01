window.onload = ()=>{
    hide();
    show('study');
    
    makeInstanceFlashCards();
    firstIndex('karate');
    
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