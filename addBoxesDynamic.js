var keepingTrackOfIndexJSON;
function makeIndexJSON(){
    keepingTrackOfIndexJSON = new JSON_Instance();
}   

function removeElement(indexSearch){
    keepingTrackOfIndexJSON.JSONobj.innerArray.forEach((item, indexGoingThrough)=>{
        if(keepingTrackOfIndexJSON.JSONobj.innerArray[indexGoingThrough].index == indexSearch){
            keepingTrackOfIndexJSON.JSONobj.innerArray.splice(indexGoingThrough, 1);
        }
    });
}

function pullLatest(){
    resetIndex();
    var len = keepingTrackOfIndexJSON.JSONobj.innerArray["length"]
    return keepingTrackOfIndexJSON.JSONobj.innerArray[len-1].index

}

var flashCardData=[];
function resetIndex(){
    // makeIndexJSON();
    flashCardData=[];
    myJSONFlashCards.JSONobj.innerArray.forEach((item, index)=>{
        if(index!=0){
            console.log('flashcardIndex', index);
            keepingTrackOfIndexJSON.addToObj([['index', index]]);
            flashCardData.push([[myJSONFlashCards.JSONobj.innerArray[index][0][0][1]
            ], [myJSONFlashCards.JSONobj.innerArray[index][0][1][1]]]);
        }
    })

    keepingTrackOfIndexJSON.JSONobj.innerArray.forEach((item, index)=>{
        console.log('keepingtrackIndex', item.index);
        addQABox(item.index, flashCardData[index][0], flashCardData[index][1]);
    });
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
        htmlArray.push($('.addBoxesHTMLHere').html(myArray));
    }

}

