document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const password = generateRandomPassword(6); // Generate a random password of 6 characters

    const userRow = document.createElement("tr");
    userRow.innerHTML = `
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${age}</td>
    <td>${email}</td>
    <td>${hashPassword(password)}</td>
  `;

    document.getElementById("userList").appendChild(userRow);
    document.getElementById("userForm").reset();

    alert(`User registered successfully! Password: ${password}`);
});

function generateRandomPassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }
    return password;
}

function hashPassword(password) {
    // Example: Using a simple hash function for demonstration purposes
    return password.split('').reverse().join('');
}
