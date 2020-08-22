// CODELAB: Add event listener for beforeinstallprompt event
let deferredPrompt;

function addToHome()
{
	document.getElementById('cover').style.opacity = "0.5";
	document.getElementById('cover').style.zIndex = "3";
	deferredPrompt.prompt();
	deferredPrompt.userChoice.then((choiceResult) => {
		if (choiceResult.outcome === 'accepted') {
		  	console.log('User accepted the install prompt');
		  	document.getElementById('cover').style.opacity = "0";
			document.getElementById('cover').style.zIndex = "-1";
			var addbtn = document.getElementById("buttonInstall");
			addbtn.parentNode.removeChild(addbtn);

		} else {
		  	console.log('User dismissed the install prompt');
		  	document.getElementById('cover').style.opacity = "0";
			document.getElementById('cover').style.zIndex = "-1";
		}
	});
}

function showInstallPromotion()
{
	document.getElementById("buttonInstall").addEventListener('click', addToHome );
}

window.addEventListener('beforeinstallprompt', (e) => {
	e.preventDefault();
	deferredPrompt = e;
	showInstallPromotion();
});

window.addEventListener('DOMContentLoaded', () => {
  let displayMode = 'browser tab';
  if (navigator.standalone) {
    displayMode = 'standalone-ios';
    document.getElementById('cover').style.opacity = "0";
	document.getElementById('cover').style.zIndex = "-1";
	var addbtn = document.getElementById("buttonInstall");
	addbtn.parentNode.removeChild(addbtn);
  }
  if (window.matchMedia('(display-mode: standalone)').matches) {
    displayMode = 'standalone';
    document.getElementById('cover').style.opacity = "0";
	document.getElementById('cover').style.zIndex = "-1";
	var addbtn = document.getElementById("buttonInstall");
	addbtn.parentNode.removeChild(addbtn);
  }
  // Log launch display mode to analytics
  console.log('DISPLAY_MODE_LAUNCH:', displayMode);
});




