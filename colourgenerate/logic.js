const refreshbtn = document.querySelector(".refesh-btn")
const continer = document.querySelector(".containe")

const maxPaletteBox = 32;

const generatPalette = () => {

    continer.innerHTML = " ";

    for (let i = 0; i < maxPaletteBox; i++) {

        let rendomHex = Math.floor(Math.random() * 0xffffff).toString(16)
        rendomHex = `#${rendomHex.padStart(6, "0")}`
        console.log(rendomHex)

        const color = document.createElement("li")
        color.classList.add("color")
        color.innerHTML= `
                    <div class="reat-box" style="background: ${rendomHex}"></div>
                    <spna class="hex-value">${rendomHex}</spna>
        `;
        continer.appendChild(color)

    }


}
generatPalette()
refreshbtn.addEventListener("click", generatPalette)