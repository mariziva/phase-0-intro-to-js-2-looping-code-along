// Code your solutions in this fil
function writeCards (name, event) {
    let newArray = [];
    for (let i=0; i < name.length; i++) {
        newArray.push (`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    };
    return newArray;
};

function countDown (i) {
    while (i>=0) {
        console.log(i);
        i--;
    }
};