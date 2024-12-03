document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const submitButton = document.getElementById("submit-button");
  const output = document.getElementById("data-output");

  submitButton.addEventListener("click", function (event) {
    event.preventDefault(); // Užkerta kelią formos numatytajam pateikimui

    // Surinkti visų laukų reikšmes
    const name = document.getElementById("name-field").value;
    const surname = document.getElementById("surname-field").value;
    const email = document.getElementById("email-field").value;
    const phone = document.getElementById("phone-field").value;
    const address = document.getElementById("address-field").value;

    const attribute1 = parseFloat(document.getElementById("attribute-1").value);
    const attribute2 = parseFloat(document.getElementById("attribute-2").value);
    const attribute3 = parseFloat(document.getElementById("attribute-3").value);
    const attribute4 = parseFloat(document.getElementById("attribute-4").value);
    const attribute5 = parseFloat(document.getElementById("attribute-5").value);

    // Skaičiuoti vidurkį
    const average = ((attribute1 + attribute2 + attribute3 + attribute4 + attribute5) / 5).toFixed(2);

    // Validacijos logika
    let errors = [];
    if (!name) errors.push("Įveskite vardą.");
    if (!surname) errors.push("Įveskite pavardę.");
    if (!email.includes("@") || !email.includes(".")) errors.push("Neteisingas el. pašto formatas. Pavyzdys: example@gmail.com");
    if (!/^\+?[0-9]{9,15}$/.test(phone)) errors.push("Neteisingas telefono numerio formatas.");
    if (address.length < 5) errors.push("Adresas turi būti bent 5 simbolių ilgio.");

    // Patikrinti požymių reikšmes
    [attribute1, attribute2, attribute3, attribute4, attribute5].forEach((attr, index) => {
      if (isNaN(attr)) errors.push(`Požymis ${index + 1} turi būti skaičius.`);
    });

    // Jei yra klaidų, rodyti pranešimą ir sustabdyti
    if (errors.length > 0) {
      alert("Rasta klaidų:\n" + errors.join("\n"));
      return; // Sustabdo tolimesnį kodą
    }

    // Sukurti objektą
    const userData = {
      name: name,
      surname: surname,
      email: email,
      phone: phone,
      address: address,
      attributes: [attribute1, attribute2, attribute3, attribute4, attribute5],
      average: average,
    };

    // Požymių vidurkio spalvos nustatymas
    let averageColor = "green";
    if (average < 5) {
      averageColor = "red";
    } else if (average >= 5 && average < 8) {
      averageColor = "orange";
    }

    // Atvaizduoti naršyklės konsolėje
    console.log(userData);

    // Atvaizduoti tinklalapyje su tinkama formatuote
    output.innerHTML = `
      <p><strong>Vardas:</strong> ${name}</p>
      <p><strong>Pavardė:</strong> ${surname}</p>
      <p><strong>El. paštas:</strong> ${email}</p>
      <p><strong>Telefonas:</strong> ${phone}</p>
      <p><strong>Adresas:</strong> ${address}</p>
      <p><strong>Požymiai:</strong> ${attribute1}, ${attribute2}, ${attribute3}, ${attribute4}, ${attribute5}</p>
      <p><strong>Vidurkis:</strong> <span style="color: ${averageColor};">${average}</span></p>
    `;

    // Išvalyti formą, jei reikia
    // form.reset(); // Pašalinkite šią eilutę, jei norite palikti duomenis formoje
  });
});
