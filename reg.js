//register sw:
window.addEventListener('load', () => { registerSW(); });
async function registerSW() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('./sw.js');
            console.log(`SW registration success`);
        } catch (e) {
            console.log(`SW registration failed`);
        }
    }
}

/*
async unregisterSWs({matchingScope, matchingUrl}) {
  const registrations = await navigator.serviceWorker.getRegistrations();
  const matchingRegistrations = registrations.filter(registration => {
    if (matchingScope) {
      return registration.scope === matchingScope;
    }

    if (matchingUrl) {
      return registration.active.scriptURL === matchingUrl;
    }
  });

  for (const registration of matchingRegistrations) {
    await registration.unregister();
    console.log('Unregistered ', registration);
  }
}
unregisterSWs({matchingScope: 'https://example.com/push'});
unregisterSWs({matchingUrl: 'https://example.com/my-push-sw.js'});
*/