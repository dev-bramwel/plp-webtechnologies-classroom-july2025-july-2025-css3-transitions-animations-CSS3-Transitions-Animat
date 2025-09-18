// Part 2: JavaScript Functions — Scope, Parameters & Return Values
// Demonstrates local vs global scope
let globalVar = "I am global!";
function showScopeDemo() {
  let localVar = "I am local!";
  document.getElementById(
    "scope-demo"
  ).textContent = `Global: ${globalVar}, Local: ${localVar}`;
}
// Function with parameters and return value
function calculateSum(a, b) {
  const sum = a + b;
  document.getElementById("sum-result").textContent = `Sum: ${sum}`;
  return sum;
}
// Part 3: Combining CSS Animations with JavaScript
function triggerBoxAnimation() {
  const box = document.getElementById("js-animated-box");
  box.classList.remove("animate");
  // Force reflow to restart animation
  void box.offsetWidth;
  box.classList.add("animate");
}
function toggleModal() {
  const modal = document.getElementById("modal");
  modal.classList.toggle("show");
}
// Reusable function to add/remove classes
function toggleClass(elementId, className) {
  const el = document.getElementById(elementId);
  el.classList.toggle(className);
}
