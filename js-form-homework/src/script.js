/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction() {
  var ShipName = document.getElementById('shippingName').value;
  var ShipZip = document.getElementById('shippingZip').value;
  if (document.getElementById('same').checked){
   document.getElementById('billingName').value = ShipName;
   document.getElementById('billingZip').value = ShipZip;
  }
  else{
    document.getElementById('billingName').value = '';
    document.getElementById('billingZip').value = '';
  }
}

