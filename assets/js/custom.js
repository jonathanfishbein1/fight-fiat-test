/**
 * This will be loaded before starting the simulator.
 * If you wish to add custom javascript, 
 * ** make sure to add this line to pxt.json**
 * 
 *      "disableTargetTemplateFiles": true
 * 
 * otherwise MakeCode will override your changes.
 * 
 * To register a constrol simmessages, use addSimMessageHandler
 */
console.log('in custom js')
const iframes = document.getElementsByTagName('iframe')
console.log('iframes ', iframes)
const iframeDocuments = [...iframes].map(iframe => iframe.contentDocument || iframe.contentWindow.document)
 console.log('iframeDocuments ', iframeDocuments)
addSimMessageHandler("web", (data) => {
    console.log('addSimMessageHandler')
    const targetWindow = window.parent
    console.log('window ', window)
    console.log('targetWindow ', targetWindow)
    targetWindow.postMessage('hello from iframe', 'http://localhost:8080/fight_fiat')
})
