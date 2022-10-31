let myFunctions = require('./function')

test('number should be 2', () =>{
    expect(myFunctions.returnTwo()).toBe(2)
})

test('greeting', () =>{
    expect(myFunctions.greeting('james')).toEqual('Hello, james')
    expect(myFunctions.greeting('jill')).toEqual('Hello, jill')
})

test('should add sumOne and sumTwo', () => {
    expect(myFunctions.add(1, 2)).toEqual(3)
    expect(myFunctions.add(5,9)).toEqual(14)
})

test('should multiply sumOne and sumTwo', () => {
    expect(myFunctions.multiply(1, 2)).toEqual(2)
    expect(myFunctions.multiply(5,9)).toEqual(45)
})

test('should subtract sumOne and sumTwo', () => {
    expect(myFunctions.subtract(10, 5)).toEqual(5)
    expect(myFunctions.subtract(20, 10)).toEqual(10)
})

test('should divide sumOne and sumTwo', () => {
    expect(myFunctions.divide(6, 3)).toEqual(2)
    expect(myFunctions.divide(100, 10)).toEqual(10)
})