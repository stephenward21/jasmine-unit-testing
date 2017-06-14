// FizzBuzz
// -Print the numbers 1-100
// -IF the number is divisible by 3, print fizz instead
// -IF the number is divisible by 5, print buzz instead
// -IF the number is divisible by both, print FizzBuzz instead


describe("FizzBuzz Unit Tests", ()=>{
	it("FizzBuzz must be defined", ()=>{
		expect(fizzBuzz()).toBeDefined();
	});

	it("Should be 1, for passing 1 in.",()=>{
		expect(fizzBuzz(1)).toBe(1);

	});

	it("Should be 2, for passing 2 in.",()=>{
		expect(fizzBuzz(2)).toBe(2);
	});

	it("Should be Fizz, for passing 3 in.",()=>{
		expect(fizzBuzz(3)).toBe('Fizz');
	});

	it("Should be Buzz, for passing 5 in.",()=>{
		expect(fizzBuzz(5)).toBe('Buzz');
	});

	it("Should be FizzBuzz, for passing 15 in.",()=>{
		expect(fizzBuzz(15)).toBe('FizzBuzz');
	});

	var random = Math.floor(Math.random() * 10) * 15;
	it("Should be a string, FizzBuzz for passing " + random,()=>{
		expect(fizzBuzz(random)).toEqual('FizzBuzz');
	});


});