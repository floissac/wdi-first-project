$(() => {


  const $dropbtn = $('.dropbtn');
  const $dropdown = $('#myDropdown');
  const $playerBars = $('.playerbars');
  const $characterSelection = $('.characterSelection');
  const $characters = $dropdown.find('a');
  const $dropdownContent = $('a');

  // computer character selection
  const $compDropButton = $('.compDropdownButton');
  const $compDrop = $('#compdrop');
  const $compCharacterSelection = $('.compCharacterSelection');
  const $compCharacters = $compDrop.find('a');
  const $compDropDownContent = $('a');

  $compDropButton.on('click', compDownSelect);
  $compCharacters.on('click', compCharacterSelection);

  function compDownSelect(){
    $compDrop.toggle();
    console.log('compDrop');
  }
  function compCharacterSelection(e) {
    const choice = $(e.target).text();
    const $img = $(`<img src="images/compCharacterSelection/${choice}.png">`);
    $compCharacterSelection.append($img);
    console.log(choice);
    $compDrop.hide();
    $compDropButton.hide();
  }


  //<------------character Selection------------->
  $dropbtn.on('click', dropDownSelect);
  $characters.on('click', characterSelection);
  $playerBars.hide();

  function dropDownSelect() {
    $dropdown.toggle();
    console.log('drop');
  }

  function characterSelection(e){
    const choice = $(e.target).text();
    const $img = $(`<img src="images/characterSelection/${choice}.png" class="animated">`);
    $characterSelection.append($img);
    console.log(choice);
    $playerBars.show();
    $dropbtn.hide();
    $dropdown.hide();
  }

  //<----------Computer Character Selection------->

  // <----------Game Logic---------->

  let yourHealth = 100;
  let compHealth = 100;
  const $yourHealthBar = $('#yourHealthBar');
  const $compHealthBar = $('#compHealthBar');
  const $attackButton = $('.attack');
  // const $buttons = $('.buttons');


  // <------invoke fight---->



  // <----change Health-------->
  function healthChange() {
    $yourHealthBar.css('width', yourHealth + '%');
    $compHealthBar.css('width', compHealth + '%');
  }

  // <-----Attack Select---------->

  $attackButton.on('click', attackSelect);

  function attackSelect(){
    console.log('attack');
    $dropdownContent.hide();
    $compDropDownContent.hide();
    $dropbtn.hide();
    compMove();
    healthChange();
  }

  function compMove(id) {
    const move = Math.floor((Math.random()*4)+1);
    if (move <= 3) {
      const savedCompMove = 'attack';
      compDamage(id, savedCompMove);
      yourDamage();
    }
  }

  // <----------Health Damage------------>

  function compDamage(y, c) {
    var move = Math.floor((Math.random()*9)+5);
    if ( y === 'attack' && c === 'attack' && compHealth >= 10) {
      compHealth -= 10;

    } else if (move >= 3 && y === 'attack'); {
      compHealth -= Math.floor((Math.random()*9)+5);
    }
  }
  function yourDamage(d, e) {
    var move = Math.floor((Math.random()*9)|+5);
    if ( d === 'attack' && e === 'attack' && yourHealth >= 10) {
      yourHealth -= 10;

    } else if (move >= 3 && e === 'attack'); {
      yourHealth -= Math.floor((Math.random()*9)+5);
    }
    youLose();
    youWin();
  }
  function youLose() {
    if (yourHealth <= 0) {
      alert('You Lose!');
    }
  }
  function youWin() {
    if (compHealth <= 0) {
      alert('You Win!');
    }
  }
});
