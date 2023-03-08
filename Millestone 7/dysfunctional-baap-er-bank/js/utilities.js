function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  
  if(inputFieldValueString === ""){
    alert('Please enter valid number.... ')
    return "0"
  } else {
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = "";
    return inputFieldValue;
  }
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue =parseFloat( textElementValueString);
  return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}
