function buttonListeners(){


    // =============================
    // adding Button
    $('.addingButton').on('click', ()=>{
        //run through all indexes of myJSONFlashCards.JSONobj.innerArray

        var indexArray=[]

        if(myJSONFlashCards.JSONobj == undefined){
            // indexArray.push(1);

            makeInstanceFlashCards();
            firstIndex('karate');

            var question = $('.question'+1).val();
            var answer = $('.answer'+1).val();
            
            addQuestionAddAnswerToPushFlashCards(question, answer);

        }else{
            myJSONFlashCards.JSONobj.innerArray.forEach((item, index)=>{
                if(index!=0)indexArray.push(index);
            });
            // debugger;
    
            var nextIndexFromLen = myJSONFlashCards.JSONobj.innerArray.length;
            // debugger;    //set to debug at this line
            if($('.question'+nextIndexFromLen).val()!='' || $('.answer'+nextIndexFromLen).val()!=""){
                indexArray.push(nextIndexFromLen);
            }

            indexArray.forEach((item, index)=>{
                var question = $('.question'+item).val();
                var answer = $('.answer'+item).val();
                // debugger;
                if(question!=undefined || answer!=undefined){
                    //here we add the Question and Answer data - if not undefined
                    if(myJSONFlashCards.JSONobj.innerArray[item]!=undefined){
                        myJSONFlashCards.JSONobj.innerArray[item][0][0][1] = question;
                        myJSONFlashCards.JSONobj.innerArray[item][0][1][1] = answer;
                    }else{
                        addQuestionAddAnswerToPushFlashCards(question, answer);
                        // debugger;    //set to debug at this line
                    }
                }
    
                // debugger;
            });
    
        }
        populate();
        saveIt();
        deleteButtons();
        // debugger;       
    });

    // ==========================================================
    // savebutton

    $('.saveButton').on('click', ()=>{
        var indexArray=[]

        if(myJSONFlashCards.JSONobj == undefined){
            // indexArray.push(1);

            makeInstanceFlashCards();
            firstIndex('karate');

            var question = $('.question'+1).val();
            var answer = $('.answer'+1).val();

            // debugger;    //set to debug at this line

            addQuestionAddAnswerToPushFlashCards(question, answer);

        }else{
            myJSONFlashCards.JSONobj.innerArray.forEach((item, index)=>{
                if(index!=0)indexArray.push(index);
            });
            // debugger;
    
            var nextIndexFromLen = myJSONFlashCards.JSONobj.innerArray.length;
            // debugger;    //set to debug at this line
            if($('.question'+nextIndexFromLen).val()!='' || $('.answer'+nextIndexFromLen).val()!=""){
                indexArray.push(nextIndexFromLen);
            }

            indexArray.forEach((item, index)=>{
                var question = $('.question'+item).val();
                var answer = $('.answer'+item).val();
                // debugger;
                if(question!=undefined || answer!=undefined){
                    //here we add the Question and Answer data - if not undefined
                    if(myJSONFlashCards.JSONobj.innerArray[item]!=undefined){
                        myJSONFlashCards.JSONobj.innerArray[item][0][0][1] = question;
                        myJSONFlashCards.JSONobj.innerArray[item][0][1][1] = answer;
                    }else{
                        addQuestionAddAnswerToPushFlashCards(question, answer);
                        // debugger;    //set to debug at this line
                    }
                }
    
                // debugger;
    
            });
            
        }
        // debugger;

        populate();
        saveIt();
        deleteButtons();
        // debugger;    //set to debug at this line
    });
    
    $('.backButtonFromEdit').on('click', ()=>{
        hide();
        show('decks')
        // show('study');
    });
    
    $('.toDecks').on('click', ()=>{
        //all things that need to be DONE - when switching to Edit page
        hide();
        show('decks');
        // show('editWidth');
        // show('editingCards');
        // retrieveIt();
        // populate();
        // deleteButtons();
    });

    // =============================
    $('.forwardCard').on('click', ()=>{
        proceedCard();
        // flipped = true;
        // if(flipped==false){
        //   // answer
        //   $('.QADiv').html("<h1>"+myJSONFlashCards.JSONobj.innerArray[cardPos][0][1][1]+"</h1>");
        //   // flipped=!flipped
        // }
        // if(flipped==true){
        //   //question
          
          $('.QADiv').html("<h1>"+myJSONFlashCards.JSONobj.innerArray[cardPos][0][0][1]+"</h1>");
          // flipped=!flipped;
        // }

    });
    $('.backCard').on('click', ()=>{
        backACard();
        // flipped = true;
        // if(flipped==false){
        //   // answer
        //   $('.QADiv').html("<h1>"+myJSONFlashCards.JSONobj.innerArray[cardPos][0][1][1]+"</h1>");
        //   // flipped=!flipped
        // }
        // if(flipped==true){
          //question
          
          $('.QADiv').html("<h1>"+myJSONFlashCards.JSONobj.innerArray[cardPos][0][0][1]+"</h1>");
          // flipped=!flipped;
        // }
    });

    deckNamesHomeButtonsWithIndex();
    // ==========================================================
    
    
    
}
function deckNamesHomeButtonsWithIndex(index){
    // Decks Home - button addEventListeners
    $('.studyButton'+index).on('click', ()=>{
        hide();
        show('study');
    });
    $('.editButton'+index).on('click', ()=>{
        hide();
        show('editingCards');
    });
}


// =============================

function deleteButtons(){
    // function to create and initialized Delete Buttons
    // to 'else' them, if 1 already exists

    if(myJSONFlashCards.JSONobj == undefined){
        $('.delete'+1).on('click', ()=>{
            removeElement(1);
            // debugger;
        });        
    }else{
        myJSONFlashCards.JSONobj.innerArray.forEach((item,index)=>{
            // debugger;
            if(index!=0){
                $('.delete'+index).on('click', ()=>{
                    removeElement(index);
                    // debugger;
                });        
            }        
        });
    }   
}


// ======================================
// UPDATED - Event Listeners - April 2022

function newButtonListeners(){
    // new Deck button
    $('.addButton').on('click', ()=>{
        newDeckAsk();
    });

    // adding New Deck data to BIGJSON
    $('.addNewDeckButton').on('click', ()=>{
        debugger;
        if($('.newData').val()!=""){
            debugger;
            newDeckMake();
        }else{
            console.log('NO Name Data!');
        }
    });
}