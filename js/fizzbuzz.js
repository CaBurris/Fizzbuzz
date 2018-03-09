/* Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz". */

/*Notes
-----------------------------
console.log 1-100
EXCEPTION: console.log "Fizz" for multiples of 3
EXCEPTION: console.log "Buzz" for multiples of 5
EXCEPTION: console.log "FIzzbuzz" for multiples of 3 and 5
-------------------------- */
//to fix bug, had to place else if(i % 3 === 0 && i % 5 === 0) at the top of the loop, otherwise the program was catching just the %3 and just the %5, not giving the combo a chance to be detected
for (var i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){ //if i is divided by 3 and 5 and the remainer equals 0
        console.log("FizzBuzz");
    }else if (i % 3 === 0){  //if i is divided by 3 and the remainer equals 0
        console.log("Fizz"); //print "Fizz"
    }else if(i % 5 === 0){ //if i is divided by 5 and the remainer equals 0
        console.log("Buzz");
    }else{
        console.log(i);
    }
}
