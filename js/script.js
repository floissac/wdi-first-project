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
    $playerBars.show();
    $dropbtn.hide();
    $dropdown.hide();
  }

  // <----------Game Logic---------->

  let yourHealth = 100;
  let compHealth = 100;
  const $yourHealthBar = $('#yourHealthBar');
  const $compHealthBar = $('#compHealthBar');
  const $attackButton = $('#attack');
  const $buttons = $('.buttons');


  // <------invoke fight---->



  // <----change Health-------->
  function healthChange() {
    $yourHealthBar.css('width', yourHealth + '%')
    $compHealthBar.css('width', compHealth + '%')

  }

  // <-----Attack Select---------->

  $buttons.on('click', attackSelect);

  function attackSelect(){
    $attackButton.toggle();
    console.log('attack');
    $dropdownContent.hide();
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
    var move = Math.floor((Math.random()*4)+1);
    if ( y === 'attack' && c === 'attack' && compHealth >= 10) {
      compHealth -= 10;

    } else if (move >= 3 && y === 'attack'); {
      compHealth -= Math.floor((Math.random()*4)+1);
    }
  }

  function yourDamage(d, e) {
    var move = Math.floor((Math.random()*4)+1);
    if ( d === 'attack' && e === 'attack' && yourHealth >= 10) {
      yourHealth -= 10;

    } else if (move >= 3 && e === 'attack'); {
      yourHealth -= Math.floor((Math.random()*4)+1);
    }
    // if (yourHealth <= 1); {
    //   alert('loser!');
    // }

  }
});
