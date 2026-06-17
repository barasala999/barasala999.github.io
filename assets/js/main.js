window.showLetters = function () {

    const value = document.getElementById("nakshatraInput").value.trim().toLowerCase();

    const data = {
        rohini: ["O", "Va", "Vi", "Vu"],
        ashvini: ["Chu", "Che", "Cho", "La"],
        bharani: ["Li", "Lu", "Le", "Lo"]
    };

    const resultBox = document.getElementById("resultBox");

    resultBox.innerHTML =
        data[value]
            ? "<b>Starting Letters:</b><br>" + data[value].join(", ")
            : "Nakshatra not found.";
};