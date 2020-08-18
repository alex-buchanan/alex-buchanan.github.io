function saveBeforeInstallPromptEvent(evt) {
  // CODELAB: Add code to save event & show the install button.
  window.removeEventListener("beforeinstallprompt", saveBeforeInstallPromptEvent);
}

// CODELAB: Add event listener for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

