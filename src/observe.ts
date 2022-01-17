export function observeFirstConnect(listener: () => Promise<void>, element: Element, containerOrRoot: HTMLElement | ShadowRoot | undefined) {
    const observer = new MutationObserver(fullListener)
    const timer = window.setInterval(fullListener, 1000)
    let listened = false
    async function fullListener() {
        if (!element.isConnected || listened) {
            return
        }
        listened = true
        observer.disconnect()
        clearInterval(timer)
        await listener()
    }
    let container: HTMLElement | null
    if (containerOrRoot === undefined) {
        container = document.body.querySelector(':scope>.lr-struct>main>article')
    } else if (containerOrRoot instanceof ShadowRoot) {
        container = containerOrRoot.querySelector(':host>div')
    } else {
        container = containerOrRoot
    }
    if (container === null) {
        container = document.body
    }
    observer.observe(container, {childList: true, subtree: true})
}
export function observeAdjustments(adjust: () => Promise<boolean>, element: Element, containerOrRoot: HTMLElement | ShadowRoot | undefined) {
    let taskNum = 0
    const generator = (async function* () {
        while (true) {
            while (!await adjust()) {
                await new Promise(r => setTimeout(r, 1000))
            }
            element.dispatchEvent(new Event('adjust', {bubbles: true, composed: true}))
            taskNum--
            yield
        }
    })()
    observeFirstConnect(async () => {
        element.addEventListener('adjust', async e => {
            if (e.eventPhase === e.BUBBLING_PHASE) {
                e.stopPropagation()
                if (taskNum < 2) {
                    taskNum++
                    await generator.next()
                }
            }
        })
        taskNum++
        await generator.next()
    }, element, containerOrRoot)
}