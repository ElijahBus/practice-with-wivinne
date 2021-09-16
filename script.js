const submitBtn = document.getElementById('submit');

// Add click event on submit button
submitBtn.addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const pawword = document.getElementById('password').value;

    // Get the users-list container
    const usersListContainer = document.getElementById('users-list');
    
    // Build the user list item
    const userListItem = document.createElement('li');
    userListItem.classList.add('user-name');
    userListItem.innerHTML = username;
    usersListContainer.appendChild(userListItem);
}) 
