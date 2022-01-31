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
    makeIndexJSON();
    resetIndex();
    var len = keepingTrackOfIndexJSON.JSONobj.innerArray["length"];
    
    return keepingTrackOfIndexJSON.JSONobj.innerArray[len-1].index;

}

function creatingThroughFlashCards(){
    myJSONFlashCards.JSONobj.innerArray.forEach((item, index)=>{
        if(index!=0){
            console.log('flashcardIndex', index);
            keepingTrackOfIndexJSON.addToObj([['index', index]]);
            addQABox(index, [[myJSONFlashCards.JSONobj.innerArray[index][0][0][1]
            ], [myJSONFlashCards.JSONobj.innerArray[index][0][1][1]]]);
        }
    });
}


var flashCardData=[];
function resetIndex(){
    // makeIndexJSON();
    flashCardData=[];
    htmlArray=[];
    keepingTrackOfIndexJSON=new JSON_Instance();
    

    keepingTrackOfIndexJSON.JSONobj.innerArray.forEach((item, index)=>{
        console.log('keepingtrackIndex', item.index);
        addQABox(item.index, flashCardData[index][0], flashCardData[index][1]);
    });
    var htmlSring = "";
    htmlArray.forEach((item, index)=>{
        htmlSring += item;
    });

    var len = keepingTrackOfIndexJSON.JSONobj.innerArray["length"];
    var indexOfBlank = keepingTrackOfIndexJSON.JSONobj.innerArray[len-1].index;
    indexOfBlank++;

    addBlankBox(indexOfBlank);    

    $('.addBoxesHTMLHere').html('');
    $('.addBoxesHTMLHere').html(htmlSring + blankBoxHTML);
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
var blankBoxHTML = [];
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

