function buttonListeners(){


    $('.addingButton').on('click', ()=>{
        //run through all indexes of myJSONFlashCards.JSONobj.innerArray

        var indexArray=[]

        myJSONFlashCards.JSONobj.innerArray.forEach((item, index)=>{
            if(index!=0)indexArray.push(index);
        });
        debugger;

        var nextIndexFromLen = myJSONFlashCards.JSONobj.innerArray.length;
        if($('.question'+nextIndexFromLen).val()!='' && $('.answer'+nextIndexFromLen).val()!=""){
            indexArray.push(nextIndexFromLen);
        }

        debugger;

        indexArray.forEach((item, index)=>{
            var question = $('.question'+item).val();
            var answer = $('.answer'+item).val();
            debugger;
            if(myJSONFlashCards.JSONobj.innerArray[item]!=undefined){
                myJSONFlashCards.JSONobj.innerArray[item][0][0][1] = question;
                myJSONFlashCards.JSONobj.innerArray[item][0][1][1] = answer;
            }else{
                addQuestionAddAnswerToPushFlashCards(question, answer);
            }

            debugger;

        });
        populate();
        debugger;


        // if($('.question'+newIndex).val()!='' && $('.answer'+newIndex).val()!=''){
        //     console.log('index', newIndex);
        //     console.log('true');
        //     addQuestionAddAnswerToPushFlashCards($('.question'+newIndex).val(), $('.answer'+newIndex).val());
        //     resetIndex();
        // }else{

        // }

            
        //     resetIndex();
        // }
        // savedHTMLArray = [];
        // savedHTML2 = [];
        // savedHTMLArray[0] = $('.addBoxesHTMLHere').html();

       
    });
           
}