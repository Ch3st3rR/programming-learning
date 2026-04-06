const buttons = document.querySelectorAll("#image-picker li")
const image = document.querySelector("#product-image"); 


buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e); 

        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected"); 
        });

        const button = e.currentTarget;

        const id = button.getAttribute("id"); 

        button.querySelector(".color").classList.add("selected"); 

        const colors = {
         green: "#394c38",
        silver: "#f1f2ed",
        golden: "#fae7cf",
        grafite: "#54524f",
         blue: "#a7c1b9"
        };

        document.body.style.backgroundColor = colors[id];

        image.classList.add("changing"); 
        image.setAttribute("src", `img/iphone_${id}.png`);

        setTimeout(() => {
            image.classList.toggle("changing"); 
        }, 200); 
    });
}); 
