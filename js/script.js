$(() => {


  //<----------Computer Character Selection------->
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

  //<------------user character Selection------------->

  const $dropbtn = $('.dropbtn');
  const $dropdown = $('#myDropdown');
  const $playerBars = $('.playerbars');
  const $characterSelection = $('.characterSelection');
  const $characters = $dropdown.find('a');
  const $dropdownContent = $('a');

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

  // <----------Game Logic---------->
  let yourHealth = 100;
  let compHealth = 100;
  const $yourHealthBar = $('#yourHealthBar');
  const $compHealthBar = $('#compHealthBar');
  const $attackButton = $('.attack');

  // <----change Health-------->
  function healthChange() {
    $yourHealthBar.css('width', yourHealth + '%');
    $compHealthBar.css('width', compHealth + '%');
  }

  // <-----Attack------->

  $attackButton.on('click', attackSelect);

  function attackSelect(){
    console.log('attack');
    $dropdownContent.hide();
    $compDropDownContent.hide();
    $dropbtn.hide();
    invokeCompDamage();
    healthChange();
    invokeUserDamage();
  }
  function invokeCompDamage() {
    compDamage();
  }
  function invokeUserDamage(){
    yourDamage();
  }

  // <----------Health Damage------------>
  function compDamage() {
    var move = 4;
    if (move >= 3); {
      compHealth -= Math.floor((Math.random()*9)+5);
    }
  }
  function yourDamage() {
    var move = 4;
    if (move >= 3); {
      yourHealth -= Math.floor((Math.random()*9)+5);
    }

    // youLose();
    // youWin();
  }
  // function youLose() {
  //   if (yourHealth <= 0) {
  //     alert('You Lose!');
  //   }
  // }
  // function youWin() {
  //   if (compHealth <= 0) {
  //     alert('You Win!');
  //   }
  // }

});
