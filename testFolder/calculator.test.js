const {add,difference,multiply} = require('../calculator')

test('Adding two numbers',(done)=>{
    expect(add(5,5)).toStrictEqual(10)
    expect(add(100,100)).toStrictEqual(200)
    expect(add(20,25)).toStrictEqual(45)
    done()
})

test('Subtracting two numbers',  (done) => {
    expect(difference(10, 10)).toStrictEqual(0)
    expect(difference(200, 100)).toStrictEqual(100)
    done()
})

test('Multiplying two numbers',  (done) => {
    expect(multiply(10, 10)).toStrictEqual(100)
    expect(multiply(200, 100)).toStrictEqual(20000)
    done()
})