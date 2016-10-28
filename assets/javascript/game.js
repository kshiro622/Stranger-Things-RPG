$(document).ready(function(){

// character data
	var characters = [
		{
			name: 'Eleven',
			id: 'eleven',
			image: "<img src='assets/images/eleven.jpeg' class='character-image' alt='Eleven'>",
			initialHealth: 120,
			health: 120,
			initialAttack: 11,
			attack: 11,
			attackIncrease: 11,
			counterAttack: 7,
			isCharacter: false,
			isEnemy: false,
			isDefender: false
		},

		{
			name: 'Chief Hopper',
			id: 'chief-hopper',
			image: "<img src='assets/images/jimhopper.jpeg' class='character-image' alt='Chief Hopper'>",
			initialHealth: 110,
			health: 110,
			initialAttack: 10,
			attack: 10,
			counterAttack: 5,
			isCharacter: false,
			isEnemy: false,
			isDefender: false
		},

		{
			name: 'Monster',
			id: 'monster',
			image: "<img src='assets/images/monster.jpeg' class='character-image' alt='Monster'>",
			initialHealth: 170,
			health: 170,
			initialAttack: 13,
			attack: 13,
			counterAttack: 20,
			isCharacter: false,
			isEnemy: false,
			isDefender: false
		},

		{
			name: 'Dr. Brenner',
			id: 'dr-brenner',
			image: "<img src='assets/images/drbrenner.jpeg' class='character-image' alt='Dr. Brenner'>",
			initialHealth: 150,
			health: 150,
			initialAttack: 12,
			attack: 12,
			counterAttack: 15,
			isCharacter: false,
			isEnemy: false,
			isDefender: false
		}
	];

//character original positions
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

//your character, enemy, and defender positions
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

	var defPos = 
		{
			top: '500px',
			left: '25px'
		};

//global variables
	var characterIsChosen = false;
	var defenderIsChosen = false;
	var enemyIndex = 0;
	var currentCharacter;
	var currentEnemy;
	var enemiesLeft = 2;
	var defenderIsThere = false;

//function to render DOM
	function initialize() {
		for (var i = 0; i<characters.length; i++) {
			$('#character-area').append("<div class='character' " + "id = \'" + characters[i].id + "\'>" + characters[i].name + characters[i].image + "<div id = \'" + characters[i].id + "-health\'>" + characters[i].health + "</div>" + "</div>");
			$('#' + characters[i].id).animate(originPosition[i]);
		}
	};

//renders DOM
	initialize();

//selects character, then defender
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
			defenderIsThere = true;
			enemyIndex = 0;
			for (var k = 0; k<characters.length; k++){
			    if (this.id === characters[k].id) {
			        characters[k].isDefender = true;
			        characters[k].isEnemy = false;
			        currentEnemy = characters[k];
				}
			};

			moveEnemies();
		};
	});

//shifts enemies left
	function moveEnemies (){
		for (var l = 0; l<characters.length; l++){
			if (characters[l].isEnemy === true){
				$('#' + characters[l].id).animate(enemyPosArray[enemyIndex]);
				enemyIndex++;
			};
		};
	};

//displays health of character and enemy
	function displayHealth() {
		$('#' + currentCharacter.id + '-health').html(currentCharacter.health);
		$('#' + currentEnemy.id + '-health').html(currentEnemy.health);
	};

// attack button
	$('#attack').on('click', function() {
		if (defenderIsThere === true) {
			if ((currentCharacter.health >= 0) && (currentEnemy.health >= 0)){
				currentCharacter.health = currentCharacter.health - currentEnemy.counterAttack;
				currentEnemy.health = currentEnemy.health - currentCharacter.attack;
				displayHealth();
				$('#player-attack-results').html('You attacked ' + currentEnemy.name + ' for ' + currentCharacter.attack + ' damage.');
				$('#defender-attack-results').html(currentEnemy.name + ' attacked you for ' + currentEnemy.counterAttack + ' damage.');
				currentCharacter.attack = currentCharacter.attack + currentCharacter.initialAttack;
				if (currentEnemy.health <= 0){
					if (enemiesLeft > 0) {
						$('#player-attack-results').html('You have defeated ' + currentEnemy.name + ' .');
						$('#defender-attack-results').html('You can choose to fight another enemy.')
						$('#' + currentEnemy.id).hide();
						defenderIsChosen = false;
						defenderIsThere = false;
						enemiesLeft--;
					}else {
						$('#player-attack-results').html('You have defeated ' + currentEnemy.name + ' .');
						$('#defender-attack-results').html('YOU WIN!! Game Over!')
					};
				} else if (currentCharacter.health <= 0){
					$('#player-attack-results').html('You have been defeated... GAME OVER!');
					$('#defender-attack-results').html('');
				};
			};
		} else if (defenderIsThere === false) {
			$('#player-attack-results').html('No enemy here.');
			$('#defender-attack-results').html('');
		};
	});


// restart button
	$('#restart').on('click', function() {
		characterIsChosen = false;
		defenderIsChosen = false;
		enemyIndex = 0;
		defenderIsThere = false;
		enemiesLeft = 2;
		for (var q = 0; q<characters.length; q++){
			$('#' + characters[q].id).removeClass('enemy defender');
			$('#' + characters[q].id).show();
			$('#' + characters[q].id).animate(originPosition[q]);
			$('#player-attack-results').html(' ');
			$('#defender-attack-results').html(' ');
			characters[q].health = characters[q].initialHealth;
			characters[q].attack = characters[q].initialAttack;
			$('#' + characters[q].id + '-health').html(characters[q].health);
		};
	});
});



