const container = document.querySelector('.grid');

for (let i = 1; i <= 100; i++) {
    const div = document.createElement('div');
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
        div.append("FizzBuzz")
        div.classList.add('fizzBuzz');
    } else if (i % 3 == 0) {
        console.log("Fizz");
        div.append("Fizz")
        div.classList.add('fizz');
    } else if (i % 5 == 0) {
        console.log("Buzz");
        div.append("Buzz")
        div.classList.add('buzz');
    } else {
        console.log(i);
        div.append(i)
        div.classList.add('number');
    }
    container.append(div)
}

