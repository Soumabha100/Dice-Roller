function rollDice() {

  const noOfDice = document.getElementById("myInput").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];

  let noOFDice2 = Number(noOfDice);

  if((noOFDice2 >= 1) && (noOFDice2 <= 100)){
    for (let i = 0; i < noOfDice; i++) {
      const value = Math.floor(Math.random() * 6) + 1;
      values.push(value);
      images.push(`<img src="Dice_Images/Dice ${value}.png" alt="Dice ${value}">`)
    }
  
    if ((noOfDice > 100) || (noOfDice <= 0)) {
      diceResult.textContent = `Please enter a valid number between 1 to 100 for rolling the dice`;
    }
    else {
      diceResult.textContent = `Dice: ${values.join(', ')}`;
      diceImages.innerHTML = images.join('');
    }
  
    document.getElementById("myInput").addEventListener("input", function () {
      let inputValue = this.value;
  
      if (inputValue > 1000) {
        this.value = 1000;
      }
      else if (inputValue < -1000) {
        this.value = -1000;
      }
    });
  }
  else{
    diceResult.textContent = `Please enter a valid number between 1 to 100 for rolling the dice`;
  }

}