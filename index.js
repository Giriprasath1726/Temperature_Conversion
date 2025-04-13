const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
const themeToggle = document.getElementById("themeToggle");
const modeLabel = document.getElementById("modeLabel");
function convert(){
    let temp = Number(textBox.value);
    if(toFahrenheit.checked){
        temp = temp * 9 / 5 + 32;
        result.textContent = `${temp.toFixed(1)}°F`;
    }
    else if(toCelsius.checked){
        temp = (temp - 32) * 5 / 9;
        result.textContent = `${temp.toFixed(1)}°C`;
    }
    else{
        result.textContent = "Select a unit";
    }
    result.classList.add("show");
}
textBox.addEventListener("input", () => {
    if (toCelsius.checked || toFahrenheit.checked) convert();
});
themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    modeLabel.textContent = themeToggle.checked ? "Dark Mode" : "Light Mode";
});
