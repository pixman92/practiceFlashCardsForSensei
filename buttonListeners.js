function buttonListeners(){


    $('.addingButton').on('click', ()=>{
        var newIndex = pullLatest();
        newIndex++;
        // savedHTMLArray = [];
        // savedHTML2 = [];
        // savedHTMLArray[0] = $('.addBoxesHTMLHere').html();

        var newBlankCard = [
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
        // savedHTMLArray[1]= newBlankCard;

        // savedHTML2.push(savedHTMLArray[0]);
        // savedHTML2.push(savedHTMLArray[1]);
        
        // savedHTML = $('.addBoxesHTMLHere').html();
        

        $('.addBoxesHTMLHere').html($('.addBoxesHTMLHere').html() + newBlankCard);
        // savedHTML = "";
    });
           
}