var gengarHP = 60;
var nidorinoHP = 61;
var isPlayerTurn = true;
var tpp = 10;
var hpp = 5;
var rngslashpp = 6;
var pmovepp = 4;


var message = document.getElementById("message");
var opponentHPElement = document.getElementById("opponent-hp");
opponentHPElement.innerHTML = nidorinoHP;

var playerHPElement = document.getElementById("player-hp");
playerHPElement.innerHTML = gengarHP;

var tppElement = document.getElementById("tackle-pp");
tppElement.innerHTML = tpp;

var hppElement = document.getElementById("heal-pp");
hppElement.innerHTML = hpp;

var rngslashppElement = document.getElementById("rngslash-pp");
rngslashppElement.innerHTML = rngslashpp;

var pmoveppElement = document.getElementById("pmove-pp")
pmoveppElement.innerHTML = pmovepp;

function tackle() {
	if (isPlayerTurn == true) {
		nidorinoHP -= 5;
		tpp -= 1;
		message.innerHTML = "GENGAR uses tackle!"
		if (nidorinoHP <= 0) {
			nidorinoHP = 0;
			message.innerHTML = "NIDORINO fainted!";
			window.alert("THIS HIT KNOCKED OUT A POKEMON");
			if (confirm("Restart?")) {
				document.location.reload();
			}
		}
		tppElement.innerHTML = tpp;
		opponentHPElement.innerHTML = nidorinoHP;
	} else {
		gengarHP -= 5;
		message.innerHTML = "NIDORINO uses tackle!"
		if (gengarHP <= 0) {
			gengarHP = 0;
			message.innerHTML = "GENGAR fainted!";
			window.alert("THIS HIT KNOCKED OUT A POKEMON");
			if (confirm("Restart?")) {
				document.location.reload();
			}
			
		}
		playerHPElement.innerHTML = gengarHP;
	}
	isPlayerTurn = !isPlayerTurn;
	if (tpp <=0) {
		tackle = false
	}
	
}

function heal(){
	if (isPlayerTurn == true) {
		gengarHP += Math.floor(Math.random() * 11);
		message.innerHTML = "GENGAR uses heal"
		hpp -= 1;
		if (nidorinoHP <= 0) {
			nidorinoHP = 0;
			message.innerHTML = "NIDORINO fainted!";
	}
	if (gengarHP >= 60) {
		gengarHP = 60
		message.innerHTML = "GENGAR has fully healed!"
	}
	hppElement.innerHTML = hpp;
	playerHPElement.innerHTML = gengarHP;
	opponentHPElement.innerHTML = nidorinoHP;
	} else {
		nidorinoHP += Math.floor(Math.random() * 11);
		message.innerHTML = "NIDORINO uses heal"
		if (nidorinoHP >= 61) {
			nidorinoHP = 61
			message.innerHTML = "NIDORINO has fully healed!"
		}

		playerHPElement.innerHTML = gengarHP;
		opponentHPElement.innerHTML = nidorinoHP
	}
	isPlayerTurn = !isPlayerTurn;

	if (hpp <=0) {
		heal = false
	}
	
}

function Power_Move() {
	if (isPlayerTurn == true) {
		pmovepp -=1;
	  if (nidorinoHP >= 50) {
		nidorinoHP -= 20;
		message.innerHTML = "GENGAR uses PowerMove!";
	  	}
		if (nidorinoHP <= 49) {
		  nidorinoHP -= 10;
		  message.innerHTML = "GENGAR uses PowerMove!";
		}
		if (nidorinoHP <= 0) {
		  nidorinoHP = 0;
		  message.innerHTML = "NIDORINO fainted!";
		  window.alert("THIS HIT KNOCKED OUT A POKEMON");
			if (confirm("Restart?")) {
				document.location.reload();
			}
		}
		pmoveppElement.innerHTML = pmovepp;
	  opponentHPElement.innerHTML = nidorinoHP;
	} else {
	  if (gengarHP >= 50) {
		gengarHP -= 20;
		message.innerHTML = "NIDORINO uses PowerMove!";
	    }
		if (gengarHP <= 49) {
		  gengarHP -= 10;
		  message.innerHTML = "NIDORINO uses PowerMove!";
		}
		if (gengarHP <= 0) {
		  gengarHP = 0;
		  message.innerHTML = "GENGAR fainted!";
		  window.alert("THIS HIT KNOCKED OUT A POKEMON");
			if (confirm("Restart?")) {
				document.location.reload();
			}
		}
	  
  
	  playerHPElement.innerHTML = gengarHP;
	}
	isPlayerTurn = !isPlayerTurn;
	if ( pmovepp <=0) {
		Power_Move = false
	}
  }

function rngSlash() {
	if (isPlayerTurn == true) {
		nidorinoHP -= Math.floor(Math.random() * 16);
		message.innerHTML = "GENGAR uses RNG Slash!"
		rngslashpp -= 1;
		if (nidorinoHP <= 0) {
			nidorinoHP = 0;
			message.innerHTML = "NIDORINO fainted!";
			window.alert("THIS HIT KNOCKED OUT A POKEMON");
			if (confirm("Restart?")) {
				document.location.reload();
			}
		}
		rngslashppElement.innerHTML = rngslashpp;
		opponentHPElement.innerHTML = nidorinoHP;
	} else {
		gengarHP -= Math.floor(Math.random() * 16);
		message.innerHTML = "NIDORINO uses RNG Slash!"
		if (gengarHP <= 0) {
			gengarHP = 0;
			message.innerHTML = "GENGAR fainted!";
			window.alert("THIS HIT KNOCKED OUT A POKEMON");
			if (confirm("Restart?")) {
				document.location.reload();
			}
		}

		playerHPElement.innerHTML = gengarHP;
	}
	isPlayerTurn = !isPlayerTurn;
	if (rngslashpp <=0) {
		rngSlash = false
	}
}


function reload() {
	window.location.reload();
}

function addPP() {
if (isPlayerTurn) {
	pmovepp += 1;
	tpp += 1;
	hpp += 1;
	rngslashpp += 1; 

}
	rngslashppElement.innerHTML = rngslashpp;
	hppElement.innerHTML = hpp;
	tppElement.innerHTML = tpp;
	pmoveppElement.innerHTML = pmovepp;

}



