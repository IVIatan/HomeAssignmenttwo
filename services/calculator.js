document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("priceForm");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const siteType = form.elements["siteType"].value;
    const pages = parseInt(form.elements["pages"].value);
    const designElements = form.querySelectorAll('input[name="design"]');

    let design = "";
    designElements.forEach((el) => {
      if (el.checked) {
        design = el.value;
      }
    });

    if (!design) {
      resultDiv.innerHTML = "<p style='color: red;'>Please select design option.</p>";
      return;
    }

    let basePrice = 0;
    if (siteType === "business") basePrice = 1000;
    else if (siteType === "store") basePrice = 2000;
    else if (siteType === "blog") basePrice = 1500;

    const pageExtra = pages > 1 ? (pages - 1) * 200 : 0;
    const designPrice = design === "yes" ? 1000 : 0;
    const finalPrice = basePrice + pageExtra + designPrice;

    resultDiv.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Details</th>
            <th>Price (₪)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Site Type</td>
            <td>${siteType}</td>
            <td>${basePrice}</td>
          </tr>
          <tr>
            <td>Pages</td>
            <td>${pages}</td>
            <td>${pageExtra}</td>
          </tr>
          <tr>
            <td>Custom Design</td>
            <td>${design === "yes" ? "Yes" : "No"}</td>
            <td>${designPrice}</td>
          </tr>
          <tr>
            <td colspan="2"><strong>Total</strong></td>
            <td><strong>${finalPrice}</strong></td>
          </tr>
        </tbody>
      </table>
    `;
  });

  form.addEventListener("reset", function () {
    resultDiv.innerHTML = "";
  });
});
