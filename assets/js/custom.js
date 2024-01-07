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
addSimMessageHandler("web", (data) => {
    console.log('in addSimMEssageHandler')
    console.log('window ', window)
    const targetWindow = window.parent
    console.log('targetWindow ', targetWindow)
    targetWindow.postMessage("hello from post message");              
})
