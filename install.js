// CODELAB: Add event listener for beforeinstallprompt event
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
	e.preventDefault();
	deferredPrompt = e;
	showInstallPromotion();
});

function showInstallPromotion()
{
	document.getElementById("logo").addEventListener('click', () => {
		document.getElementById('cover').style.opacity = "0.5";
		document.getElementById('cover').style.zIndex = "3";
		deferredPrompt.prompt();
	});
}


