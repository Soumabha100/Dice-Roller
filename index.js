function rollDice() {

  const noOfDice = document.getElementById("myInput").value;
  const diceResult = document.getElementById("diceResult");
  const diceSum = document.getElementById("diceSum");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];

  let noOFDice2 = Number(noOfDice);

  if ((noOFDice2 >= 1) && (noOFDice2 <= 100)) {
    let total = 0;
    for (let i = 0; i < noOfDice; i++) {
      const value = Math.floor(Math.random() * 6) + 1;
      values.push(value);
      images.push(`<img src="Dice_Images/Dice ${value}.png" alt="Dice ${value}">`);
      total += value;
      console.log(total);
    }

    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceSum.textContent = `Total Dice = ${total}`
    diceImages.innerHTML = images.join('');

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
  else {
    diceResult.textContent = `Please enter a valid number between 1 to 100 for rolling the dice`;
  }
}