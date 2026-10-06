///Function hoisting
// A void function returns no data to the caller
// addNum()
// subNum()
function addNum() {
    let fn = 34;
    let sn = 56;
    let sumRes = fn + sn;
    console.log(sumRes);
}


function addNum() {
    let fn = 34;
    let sn = 56;
    let sumRes = fn - sn;
    console.log(sumRes);
}

function timNum() {
    let fn = 34;
    let sn = 56;
    let sumRes = fn * sn;
    console.log(sumRes);
}

function divNum() {
    let fn = 34;
    let sn = 56;
    let sumRes = fn / sn;
    console.log(sumRes);
}

function expNum() {
    let fn = 34;
    let sn = 56;
    let sumRes = fn ** sn;
    console.log(sumRes);
}

let option = '2'
switch (option)  {
    case '1':
        addNum()
        break;

     case '2':
        subNum()
        break;  

    case '3':
        timNum()
        break;

    case '4':
        divNum()
        break;

    case '5':
        expNum()
        break;
        
    default:
        console.log('Please enter a no between 1 and 2');
        break;
}
