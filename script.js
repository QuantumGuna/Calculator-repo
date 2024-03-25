document.addEventListener('DOMContentLoaded', function () {
    let input = document.getElementById('inputBox');
    let buttons = document.querySelectorAll('button');
    let string = "";
  
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        handleButtonPress(e.target.innerHTML);
      })
    });
  
    function handleButtonPress(value) {
      if (value === '=') {
        evaluateExpression();
      } else if (value === 'AC') {
        clearInput();
      } else if (value === 'DEL') {
        deleteLastCharacter();
      } else {
        appendToExpression(value);
      }
    }
  
    function evaluateExpression() {
      try {
        string = eval(string);
        input.value = string;
        string = ""; // Reset string after successful evaluation
      } catch (error) {
        console.error(error); // Log any errors to the console
        input.value = 'Error';
      }
    }
  
    function clearInput() {
      string = "";
      input.value = string;
    }
  
    function deleteLastCharacter() {
      string = string.slice(0, -1);
      input.value = string;
    }
  
    function appendToExpression(value) {
      string += value;
      input.value = string;
    }
  
    // Add keydown event listener to the document
    document.addEventListener('keydown', function(event) {
      const key = event.key;
      if (key === 'Enter') {
        evaluateExpression();
      } else if (/[\d+\-*\/=\n\.]/.test(key)) {
        handleButtonPress(key);
      } else if (key === 'Backspace') {
        deleteLastCharacter();
      } else if (key === 'Escape') {
        clearInput();
      }
    });
  });
  