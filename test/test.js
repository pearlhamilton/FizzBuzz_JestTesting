const fizzBuzzGame = require('../fizzbuzz_game.js');


describe('function receives a number', () => {
    
    let fizzBuzz = fizzBuzzGame.fizzBuzz;

    it('recieves an arguement of a number', () => {

        expect(fizzBuzz('hello')).toBe('invalid argument');
    });
      
});




describe('calculations', () => {

    let fizzBuzz = fizzBuzzGame.fizzBuzz;

    it ('should return "FizzBuzz" when recieves multiple of 3 and 5', () => {
        expect (fizzBuzz(15)).toBe("FizzBuzz");
    });

    it ('should return "Fizz" when the number is a multiple of 3', () => {
        expect(fizzBuzz(12)).toBe("Fizz");

    });

    it ('should return "Buzz" when the number is a multiple of 5', () => {
        expect(fizzBuzz(20)).toBe("Buzz");

    });

    it ('should return the number when the number is not a multiple of 5 or 3', () => {
        expect(fizzBuzz(22)).toBe(22);

    });


});