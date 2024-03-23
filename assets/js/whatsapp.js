document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".show-chat").addEventListener("click", function() {
    var whatsappChat = document.getElementById("whatsapp-chat");
    if (whatsappChat.style.display === "block")
      whatsappChat.classList.remove("washow");
    else
      whatsappChat.classList.add("washow");
  });

  document.querySelector(".close-chat").addEventListener("click", function() {
    document.getElementById("whatsapp-chat").classList.remove("washow");
  });

  document.getElementById("send").addEventListener("click", function() {
    var chatInput = document.getElementById("chat-input");
    if (chatInput.value !== "") {
      var phoneNumber = "628561575475"; // Assuming this is the default number
      var message = chatInput.value;
      var whatsappUrl = "https://web.whatsapp.com/send";
      var phoneParam = "?phone=" + phoneNumber;
      var textParam = "&text=" + message;
      
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        whatsappUrl = "whatsapp://send";

      var finalUrl = whatsappUrl + phoneParam + textParam;
      window.open(finalUrl, "_blank");
    }
  });
});
