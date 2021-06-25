function insert(num) {
    document.form.textview.value=document.form.textview.value+num;
}

function clean() {
    document.form.textview.value=" ";
    var html = document.getElementById('output');
    html.textContent = '';
}

function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
}

function equal() {
    var exp = document.form.textview.value;
    var html = document.getElementById('output');
    if(exp) {
        html.textContent = new Intl.NumberFormat().format(eval(exp));
    }
}