class Calculator {
    firstNum = 0;
    secondNum = 0;
    answer = 31981;
    mustReset = false;
    operand;

    constructor(calculatorOutputID) {
        this.output = document.getElementById(calculatorOutputID);
    }

    printAnswer() {
        // console.log(`${this.answer}`);
        let t = this.answer.toString();
        let finalStr = "";
        let counter = 0;
        for( let i = t.length - 1; i >= 0; i-- ) {
            if( counter % 3 == 0 && counter >= 3 ) {
                // console.log(",");
                finalStr += ",";
            }
            // console.log(t[i]);
            finalStr += t[i];
            counter++;
        }
        // console.log("final", finalStr)
        let newStr = "";
        for(let i = finalStr.length - 1; i >= 0; i-- ) {
            // console.log(finalStr[i])
            newStr += finalStr[i];
        }
        // console.log(newStr);
        console.log(newStr);
        this.output.innerText = newStr;
    }

    addVals() {
        return this.firstNum + this.secondNum;
    }

    subVals() {
        return this.firstNum - this.secondNum;
    }

    multVals() {
        return this.firstNum * this.secondNum;
    }

    divVals() {
        return this.firstNum / this.secondNum;
    }

    updateScreen(newNum) {
        if(this.firstNum == 0 && this.secondNum == 0 && this.answer == 31981 || this.mustReset ) {
            this.reset()
        }
        if(this.output.innerText == 0 ) {
            this.output.innerText = newNum;
        }
        else {
            this.output.innerText += newNum;
        }
        
    }

    clearScreen() {
        this.output.innerText = 0;
    }

    reset() {
        this.firstNum = 0;
        this.secondNum = 0;
        this.answer = 0;
        this.operand = null;
        this.mustReset = false;
        this.clearScreen();
    }

    setFirst() {
        this.firstNum = Number(this.output.innerText);
    }

    setSecond() {
        this.secondNum = Number(this.output.innerText);
    }

    calculate() {
        this.setSecond();
        switch(this.operand) {
            case "+":
                this.answer = this.addVals();
                break;
            
            case "-":
                this.answer = this.subVals();
                break;

            case "*":
                this.answer = this.multVals();
                break;

            case "/":
                this.answer = this.divVals();
                break;
        }
        this.mustReset = true;
        this.printAnswer();
    }

    setOperand(operator) {
        this.setFirst();
        this.clearScreen();
        this.operand = operator;
    }

    // setOperand(operator) {
    //     switch(operator) {
    //         case "+":
    //             this.addVals;
    //             break;
    //         case "-":
    //             this.subVals;
    //             break;
    //         case "*":
    //             this.multVals;
    //             break;
    //         case "/":
    //             this.divVals;
    //             break;
    //     }
    // }


}

let c = new Calculator("calc-output");
