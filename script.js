const USD = 5;
const EUR = 4;
const GBP = 3;

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

amount.addEventListener("input", () => {
    const hasCgaractersRegex = /\D+/g

    amount.value = amount.value.replace(hasCgaractersRegex, "")
})

form.onsubmit = () => {
    event.preventDefault()

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

function convertCurrency(amount, price, symbol){

    try {
        description.textContent = `${symbol} 1 = ${formatCurrancyBRL(price)}`;
        footer.classList.add("show-result")

        let total = amount * price
        total = formatCurrancyBRL(total).replace("R$", "")
        result.textContent = `${total} Reais`

    } 
        catch (error) {
        footer.classList.remove("show-result")
        console.log(error)

        alert("Não foi possivel converter. Tente novamente masi tarde.")
    }

        }

        function formatCurrancyBRL(value){

            return Number(value).toLocaleString("pt-BR",{
                style: "currency",
                currency: "BRL",
            })
        }