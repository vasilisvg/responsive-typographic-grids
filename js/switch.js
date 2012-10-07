function switchFont(){
	var clicklinks = document.querySelectorAll('.fontSelect li'),
		i;
	i = clicklinks.length;
	while(i>0) {
		clicklinks[i-1].onclick = function(){
			document.getElementById('switcher').href="css/"+ this.innerHTML +".css";
		}
		i--
	}
	/* .onclick = function(){
		alert('')
	} */
}

function addFontSelector(){
	var newSelect,
		fontChoice,
		i,
		newFontChoice;
	newSelect = document.createElement('ul');
	newSelect.className += 'fontSelect';
	fontChoice = new Array('arial','georgia','helvetica','tahoma','verdana');
	i = fontChoice.length;
	while(i>0) {
		newFontChoice = document.createElement('li');
		newFontName = document.createTextNode(fontChoice[i-1]);
		newFontChoice.appendChild(newFontName);
		newSelect.appendChild(newFontChoice);
		i--;
	}
	document.body.appendChild(newSelect);
	switchFont();
}

window.onload = function(){
	addFontSelector();
}