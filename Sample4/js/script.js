const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`)
        .join('')
})

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(email === "admin@admin.com" && password === "admin"){
        window.location.href = "pages/dashboard.html";
    }
    else{
        alert("Please enter a valid email or password. Try again.");
    }
})