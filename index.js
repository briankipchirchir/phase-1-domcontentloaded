// Your code goes here
// helpers.js

function changeTextOnLoad() {
    document.addEventListener('DOMContentLoaded', function() {
      const paragraph = document.querySelector('p');
      if (paragraph) {
        paragraph.textContent = "This is really cool!";
      }
    });
  }
  changeTextOnLoad();