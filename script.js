const result = document.getElementById('result');

function clr(){
    result.value='';

}

function display(val){
    result.value += val;
}

function calculate(){
    let x = result.value;
    var y = eval(x);
    result.value = y;
}