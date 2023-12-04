class Rules {
    moreThan5Digits = function(value){return value.length >= 5}

    atLeastAlphaAndNumber = function (value){return new RegExp('[a-zA-Z]+').test(value) && new RegExp('[0-9]+').test(value)}

    atLeastSpecialCar = function(value){return new RegExp('[$&+,:;=?@#|\'<>.^*()%!-]').test(value)}

    atLeastCapitalLetter = function(value){return new RegExp('[A-Z]+').test(value)}

    sumOfNumberModulo5 = function(value){
        let sum = 0;
        for (const carPos in value) {
            const carToCheck = value[carPos];
            if (new RegExp('[0-9]+').test(carToCheck)){
                sum += parseInt(carToCheck);
            }
        }
        return sum % 5 === 0;
    }

    notContains1234 = function(value){return !value.includes('1234')}

    containingSn = function(value){return value.includes('Sn')}

    containingAgValue = function(value){return value.includes('47')}

    containingAsMuchNumberAsLetter = function(value){
        let numberOfLetters = 0;
        let numberOfNumbers = 0;
        for (const carPos in value) {
            const carToCheck = value[carPos];
            if (new RegExp('[0-9]+').test(carToCheck)){
                numberOfNumbers++;
            }
            if (new RegExp('[a-zA-Z]+').test(carToCheck)){
                numberOfLetters++;
            }
        }
        return numberOfNumbers === numberOfLetters;
    }

    containingEcullyZipCode = function(value){return value.includes('69130')}

    containingMadagascarCapital = function(value){return value.toLowerCase().includes('antananarivo')}
}