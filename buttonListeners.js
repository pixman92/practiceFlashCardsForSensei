function buttonListeners(){


    $('.addingButton').on('click', ()=>{
        //run through all indexes of myJSONFlashCards.JSONobj.innerArray

        var indexArray=[]

        if(myJSONFlashCards.JSONobj == undefined){
            indexArray.push(1);

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
                if(myJSONFlashCards.JSONobj.innerArray[item]!=undefined){
                    myJSONFlashCards.JSONobj.innerArray[item][0][0][1] = question;
                    myJSONFlashCards.JSONobj.innerArray[item][0][1][1] = answer;
                }else{
                    addQuestionAddAnswerToPushFlashCards(question, answer);
                    // debugger;    //set to debug at this line
                }
    
                // debugger;
            });
    
        }
        populate();
        saveIt();
        // debugger;       
    });

    $('.saveButton').on('click', ()=>{
        var indexArray=[]

        if(myJSONFlashCards.JSONobj == undefined){
            indexArray.push(1);

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
                if(myJSONFlashCards.JSONobj.innerArray[item]!=undefined){
                    myJSONFlashCards.JSONobj.innerArray[item][0][0][1] = question;
                    myJSONFlashCards.JSONobj.innerArray[item][0][1][1] = answer;
                }else{
                    addQuestionAddAnswerToPushFlashCards(question, answer);
                    // debugger;    //set to debug at this line
                }
    
                // debugger;
    
            });
            
        }
        // debugger;

        populate();
        saveIt();
        // debugger;    //set to debug at this line
    });
    
    $('.backButtonFromEdit').on('click', ()=>{
        hide();
        show('study');
    });
    
    $('.toEdit').on('click', ()=>{
        hide();
        show('editWidth');
        show('editingCards');
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
        if(flipped==true){
          //question
          
          $('.QADiv').html("<h1>"+myJSONFlashCards.JSONobj.innerArray[cardPos][0][0][1]+"</h1>");
          // flipped=!flipped;
        }
    });

}
function deleteButtons(){
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