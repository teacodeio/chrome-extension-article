chrome.runtime.onMessage.addListener((message, sender) => {
  chrome.tabs.sendMessage(sender.tab?.id, {
    value: message.value + " + " + "hello from background script",
  });
});
