function buttonListeners(){

    var newIndex = pullLatest();

    var newBlankCard = ['<div class="boxesAndDelete">',
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
    '               <textarea class="answer'+newIndex+' widthFull">answer</textarea>',
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
    $('.addingButton').on('click', ()=>{
           
}