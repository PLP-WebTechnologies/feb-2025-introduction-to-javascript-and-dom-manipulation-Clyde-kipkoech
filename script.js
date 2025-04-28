// Change text content
document.getElementById('change-text-btn').addEventListener('click', function() {
  document.getElementById('description').textContent = 'You changed the text!';
});

// Modify CSS style
document.getElementById('change-style-btn').addEventListener('click', function() {
  document.body.style.backgroundColor = '#f0f8ff';
  document.getElementById('main-title').style.color = 'teal';
});

// Add a new element
document.getElementById('add-element-btn').addEventListener('click', function() {
  const newElement = document.createElement('p');
  newElement.textContent = 'A new paragraph was added!';
  newElement.id = 'new-paragraph'; 
  document.getElementById('element-container').appendChild(newElement);
});

// Remove the newly added element
document.getElementById('remove-element-btn').addEventListener('click', function() {
  const element = document.getElementById('new-paragraph');
  if (element) {
    element.remove();
  } else {
    alert('No element to remove!');
  }
});
