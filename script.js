/*DOM SELECTORS AND GLOBAL VARIABLES*/
    //CALCULATOR SELECTORS
    const num1Input = document.querySelector("#num1Input");
    const num2Input = document.querySelector("#num2Input");
    const arithOpSelector = document.querySelector("#arithOpSelector");
    const calcSubmit = document.querySelector("#calcSubmit");
    const calcResult = document.querySelector("#calcResult");//Element selector for result
    const calcForm = document.querySelector(".calc");





/*JAVASCRIPT PRACTICE*/

    /*Array Methods*/

        /*Global function to test and log array method results using String Interpolation*/
        const logArrayMethod = (methodTitle, array, method) => {
            return console.log(`\n \n ${methodTitle} Method Example:

        Original Array: ${array}
        Array log after Method: ${method(array)}`);
        };

        const players = ['William', 'Fred', 'Tim'];//Global array of strings
        const scores = [20, 55, 72, 1, 190, 15, 3]; //Global array of integers

            
            /*SORT*/
            
                console.log("Sort and Print Array \n .......");

                const sortArray = (array) => {
                    return array.sort()//sort function sorts array elements alphabetically
                };

                const sortIntArray = (array) => {
                    return array.sort((a,b) => {return a-b})
                };

                logArrayMethod('Sort',players,sortArray);

                logArrayMethod('Sort',scores,sortIntArray);


            /*RandomIndex*/
                /* Purpose: Selects a random element from array and logs it*/
                const randomIndexMethod = (array) => { 
                    const randomIndex =  Math.floor(Math.random() * array.length);
                    return array[randomIndex];
                }//floor method rounds any integer containing decimals down to whole number.
                //Maths.random renturns floating point number between 0 and 1


                logArrayMethod('Random Index',players,randomIndexMethod);//logs result of random Index Method on players array
                logArrayMethod('Random Index (Int)', scores,randomIndexMethod);//logs result of random Index mtehod on scroes array


            /*Loop Through Array (for loop) */
            
            const arrLoop = (array) => {
                     for(let el of array) {
                console.log(el);
              }
            };//This loop loops through each element within the array and logs the element value on each loop

            arrLoop(players);

    /*Methods*/

    //Sum function using case for Arithmetic operator matching

    const sumFun = (num1, num2, arithOp) => {
        switch(arithOp) {
            case "+":
                return num1 + num2;
                break;
            case "-":
                return num1 - num2;
                break;
            case "*":
                return num1 * num2;
                break;
            case "/":
                return num1 / num2;
                break;
            case "%":
                return (num2/100)*num1;
                break;
            default:
                return("Please enter/use arithemtaic operators: +, -, *, /")
                alert("Please enter/use arithemtaic operators: +, -, *, /")
        }
    };

    console.log(sumFun(100, 20, "%"));

    //CALCULATOR FUNCTION USING INPUTS

    calcForm.addEventListener('submit', e => {
        e.preventDefault();
        calcResult.innerHTML = sumFun(parseInt(num1Input.value),parseInt(num2Input.value),arithOpSelector.value);
    });

    /*JSFunctions*/

            /*Split string*/
            //splits string by chosen split point argument
            const splitString = (string, split) => {
                return string.split(split);
            }
            /*reverse string*/
            //join argument to choose where to join string
            const reverseString = (string, split, join) => {
                return splitString(string,split).reverse().join(join); //returns new string as a string
            };

            const testString = "Hello how are you today";

            

            //Reverse sentence by word
            console.log(reverseString(testString, " ", ""));//splits test string into array by spaces between words. Reverses order of word array
            //Then joins reversed order of array. The join contains no space to place inbetween the joined elements.

            //Reverse sentence by letter
            const reverseWordArray = reverseString(testString, "", "");

            console.log(reverseWordArray);

            console.log(reverseWordArray.split(" ").join(""));//splits the reversed array into each reversed word by splitting at the space. Then joins the array elements without a space.

            //reversing random players name
            console.log(reverseString(randomIndexMethod(players), "",""));
        
        /*Check Element has a Class*/

        /*!! --ST-- TURN OFF WHEN USING NODE JS. Node doesn't recognise DOM!!

            const element = document.querySelector("h1");
            
            window.addEventListener('DOMContentLoaded', () => {
                if(element.className !== "title" && element.className !== null) {
                    element.innerHTML = "element class is not .title"
                }else{
                    element.innerHTML = "Class list exists"
                };
            });
            

            /*!!!!!TOGGLE FUNCTION NOT WORKING, RETURN TO THIS!!!!!!!

            const button = document.body.querySelector("#toggleClass");

            const toggleClass = () => {
                if(element.className !== "title" || element.className === null) {
                    element.classList.add("title");
                    element.innerHTML = "element class reapplied";
                    button.style.backgroundColor = "green";
                } else {
                    element.classList.remove("title");
                    element.innerHTML = "element class removed";
                    button.style.backgroundColor = "red";
                }
            };
                                                            !!--END-- */

