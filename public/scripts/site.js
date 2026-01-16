document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let reason = document.getElementById("reason").value;

  let response = await fetch("/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      email,
      reason
    })
  });

  let data = await response.json();
  console.log(data);
  alert(data.message);
});