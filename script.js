function staffGet() {
	var staff = document.getElementById('staff').value;
	return Number(staff); }

var lastGames = [];

var bet = 'none';
var balance = 10;
var bet_count = 1;
var yellowPosition = '0';
var orangePosition = '0';
var redPosition = '0';
var greenPosition = '0';
var gameNow = 0;
var autorization = false;

var firstColor = 'white';
var secondColor = 'white';
var thirdColor = 'white';
var foureColor = 'white';

var deposit = 'selected';
var depout = 'default';

var btn = document.getElementById('openWallet');
var modal = document.getElementById('modalWallet')
var span = document.getElementById('close');



function bonus_dice() {
	var random_percent = Number(getRandomInt(50)) + 1;
	var bet_bonus = '5';
	var coef = null;

	coef = random_percent / 100;

}


function getModal() {
	document.getElementById('modalWallet').style.display = 'block';
	if (deposit == 'selected') {
		document.getElementById('deposit').style.cssText = 'color:gray'; }
	if (depout == 'selected') {
		document.getElementById('depout').style.cssText = 'color:gray'; }
	else if (deposit == 'default') {
		document.getElementById('deposit').style.cssText = 'color:white'; }
	else if (depout == 'default') {
		document.getElementById('deposit').style.cssText = 'color:white'; }
	
}

function closeModal() {
	document.getElementById('modalWallet').style.display ='none';
}




function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}



function sleep(ms) {
  new Promise(resolve => setTimeout(resolve, ms));
}


function updateLastGames(color) {
	if (firstColor == 'white') {
		document.getElementById('game-4').style.cssText = 'background-color:' + color;
		firstColor = color; 
	}




	else if (firstColor != 'white') {
		if (secondColor == 'white') {
			document.getElementById('game-1').style.cssText = 'background-color:' + color;
			secondColor = color;
		}
		else if (secondColor != 'white') {
			if (thirdColor == 'white') {
				document.getElementById('game-2').style.cssText = 'background-color:' + color;
				thirdColor == color;
			}
			else if (thirdColor != 'white') {

				if (foureColor != 'white') {
					document.getElementById('game-4').style.cssText = 'background-color:' + color;
					firstColor == color;
				}
				else if (foureColor == 'white') {
					document.getElementById('game-3').style.cssText = 'background-color:' + color;
					foureColor == color;
				}
			}
			
		}
		else if (secondColor == 'white') {
			document.getElementById('game-1').style.cssText = 'background-color:' + color;
			secondColor = color;
		}
	}
	else if (firstColor == 'white') {
		document.getElementById('game-4').style.cssText = 'background-color:' + color;
		firstColor = color;
	}



	if (document.getElementById('game-4').style.cssText = 'background-color:white') {
		document.getElementById('game-4').style.cssText = 'background-color:' + color
	}
	else if (document.getElementById('game-4').style.cssText != 'background-color:white') {
		document.getElementById('game-1').style.cssText = 'background-color:' + color
	}

}

function yellow() {

	if (yellowPosition == '0') {
		bet_count = staffGet();
		bet = 'yellow';
		balance = balance - bet_count;
		document.getElementById('balance').innerHTML = balance;
		document.getElementById('yellow').style.padding = '10px 149px'
		document.getElementById('yellow').style.cssText = 'left: 660px';
		document.getElementById('orange').style.cssText = 'left: 1600px';
		document.getElementById('red').style.cssText = 'left: 1600px';
		document.getElementById('green').style.cssText = 'left: 1600px';
		yellowPosition = 1;
		document.getElementById('staff').innerHTML.disabled = '0';
	}
	else if (yellowPosition == '1' & gameNow == '0') {
		balance = balance + bet_count;
		bet = 'none';
		document.getElementById('balance').innerHTML = balance;
		document.getElementById('yellow').style.cssText = 'left: 503px';
		document.getElementById('orange').style.cssText = 'left: 603px';
		document.getElementById('red').style.cssText = 'left: 703px';
		document.getElementById('green').style.cssText = 'left: 803px';
		yellowPosition = '0'
	}
}

