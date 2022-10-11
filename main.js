window.onload = () => {
  const counter = document.getElementById('counter');
  const start = document.getElementById('start')
  const stop = document.getElementById('stop')
  const reset = document.getElementById('reset')

  let counterValue = 0
  let counterTimer

  function handleStart() {
    if (counterTimer) {
      return;
    }

    counter.innerText = counterValue;
    counter.style.display = 'inline'

    counterTimer = setInterval(() => {
      counterValue += 1;
      counter.innerText = counterValue;
    }, 1000)

    start.disabled = true
    stop.disabled = null
    reset.disabled = null
  }

  function handleStop() {
    clearTimeout(counterTimer)
    counterTimer = null;

    start.disabled = null
  }

  function handleReset() {
    counter.style.display = 'none';

    if (counterTimer) {
      handleStop()
    }
    counterValue = 0

    start.disabled = null
    stop.disabled = true
    reset.disabled = true

  }

  start.disabled = null
  stop.disabled = true
  reset.disabled = true

  start.addEventListener("click", handleStart)
  stop.addEventListener("click", handleStop)
  reset.addEventListener("click", handleReset)

}
