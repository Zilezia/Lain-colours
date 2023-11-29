
function copyColour(inputId) {
    const inputElement = document.getElementById(inputId);

    // Select the text in the input element
    inputElement.select();

    // Copy the selected text
    document.execCommand("copy");

    // Deselect the text to avoid any unwanted visual effects
    window.getSelection().removeAllRanges();
  }