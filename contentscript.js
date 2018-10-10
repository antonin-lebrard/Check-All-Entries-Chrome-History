function injectAnon(f, val) {
  var script = document.createElement("script");
  val = val || '';
  script.type = "text/javascript";
  script.textContent = "(" + f + ")("+val+");";
  document.documentElement.appendChild(script);
}
// This is a helper for with the chrome dev tools
injectAnon(function() {
  window.checkAllHistoryEntries = function() {
    console.log('Chrome History Improver: check all history entries')
    const listEl = document.getElementById('history-app').shadowRoot.getElementById('main-container').children[1].children[0].shadowRoot.getElementById('infinite-list')
    for (let i = 1; i < listEl.children.length; i++) {
      if (listEl.children[i].attributes.hidden === undefined) {
        listEl.children[i].shadowRoot.getElementById('item-container').children[0].click()
      }
    }
  }
})

function checkAllHistoryEntries() {
  console.log('Chrome History Improver: check all history entries')
  const listEl = document.getElementById('history-app').shadowRoot.getElementById('main-container').children[1].children[0].shadowRoot.getElementById('infinite-list')
  for (let i = 1; i < listEl.children.length; i++) {
    if (listEl.children[i].attributes.hidden === undefined) {
      listEl.children[i].shadowRoot.getElementById('item-container').children[0].click()
    }
  }
}

function historyButton() {
  const button = document.createElement('div')
  button.style.position = 'fixed'
  button.style.top = '240px'
  button.style.left = '24px'
  button.style.padding = '12px 20px'
  button.style.fontWeight = 'bold'
  button.style.border = '1px solid #00000021'
  button.style.borderRadius = '30px'
  button.style.transition = 'box-shadow 300ms, background-color 100ms'
  button.style.cursor = 'pointer'
  button.id = 'checkAllHistoryButton'
  button.innerHTML = 'Check all history entries'
  button.addEventListener('click', checkAllHistoryEntries)

  return button
}

window.addEventListener('DOMContentLoaded', () => {
  // I have to use a timeout, because the history is coded in the polymer
  // and polymer itself begins to load its DOM only after the window.load event.
  // And I didn't find any function to attach to, to know when polymer has finally
  // rendered every DOM it wanted
  setTimeout(() => {
    const contentSideBarEl = document
      .getElementById('history-app')
      .shadowRoot
      .getElementById('content-side-bar')
      .shadowRoot
      .children[1]

    contentSideBarEl.previousElementSibling.innerHTML +=
`
#checkAllHistoryButton:hover {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
}
#checkAllHistoryButton:active {
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.25);
  background-color: #cbcbcb24;
} 
`

    contentSideBarEl
      .insertBefore(historyButton(), contentSideBarEl.children[4])
  }, 2000)

})

