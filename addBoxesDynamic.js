// var keepingTrackOfIndexJSON;
// function makeIndexJSON(){
//     keepingTrackOfIndexJSON = new JSON_Instance();
// }   

function removeElement(indexSearch){
    // keepingTrackOfIndexJSON.JSONobj.innerArray.forEach((item, indexGoingThrough)=>{
    //     if(keepingTrackOfIndexJSON.JSONobj.innerArray[indexGoingThrough].index == indexSearch){
    //         keepingTrackOfIndexJSON.JSONobj.innerArray.splice(indexGoingThrough, 1);
    //     }
    // });
    if(indexSearch==0){
        console.error('CANNOT remove element 0!');
    }else{
        debugger;
            // if(myJSONFlashCards.JSONobj.innerArray[indexGoingThrough]){
                //         keepingTrackOfIndexJSON.JSONobj.innerArray.splice(indexGoingThrough, 1);
                //     }
        myJSONFlashCards.JSONobj.innerArray.splice(indexSearch, 1);
        debugger;
    }
}

// =============================
function populate(){
    //pre function -> addQuestionAddAnswerToPushFlashCards(question, answer);

    htmlArray=[];
    myJSONFlashCards.JSONobj.innerArray.forEach((item, index)=>{
        if(index!=0){
            console.log('flashcardIndex', index);
            addQABox(index, myJSONFlashCards.JSONobj.innerArray[index][0][0][1], myJSONFlashCards.JSONobj.innerArray[index][0][1][1]);
            // debugger;
        }
    });
    // debugger;

    var htmlString = "";
    htmlArray.forEach((item, index)=>{
        htmlString += item;
    });

    indexOfBlank = myJSONFlashCards.JSONobj.innerArray['length'];

    addBlankBox(indexOfBlank);    

    // debugger;

    $('.addBoxesHTMLHere').html('');
    $('.addBoxesHTMLHere').html(htmlString + blankBoxHTML);

    // debugger;

}

var htmlArray=[];
function addQABox(index, question, answer){

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
        '            <button class="delete1">X</button>',
        '         </div>',
        '      </div>',
        '   </div>',
        '</div>'].join('');
}

