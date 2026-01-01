// DOM BASICS

// 1. What is the DOM and why does JavaScript need it? 

// DOM (Document Object Model) is a programming interface that represents HTML as objects. JavaScript needs it to read, change, add, or delete elements on a webpage dynamically.

// 2. How is the DOM different from the original HTML file? 

// HTML is static text. DOM is a live, object-based structure created by the browser from HTML and can change while the page is running.

// 3. Explain the DOM Tree using a real-life example. 

// Like a family tree:
// html = grandparent
// body = parent
// elements like div, p = children

// 4. Is the DOM synchronous or asynchronous? Why? 

// DOM is synchronous because changes happen immediately and block execution until completed.

// 5. What happens to the DOM when JavaScript modifies an element? 

// The DOM updates instantly and the browser re-renders the page if needed.

// DOM SELECTION

// 6. What does getElementById() return if the ID does not exist? 

// null 

// 7. Difference between getElementsByClassName() and querySelectorAll(). 

// querySelectorAll() // getting all  class and id in html file
// getElementByClassName() // getiing only class in html file

// 8. Why does getElementsByClassName() return a live collection? 

// Because it automatically updates when the DOM changes.

// 9. Predict the output: 
// const items = document.getElementsByTagName("p"); 
// console.log(items.length); // <p>

// 10. Which selector is faster: getElementById or querySelector? Why? 

// getElementById — direct lookup, no CSS parsing.

// 11. Predict the output: 
// document.querySelectorAll(".box").forEach(el => console.log(el));  // .box

// Logs each .box element to the console.

// 12. Can you use array methods directly on HTMLCollection? Why?

// No — it’s array-like, not an actual array.

// DOM MANIPULATION

// 13. How do you create an element and add text to it? 

// const p = document.createElement("p");
// p.textContent = "Hello";

// 14. What happens if you append the same element twice? 

// It moves, not duplicates — exists only once.

// 15. Difference between appendChild() and append(). 

// | appendChild  | append       |
// | ------------ | ------------ |
// | Only nodes   | Nodes + text |
// | Returns node | No return    |

// 16. Predict the result: 
// div.innerHTML = "<p>Hello</p>"; 
// div.textContent = "World"; 

// World

// 17. Why is innerHTML considered risky? 

// Can cause XSS attacks if user input is inserted.

// 18. Difference between textContent and innerText. 

// | textContent          | innerText    |
// | -------------------- | ------------ |
// | Faster               | Slower       |
// | Includes hidden text | Respects CSS |

// 19. What does classList.toggle() do? 

// Adds class if missing, removes if present.

// 20. Predict the output: 
// div.classList.add("a"); 
// div.classList.remove("a"); 
// console.log(div.className); 

// empty string

// 21. What is the difference between setAttribute() and direct property assignment? 

// setAttribute works on HTML
// property works on DOM object

// button.addEventListener("click", () => {
//   console.log("Clicked!");
// });

// EVENTS

// 22. What is an event listener? 

// An event listener is a function that waits for a specific event (like click, keydown, submit) to happen on an element and then runs code in response.

// 23. Why is addEventListener preferred over onclick? 

// addEventListener is better because:
// You can add multiple event handlers to the same element
// It separates HTML and JavaScript
// Supports event capturing and bubbling
// More flexible and modern
// onclick allows only one handler
// addEventListener allows many

// 24. What information does the event object contain? 

// The event object contains details about the event, such as:
// event.target → element that triggered the event
// event.type → type of event (click, input)
// event.clientX / clientY → mouse position
// event.key → key pressed (keyboard events)
// Methods like preventDefault() and stopPropagation()

// 25. Predict the output: 
// button.addEventListener("click", () => console.log("Button")); 
// div.addEventListener("click", () => console.log("Div")); 

// Button div

// 26. Explain Event Bubbling using a real-world example. 

// Event bubbling means an event starts from the target element and then moves upward through its parent elements.

// 27. How can you stop event bubbling? 

// event.stopPropagation();

// 28. What is Event Capturing? 

// Event capturing is the opposite of bubbling.
// The event starts from the outermost parent and moves down to the target.

// Order:
// document → body → div → button

// 29. What is the third argument in addEventListener used for? 

// element.addEventListener("click", handler, true); // capturing
// element.addEventListener("click", handler, false); // bubbling (default)

// 30. What problem does Event Delegation solve? 

// It avoids attaching listeners to many child elements.

// 31. Predict the output: 
// ul.addEventListener("click", e => console.log(e.target.tagName)); 

// LI

// FORMS AND INPUTS

// 32. What happens if preventDefault() is not used in form submission? 

// The form:
// Reloads the page
// Sends data to the server
// JavaScript validation may not run

// 33. Difference between submit event and click on submit button. 

// | Submit Event             | Click Event       |
// | ------------------------ | ----------------- |
// | Triggers form submission | Only button click |
// | Works via Enter key too  | Mouse click only  |

// 34. What is the input event used for? 

// It fires every time the input value changes (typing, paste, delete).

// 35. Predict the behavior: 
// input.addEventListener("input", () => console.log(input.value)); 

// Logs the input value on every keystroke.

// 36. What is client-side validation? 

// Validation done in the browser using JavaScript before sending data.

// 37. Why is client-side validation not enough? 

// Because users can:
// Disable JavaScript
// Modify requests

// 38. How do you validate required fields using JavaScript?

// if (input.value.trim() === "") {
//   alert("Field is required");
// }

// BROWSER APIs

// 39. What is Fetch API and why is it asynchronous? 

// Fetch API is used to make HTTP requests.
// It’s asynchronous because network requests take time and should not block the UI.

// 40. Predict the output order: 
// fetch(url).then(() => console.log("Done")); 
// console.log("Start"); 

// Start
// Done

// 41. Difference between localStorage and sessionStorage. 

// | localStorage       | sessionStorage       |
// | ------------------ | -------------------- |
// | Persistent         | Temporary            |
// | Shared across tabs | Tab-specific         |
// | No expiry          | Cleared on tab close |

// 42. Where is localStorage data stored? 

// In the browser on the user’s device (per domain).

// 43. What happens to sessionStorage when the tab is closed? 

// It is cleared automatically.

// 44. Why are cookies sent with every HTTP request? 

// Because they are designed for:
// Authentication
// Session tracking
// Browsers attach them automatically.

// 45. Difference between cookies and localStorage. 

// | Cookies            | localStorage         |
// | ------------------ | -------------------- |
// | Sent with requests | Not sent             |
// | Small (≈4KB)       | Large (≈5MB)         |
// | Can expire         | No expiry by default |

// 46. What permissions are required for Geolocation API? 

// User permission (explicit approval).

// 47. What happens if user denies geolocation permission? 

// The error callback runs, and location data is not available.

// 48. What is History API used for? 

// To manage browser history without page reloads:
// pushState()
// back()
// forward()
// Used in SPAs.

// 49. Predict what history.back() does. 

// Navigates to the previous page in browser history.

// 50. Why are Browser APIs important for modern web applications?

// They enable:
// Network requests
// Storage
// Location
// Navigation
// Offline support
