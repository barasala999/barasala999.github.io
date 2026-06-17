window.showLetters = function () {

    const input = document.getElementById("nakshatraInput").value
        .trim()
        .toLowerCase();

    const data = {
        rohini: ["O", "Va", "Vi", "Vu"],
        ashvini: ["Chu", "Che", "Cho", "La"],
        bharani: ["Li", "Lu", "Le", "Lo"]
    };

    const resultBox = document.getElementById("resultBox");

    // normalize input further
    const key = input.replace(/\s+/g, "");

    if (data[key]) {
        resultBox.innerHTML =
            "<b>Starting Letters:</b><br>" + data[key].join(", ");
    } else {
        resultBox.innerHTML =
            "Nakshatra not found. Try: Rohini, Ashvini, Bharani";
    }
};