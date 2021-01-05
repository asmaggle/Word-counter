function wordCounter() {
    var text = document.getElementById("inputString").value;
    
    var wordCount = 0;
    for (var i = 0; i <= text.length; i++) {
      if (text.charAt(i) == ' ') {
        wordCount++;
      }
    }console.log(wordCount+1);
    // output.innerHTML = wordCount;
    
  }