function orange() {
	if (orangePosition == '0') {
		bet_count = staffGet()
		bet = 'orange'
		balance = balance - bet_count
		document.getElementById('balance').innerHTML = balance;
		document.getElementById('orange').style.cssText = 'padding: 10px 149px';
		document.getElementById('orange').style.cssText = 'left: 660px';
		document.getElementById('yellow').style.cssText = 'left: 1600px';
		document.getElementById('red').style.cssText = 'left: 1600px';
		document.getElementById('green').style.cssText = 'left: 1600px';
		orangePosition = 1;
	}
	else if (orangePosition == '1' & gameNow == '0') {
		balance = balance + bet_count
		bet = 'none'
		document.getElementById('balance').innerHTML = balance;
		document.getElementById('yellow').style.cssText = 'left: 503px';
		document.getElementById('orange').style.cssText = 'left: 603px';
		document.getElementById('red').style.cssText = 'left: 703px';
		document.getElementById('green').style.cssText = 'left: 803px';
		orangePosition = '0'
	}

}

function red() {
	if (redPosition == '0') {
		bet_count = staffGet();
		bet = 'red';
		balance = balance - bet_count;
		document.getElementById('balance').innerHTML = balance;
		document.getElementById('red').style.cssText = 'padding: 10px 149px';
		document.getElementById('red').style.cssText = 'left: 660px';
		document.getElementById('yellow').style.cssText = 'left: 1600px';
		document.getElementById('orange').style.cssText = 'left: 1600px';
		document.getElementById('green').style.cssText = 'left: 1600px';
		redPosition = '1';
	}
	else if (redPosition == '1' & gameNow == '0') {
		balance = balance + bet_count
		bet = 'none'
		document.getElementById('balance').innerHTML = balance;
		document.getElementById('yellow').style.cssText = 'left: 503px';
		document.getElementById('orange').style.cssText = 'left: 603px';
		document.getElementById('red').style.cssText = 'left: 703px';
		document.getElementById('green').style.cssText = 'left: 803px';
		redPosition = '0';
	}

}

function green() {
	if (greenPosition == '0') {
		bet_count = staffGet();
		bet = 'green';
		balance = balance - bet_count;
		document.getElementById('balance').innerHTML = balance;
		document.getElementById('green').style.cssText = 'padding: 10px 149px';
		document.getElementById('green').style.cssText = 'left: 660px';
		document.getElementById('yellow').style.cssText = 'left: 1600px';
		document.getElementById('red').style.cssText = 'left: 1600px';
		document.getElementById('orange').style.cssText = 'left: 1600px';
		greenPosition = '1';
	}
	else if (greenPosition == '1' & gameNow == '0') {
		balance = balance + bet_count;
		bet = 'none';
		document.getElementById('balance').innerHTML = balance;
		document.getElementById('yellow').style.cssText = 'left: 503px';
		document.getElementById('orange').style.cssText = 'left: 603px';
		document.getElementById('red').style.cssText = 'left: 703px';
		document.getElementById('green').style.cssText = 'left: 803px';
		greenPosition = '0';
	}
}

function notification(num) {

	if (num == 0) {
		setTimeout(() => { 
		document.getElementById('notification').innerHTML = 'Желтый';
		document.getElementById('notification').style.cssText = 'background-color:yellow';
		}, 4000)
	}
	if (num == 1) {
		setTimeout(() => { 
		document.getElementById('notification').innerHTML = 'Оранжевый';
		document.getElementById('notification').style.cssText = 'background-color:orange';
		}, 4000)
	}
	if (num == 2) {
		setTimeout(() => { 
		document.getElementById('notification').innerHTML = 'Красный';
		document.getElementById('notification').style.cssText = 'background-color:red';
		}, 4000)
	}
	if (num == 3) {
		setTimeout(() => { 
		document.getElementById('notification').innerHTML = 'Желтый';
		document.getElementById('notification').style.cssText = 'background-color:yellow';
		}, 4000)
	}
	if (num == 4) {
		setTimeout(() => { 
		document.getElementById('notification').innerHTML = 'Оранжевый';
		document.getElementById('notification').style.cssText = 'background-color:orange';
		}, 4000)
	}
	if (num == 5) {
		setTimeout(() => { 
		document.getElementById('notification').innerHTML = 'Красный';
		document.getElementById('notification').style.cssText = 'background-color:red';
		}, 4000)
	}
	if (num == 6) {
		setTimeout(() => { 
		document.getElementById('notification').innerHTML = 'Зеленый';
		document.getElementById('notification').style.cssText = 'background-color:green';
		}, 4000)
	}
}

