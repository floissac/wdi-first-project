$(() => {


  const $dropbtn = $('.dropbtn');
  const $dropdown = $('#myDropdown');
  $dropbtn.on('click', dropDownSelect);

  function dropDownSelect() {
    $dropdown.toggle();
    console.log('drop');
  }



  function characterSelection(){

  }



  let yourHealth = 100;
  let compHealth = 100;
  const $yourHealthbar = $('#yourHealthBar');
  const $compHealthBar = $('#compHealthBar');
  const $attackButton = $('#attack');
  const $buttons = $('.buttons');

  $buttons.on('click', attackSelect);

  function attackSelect(){
    $attackButton.toggle();
    console.log('attack');
  }

});
