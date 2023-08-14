document.getElementById('poll-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const selectedColor = document.querySelector('input[name="color"]:checked').value;
  const comment = document.getElementById('comment').value;
  
  // Save user response to localStorage
  const userResponse = { color: selectedColor, comment: comment };
  const allResponses = JSON.parse(localStorage.getItem('responses')) || [];
  allResponses.push(userResponse);
  localStorage.setItem('responses', JSON.stringify(allResponses));
  
  // Display results
  displayResults();
  
  alert(`Thank you for participating!\nHappy Independance Day!!!!\n\nSelected color: ${selectedColor}\nComment: ${comment}`);
});

function displayResults() {
  const allResponses = JSON.parse(localStorage.getItem('responses')) || [];
  const resultsContainer = document.getElementById('results');
  
  resultsContainer.innerHTML = '';
  
  allResponses.forEach((response, index) => {
    const responseDiv = document.createElement('div');
    responseDiv.classList.add('response');
    responseDiv.innerHTML = `<strong>Comment ${index + 1}:</strong><br>Color: ${response.color}<br>Comment: ${response.comment}`;
    resultsContainer.appendChild(responseDiv);
  });
}
