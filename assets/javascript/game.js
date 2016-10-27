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
			isEnemy: false,
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
			isEnemy: false,
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
			isEnemy: false,
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
			isEnemy: false,
			isDefender: false
		}
	];

	var originPosition = [
		{
			top: '0px',
			left: '20px'
		},

		{
			top: '0px',
			left: '150px'
		},

		{
			top: '0px',
			left: '280px'
		},

		{
			top: '0px',
			left: '410px'
		}
	];

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

	var currentCharacter;
	var currentEnemy;

//function to render DOM with character divs
	function initialize() {
		for (var i = 0; i<characters.length; i++) {
			$('#character-area').append("<div class='character' " + "id = \'" + characters[i].id + "\'>" + characters[i].name + characters[i].image + "<div id = \'" + characters[i].id + "-health\'>" + characters[i].health + "</div>" + "</div>");
			$('#' + characters[i].id).animate(originPosition[i]);
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
			        currentCharacter = characters[j];
			    } else {
			    	var enemyId = '#' + characters[j].id;
			    	$(enemyId).animate(enemyPosArray[enemyIndex]);
			    	$(enemyId).addClass('enemy');
			    	characters[j].isEnemy = true;
			    	enemyIndex++;
			    };
			};
		} else if ((characterIsChosen === true) && (defenderIsChosen === false)){
			$(this).addClass('defender');
			$('.defender').animate(defPos);
			defenderIsChosen = true;
			enemyIndex = 0;
			for (var k = 0; k<characters.length; k++){
			    if (this.id === characters[k].id) {
			        characters[k].isDefender = true;
			        characters[k].isEnemy = false;
			        currentEnemy = characters[k];
				};
			};
			// for (var l = 0; l<characters.length; l++){
			// 	if (characters[l].isEnemy === true){
			// 		$('#' + characters[k].id).animate(defPos[enemyIndex]);
			// 		enemyIndex++;
			// 	}
			// }
		};
	});

//displays health of character and enemy
	function displayHealth() {
		$('#' + currentCharacter.id + '-health').html(currentCharacter.health);
		$('#' + currentEnemy.id + '-health').html(currentEnemy.health);
	};

// attack button
	$('#attack').on('click', function() {
		if ((currentCharacter.health >= 0) && (currentEnemy.health >= 0)){
			currentCharacter.health = currentCharacter.health - currentEnemy.counterAttack;
			currentEnemy.health = currentEnemy.health - currentCharacter.attack;
			displayHealth();
			$('#player-attack-results').html('You attacked ' + currentEnemy.name + ' for ' + currentCharacter.attack + ' damage.');
			$('#defender-attack-results').html(currentEnemy.name + ' attacked you for ' + currentEnemy.counterAttack + ' damage.');
			currentCharacter.attack = currentCharacter.attack * 1.5;
			if (currentEnemy.health <= 0){
				$('#player-attack-results').html('You have defeated ' + currentEnemy.name + ' .');
				$('#defender-attack-results').html('You can choose to fight another enemy.')
				$('#' + currentEnemy.id).hide();
				defenderIsChosen = false;
			} else if (currentCharacter.health <= 0){
				$('#player-attack-results').html('You have been defeated... GAME OVER!');
				$('#defender-attack-results').html('');
			};
		};
	});


// restart button
	$('#restart').on('click', function() {
		characterIsChosen = false;
		defenderIsChosen = false;
		enemyIndex = 0;
		for (var q = 0; q<characters.length; q++){
			$('#' + characters[q].id).removeClass('enemy defender');
			$('#' + characters[q].id).show();
			$('#' + characters[q].id).animate(originPosition[q]);
		};
	});
});



