// Conversion rates
const VORI_TO_GRAM = 11.664;
const ANA_TO_GRAM = VORI_TO_GRAM / 16;
const ROTI_TO_GRAM = ANA_TO_GRAM / 6;
const POINT_TO_GRAM = ROTI_TO_GRAM / 10;

// Update Gold Price Per Gram if Price Per Vori is Changed
document.getElementById('goldPricePerVori').addEventListener('input', () => {
    const goldPricePerVori = parseFloat(document.getElementById('goldPricePerVori').value);
    const goldPricePerGram = goldPricePerVori / VORI_TO_GRAM;
    document.getElementById('goldPricePerGram').value = goldPricePerGram.toFixed(2);
});

// Update Gold Price Per Vori if Price Per Gram is Changed
document.getElementById('goldPricePerGram').addEventListener('input', () => {
    const goldPricePerGram = parseFloat(document.getElementById('goldPricePerGram').value);
    const goldPricePerVori = goldPricePerGram * VORI_TO_GRAM;
    document.getElementById('goldPricePerVori').value = goldPricePerVori.toFixed(2);
});

// Convert Vori, Ana, Roti, Point to Gram
function convertToGram() {
    const vori = parseFloat(document.getElementById('vori').value);
    const ana = parseFloat(document.getElementById('ana').value);
    const roti = parseFloat(document.getElementById('roti').value);
    const point = parseFloat(document.getElementById('point').value);
    const goldPrice = parseFloat(document.getElementById('goldPricePerGram').value);

    const totalGram = (vori * VORI_TO_GRAM) +
                      (ana * ANA_TO_GRAM) +
                      (roti * ROTI_TO_GRAM) +
                      (point * POINT_TO_GRAM);

    document.getElementById('gramResult').textContent = `${totalGram.toFixed(5)} Gram`;

    // Calculate and display the gold price
    const totalPrice = totalGram * goldPrice;
    document.getElementById('goldPriceResult').textContent = `Total Gold Price: ${totalPrice.toFixed(2)}`;
}

// Convert Gram to Vori, Ana, Roti, Point
function convertToVori() {
    let gram = parseFloat(document.getElementById('gram').value);
    const goldPrice = parseFloat(document.getElementById('goldPricePerGram').value);

    const vori = Math.floor(gram / VORI_TO_GRAM);
    gram %= VORI_TO_GRAM;

    const ana = Math.floor(gram / ANA_TO_GRAM);
    gram %= ANA_TO_GRAM;

    const roti = Math.floor(gram / ROTI_TO_GRAM);
    gram %= ROTI_TO_GRAM;

    const point = Math.round(gram / POINT_TO_GRAM);

    document.getElementById('voriResult').textContent = `Vori: ${vori}, Ana: ${ana}, Roti: ${roti}, Point: ${point}`;

    // Calculate and display the gold price
    const totalPrice = parseFloat(document.getElementById('gram').value) * goldPrice;
    document.getElementById('goldPriceResultVori').textContent = `Total Gold Price: ${totalPrice.toFixed(2)}`;
}
