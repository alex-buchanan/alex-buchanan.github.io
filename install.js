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
		deferredPrompt.prompt();
	});
}


