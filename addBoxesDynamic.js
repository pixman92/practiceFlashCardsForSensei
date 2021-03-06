function removeElement(indexSearch){
    if(indexSearch==0){
        console.error('CANNOT remove element 0!');
    }else{
        // debugger;
        myJSONFlashCards.JSONobj.innerArray.splice(indexSearch, 1);
        populate();
        saveIt();
        deleteButtons();
        // debugger;
    }
}

// =============================
function populate(){
    // function that makes the QA boxes
    // from an array of Stored QA elements


    //pre function -> addQuestionAddAnswerToPushFlashCards(question, answer);
    try{

        htmlArray=[];
        myJSONFlashCards.JSONobj.innerArray.forEach((item, index)=>{
            if(index!=0){
                console.log('flashcardIndex', index);
                // sends Data to the addQABox() function - to create a new QA flash Card box
                addQABox(index, myJSONFlashCards.JSONobj.innerArray[index][0][0][1], myJSONFlashCards.JSONobj.innerArray[index][0][1][1]);
                // debugger;
            }
        });
        // debugger;
    
        // this code parses the HTML array, pushes all to a Single String
        var htmlString = "";
        htmlArray.forEach((item, index)=>{
            htmlString += item;
        });
    
        indexOfBlank = myJSONFlashCards.JSONobj.innerArray['length'];
    
        // adds a Blank Box
        addBlankBox(indexOfBlank);    
    
        // debugger;
    
        $('.addBoxesHTMLHere').html('');
        $('.addBoxesHTMLHere').html(htmlString + blankBoxHTML);
    
        // debugger;
    }catch(err){
        console.log('err: ', err);
        
    } 

}

var htmlArray=[];
function addQABox(index, question, answer){
    // function designed to make the QA boxes
    if(!index){
        console.log('UNDEFINED! Try again');
    }else{
        index = index.toString();
        myArray = ['   <div class="marginTop addBoxesHTMLHere">',
       '      <div class="boxesAndDelete">',
       '         <!--  boxData/addingData/addbutton',
       '   for the boxData, middle row and final addngButton -->',
       '         <!-- boxData - first row -->',
       '         <div class="boxesClass">',
       '            <div class="boxesQAndA">',
       '               <!-- <div class="boxes"> -->',
       '               <!-- boxesGrid - 2 columns/1row -->',
       '               <!-- <div class="boxesGrid center"> -->',
       '               <div class="questionClass widthFull ">',
       '                  <div class="questionDiv">',
       '                     <textarea class="question'+index+' widthFull">'+question+'</textarea>',
       '                  </div>',
       '               </div>',
       '               <div class="answerClass widthFull">',
       '                  <div class="answerDiv">',
       '                     <textarea class="answer'+index+' widthFull">'+answer+'</textarea>',
       '                  </div>',
       '               </div>',
       '               <!-- </div> -->',
       '            </div>',
       '         </div>',
       '         <div class="deleteButtonClass">',
       '            <!-- </div> -->',
       '            <div class="delete">',
       '               <!--      DeleteButton          -->',
       '               <div class="deleteDiv center">',
       '                  <button class="delete'+index+'">X</button>',
       '               </div>',
       '            </div>',
       '         </div>',
       '      </div>',
       '   </div>',
       ].join('');
       
        //    $('.addBoxesHTMLHere').html($('.addBoxesHTMLHere').html()+myArray);
        htmlArray.push(myArray);
    }

}
var blankBoxHTML;
function addBlankBox(newIndex){
    //function and variable to make into a new Blank Box for QA
    blankBoxHTML = [
        '   <div class="marginTop addBoxesHTMLHere">','<div class="boxesAndDelete">',
        '   <!--  boxData/addingData/addbutton',
        'for the boxData, middle row and final addngButton -->',
        '   <!-- boxData - first row -->',
        '   <div class="boxesClass">',
        '      <div class="boxesQAndA">',
        '         <!-- <div class="boxes"> -->',
        '         <!-- boxesGrid - 2 columns/1row -->',
        '         <!-- <div class="boxesGrid center"> -->',
        '         <div class="questionClass widthFull ">',
        '            <div class="questionDiv">',
        '               <textarea class="question'+newIndex+' widthFull"></textarea>',
        '            </div>',
        '         </div>',
        '         <div class="answerClass widthFull">',
        '            <div class="answerDiv">',
        '               <textarea class="answer'+newIndex+' widthFull"></textarea>',
        '            </div>',
        '         </div>',
        '         <!-- </div> -->',
        '      </div>',
        '   </div>',
        '   <div class="deleteButtonClass">',
        '      <!-- </div> -->',
        '      <div class="delete">',
        '         <!--      DeleteButton          -->',
        '         <div class="deleteDiv center">',
        '            <button class="delete'+newIndex+'">X</button>',
        '         </div>',
        '      </div>',
        '   </div>',
        '</div>'].join('');
}



// =============================

// function mak