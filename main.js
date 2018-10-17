var tourDuJoueur1 = true;
var partieGagnee = false;
var cells = document.querySelectorAll('.cell');
var gagne = document.querySelector('#gagne');
var section = document.querySelector('section');
var article1 = document.querySelector('.article1');


var afficherSymbole = function(cell) {
	// a remplir
	// 1 - verifier case remplie ou pas
	if (cell.classList.contains('cell')) {
		// 2 - poser symbole J1 ou j2
		if (tourDuJoueur1) {
			cell.classList.replace('cell', 'croix');
		} else {
			cell.classList.replace('cell', 'rond');
		}
		// 4 - changer le joueur courant
		tourDuJoueur1 = !tourDuJoueur1;
	} else{
		alert('on ne peut pas cliquer ici');
	}
};

var appuiTouche = function(){
	document.onkeydown = function (event){
	  event = event || window.event; //Fix pour IE
	  var code = event.keyCode || event.which; //code ascii de la touche
	  if( code === 32){
	    console.log('ça fonctionne');
			section.classList.remove('visible');
			article1.classList.remove('visible');
	  }
	  else{
	    console.log('mauvaise touche');
	  }
	};
}

var combinaisons = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]];

var verifierCombinaisons = function() {
	// a remplir
	// 3 - check combinaison gagnante
	combinaisons.forEach(function(combinaison) {
		if (
			cells[combinaison[0]].classList.contains('rond') && cells[combinaison[1]].classList.contains('rond') &&
			cells[combinaison[2]].classList.contains('rond')
			||
			cells[combinaison[0]].classList.contains('croix') && cells[combinaison[1]].classList.contains('croix') &&
			cells[combinaison[2]].classList.contains('croix')
			){
				// console.log('WIN');
				var currentPlayer;
				if (tourDuJoueur1) {
					currentPlayer = 'joueur 2';
				} else {
					currentPlayer = 'joueur 1';
				}
				section.classList.add('visible');
				article1.classList.add('visible');
				gagne.textContent = 'Bravo ' + currentPlayer + ' !' ;
				partieGagnee = true;
				appuiTouche();
			}
	});
};

cells.forEach(function(cell) {
	cell.addEventListener('click', function() {
		if (!partieGagnee) {
			afficherSymbole(cell);
			verifierCombinaisons();
		}else{

		}
	});
});
