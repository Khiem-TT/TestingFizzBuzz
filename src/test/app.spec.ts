import {FizzBuzz} from "../app";

describe("Fizz or Buzz?", () => {
    test("isFizz", () => {
        let integer = new FizzBuzz(3);
        let result = 'Fizz';
        expect(integer.check()).toBe(result);
    });

    test("isBuzz", () => {
        let integer = new FizzBuzz(5);
        let result = 'Buzz';
        expect(integer.check()).toBe(result);
    });

    test("isFizzBuzz", () => {
        let integer = new FizzBuzz(30);
        let result = 'FizzBuzz';
        expect(integer.check()).toBe(result);
    });

    test("notIsFizzBuzz", () => {
        let integer = new FizzBuzz(22);
        let result = 'hai hai';
        expect(integer.check()).toBe(result);
    });

    test("notIsFizzBuzz", () => {
        let integer = new FizzBuzz(-50);
        let result = 'Not a positive integer';
        expect(integer.check()).toBe(result);
    });

    test("hasNumber3", () => {
        let integer = new FizzBuzz(13);
        let result = 'Fizz';
        expect(integer.check()).toBe(result);
    });

    test("hasNumber5", () => {
        let integer = new FizzBuzz(52);
        let result = 'Buzz';
        expect(integer.check()).toBe(result);
    });

    test("hasNumber5", () => {
        let integer = new FizzBuzz(53);
        let result = 'FizzBuzz';
        expect(integer.check()).toBe(result);
    });
});