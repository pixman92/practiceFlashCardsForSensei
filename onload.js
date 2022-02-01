window.onload = ()=>{
    hide();
    show('study');
    
    
    // addQuestionAddAnswerToPushFlashCards('', '');
    
    // myJSONFlashCards.saveToLocalStorage('saveMeFlash');
    if(myJSONFlashCards==undefined){
        makeInstanceFlashCards();
        firstIndex('karate');
        addBlankBox(1)
        $('.addBoxesHTMLHere').html(blankBoxHTML);

        // buttonListeners();
        // deleteButtons();
    }

    buttonListeners();
    deleteButtons();
    
    runClick();
    
    populate();
    retrieveIt();
    // startupCSS();


    // if(myJSONFlashCards.JSONobj != undefined){
    //     $('.QADiv').html("<h1>"+myJSONFlashCards.JSONobj.innerArray[1][0][0][1]+"</h1>");
    // }

    // saveIt();
}