// resizing window functions


// TODO - make functions to Correct CSS 
// for small(er) screens

// this FILE is not yet used

window.addEventListener('resize', function(event){
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight; 
    changeCSSFunction();
});

//use this in Pair with: 
// changeCSSFunction();

function changeCSSFunction(){
    var widthMe = $('body').width();
    // console.log('widthMe', widthMe);

    if(widthMe<=450){
        console.log('you are small!');
        // debugger;
        // changeCSS('editWidth', ['widthFull']);
        changeCSS('editingTop', ['widthFull', 'smallFont']);
        // $('.editingCards div').addClass('smallFont');
    }
    if(widthMe>=451){
        console.log('you are Medium');
        changeCSS('editingTop', ['widthFull', 'mediumFont']);
    }
}

// function startupCSS(){
//     changeCSS('editingCards ', ['widthFull', 'center']);
// }