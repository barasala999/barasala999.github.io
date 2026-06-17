window.handleForm = function (event) {
    event.preventDefault(); // 🔴 THIS STOPS REFRESH

    const value = document.getElementById("nakshatraInput").value;

    const data = {
        rohini: ["O", "Va", "Vi", "Vu"],
        ashvini: ["Chu", "Che", "Cho", "La"],
        bharani: ["Li", "Lu", "Le", "Lo"]
    };

    const resultBox = document.getElementById("resultBox");

    if (data[value]) {
        //document.getElementById("resultBox1").innerHTML = "";
		resultBox.innerHTML=
            "<b>Starting Letters:</b><br>" + data[value].join(", ");
    }else if(value=="select nakshatra"){
		resultBox.innerHTML="Please select a Nakshatra";
	}		
	else {
        resultBox.innerHTML = "Nakshatra not found.";
    }
};