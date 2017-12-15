$(function () {

    var $plusBtn = $('#plus-btn');
    var $subtractBtn = $('#subtract-btn');
    var $multiplyBtn = $('#multiply-btn');
    var $divideBtn = $('#divide-btn');
    var $showFirstNumberBtn = $('#show-first-number');
    var $showSecondNumberBtn = $('#show-second-number');

    var $realFirst = $('#real-first');
    var $imaginaryFirst = $('#imaginary-first');
    var $realSecond = $('#real-second');
    var $imaginarySecond = $('#imaginary-second');

    var $equationDiv = $('#equation-div');
    var $resultDiv = $('#result');


    // MATHEMATICAL FUNCTIONS (numbers are passed as arrays):
    function addComplexnumbers(a, b) {
        return [a[0] + b[0], a[1] + b[1]];
    }

    function subtractComplexnumbers(a, b) {
        return [a[0] - b[0], a[1] - b[1]];
    }

    function multiplyComplexnumbers(a, b) {
        return [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
    }

    function divideComplexnumbers(a, b) {
        return [(a[0] * b[0] + a[1] * b[1]) / (b[0] ** 2 + b[1] ** 2), (b[0] * a[1] - a[0] * b[1]) / ((b[0] ** 2 + b[1] ** 2))];
    }


    // Function which analyses the complex number (passed as array) and returns a standard string such as "a + bi":
    function getComplexNumber(number)
    {
        var complexNumber = '';

        //elimimate cases for which the real part is 0:
        if (number[0] == '0') {
            if (number[1] == '0') {
                return '0';
            } else if (number[1] == '1') {
                return 'i';
            } else if (number[1] == '-1') {
                return '-i';
            } else return number[1] + 'i';
        }

        //for the remaining cases the 'string complex number' is put together gradually
        complexNumber += number[0];

        if (number[1] == '0') {
            return complexNumber;
        }
        if (number[1] == '1') {
            complexNumber += ' + i';
            return complexNumber;
        }
        if (number[1] == '-1') {
            complexNumber += ' - i';
            return complexNumber;
        }
        if (number[1] < 0) {
            complexNumber += number[1] + 'i';
        } else {
            complexNumber += ' + ' + number[1] + 'i';
        }

        return complexNumber;

    }

    // Function which displays the result, irrespective of operation
    function showResult (firstNumber, secondNumber, result, sign) {
        result.toString();
        var resultAsString = getComplexNumber(result);
        var firstcomplexNumberAsString = getComplexNumber(firstNumber);
        var secondcomplexNumberAsString = getComplexNumber(secondNumber);
        $equationDiv.html('(' + firstcomplexNumberAsString + ') ' + sign + ' (' + secondcomplexNumberAsString + ')');
        $resultDiv.html('RESULT: ' + resultAsString);
    }


    //EVENT HANDLERS:
    $showFirstNumberBtn.click(function (e) {
        var firstNumber = [$realFirst.val(), $imaginaryFirst.val()];

        if (firstNumber[0] == '' || firstNumber[1] == '') {
            $equationDiv.html('Please add values for both fields!');
            e.preventDefault();
            return;
        }

        var complexNumberAsString = getComplexNumber(firstNumber);
        $equationDiv.html(complexNumberAsString);
        e.preventDefault();
    });

    $showSecondNumberBtn.click(function (e) {
        var secondNumber = [$realSecond.val(), $imaginarySecond.val()];

        if (secondNumber[0] == '' || secondNumber[1] == '') {
            $equationDiv.html('Please add values for both fields!');
            e.preventDefault();
            return;
        }

        var complexNumberAsString = getComplexNumber(secondNumber);
        $equationDiv.html(complexNumberAsString);
        e.preventDefault();
    });

    $plusBtn.click(function () {
        var firstNumber = [parseInt($realFirst.val()), parseInt($imaginaryFirst.val())];
        var secondNumber = [parseInt($realSecond.val()), parseInt($imaginarySecond.val())];
        var result = addComplexnumbers(firstNumber, secondNumber);
        showResult(firstNumber, secondNumber, result, '+');
    });

    $subtractBtn.click(function () {
        var firstNumber = [parseInt($realFirst.val()), parseInt($imaginaryFirst.val())];
        var secondNumber = [parseInt($realSecond.val()), parseInt($imaginarySecond.val())];
        var result = subtractComplexnumbers(firstNumber, secondNumber);
        showResult(firstNumber, secondNumber, result, '-');
    });

    $multiplyBtn.click(function () {
        var firstNumber = [parseInt($realFirst.val()), parseInt($imaginaryFirst.val())];
        var secondNumber = [parseInt($realSecond.val()), parseInt($imaginarySecond.val())];
        var result = multiplyComplexnumbers(firstNumber, secondNumber);
        showResult(firstNumber, secondNumber, result, '*');
    });

    $divideBtn.click(function () {
        var firstNumber = [parseInt($realFirst.val()), parseInt($imaginaryFirst.val())];
        var secondNumber = [parseInt($realSecond.val()), parseInt($imaginarySecond.val())];
        if (secondNumber[0] == 0 && secondNumber[1] == 0) {
            $resultDiv.html('Cannot divide by 0!');
            return;
        }
        var result = divideComplexnumbers(firstNumber, secondNumber);
        showResult(firstNumber, secondNumber, result, '/');
    });
});