function sendMessage() {
    var input = document.getElementById("userInput");
    var message = input.value.trim();

    if (message === "") return;

    var chatBox = document.getElementById("chatBox");

    // User message
    var userMsg = document.createElement("p");
    userMsg.className = "user";
    userMsg.innerText = message;
    chatBox.appendChild(userMsg);

    // Bot response
    var botMsg = document.createElement("p");
    botMsg.className = "bot";

    var msg = message.toLowerCase();

    if (msg.includes("education")) {
        botMsg.innerText = "Education empowers women with knowledge, confidence, and independence.";
    } 
    else if (msg.includes("career") || msg.includes("job")) {
        botMsg.innerText = "Women can excel in any career with equal opportunities and support.";
    }
    else if (msg.includes("rights")) {
        botMsg.innerText = "Women have equal rights in education, employment, and decision-making.";
    }
    else if (msg.includes("health")) {
        botMsg.innerText = "Access to healthcare is essential for women’s physical and mental well-being.";
    }
    else if (msg.includes("motivation")) {
        botMsg.innerText = "Believe in yourself. Strong women shape the future 🌟";
    }
    else if (msg.includes("hello")) {
        botMsg.innerText = "Hello! How can I support women empowerment today?";
    }
    else {
        botMsg.innerText = "Women empowerment begins with awareness, equality, and confidence.";
    }

    chatBox.appendChild(botMsg);
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});