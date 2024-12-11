for(let i = 1; i <= 100; i++){
    const modTre = i % 3;
    const modCinque = i % 5

    if(!modTre && !modCinque){
        console.log('FizzBuzz')
    } else if (!modTre){
        console.log('Fizz')
    } else if (!modCinque){
        console.log('Buzz')
    } else {
        console.log(i)
    }
}