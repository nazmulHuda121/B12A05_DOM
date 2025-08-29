1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
--getElementById -> returns one element by unique ID.
--getElementsByClassName -> returns HTMLCollection of elements with that class.
--querySelector -> returns the first match of a CSS selector.
--querySelectorAll -> returns NodeList (all matches).

2.How do you create and insert a new element into the DOM?

Answer:
--Use document.createElement() -> set content with .innerText / .innerHTML -> insert with .appendChild() or .append().
Example: ---
const div = document.createElement("div");
div.innerText = "Hello";
document.body.appendChild(div);

3.What is Event Bubbling and how does it work?
Answer:
--Event Bubbling = when an event occurs on a child, it propagates upward to its parents and then the document.

4.What is Event Delegation in JavaScript? Why is it useful?
Answer:
--Event Delegation = put one listener on a parent to handle events for child elements (using bubbling).
--Useful -> fewer listeners, better performance, works for dynamically added elements.

5.What is the difference between preventDefault() and stopPropagation() methods?
Answer:
--preventDefault() -> stops the element’s default action (e.g., link navigation, form submit).

--stopPropagation() -> stops the event from bubbling up to parent elements.
