var previousNumbers = [];
var previousCalls = [];

function generateNumber() {
    let call = "";
    if (previousNumbers.length < 75) {
        console.log(previousNumbers.length)
        let number = Math.floor(Math.random() * 75) + 1;
        if (previousNumbers.length == 0)
            previousNumbers.push(number);

        while (previousNumbers.includes(number)) {
            number = Math.floor(Math.random() * 75) + 1;
        }
        previousNumbers.push(number);

        if (number <= 15) {
            call = "B" + number;
        } else if (number <= 30) {
            call = "I" + number;
        } else if (number <= 45) {
            call = "N" + number;
        } else if (number <= 60) {
            call = "G" + number;
        } else if (number <= 75) {
            call = "O" + number;
        }

        previousCalls.push(call);
    } else {
        call = "All numbers called";
    }
    return call;
}

function display(call) {
    let currentCall = document.querySelector('#call');
    let previousCall = document.querySelector('#prior-call');
    let priorCalls = document.querySelector('#previous-calls');

    if (call == "All numbers called") {
        currentCall.style.fontSize = "3em"
    }
    currentCall.textContent = call;

    if (previousNumbers.length < 75) {
        previousCall.textContent = previousCalls[previousCalls.length - 2];

        let p = document.createElement('p');
        p.textContent = previousCalls[previousCalls.length - 2];
        priorCalls.appendChild(p);
    }

    priorCalls.scrollTop = priorCalls.scrollHeight;
}


window.addEventListener('load', () => {
    // let btn = document.querySelector('button');
    // btn.addEventListener('click', () => {
    //     let call = generateNumber();
    //     display(call);
    // });

    document.body.onkeyup = (e) => {
        if (e.keyCode == 32) {
            let call = generateNumber();
            display(call);
        }
    };
});