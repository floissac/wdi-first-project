$(() => {


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
    const $img = $(`<img src="images/${choice}.png">`);
    $characterSelection.append($img);
    console.log(choice);
    $dropdownContent.hide();
    $playerBars.show();
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
