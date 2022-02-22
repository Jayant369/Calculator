var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display-digit");

var operand1 = 0;
var operand2 = null;

var operator = null;

// Main Button Handler
for(var i = 0; i < buttons.length; i++){

    buttons[i].addEventListener("click", function button(){

        var value = this.getAttribute("data-value");

        // Addition
        if(value == '+'){

            operator = '+'; 
            operand1 = parseFloat(display.textContent);

            if(display.textContent == "" || display.textContent == "Invalid Input"){

                display.innerHTML = "Invalid Input";

            }
            else{
         
                display.innerHTML = "";

            }
            
        }

        // Subtraction
        else if(value == '-'){

            operator = '-'; 
            operand1 = parseFloat(display.textContent);

            if(display.textContent == "" || display.textContent == "Invalid Input"){

                display.innerHTML = "Invalid Input";

            }
            else{
         
                display.innerHTML = "";

            }

        }

        // Multiplication
        else if(value == '*'){

            operator = '*'; 
            operand1 = parseFloat(display.textContent);

            if(display.textContent == "" || display.textContent == "Invalid Input"){

                display.innerHTML = "Invalid Input";

            }
            else{
         
                display.innerHTML = "";

            }
            
        }

        // Division
        else if(value == '/'){

            operator = '/'; 
            operand1 = parseFloat(display.textContent);

            if(display.textContent == "" || display.textContent == "Invalid Input"){

                display.innerHTML = "Invalid Input";

            }
            else{
         
                display.innerHTML = "";

            }
            
        }

        // Percentage
        else if(value == '%'){

            operand1 = parseFloat(display.textContent);

            if(display.textContent == "" || display.textContent == "Invalid Input"){

                display.innerHTML = "Invalid Input";

            }
            else{

                let result = parseFloat(operand1 / 100);
                display.innerHTML = result;

            } 
            
        }

        // Change Sign (+) or (-)
        else if(value == '+/-'){

            let operand = parseFloat(display.textContent);

            if(display.textContent == "" || display.textContent == "Invalid Input"){

                display.innerHTML = "Invalid Input";

            }

            if(operand > 0){
                display.innerHTML =  -(operand);
            }
            else if(operand < 0){
                display.innerHTML =  -(operand);
            }
            
        }

        // Equal To
        else if(value == '='){

            if(display.textContent == "" || display.textContent == "Invalid Input"){

                display.innerHTML = "Invalid Input";

            }

            operand2 = parseFloat(display.textContent);

            if(operator == '/' && operand2 == 0){

                display.innerHTML = "Error"

            }
            else{

            let result = eval(operand1 + " " + operator + " " + operand2);
            display.innerHTML = result;

            }
            
        }

        // Point
        else if(value == '.'){

            display.innerHTML += value;
            
        }

        // Clear All
        else if(value == 'AC'){

            display.innerHTML = "";
            operand1 = 0;
            operand2 = null;
            operator = null;
            
        }
        else{

            display.innerHTML += value;

        }
        
    });

}