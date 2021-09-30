document.querySelector('#submit').addEventListener('click', () => {
  //variables
  let hexNumbers = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"],
      hexCode1 = "",
      hexCode2 = "",
      randomIndex = "",
      degCode = "";
  
  //hex color generator
  for(let i = 0; i < 6; i++){
    randomIndex = Math.floor(Math.random() * hexNumbers.length);
      hexCode1 += hexNumbers[randomIndex];
    randomIndex = Math.floor(Math.random() * hexNumbers.length);
      hexCode2 += hexNumbers[randomIndex];
  }
  
  //deg generator
  for(let j = 0; j < 3; j++){
    randomIndex = Math.floor(Math.random() * 10);
    degCode += randomIndex;
  }

  //deg max limit 180deg = 999 / 5.55
  if(degCode > 180) {
    degCode = degCode / 5.55;
  }

  degCode = Number(degCode).toFixed(0);

  //background change
  document.body.style.background = `linear-gradient(${degCode}deg, #${hexCode1}, #${hexCode2})`;

  //text edit
  document.querySelector('#hexcode1').textContent = hexCode1;
  document.querySelector('#hexcode2').textContent = hexCode2;
  document.querySelector('#deg').textContent      = degCode;

  //copy button
  let copyText = document.querySelector('#copy-text');

  copyText.textContent = 'background: ' + `linear-gradient(${degCode}deg, #${hexCode1}, #${hexCode2})`;

  document.getElementById('copy-button').addEventListener('click', () => {
  
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    
    let newText = document.createElement('p');
    newText.classList.add('copy-info');
    newText.textContent = 'Gradient bol skopírovaný do schránky.';
    document.querySelector('#hex-colors').appendChild(newText);

    setTimeout(() => {
      newText.remove();
    }, 2000);

  })

  
});