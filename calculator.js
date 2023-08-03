class Calculator {
    firstNum = 0;
    secondNum = 0;
    answer = 0;
    mustReset = true;
    operand;

    constructor(calculatorOutputID) {
        this.output = document.getElementById(calculatorOutputID);
    }

    containsDecimal() {
        return this.output.innerText.includes(".") ? true : false;
    }

    printAnswer() {
        // Max decimal length set to 9, probably reasonable
        this.output.innerText = (this.answer).toPrecision(6);
    }

    addVals() {
        // Adds two numbers
        return this.firstNum + this.secondNum;
    }

    subVals() {
        // Subtracts two numbers
        return this.firstNum - this.secondNum;
    }

    multVals() {
        // Multiplies two numbers
        return this.firstNum * this.secondNum;
    }

    divVals() {
        // Divides two numbers
        return this.firstNum / this.secondNum;
    }

    updateScreen(newNum) {
        // A default screen reset, so sample text doesn't get added to user input
        if( this.mustReset ) {
            this.reset()
        }

        // Handles adding a decimal to the input
        if( newNum == "." ) {
            if(!this.containsDecimal()) {
                this.output.innerText += newNum;
            }
            return;
        }

        // Sets value to user input if screen still reads '0'
        if(this.output.innerText == "0" ) {
                this.output.innerText = newNum;            
        }

        // Appends the new user input to the screen's value
        else {
            this.output.innerText += newNum;
        }
        
    }

    clearScreen() {
        this.output.innerText = "0";
    }

    reset() {
        this.firstNum = 0;
        this.secondNum = 0;
        this.answer = 0;
        this.operand = null;
        this.mustReset = false;
        this.clearScreen();
    }

    deleteLast() {
        let newStr = this.output.innerText.substring(0, this.output.innerText.length - 1);
        if (newStr.length == 0) {
            newStr = "0";
        }
        this.output.innerText = newStr;
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
        // this.mustReset = true;
        this.printAnswer();
    }

    setOperand(operator) {
        this.setFirst();
        this.clearScreen();
        this.operand = operator;
    }


}

let c = new Calculator("calc-output");
