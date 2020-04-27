window.addEventListener('load', () => {
  document.body.style.opacity = '1';

})

function OutFMTransition(str) {
  document.getElementById("frontmain").style.opacity = "0";
  window.setTimeout(replaceA, 1050);

  function replaceA() {  
    if (str == 'Broadcasting') {
      var el = document.querySelector('body');
      var newEl = document.createElement('p');
      newEl.innerHTML = '<b>	403 - Group Authentication required.</b>';
      el.parentNode.replaceChild(newEl, el);
    }
	if (str == 'Esports') {
	  window.location.href = 'https://Esports.AsfaltoAscari.com/';
    }
	if (str == 'Group') {
	  window.location.href = 'https://AsfaltoAscari.com/Group.html';
      var el3 = document.querySelector('body');
      var newEl3 = document.createElement('p');
      newEl3.innerHTML = '<b>	403 - Group Authentication required.</b>';
      el3.parentNode.replaceChild(newEl3, el3);
    }
	if (str == 'Asfalto') {
     window.location.href = 'https://AsfaltoAscari.com/';
    }
  }

}
