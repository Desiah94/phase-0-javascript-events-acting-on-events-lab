const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  const currentPosition = parseInt(dodger.style.left);
  const newPosition = currentPosition - 4;
  if (newPosition >= 0) {
    dodger.style.left = '176px';
  }
}
function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace('px', '')
    let left = parseInt(leftNumbers, 10)

    if (left < 360)
      dodger.style.left = `${left + 1}px`
}