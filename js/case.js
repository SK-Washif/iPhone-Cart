
function updateCaseNumber(isIncrease){
  const caseNumber = document.getElementById('caseNumberField');
  const caseNumberStr = caseNumber.value;
  const caseNumberVal = parseInt(caseNumberStr);

  let newcaseNumber;

  if(isIncrease === true){
     newcaseNumber = caseNumberVal + 1;
  }
  else{
     newcaseNumber = caseNumberVal - 1;
  }

  caseNumber.value = newcaseNumber;
  return newcaseNumber;
  
}

function UpdateCaseTotalPrice(totalCaseNum){
  const totalCasePrice = totalCaseNum * 59;
  const CasePrice = document.getElementById('casePrice');
   CasePrice.innerText = totalCasePrice; 

   

}








document.getElementById('btn-case-plus').addEventListener('click', function(){

  const totalCaseNum = updateCaseNumber(true);
  UpdateCaseTotalPrice(totalCaseNum);
  calculateSubTotal();

  


})

document.getElementById('btn-case-minus').addEventListener('click', function(){

  const totalCaseNum = updateCaseNumber(false);
  UpdateCaseTotalPrice(totalCaseNum);
  calculateSubTotal();

  


})