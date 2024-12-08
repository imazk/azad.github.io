document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
});

// function toggleCardContent(element) {
//     const content = element.nextElementSibling;
//     if (content.style.display === "none" || content.style.display === "") {
//         content.style.display = "block";
//     } else {
//         content.style.display = "none";
//     }
// }
