let count = 1;

document.getElementById("showCount").innerHTML = count
let decrease = document.getElementById('dec');
let increase = document.getElementById('inc');
let reset = document.getElementById('clr');


decrease.onclick = function () {
    if(count <= 0){
        document.getElementById('Error').style.display = 'block';
    }
    else{
        count--;
        if(count === 1) {
            document.getElementById('clr').style.display = 'none';
        }
        document.getElementById('showCount').innerHTML = count;
    }
}
increase.onclick = function () {
    count++;
    if(count > 1) {
        document.getElementById('clr').style.display = 'block';        
    }
    else if(count === 1) {
        document.getElementById('Error').style.display = 'none';
        document.getElementById('clr').style.display = 'none';
    }
    document.getElementById('showCount').innerHTML = count;
}
reset.onclick = function () {
    count = 0;
    document.getElementById('showCount').innerHTML = count;
    document.getElementById('clr').style.display = 'none';   
}



