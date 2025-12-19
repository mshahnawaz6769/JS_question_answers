// REAL-WORLD SCENARIO QUESTIONS 

// 34. Why should configuration values usually be declared using const? 
// Ans: Configuration values represent fixed application settings (API URLs, feature flags, environment constants).

// 35. A bug appears only in production because of var. How could that happen? 
// Ans: var is function-scoped and hoisted, which can cause:
// Unexpected overwrites
// Shared variables across blocks
// Race conditions in async code
// In production:
// Code is often minified and bundled
// Multiple scripts may share scope
// Timing differences expose hoisting issues

// 36. Why is using var inside loops dangerous? 
// Ans: var does not have block scope, so all iterations share the same variable.
// This causes bugs in closures and async callbacks.

// 37. When should you intentionally use null instead of undefined? 
// Ans: Use null when you want to explicitly indicate “no value”.

// 38. Why does JavaScript allow such loose type conversions?
// Ans: -----------------------------------
