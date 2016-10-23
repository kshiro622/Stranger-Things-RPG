$(document).ready(function(){

// global variables
	var leonidasScore = 120;
	var diliosScore = 100;
	var xerxesScore = 180;
	var artemisiaScore = 150;
	var characterIsChosen = false;
	var characterIsLeonidas = false;
	var characterIsDilios = false;
	var characterIsXerxes = false;
	var characterIsArtemisia = false;
	// var defenderIsLeonidas = false;
	// var defenderIsDilios = false;
	// var defenderIsXerxes = false;
	// var defenderIsArtemisia = false;

//display health score of each player
	$('.leonidas-health').html(leonidasScore);
	$('.dilios-health').html(diliosScore);
	$('.xerxes-health').html(xerxesScore);
	$('.artemisia-health').html(artemisiaScore);

// choose character, move others to enemies
	if (characterIsChosen === false) {
		$('#leonidas').on('click', function() {
			$(this).animate({top:'+=137px'});
			$('#dilios').animate({top:'+=285', left:'-=130px', color:'#ee2e24'});
			$('#xerxes').animate({top:'+=285', left:'-=130px'});
			$('#artemisia').animate({top:'+=285', left:'-=130px'});
			$('#dilios').addClass('enemy');
			$('#xerxes').addClass('enemy');
			$('#artemisia').addClass('enemy');
			characterIsChosen = true;
			characterIsLeonidas = true;
			console.log(characterIsChosen);
		});

		$('#dilios').on('click', function() {
			$(this).animate({top:'+=137px', left:'-=130px'});
			$('#leonidas').animate({top:'+=285'});
			$('#xerxes').animate({top:'+=285', left:'-=130px'});
			$('#artemisia').animate({top:'+=285', left:'-=130px'});
			$('#leonidas').addClass('enemy');
			$('#xerxes').addClass('enemy');
			$('#artemisia').addClass('enemy');
			characterIsChosen = true;
			characterIsDilios = true;
			console.log(characterIsChosen);
		});

		$('#xerxes').on('click', function() {
			$(this).animate({top:'+=137px', left:'-=260px'});
			$('#leonidas').animate({top:'+=285'});
			$('#dilios').animate({top:'+=285'});
			$('#artemisia').animate({top:'+=285', left:'-=130px'});
			$('#leonidas').addClass('enemy');
			$('#dilios').addClass('enemy');
			$('#artemisia').addClass('enemy');
			characterIsChosen = true;
			characterIsXerxes = true;
			console.log(characterIsChosen);
		});

		$('#artemisia').on('click', function() {
			$(this).animate({top:'+=137px', left:'-=390px'});
			$('#leonidas').animate({top:'+=285'});
			$('#dilios').animate({top:'+=285'});
			$('#xerxes').animate({top:'+=285'});
			$('#leonidas').addClass('enemy');
			$('#dilios').addClass('enemy');
			$('#xerxes').addClass('enemy');
			characterIsChosen = true;
			characterIsArtemisia = true;
			console.log(characterIsChosen);
		});

// move character to defender position 
	} else if (characterIsChosen === true) {
		// $('#leonidas').one('click', function() {
		// 	$(this).animate({top:'+=137px'});
		// 	$(this).addClass('defender');
		// });
	};

// attack button --> 
	$('#attack').on('click', function() {
		if (characterIsLeonidas === true){}
		if (characterIsDilios === true){}
		if (characterIsXerxes === true){}
		if (characterIsArtemisia === true){}
	});

// restart button
	$('#restart').on('click', function() {
		$('#leonidas').animate({top: '5px'});
		$('#dilios').animate({top:'5px', left:'140px'});
		$('#xerxes').animate({top:'5px', left:'270px'});
		$('#artemisia').animate({top:'5px', left:'400px'});
		$('#leonidas').removeClass('enemy', 'defender');
		$('#dilios').removeClass('enemy', 'defender');
		$('#xerxes').removeClass('enemy', 'defender');
		$('#artemisia').removeClass('enemy', 'defender');
	});
});
