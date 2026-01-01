// DOM BASICS

// 1. What is the DOM and why does JavaScript need it? 

// 2. How is the DOM different from the original HTML file? 

// 3. Explain the DOM Tree using a real-life example. 

// 4. Is the DOM synchronous or asynchronous? Why? 

// 5. What happens to the DOM when JavaScript modifies an element? 

// DOM SELECTION

// 6. What does getElementById() return if the ID does not exist? 

// 7. Difference between getElementsByClassName() and querySelectorAll(). 

// 8. Why does getElementsByClassName() return a live collection? 

// 9. Predict the output: 
// const items = document.getElementsByTagName("p"); 
// console.log(items.length); 

// 10. Which selector is faster: getElementById or querySelector? Why? 

// 11. Predict the output: 
// document.querySelectorAll(".box").forEach(el => console.log(el)); 

// 12. Can you use array methods directly on HTMLCollection? Why?

// DOM MANIPULATION

// 13. How do you create an element and add text to it? 

// 14. What happens if you append the same element twice? 

// 15. Difference between appendChild() and append(). 

// 16. Predict the result: 
// div.innerHTML = "<p>Hello</p>"; 
// div.textContent = "World"; 

// 17. Why is innerHTML considered risky? 

// 18. Difference between textContent and innerText. 

// 19. What does classList.toggle() do? 

// 20. Predict the output: 
// div.classList.add("a"); 
// div.classList.remove("a"); 
// console.log(div.className); 

// 21. What is the difference between setAttribute() and direct property assignment? 

// EVENTS

// 22. What is an event listener? 

// 23. Why is addEventListener preferred over onclick? 

// 24. What information does the event object contain? 

// 25. Predict the output: 
// button.addEventListener("click", () => console.log("Button")); 
// div.addEventListener("click", () => console.log("Div")); 

// 26. Explain Event Bubbling using a real-world example. 

// 27. How can you stop event bubbling? 

// 28. What is Event Capturing? 

// 29. What is the third argument in addEventListener used for? 

// 30. What problem does Event Delegation solve? 

// 31. Predict the output: 
// ul.addEventListener("click", e => console.log(e.target.tagName)); 

// FORMS AND INPUTS

// 32. What happens if preventDefault() is not used in form submission? 

// 33. Difference between submit event and click on submit button. 

// 34. What is the input event used for? 

// 35. Predict the behavior: 
// input.addEventListener("input", () => console.log(input.value)); 

// 36. What is client-side validation? 

// 37. Why is client-side validation not enough? 

// 38. How do you validate required fields using JavaScript?

// BROWSER APIs

// 39. What is Fetch API and why is it asynchronous? 

// 40. Predict the output order: 
// fetch(url).then(() => console.log("Done")); 
// console.log("Start"); 

// 41. Difference between localStorage and sessionStorage. 

// 42. Where is localStorage data stored? 

// 43. What happens to sessionStorage when the tab is closed? 

// 44. Why are cookies sent with every HTTP request? 

// 45. Difference between cookies and localStorage. 

// 46. What permissions are required for Geolocation API? 

// 47. What happens if user denies geolocation permission? 

// 48. What is History API used for? 

// 49. Predict what history.back() does. 

// 50. Why are Browser APIs important for modern web applications?
