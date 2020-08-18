function saveBeforeInstallPromptEvent(evt) {
	evt.preventDefault();
}

// CODELAB: Add event listener for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

