window.showLetters = function () {

    const value = document.getElementById("nakshatraInput").value.trim().toLowerCase();
console.log(value);
    const data = {
        rohini: ["O", "Va", "Vi", "Vu"],
        ashvini: ["Chu", "Che", "Cho", "La"],
        bharani: ["Li", "Lu", "Le", "Lo"]
    };

    const resultBox = document.getElementById("resultBox");

    if (data[value]) {
        resultBox.innerHTML =
            "<b>Starting Letters:</b><br>" + data[value].join(", ");
    } else {
        resultBox.innerHTML = "Nakshatra not found.";
    }
};