function storeState() {
  chrome.tabs.query({ lastFocusedWindow: true }, function(tabs) {
    chrome.storage.local.set({ key: tabs }, function() {
      console.log('Value is set to ' + tabs);
    });
  });
}

chrome.runtime.onInstalled.addListener(function(details) {
  console.log('Extension installed: ' + details.reason);
  storeState();
});
chrome.runtime.onStartup.addListener(function() {
  console.log('Extension started');
  storeState();
});
chrome.tabs.onCreated.addListener(function() {
  storeState();
});
chrome.tabs.onUpdated.addListener(function() {
  storeState();
});
chrome.tabs.onRemoved.addListener(function() {
  storeState();
});
chrome.tabs.onReplaced.addListener(function() {
  storeState();
});
chrome.windows.onFocusChanged.addListener(function() {
  storeState();
});
