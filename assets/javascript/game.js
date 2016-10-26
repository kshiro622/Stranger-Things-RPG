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
	var yourCharPos = {
		top: '137px',
		left: '25px'
	};
	var charDivs = [];
	var characterIsChosen = false;
	var defenderIsChosen = false;

//function to render DOM with character divs
function initialize() {
	for (var i = 0; i<characters.length; i++) {
		charDivs.push("<div class='character' " + "id = \'" + characters[i].id + "\'>" + characters[i].name + characters[i].image + characters[i].health + "</div>");
		$('#character-area').append(charDivs[i]);
	}
};

//renders DOM
initialize();

//function to select character

$('.character').on('click', function(){
	$(this).animate(yourCharPos);

});

// if (characterIsChosen === false){
// 	selectChar();
// }

// choose character, move others to enemies
// 	if (characterIsChosen === false) {
// 		$('#eleven').on('click', function() {
// 			$(this).animate({top:'+=137px'});
// 			$('#chief-hopper').animate({top:'+=285', left:'-=130px', color:'#ee2e24'});
// 			$('#monster').animate({top:'+=285', left:'-=130px'});
// 			$('#dr-brenner').animate({top:'+=285', left:'-=130px'});
// 			$('#chief-hopper').addClass('enemy');
// 			$('#monster').addClass('enemy');
// 			$('#dr-brenner').addClass('enemy');
// 			characterIsChosen = true;
// 			eleven.isCharacter = true;
// 			console.log(characterIsChosen);
// 		});

// 		$('#chief-hopper').on('click', function() {
// 			$(this).animate({top:'+=137px', left:'-=130px'});
// 			$('#eleven').animate({top:'+=285'});
// 			$('#monster').animate({top:'+=285', left:'-=130px'});
// 			$('#dr-brenner').animate({top:'+=285', left:'-=130px'});
// 			$('#eleven').addClass('enemy');
// 			$('#monster').addClass('enemy');
// 			$('#dr-brenner').addClass('enemy');
// 			characterIsChosen = true;
// 			chiefHopper.isCharacter = true;
// 			console.log(characterIsChosen);
// 		});

// 		$('#monster').on('click', function() {
// 			$(this).animate({top:'+=137px', left:'-=260px'});
// 			$('#eleven').animate({top:'+=285'});
// 			$('#chief-hopper').animate({top:'+=285'});
// 			$('#dr-brenner').animate({top:'+=285', left:'-=130px'});
// 			$('#eleven').addClass('enemy');
// 			$('#chief-hopper').addClass('enemy');
// 			$('#dr-brenner').addClass('enemy');
// 			characterIsChosen = true;
// 			monster.isCharacter = true;
// 			console.log(characterIsChosen);
// 		});

// 		$('#dr-brenner').on('click', function() {
// 			$(this).animate({top:'+=137px', left:'-=390px'});
// 			$('#eleven').animate({top:'+=285'});
// 			$('#chief-hopper').animate({top:'+=285'});
// 			$('#monster').animate({top:'+=285'});
// 			$('#eleven').addClass('enemy');
// 			$('#chief-hopper').addClass('enemy');
// 			$('#monster').addClass('enemy');
// 			characterIsChosen = true;
// 			drBrenner.isCharacter = true;
// 			return characterIsChosen;
// 		});

// // move character to defender position 
// 	} else if ((characterIsChosen === true) && (defenderIsChosen === false)) {
// 		$('#eleven').on('click', function() {
// 			$(this).animate({top:'+=137px'});
// 			$(this).addClass('defender');
// 			eleven.isDefender = true;
// 			defenderIsChosen = true;
// 		});

// 		//...
// 	};

// // attack button --> 
// 	$('#attack').on('click', function(character, defender) {
// 		character.health = character.health - defender.counterAttack;
// 		defender.health = defender.health - character.attack;
// 		character.attack = character.attack * 2;//something to increase exponentially
// 	});

// 	if (eleven.isCharacter === true){ 
// 		if (chiefHopper.isDefender === true) {
// 			attack(eleven, chiefHopper);
// 		} else if (monster.isDefender === true) {
// 			attack(eleven, monster);
// 		} else if (drBrenner.isDefender === true) {
// 			attack(eleven, drBrenner);
// 		}
	
// 		if (chiefHopper.isCharacter === true){
// 			//...
// 		}

// 		if (monster.isCharacter === true){
// 			//...
// 		} 

// 		if (drBrenner.isCharacter === true){
// 			//...
// 		}
// 	};

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
});

