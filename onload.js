window.onload = ()=>{
    hide();
    show('decks');
    
    
    // addQuestionAddAnswerToPushFlashCards('', '');
    
    // myJSONFlashCards.saveToLocalStorage('saveMeFlash');
    makeInstanceFlashCards();
    initializeDeckNameJSON();
    // debugger;    //set to debug at this line
    if(myJSONFlashCards.JSONobj == null || myJSONFlashCards.JSONobj.innerArray.length==0){
        debugger;    //set to debug at this line
        firstIndex('karate');
        addBlankBox(1)
        $('.addBoxesHTMLHere').html(blankBoxHTML);
        
        buttonListeners();
        deleteButtons();
        // runClick();
        
        debugger;    //set to debug at this line
    }else{
        // runClick();
        retrieveIt();
        runClick();
        buttonListeners();
        deleteButtons();
        debugger;    //set to debug at this line
        
        // retrieveIt();
        // populate();
        // debugger;    //set to debug at this line
    }
    // startupCSS();


    // if(myJSONFlashCards.JSONobj != undefined){
    //     $('.QADiv').html("<h1>"+myJSONFlashCards.JSONobj.innerArray[1][0][0][1]+"</h1>");
    // }

    // saveIt();
}