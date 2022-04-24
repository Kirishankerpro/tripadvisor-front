const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("Page écouté");

  $.querySelector(".connect").addEventListener("click", () => {
    console.log("clique effectué sur le bouton connectez-vous");
    $.querySelector(".form-display-none").classList.toggle("form-all");
  });

  $.querySelector("#contact-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = {
      firstname: $.querySelector("#firstname").value,
      lastname: $.querySelector("#lastname").value,
      email: $.querySelector("#email").value,
      object: $.querySelector("#object").value,
      message: $.querySelector("#message").value,
    };

    console.log({ message: data });

    const response = await axios.post(
      "https://tripadvisor-form-server.herokuapp.com/form",
      data
    );

    console.log(response.data);
    alert("Demande envoyée avec succès ✅ ");
  });
});
