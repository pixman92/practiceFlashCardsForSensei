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

    if(widthMe<=400){
        console.log('you are small!');
        // debugger;
        changeCSS('editWidth', ['widthFull']);

    }
}