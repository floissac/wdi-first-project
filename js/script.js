$(() => {

  // <---------start button------>
  const $title = $('.title');
  const $startScreen = $('.start-screen');
  const $startButton = $('.start-button');
  $startButton.on('click', startBtn);
  function startBtn(){
    console.log('startbtn');
    $startButton.hide();
    $startScreen.hide();
    $title.show();
    $dropbtn.show();
    $compDropButton.show();
  }
  //<----------Computer Character Selection------->
  const $compDropButton = $('.compDropdownButton');
  const $compDrop = $('#compdrop');
  const $compCharacterSelection = $('.compCharacterSelection');
  const $compCharacters = $compDrop.find('li');
  $compDropButton.on('click', compDownSelect);
  $compCharacters.on('click', compCharacterSelection);

  function compDownSelect(){
    $compDrop.toggle();
    console.log('compDrop');
  }
  function compCharacterSelection(e) {
    console.log(e.target);
    const choice = $(e.target).text();
    const $img = $(`<img src="images/compCharacterSelection/${choice}.png" class="animated">`);
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
    $attackButton.show();
  }

  // <----------Game Logic---------->
  let yourHealth = 100;
  let compHealth = 100;
  const $yourHealthBar = $('#yourHealthBar');
  const $compHealthBar = $('#compHealthBar');
  const $attackButton = $('.attack');
  const $myAttack = $('#myAttack');
  const $attacks = $myAttack.find('li');

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
  }

  function attackChoice(e){
    console.log('in the attackChoice function');
    $('.characterSelection img').addClass('shake');
    $('.compCharacterSelection img').addClass('wobble');
    const choice = $(e.target).text();
    console.log('choice', choice);
    $myAttack.toggle();

    if (choice === 'Punch') {
      invokeCompDamageP();
      invokeUserDamageP();
      healthChange();
      $('.characterSelection img').addClass('wobble');
      $('.compCharacterSelection img').addClass('rubberBand');


    } else if (choice === 'Kick') {
      invokeCompDamageK();
      invokeUserDamagek();
      healthChange();
      $('.compCharacterSelection img').addClass('jello');
      $('.characterSelection img').addClass('wobble');

    } else if (choice === 'Combo') {
      invokeCompDamageC();
      invokeUserDamageC();
      healthChange();
      $('.characterSelection img').addClass('jello');
      $('.compCharacterSelection img').addClass('shake');
    }
  }

  // <---hit variation invoke---->
  function invokeCompDamageP() {
    compDamagePunch();
  }
  function invokeUserDamageP(){
    yourDamagePunch();
  }
  function invokeCompDamageK() {
    compDamageKick();
  }
  function invokeUserDamagek(){
    yourDamageKick();
  }
  function invokeCompDamageC() {
    compDamageCombo();
  }
  function invokeUserDamageC(){
    yourDamageCombo();
  }
  // <----------Various Health Damages------------>
  function compDamagePunch() {
    var move = 4;
    if (move >= 3); {
      compHealth -= 10;
    }
    youWin();
    youLose();
  }
  function yourDamagePunch() {
    var move = 4;
    if (move >= 3); {
      yourHealth -= Math.floor((Math.random()*10)+5);
    }
    youWin();
    youLose();
  }
  function compDamageKick() {
    var move = 4;
    if (move >= 3); {
      compHealth -= 14;
    }
    youWin();
    youLose();
  }
  function yourDamageKick() {
    var move = 4;
    if (move >= 3); {
      yourHealth -= Math.floor((Math.random()*90)+5);
    }
    youWin();
    youLose();
  }
  function compDamageCombo() {
    var move = 4;
    if (move >= 3); {
      compHealth -= Math.floor((Math.random()*30)+9);
    }
    youWin();
    youLose();
  }
  function yourDamageCombo() {
    var move = 4;
    if (move >= 3); {
      yourHealth -= Math.floor((Math.random()*25)+9);
    }
    youWin();
    youLose();
  }
  // <---game resets----->
  const $gameOver = $('.gameOver');
  const $restart = $('.restart');
  const $goBack = $('.goBack');

  $restart.on('click', tryAgain);
  $goBack.on('click', youDied);

  const $winner = $('.youWin');
  const $restartWin = $('.reset');
  const $quit = $('.quit');

  $restartWin.on('click', tryAgain);
  $quit.on('click', youDied);

  function tryAgain(){
    $attackButton.show();
    $playerBars.show();
    yourHealth = 100;
    compHealth = 100;
    healthChange();
    $gameOver.hide();
    $winner.hide();
  }

  function youDied(){
    location.reload();
  }
  // function youWon(){
  //   // location.reload();
  // }

  function youLose() {
    if (yourHealth <= 0) {
      $gameOver.show();
      $attackButton.hide();
      $playerBars.hide();
    }

  }
  function youWin() {
    if (compHealth <= 0) {
      $winner.show();
      $attackButton.hide();
      $playerBars.hide();
    }
  }
  $title.hide();
  $dropbtn.hide();
  $compDropButton.hide();
  $attackButton.hide();

});
