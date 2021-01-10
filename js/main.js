


var resutlField = $("#result");
function insertNumber(number){
    var existingNumbers= resutlField.val();

   
   resutlField.val(existingNumbers + number)

}

function clearResult(){
    
      resutlField.val('')
}



function calculate(){
    
    
    var result =  eval resutlField.val())
      resutlField.val(result)
    
}

function deleteNumber(){
    
   var presentValue = resutlField.val();
   if (presentValue!=''){
      resutlField.val( presentValue.slice(0,-1));
       
   }
}