window.onload = ()=>{
    hide();
    show('study');
    
    
    // addQuestionAddAnswerToPushFlashCards('', '');
    
    // myJSONFlashCards.saveToLocalStorage('saveMeFlash');
    if(myJSONFlashCards==undefined){
        // debugger;    //set to debug at this line
        makeInstanceFlashCards();
        firstIndex('karate');
        addBlankBox(1)
        $('.addBoxesHTMLHere').html(blankBoxHTML);

        buttonListeners();
        deleteButtons();

        // debugger;    //set to debug at this line
    }else{
        buttonListeners();
        deleteButtons();
        
        runClick();
        
        // retrieveIt();
        // populate();
        debugger;    //set to debug at this line
    }
    // startupCSS();


    // if(myJSONFlashCards.JSONobj != undefined){
    //     $('.QADiv').html("<h1>"+myJSONFlashCards.JSONobj.innerArray[1][0][0][1]+"</h1>");
    // }

    // saveIt();
}