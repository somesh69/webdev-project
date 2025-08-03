function showSection(id) {
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Contact Form Validation with SweetAlert
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  let name = document.getElementById('fullName').value.trim();
  let email = document.getElementById('email').value.trim();
  let phone = document.getElementById('phone').value.trim();

  if (!name || !email || !phone) {
    Swal.fire('Error', 'All fields are required!', 'error');
    return;
  }

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    Swal.fire('Invalid Email', 'Please enter a valid email address.', 'warning');
    return;
  }

  Swal.fire('Success!', 'Your form has been submitted!', 'success');
  this.reset();
});

// Add Task
function addTask() {
  let taskInput = document.getElementById('taskInput');
  let task = taskInput.value.trim();
  if (!task) return;

  let li = document.createElement('li');
  li.textContent = task;

  let btn = document.createElement('button');
  btn.textContent = '❌';
  btn.onclick = () => li.remove();

  li.appendChild(btn);
  document.getElementById('taskList').appendChild(li);
  taskInput.value = '';
}

// Add Image
function addImage() {
  let url = document.getElementById('imageUrl').value.trim();
  if (!url) return;

  let img = document.createElement('img');
  img.src = url;
  img.alt = "User Image";
  img.onclick = () => img.remove();

  document.getElementById('imageList').appendChild(img);
  document.getElementById('imageUrl').value = '';
}
