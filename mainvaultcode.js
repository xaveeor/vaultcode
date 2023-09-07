/* 
state string with variable
create 3 number variables with operations equalling desired output. 
make variable holder
output

*/


//declare output 
const string = "You have received this message because you have been chosen to open an important vault. Here is the secret combination: ";
//set number variables with operations.
const num1 = 20/2;
const num2 = 30 + 10;
const num3 = 13 *3;
//create a new variable to store string/number variables. 
const vaultCode = string + num1 + "-" + num2 +  "-" + num3;
//output
document.write(vaultCode);
alert(vaultCode);