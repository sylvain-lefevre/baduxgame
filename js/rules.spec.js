describe('Reset', function() {
    let rules

    beforeEach(function() {
      rules = new Rules();
    });
    describe('5 cars rule', function() {
        it('should return false if less than 5 cars', function () {
            expect(rules.moreThan5Digits('test')).toBeFalse();
        });

        it('should return true if more than 5 cars', function () {
            expect(rules.moreThan5Digits('testing')).toBeTrue();
        });

        it('should return true if equals 5 cars', function () {
            expect(rules.moreThan5Digits('test1')).toBeTrue();
        });
    });

    describe('at least 1 alpha and 1 number', function() {
        it('should return false when has not alpha', function () {
            expect(rules.atLeastAlphaAndNumber('1234')).toBeFalse();
        });

        it('should return false when has not number', function () {
            expect(rules.atLeastAlphaAndNumber('testing')).toBeFalse();
        });

        it('should return true when has alpha and number', function () {
            expect(rules.atLeastAlphaAndNumber('test1')).toBeTrue();
        });
    });

    describe('at least 1 special car', function() {
        it('should return false when has not special car', function () {
            expect(rules.atLeastSpecialCar('testing1234')).toBeFalse();
        });

        it('should return true when has special car', function () {
            expect(rules.atLeastSpecialCar('testing@1234')).toBeTrue();
        });
    });

    describe('at least 1 capital letter', function() {
        it('should return false when has not capital letter', function () {
            expect(rules.atLeastCapitalLetter('testing1234')).toBeFalse();
        });

        it('should return true when has capital letter', function () {
            expect(rules.atLeastCapitalLetter('testIng@1234')).toBeTrue();
        });
    });

    describe('at least 1 capital letter', function() {
        it('should return false when has not capital letter', function () {
            expect(rules.atLeastCapitalLetter('testing1234')).toBeFalse();
        });

        it('should return true when has capital letter', function () {
            expect(rules.atLeastCapitalLetter('testIng@1234')).toBeTrue();
        });
    });

    describe('sum of number must be modulo 5', function() {
        it('should return false when numbers sum is not modulo 5', function () {
            expect(rules.sumOfNumberModulo5('test1ng2346')).toBeFalse();
        });

        it('should return true when numbers sum is modulo 5', function () {
            expect(rules.sumOfNumberModulo5('test1ng@234')).toBeTrue();
        });
    });

    describe('do not contains 1234', function() {
        it('should return false when contains 1234', function () {
            expect(rules.notContains1234('test1ng1234')).toBeFalse();
        });

        it('should return true when not contains 1234', function () {
            expect(rules.notContains1234('test1ng@234')).toBeTrue();
        });
    });

    describe('must contains stain chemistry symbol', function() {
        it('should return false when not contains Sn', function () {
            expect(rules.containingSn('test1ng@234')).toBeFalse();
        });

        it('should return true when contains Sn', function () {
            expect(rules.containingSn('test1Sn@234')).toBeTrue();
        });
    });

    describe('must contains silver atomic number', function() {
        it('should return false when not contains 47', function () {
            expect(rules.containingAgValue('test1ng@234')).toBeFalse();
        });

        it('should return true when contains 47', function () {
            expect(rules.containingAgValue('test1sn@2347')).toBeTrue();
        });
    });

    describe('must contains as much numbers as letters', function() {
        it('should return false when contains more number than letter', function () {
            expect(rules.containingAsMuchNumberAsLetter('test1ng@234789102')).toBeFalse();
        });

        it('should return false when contains more letter than number', function () {
            expect(rules.containingAsMuchNumberAsLetter('test1ng@234')).toBeFalse();
        });

        it('should return true when contains as much numbers as letters', function () {
            expect(rules.containingAsMuchNumberAsLetter('test1sn@23478')).toBeTrue();
        });
    });

    describe('must contains Ecully Zip Code', function() {
        it('should return false when not contains 69130', function () {
            expect(rules.containingEcullyZipCode('test1ng@69340')).toBeFalse();
        });

        it('should return true when contains 69130', function () {
            expect(rules.containingEcullyZipCode('test1sn@69130')).toBeTrue();
        });
    });

    describe('must contains Madagascar capital name', function() {
        it('should return false when not contains antananarivo', function () {
            expect(rules.containingMadagascarCapital('antan@narivo@69340')).toBeFalse();
        });

        it('should return true when contains antananarivo', function () {
            expect(rules.containingMadagascarCapital('test1antAnanarivo@690')).toBeTrue();
        });
    });

});
