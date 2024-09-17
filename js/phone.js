function updatePhoneNumber(isIncrease){
  const previousPhoneNum = document.getElementById('phoneNumField')
  const previousPhoneNumStr = previousPhoneNum.value;
  const previousPhoneNumVal = parseInt(previousPhoneNumStr);
  
 let newPhoneNumVal;
 if(isIncrease === true){
      newPhoneNumVal = previousPhoneNumVal + 1;
 }
 else{
  newPhoneNumVal = previousPhoneNumVal - 1;
 }
  previousPhoneNum.value = newPhoneNumVal;
  return newPhoneNumVal;

}

function updatePhonePrice(totalPhoneNum){
  const totalPhonePrice = totalPhoneNum * 1219;
  const PhonePrice = document.getElementById('phonePrice');
  PhonePrice.innerText = totalPhonePrice;
  

}
//------------------------------------------------------------------------------------------








document.getElementById('btn-phone-plus').addEventListener('click', function(){
  const totalPhoneNum = updatePhoneNumber(true);
  updatePhonePrice(totalPhoneNum);

  calculateSubTotal();

})

document.getElementById('btn-phone-minus').addEventListener('click', function(){

  const totalPhoneNum = updatePhoneNumber(false);
  updatePhonePrice(totalPhoneNum);

  calculateSubTotal();

})