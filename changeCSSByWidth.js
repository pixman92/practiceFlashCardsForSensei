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

    if(widthMe<=800){
        console.log('you are small!');
        // debugger;
        changeCSS('editWidth', ['widthFull']);
        changeCSS('editingCards div', ['widthFull', 'smallFont']);
        
    }
}

function startupCSS(){
    changeCSS('editingCards ', ['widthFull', 'center']);
}