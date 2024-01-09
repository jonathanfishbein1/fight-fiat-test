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
            window.addEventListener('load', event => {
                console.log('in load window ')
                const iframes = document.getElementsByTagName('iframe')
                console.log('iframes ', iframes)
                const iframeDocuments = [...iframes].map(iframe => iframe.contentDocument || iframe.contentWindow.document)
                 console.log('iframeDocuments ', iframeDocuments)
                console.log('iframeDocuments[0].body ', iframeDocuments[0].body)
                // const simIframe = document.getElementById('simframe')
                // console.log('simIframe ',  simIframe)
                // const simIframeDocument = simIframe.contentWindow.document
                // console.log('simIframeDocument ',  simIframeDocument)
                // iframeDocuments[0].addEventListener('load', event => {
                    console.log('in load iframe ')
                    let menuButton = iframeDocuments[0].getElementsByClassName('game-sys-button-group')[0]
                    console.log('menuButton ', menuButton)
                    menuButton.remove()
                // })

            }
            )
addSimMessageHandler("web", (data) => {
    console.log('addSimMessageHandler')
    const targetWindow = window.parent
    console.log('window ', window)
    console.log('targetWindow ', targetWindow)
    targetWindow.postMessage('hello from iframe', 'http://localhost:8080/fight_fiat')
})
