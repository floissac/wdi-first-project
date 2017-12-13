$(() => {


  //<----------Computer Character Selection------->
  const $compDropButton = $('.compDropdownButton');
  const $compDrop = $('#compdrop');
  const $compCharacterSelection = $('.compCharacterSelection');
  const $compCharacters = $compDrop.find('li');
  // const $compDropDownContent = $('a');

  $compDropButton.on('click', compDownSelect);
  $compCharacters.on('click', compCharacterSelection);

  function compDownSelect(){
    $compDrop.toggle();
    console.log('compDrop');
  }
  function compCharacterSelection(e) {
    console.log(e.target);
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
  const $characters = $dropdown.find('li');
  // const $dropdownContent = $('a');

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
  const $myAttack = $('#myAttack');
  const $attacks = $myAttack.find('li');
  // const $attackDropContent = $('a');


  // <----change Health-------->
  function healthChange() {
    $yourHealthBar.css('width', yourHealth + '%');
    $compHealthBar.css('width', compHealth + '%');
  }

  // <-----Attack------->

  $attackButton.on('click', attackSelect);
  $attacks.on('click', attackChoice);

  function attackSelect(){
    console.log('attack');
    $myAttack.toggle();

    // $compDropDownContent.hide();
    // $dropbtn.hide();
    // invokeCompDamage();

    // invokeUserDamage();
  }

  function attackChoice(e){
    console.log('in the attackChoice function');

    const choice = $(e.target).text();
    console.log('choice', choice);
    $myAttack.toggle();

    if (choice === 'Punch') {
      invokeCompDamage();
      healthChange();
    }
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
  }
});
