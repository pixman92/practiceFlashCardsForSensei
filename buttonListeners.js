function buttonListeners(){


    $('.addingButton').on('click', ()=>{
        //run through all indexes of myJSONFlashCards.JSONobj.innerArray

        var indexArray=[]

        myJSONFlashCards.JSONobj.innerArray.forEach((item, index)=>{
            if(index!=0)indexArray.push(index);
        });

        debugger;

        indexArray.forEach((item, index)=>{
            var question = $('.question'+index).val();
            var answer = $('.answer'+index).val();
            debugger;

            myJSONFlashCards.JSONobj.innerArray[index][0][0][1] = question;
            myJSONFlashCards.JSONobj.innerArray[index][0][1][1] = answer;

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