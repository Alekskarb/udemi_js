
function first() {
setTimeout(function () {
    console.log(1);
}, 1000)
}
function second() {
        console.log(2);
}
first();
second();           

function lernJS(lang, callback) {
    console.log('I learn ' + lang);
    callback()
}

function done() {
    console.log('I have done 3 lesson')
}

lernJS('Javascript', done);
