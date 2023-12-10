document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("open");
  });
});

window.onload = function () {
  document.getElementById("contact__form").addEventListener("submit", SendMail);
  event.preventDefault();
};

function SendMail(event) {
  event.preventDefault();
  emailjs.init("XMtpuKwK5Tdzvz2Qd");
  var params = {
    from_name: document.getElementById("from_name").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_6fyu2jy", "template_nkurp2d", params)
    .then(function (res) {
      alert("Success");
    })
    .catch(function (err) {
      console.error("Error:", err);
    });
}
