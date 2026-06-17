<script>
function showLetters() {
    const value = document.getElementById("nakshatraInput").value.trim();

    const data = {
        rohini: ["O", "Va", "Vi", "Vu"],
        ashvini: ["Chu", "Che", "Cho", "La"],
        bharani: ["Li", "Lu", "Le", "Lo"]
    };

    const resultBox = document.getElementById("resultBox");

    const key = value.toLowerCase();

    if (data[key]) {
        resultBox.innerHTML =
            "<b>Starting Letters:</b><br>" + data[key].join(", ");
    } else {
        resultBox.innerHTML =
            "Nakshatra not found. Try Rohini, Ashvini, Bharani.";
    }
}
</script>