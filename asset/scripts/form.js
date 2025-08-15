document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("YDp6-AMEXCIjUCaUz"); // Your Public Key

    document.getElementById("contactForm").addEventListener("submit", function(e) {
        e.preventDefault();

        emailjs.sendForm("service_3tb9btz", "template_obwnmai", this)
        .then(() => {
            document.getElementById("status").innerText = "✅ Message sent successfully!";
            this.reset();
            setTimeout(() => {
                document.getElementById("status").innerText = "";
            }, 3000);
        })
        .catch(() => {
            document.getElementById("status").innerText = "❌ Failed to send message.";
        });
    });
});