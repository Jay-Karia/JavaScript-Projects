
let send1 = document.getElementsByClassName('send')[0];
let copy1 = document.getElementsByClassName('copy')[0];
let obj = {};

send1.addEventListener('click', () => {
    globalThis.obj;
    try {
        let name1 = document.getElementsByClassName('name')[0].value;
        let rate1 = document.getElementsByClassName('rate')[0].value;
        let feed1 = document.getElementsByClassName('des')[0].value;

        let rate = document.getElementsByClassName('rate')[0];
        rate = rate.style.boxShadow = "0 0 red";

        let elem = document.getElementsByClassName('name')[0];
        elem = elem.style.boxShadow = "0 0 red";

        if (name1 === "") {
            let elem = document.getElementsByClassName('name')[0];
            elem = elem.style.boxShadow = "0 0 2px 2px red";
        }

        else if (Number(rate1, 100) > 100 || rate1 === "" || Number.isNaN(rate1) == true) {
            let rate = document.getElementsByClassName('rate')[0];
            rate = rate.style.boxShadow = "0 0 2px 2px red";
        }

        obj['title'] = "Calculator";
        obj['name'] = name1;
        obj['rate'] = rate1;
        obj['feed'] = feed1;

    } catch {
        let rate = document.getElementsByClassName('rate')[0];
        rate = rate.style.boxShadow = "0 0 2px 2px red";
    }
})

copy1.addEventListener('click', () => {
    navigator.clipboard.writeText("https://Calculator.jaysk.repl.co");
    let copy1 = document.getElementsByClassName('copy')[0];
    copy1.value = "Copied";
    setInterval(() => {
        copy1.value = "Copy";
    }, 3000);
});

// Second
let send2 = document.getElementsByClassName('send')[1];
let copy2 = document.getElementsByClassName('copy2')[0];

send2.addEventListener('click', () => {
    globalThis.obj;
    try {
        let name2 = document.getElementsByClassName('name')[1].value;
        let rate2 = document.getElementsByClassName('rate')[1].value;
        let feed2 = document.getElementsByClassName('des')[1].value;

        let rate = document.getElementsByClassName('rate')[1];
        rate = rate.style.boxShadow = "0 0 red";

        let elem = document.getElementsByClassName('name')[1];
        elem = elem.style.boxShadow = "0 0 red";

        if (name2 === "") {
            let elem = document.getElementsByClassName('name')[1];
            elem = elem.style.boxShadow = "0 0 2px 2px red";
        }

        else if (Number(rate2, 100) > 100 || rate2 === "" || Number.isNaN(rate2) == true) {
            let rate = document.getElementsByClassName('rate')[1];
            rate = rate.style.boxShadow = "0 0 2px 2px red";
        }

        obj['title'] = "TicTacToe";
        obj['name'] = name2;
        obj['rate'] = rate2;
        obj['feed'] = feed2;

    } catch {
        let rate = document.getElementsByClassName('rate')[1];
        rate = rate.style.boxShadow = "0 0 2px 2px red";
    }
})

copy2.addEventListener('click', () => {
    navigator.clipboard.writeText("https://TicTacToe.jaysk.repl.co");
    let copy2 = document.getElementsByClassName('copy')[1];
    copy2.value = "Copied";
    setInterval(() => {
        copy2.value = "Copy";
    }, 3000);
});

// Third
let send3 = document.getElementsByClassName('send')[2];
let copy3 = document.getElementsByClassName('copy3')[0];

send3.addEventListener('click', () => {
    globalThis.obj;
    try {
        let name3 = document.getElementsByClassName('name')[2].value;
        let rate3 = document.getElementsByClassName('rate')[2].value;
        let feed3 = document.getElementsByClassName('des')[2].value;

        let rate = document.getElementsByClassName('rate')[2];
        rate = rate.style.boxShadow = "0 0 red";

        let elem = document.getElementsByClassName('name')[2];
        elem = elem.style.boxShadow = "0 0 red";

        if (name3 === "") {
            let elem = document.getElementsByClassName('name')[2];
            elem = elem.style.boxShadow = "0 0 2px 2px red";
        }

        else if (Number(rate3, 100) > 100 || rate3 === "" || Number.isNaN(rate3) == true) {
            let rate = document.getElementsByClassName('rate')[2];
            rate = rate.style.boxShadow = "0 0 2px 2px red";
        }

        obj['title'] = "Cricket Player Stats";
        obj['name'] = name3;
        obj['rate'] = rate3;
        obj['feed'] = feed3;

    } catch {
        let rate = document.getElementsByClassName('rate')[2];
        rate = rate.style.boxShadow = "0 0 2px 2px red";
    }
})

