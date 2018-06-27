

var ipAddress = "127.0.0.1";


var portNumber = "52000";


var httpModule = require("http");


httpModule.createServer(
 function serviceRequest (request, response) {

  
  var queryString = new String(request.url);

  

  var keyValuePairs = queryString.split("&"); 

 
  var action = keyValuePairs[0].replace("/","").split("=")[1]; // extracting the action specified in the URL
  var firstNumber = new String(keyValuePairs[1].split("&")).split("=")[1] || "0"; // extracting the first number
  var secondNumber = new String(keyValuePairs[2].split("&")).split("=")[1] || "0"; // extracting the second number

  
  var result = getResult(action.toLowerCase(), Number(firstNumber) , Number(secondNumber));

 
  var htmlContent = "<html><b>" + action + "(" + firstNumber + "," + secondNumber + ") = <b>" + result + "</b></html>";


  response.end(htmlContent);
 }
).listen(portNumber, ipAddress);


function getResult(operation, number1, number2)
{
 var result = 0;

 if(operation == "add")
  result = number1 + number2;

 else if(operation == "subtract")
  result = number1 - number2;

 else if(operation == "multiply")
  result = number1 * number2;

 else if(operation == "divide" && number2 != 0)
  result = number1 / number2;

 return result;
}
