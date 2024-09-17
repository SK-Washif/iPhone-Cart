function calculateTextToVal(elementId){
  const theElementId = document.getElementById(elementId);
  const theElementIdStr = theElementId.innerText;
  const theElementIdVal = parseInt(theElementIdStr);
  return theElementIdVal;
}


function calculateSubTotal(){
  const thePhonePrice = calculateTextToVal('phonePrice');
  const theCasePrice = calculateTextToVal('casePrice');

  const currentSubTotal = thePhonePrice + theCasePrice;
  const subTotal = document.getElementById('sub-total');
  subTotal.innerText = currentSubTotal;

  //tax
  const currentTaxTotal= (currentSubTotal * 0.1).toFixed(2);
  const currentTaxTotalVal = parseFloat(currentTaxTotal);
  const taxTotal = document.getElementById('add-tax');
  taxTotal.innerText = currentTaxTotalVal;

  //main total
  const currentMainTotal = currentSubTotal + currentTaxTotal;
  const currentMainTotalVal = parseFloat(currentMainTotal);
  const mainTotal = document.getElementById('main-total');
  mainTotal.innerText = currentMainTotalVal;

  
  


}

