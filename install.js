// CODELAB: Add event listener for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {
	e.preventDefault();
	deferredPrompt = e;
	showInstallPromotion();
});

function showInstallPromotion()
{
	var cc = document.getElementById('cover');
	cc.opacity = '0.5';
}


