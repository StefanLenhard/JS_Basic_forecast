const select = document.querySelector("select")
const para = document.querySelector("p")

select.addEventListener("change", setWeather)

function setWeather () {
    const choice = select.value;

    if (choice === "sunny") {
        para.textContent = "It is nice and sunny outside. Wear shorts! Go the beach and be happy!"
    } else if (choice = "rainy") {
        para.textContent = "Rain is falling outside. Take a coat and an umbrella"
    } else if (choice = "snowing") {
        para.textContent = "Snow is falling all around me! Build a snowman"
    } else if (choice = "overcast") {
        para.textContent = "It's Britain. Of course it's overcast. This is practically our sun. And it doesn't melt us."
    } else {
        para.textContent = ""
    }
}