copy3.addEventListener('click', () => {
    navigator.clipboard.writeText("https://Cricket-Player-Statistics.jaysk.repl.co");
    let copy3 = document.getElementsByClassName('copy3')[0];
    copy3.value = "Copied";
    setInterval(() => {
        copy3.value = "Copy";
    }, 3000);
});

// Fourth
let send4 = document.getElementsByClassName('send')[3];
let copy4 = document.getElementsByClassName('copy4')[0];

send4.addEventListener('click', () => {
    globalThis.obj;
    try {
        let name4 = document.getElementsByClassName('name')[3].value;
        let rate4 = document.getElementsByClassName('rate')[3].value;
        let feed4 = document.getElementsByClassName('des')[3].value;

        let rate = document.getElementsByClassName('rate')[3];
        rate = rate.style.boxShadow = "0 0 red";

        let elem = document.getElementsByClassName('name')[3];
        elem = elem.style.boxShadow = "0 0 red";

        if (name4 === "") {
            let elem = document.getElementsByClassName('name')[3];
            elem = elem.style.boxShadow = "0 0 2px 2px red";
        }

        else if (Number(rate4, 100) > 100 || rate4 === "" || Number.isNaN(rate4) == true) {
            let rate = document.getElementsByClassName('rate')[3];
            rate = rate.style.boxShadow = "0 0 2px 2px red";
        }

        obj['title'] = "My Notes";
        obj['name'] = name4;
        obj['rate'] = rate4;
        obj['feed'] = feed4;

    } catch {
        let rate = document.getElementsByClassName('rate')[3];
        rate = rate.style.boxShadow = "0 0 2px 2px red";
    }
})

copy4.addEventListener('click', () => {
    navigator.clipboard.writeText("https://My-Notes.jaysk.repl.co");
    let copy4 = document.getElementsByClassName('copy4')[0];
    copy4.value = "Copied";
    setInterval(() => {
        copy4.value = "Copy";
    }, 3000);
});

// Fifth
let send5 = document.getElementsByClassName('send')[4];
let copy5 = document.getElementsByClassName('copy5')[0];

send5.addEventListener('click', () => {
    globalThis.obj;
    try {
        let name5 = document.getElementsByClassName('name')[4].value;
        let rate5 = document.getElementsByClassName('rate')[4].value;
        let feed5 = document.getElementsByClassName('des')[4].value;

        let rate = document.getElementsByClassName('rate')[4];
        rate = rate.style.boxShadow = "0 0 red";

        let elem = document.getElementsByClassName('name')[4];
        elem = elem.style.boxShadow = "0 0 red";

        if (name5 === "") {
            let elem = document.getElementsByClassName('name')[4];
            elem = elem.style.boxShadow = "0 0 2px 2px red";
        }

        else if (Number(rate5, 100) > 100 || rate5 === "" || Number.isNaN(rate5) == true) {
            let rate = document.getElementsByClassName('rate')[4];
            rate = rate.style.boxShadow = "0 0 2px 2px red";
        }

        obj['title'] = "Toss";
        obj['name'] = name5;
        obj['rate'] = rate5;
        obj['feed'] = feed5;

    } catch {
        let rate = document.getElementsByClassName('rate')[4];
        rate = rate.style.boxShadow = "0 0 2px 2px red";
    }
})

copy5.addEventListener('click', () => {
    navigator.clipboard.writeText("https://Toss.jaysk.repl.co");
    let copy5 = document.getElementsByClassName('copy5')[0];
    copy5.value = "Copied";
    setInterval(() => {
        copy5.value = "Copy";
    }, 3000);
});

const promiseObj = fetch('./data.json');
promiseObj.then(response => {
    const promiseObj2 = response.json();
    promiseObj2.then(data => {
        data = data[0] = {
            'title': 'calculator'
        };
        console.log(data[0]);
    });
})
