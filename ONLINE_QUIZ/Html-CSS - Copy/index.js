/**
 * File for setting up the environment. Please do not modify.
 */

// run json server on localhost:3000
// run json server on localhost:3000
// run json server on localhost:3000
// run json server on localhost:3000
// run json server on localhost:3000

import "./css/style.css"
import "./js/generateQuestionId"
import "./js/script"

if (module.hot) {
  module.hot.accept();
}

console.log('DOM Loaded');
document.getElementById("current-question-id").value =
Math.floor(Math.random() * 7);