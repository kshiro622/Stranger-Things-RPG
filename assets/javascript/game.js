$(document).ready(function(){

// character data
	var characters = [
		{
			name: 'Eleven',
			id: 'eleven',
			image: "<img src='assets/images/eleven.jpeg' class='character-image' alt='Eleven'>",
			health: 120,
			attack: 8,
			counterAttack: 15,
			isCharacter: false,
			isDefender: false
		},

		{
			name: 'Chief Hopper',
			id: 'chief-hopper',
			image: "<img src='assets/images/jimhopper.jpeg' class='character-image' alt='Chief Hopper'>",
			health: 100,
			attack: 5,
			counterAttack: 10,
			isCharacter: false,
			isDefender: false
		},

		{
			name: 'Monster',
			id: 'monster',
			image: "<img src='assets/images/monster.jpeg' class='character-image' alt='Monster'>",
			health: 180,
			attack: 25,
			counterAttack: 25,
			isCharacter: false,
			isDefender: false
		},

		{
			name: 'Dr. Brenner',
			id: 'dr-brenner',
			image: "<img src='assets/images/drbrenner.jpeg' class='character-image' alt='Dr. Brenner'>",
			health: 150,
			attack: 16,
			counterAttack: 20,
			isCharacter: false,
			isDefender: false
		}
	];

	var charWidth = 120;
	var yourCharPos = 
		{
			top: '137px',
			left: '25px'
		};
	var enemyPosArray = [
		{
			top: '285px',
			left: '25px'
		},

		{
			top: '285px',
			left: '155px'
		},

		{
			top: '285px',
			left: '285px'
		}
	];

	var characterIsChosen = false;
	var defenderIsChosen = false;
	var enemyIndex = 0;
	var defPos = 
		{
			top: '500px',
			left: '25px'
		};

//function to render DOM with character divs
	function initialize() {
		for (var i = 0; i<characters.length; i++) {
			$('#character-area').append("<div class='character' " + "id = \'" + characters[i].id + "\'>" + characters[i].name + characters[i].image + "<div id = \'" + characters[i].name + "-health\'>" + characters[i].health + "</div>" + "</div>");
		}
	};

//renders DOM
	initialize();

//function to select character

	$('.character').on('click', function(){
		if ((characterIsChosen === false) && (defenderIsChosen === false)) {
			characterIsChosen = true;
			$(this).animate(yourCharPos);
			for (var j = 0; j < characters.length; j++){
			    if (this.id === characters[j].id) {
			        characters[j].isCharacter = true;
			    } else {
			    	var enemyId = '#' + characters[j].id;
			    	$(enemyId).animate(enemyPosArray[enemyIndex]);
			    	$(enemyId).addClass('enemy');
			    	enemyIndex++;
			    };
			};
		} else if ((characterIsChosen === true) && (defenderIsChosen === false)){
			$(this).addClass('defender');
			$('.defender').animate(defPos);
			defenderIsChosen = true;
			for (var k = 0; k<characters.length; k++){
			    if (this.id === characters[k].id) {
			        characters[k].isDefender = true;
				};
			};
		};
	});

	var playerHealth = '';
	var playerAttack = '';
	var defenderHealth = '';
	var defenderAttack = '';
	var defenderName = '';

	function setAttack() {
		for (var m = 0; m < characters.length; m++) {
			if (characters[m].isCharacter === true) {
				playerHealth = characters[m].health;
				playerAttack = characters[m].attack;
			} else if (characters[m].isDefender === true) {
				defenderName = characters[m].name;
				defenderHealth = characters[m].health;
				defenderCounter = characters[m].counterAttack;
			};
		};
	};

	function displayHealth() {
		for (var n = 0; n < characters.length; n++) {
			if (characters[n].isCharacter === true) {
				$('#' + characters[n].name + '-health').html(playerHealth);
			} else if (characters[n].isDefender === true) {
				$('#' + characters[n].name + '-health').html(defenderHealth);
			};
		};
	};

// attack button
	$('#attack').on('click', function() {
		setAttack();
		playerHealth = playerHealth - defenderCounter;
		defenderHealth = defenderHealth - playerAttack;
		displayHealth();
		$('#player-attack-results').html('You attacked ' + defenderName + ' for ' + playerAttack + ' damage.');
		$('#defender-attack-results').html(defenderName + ' attacked you for ' + defenderCounter + ' damage.');
		playerAttack = playerAttack * 2;
	});


//restart button
	// $('#restart').on('click', function() {

	// }

});
// // restart button
// 	$('#restart').on('click', function() {
// 		$('#eleven').animate({top: '5px'});
// 		$('#chief-hopper').animate({top:'5px', left:'140px'});
// 		$('#monster').animate({top:'5px', left:'270px'});
// 		$('#dr-brenner').animate({top:'5px', left:'400px'});
// 		$('#eleven').removeClass('enemy', 'defender');
// 		$('#chief-hopper').removeClass('enemy', 'defender');
// 		$('#monster').removeClass('enemy', 'defender');
// 		$('#dr-brenner').removeClass('enemy', 'defender');
// 	});