function rotate() {
	if (bet != 'none' & bet_count >= '1' && gameNow != 1) {
		gameNow = 1;
		document.getElementById('start_btn').innerHTML = 'Ожидайте...';
		document.getElementById('start_btn').style.cssText = 'background-color:#056b03';
		document.getElementById('start_btn').style.cssText = 'left:650px';
		document.getElementById('staff').innerHTML.disabled = 'disabled';
		document.getElementById('start_btn').innerHTML.onclick = '';



	    let random = getRandomInt(7);

	    if (random == '0') {
	    	notification(0)
	    	for(var i=1;i<11;i++)
	    	{
	    	    
	    	    document.getElementById('wheel').style.WebkitTransitionDuration="4s";
	    	    document.getElementById('wheel').style.webkitTransform = 'rotate(1440deg)'; 
	    	    setTimeout(() => {document.getElementById('wheel').style.WebkitTransitionDuration="1s";}, 4000)
	    	    setTimeout(() => {document.getElementById('wheel').style.webkitTransform = ''; }, 5000)
	    	    setTimeout(() => {updateLastGames('yellow')}, 4000)
	    	        
	    	    
	    	}
	    	if (bet == 'yellow') {
	    		setTimeout(() => { 
	    		balance = balance + bet_count + bet_count + bet_count + bet_count;
	    		document.getElementById('balance').innerHTML = balance;

	    		}, 4000)
	    	}
	    	    
	    	    

	    }
	    

	    else if (random == '1') {
	    	notification(1)

	    	for(var i=1;i<11;i++)
	    	{
	    		
	    	    document.getElementById('wheel').style.WebkitTransitionDuration="4s";
	    	    document.getElementById('wheel').style.webkitTransform = 'rotate(1390deg)';
	    	    setTimeout(() => {document.getElementById('wheel').style.WebkitTransitionDuration="1s";}, 4000)
	    	    setTimeout(() => {document.getElementById('wheel').style.webkitTransform = ''; }, 5000)
	    	    setTimeout(() => {updateLastGames('orange')}, 4000)
	    		 
	   		} 
	   		if (bet == 'orange') {
	   			setTimeout(() => { 
	    		balance = balance + bet_count + bet_count + bet_count + bet_count;
	    		document.getElementById('balance').innerHTML = balance; 
	   			}, 4000)
	   		}
	   	}

	   	else if (random == '2') {
	   		notification(2)
	    	for(var i=1;i<11;i++)
	    	{
	    		
	    		document.getElementById('wheel').style.WebkitTransitionDuration="4s";
	    		document.getElementById('wheel').style.webkitTransform = 'rotate(1340deg)';
	    		setTimeout(() => {document.getElementById('wheel').style.WebkitTransitionDuration="1s";}, 4000)
	    		setTimeout(() => {document.getElementById('wheel').style.webkitTransform = ''; }, 5000)
	    		setTimeout(() => {updateLastGames('red')}, 4000)
	   		} 
	   		if (bet == 'red') {
	   			setTimeout(() => { 
	    		balance = balance + bet_count + bet_count + bet_count + bet_count;
	    		document.getElementById('balance').innerHTML = balance; 
	   			}, 4000)
	   		}
	   	}

	   	else if (random == '3') {
	   		notification(3)
	    	for(var i=1;i<11;i++)
	    	{
	    		
	    		document.getElementById('wheel').style.WebkitTransitionDuration="4s";
	    		document.getElementById('wheel').style.webkitTransform = 'rotate(1290deg)'; 
	    		setTimeout(() => {document.getElementById('wheel').style.WebkitTransitionDuration="1s";}, 4000)
	    		setTimeout(() => {document.getElementById('wheel').style.webkitTransform = ''; }, 5000)
	    		setTimeout(() => {updateLastGames('yellow')}, 4000)
	    		
	   		} 
	   		if (bet == 'yellow') {
	   			setTimeout(() => { 
	    		balance = balance + bet_count + bet_count + bet_count + bet_count;
	    		document.getElementById('balance').innerHTML = balance;
	    		}, 4000)
	    	}
	   		
	   	}

	   	else if (random == '4') {
	   		notification(4)
	    	for(var i=1;i<11;i++)
	    	{
	    		
	    		document.getElementById('wheel').style.WebkitTransitionDuration="4s";
	    		document.getElementById('wheel').style.webkitTransform = 'rotate(1240deg)'; 
	    		setTimeout(() => {document.getElementById('wheel').style.WebkitTransitionDuration="1s";}, 4000)
	    		setTimeout(() => {document.getElementById('wheel').style.webkitTransform = ''; }, 5000)
	    		setTimeout(() => {updateLastGames('orange')}, 4000)
	    		
	   		} 
	   		if (bet == 'orange') {
	   			setTimeout(() => { 
	    		balance = balance + bet_count + bet_count + bet_count + bet_count;
	    		document.getElementById('balance').innerHTML = balance;
	    		}, 4000)
	    	}
	   		
	   	}

	   	else if (random == '5') {
	   		notification(5)
	    	for(var i=1;i<11;i++)
	    	{
	    		
	    		document.getElementById('wheel').style.WebkitTransitionDuration="4s";
	    		document.getElementById('wheel').style.webkitTransform = 'rotate(1190deg)'; 
	    		setTimeout(() => {document.getElementById('wheel').style.WebkitTransitionDuration="1s";}, 4000)
	    		setTimeout(() => {document.getElementById('wheel').style.webkitTransform = ''; }, 5000)
	    		setTimeout(() => {updateLastGames('red')}, 4000)
	    		
	   		} 
	   		if (bet == 'red') {
	   			setTimeout(() => { 
	    		balance = balance + bet_count + bet_count + bet_count + bet_count;
	    		document.getElementById('balance').innerHTML = balance;
	    		}, 4000)
	    	}
	   		
	   	}

	   	else if (random == '6') {
	   		notification(6)
	    	for(var i=1;i<11;i++)
	    	{
	    		
	    		document.getElementById('wheel').style.WebkitTransitionDuration="4s";
	    		document.getElementById('wheel').style.webkitTransform = 'rotate(1140deg)'; 
	    		setTimeout(() => {document.getElementById('wheel').style.WebkitTransitionDuration="1s";}, 4000)
	    		setTimeout(() => {document.getElementById('wheel').style.webkitTransform = ''; }, 5000)
	    		setTimeout(() => {updateLastGames('green')}, 4000)
	    		 
	   		} 
	   		if (bet == 'green') {
	   			setTimeout(() => { 
	    		balance = balance + bet_count + bet_count + bet_count + bet_count + bet_count + bet_count + bet_count;
	    		document.getElementById('balance').innerHTML = balance;
	    		}, 4000)
	    	}
	   	}
	   	setTimeout(() => {
	   		document.getElementById('start_btn').style.cssText = 'background-color:#green';
			document.getElementById('start_btn').style.cssText = 'left:620px';
			document.getElementById('start_btn').innerHTML = 'Вращайте барабан!';
			document.getElementById('start_btn').innerHTML.onclick = 'rotate()';

			document.getElementById('balance').innerHTML = balance;
			document.getElementById('yellow').style.cssText = 'left: 503px';
			document.getElementById('orange').style.cssText = 'left: 603px';
			document.getElementById('red').style.cssText = 'left: 703px';
			document.getElementById('green').style.cssText = 'left: 803px';


			greenPosition = '0';
			redPosition = '0';
			orangePosition = '0';
			yellowPosition = '0';
			gameNow = 0;
			bet = 'none'
	   	}, 4000)
	}
	else if (gameNow = '0') {
		document.getElementById('wheel').style.webkitTransform = 'rotate(0deg)'; 
		alert('Кажется, вы забыли сделать ставку! Сейчас перезагружу вашу страницу, во избежании робото-апокалипсиса.')
		gameNow = '1';
		window.location.reload();
	} 
}

