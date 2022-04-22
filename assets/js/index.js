const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("Page écouté");

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

    const response = await axios.post("http://localhost:3000/form", data);

    console.log(response.data);
    alert("Demande envoyée");
  });
});
