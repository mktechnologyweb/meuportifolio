

AOS.init({
    duration: 1500
});



let progress = document.getElementById('progressbar');
window.onscroll = function () {
    let totalHeight = document.body.scrollHeight + window.innerHeight;
    let progressHeight = (window.pageYOffset / totalHeight) * 28.1;
    progress.style.display = 'revert';
    progress.style.height = progressHeight + "%";
    let flowBar1 = document.getElementById('htBar');
    let flowBar2 = document.getElementById('csBar');
    let flowBar3 = document.getElementById('jsBar');
    let flowBar4 = document.getElementById('nodeBar');
    let flowBar5 = document.getElementById('expressBar');
    let flowBar6 = document.getElementById('mongodbBar');
    if (progressHeight > 5) {

        flowBar1.style.animationName = 'animateskillbar11';
        flowBar2.style.animationName = 'animateskillbar22';
        flowBar3.style.animationName = 'animateskillbar33';
        flowBar4.style.animationName = 'animateskillbar44';
        flowBar5.style.animationName = 'animateskillbar55';
        flowBar6.style.animationName = 'animateskillbar66';
    }
    else {
        flowBar1.style.animationName = 'animateskillbar1';
        flowBar2.style.animationName = 'animateskillbar2';
        flowBar3.style.animationName = 'animateskillbar3';
        flowBar4.style.animationName = 'animateskillbar4';
        flowBar5.style.animationName = 'animateskillbar5';
        flowBar6.style.animationName = 'animateskillbar6';
    }

}

//TEXT

/* ------------------------------------------------------------------------ *  
4 states per letter: Transparent | Line | Block | Visible.
These states are shuffled for a unique "decode" effect each time.
* ------------------------------------------------------------------------ */

function decodeText(){
    var text = document.getElementsByClassName('decode-text')[0];
    // debug with
    // console.log(text, text.children.length);

    // assign the placeholder array its places
    var state = [];
    for(var i = 0, j = text.children.length; i < j; i++ ){
        text.children[i].classList.remove('state-1','state-2','state-3');
        state[i] = i;
    }

    // shuffle the array to get new sequences each time
    var shuffled = shuffle(state);
 
    for(var i = 0, j = shuffled.length; i < j; i++ ){
        var child = text.children[shuffled[i]];
        classes = child.classList;

        // fire the first one at random times
        var state1Time = Math.round( Math.random() * (2000 - 300) ) + 50;
        if(classes.contains('text-animation')){ 
            setTimeout(firstStages.bind(null, child), state1Time);
        }
    }
}

// send the node for later .state changes
function firstStages(child){
    if( child.classList.contains('state-2') ){   
        child.classList.add('state-3');
    } else if( child.classList.contains('state-1') ){
        child.classList.add('state-2')
    } else if( !child.classList.contains('state-1') ){
        child.classList.add('state-1');
        setTimeout(secondStages.bind(null, child), 100);
    }    
}
function secondStages(child){
    if( child.classList.contains('state-1') ){
        child.classList.add('state-2')
        setTimeout(thirdStages.bind(null, child), 100);
    } 
    else if( !child.classList.contains('state-1') )
    {
        child.classList.add('state-1')
    }
}
function thirdStages(child){
    if( child.classList.contains('state-2') ){
        child.classList.add('state-3')
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}


// Demo only stuff
decodeText();

// beware: refresh button can overlap this timer and cause state mixups
setInterval(function(){ decodeText(); }, 10000);


