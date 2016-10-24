$(document).ready(function(){

	var eleven = {
		health: 120,
		attack: 8,
	};

	var chiefHopper = {
		health: 100,
		attack: 5,
	};

	var monster = {
		health: 180,
		attack: 25,
	};

	var drBrenner = {
		health: 150,
		attack: 16,
	};

// global variables
	var characterIsChosen = false;
	var characterIsEleven = false;
	var characterIsChiefHopper = false;
	var characterIsMonster = false;
	var characterIsDrBrenner = false;
	// var defenderIsEleven = false;
	// var defenderIsChiefHopper = false;
	// var defenderIsMonster = false;
	// var defenderIsDrBrenner = false;

//display health score of each player
	$('.eleven-health').html(eleven.health);
	$('.chief-hopper-health').html(chiefHopper.health);
	$('.monster-health').html(monster.health);
	$('.dr-brenner-health').html(drBrenner.health);

// choose character, move others to enemies
	if (characterIsChosen === false) {
		$('#eleven').on('click', function() {
			$(this).animate({top:'+=137px'});
			$('#chief-hopper').animate({top:'+=285', left:'-=130px', color:'#ee2e24'});
			$('#monster').animate({top:'+=285', left:'-=130px'});
			$('#dr-brenner').animate({top:'+=285', left:'-=130px'});
			$('#chief-hopper').addClass('enemy');
			$('#monster').addClass('enemy');
			$('#dr-brenner').addClass('enemy');
			characterIsChosen = true;
			characterIsEleven = true;
			console.log(characterIsChosen);
		});

		$('#chief-hopper').on('click', function() {
			$(this).animate({top:'+=137px', left:'-=130px'});
			$('#eleven').animate({top:'+=285'});
			$('#monster').animate({top:'+=285', left:'-=130px'});
			$('#dr-brenner').animate({top:'+=285', left:'-=130px'});
			$('#eleven').addClass('enemy');
			$('#monster').addClass('enemy');
			$('#dr-brenner').addClass('enemy');
			characterIsChosen = true;
			characterIsChiefHopper = true;
			console.log(characterIsChosen);
		});

		$('#monster').on('click', function() {
			$(this).animate({top:'+=137px', left:'-=260px'});
			$('#eleven').animate({top:'+=285'});
			$('#chief-hopper').animate({top:'+=285'});
			$('#dr-brenner').animate({top:'+=285', left:'-=130px'});
			$('#eleven').addClass('enemy');
			$('#chief-hopper').addClass('enemy');
			$('#dr-brenner').addClass('enemy');
			characterIsChosen = true;
			characterIsmonster = true;
			console.log(characterIsChosen);
		});

		$('#dr-brenner').on('click', function() {
			$(this).animate({top:'+=137px', left:'-=390px'});
			$('#eleven').animate({top:'+=285'});
			$('#chief-hopper').animate({top:'+=285'});
			$('#monster').animate({top:'+=285'});
			$('#eleven').addClass('enemy');
			$('#chief-hopper').addClass('enemy');
			$('#monster').addClass('enemy');
			characterIsChosen = true;
			characterIsDrBrenner = true;
			console.log(characterIsChosen);
		});

// move character to defender position 
	} else if (characterIsChosen === true) {
		// $('#eleven').one('click', function() {
		// 	$(this).animate({top:'+=137px'});
		// 	$(this).addClass('defender');
		// });
	};

// attack button --> 
	$('#attack').on('click', function() {
		if (characterIsEleven === true){}
		if (characterIsChiefHopper === true){}
		if (characterIsMonster === true){}
		if (characterIsDrBrenner === true){}
	});

// restart button
	$('#restart').on('click', function() {
		$('#eleven').animate({top: '5px'});
		$('#chief-hopper').animate({top:'5px', left:'140px'});
		$('#monster').animate({top:'5px', left:'270px'});
		$('#dr-brenner').animate({top:'5px', left:'400px'});
		$('#eleven').removeClass('enemy', 'defender');
		$('#chief-hopper').removeClass('enemy', 'defender');
		$('#monster').removeClass('enemy', 'defender');
		$('#dr-brenner').removeClass('enemy', 'defender');
	});
});
