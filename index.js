const root = document.getElementById('root')
const p = document.createElement("p")
p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
p.style.margin = "auto"
p.style.padding = "10px"
p.style.borderRadius = "20px"
p.style.width = "600px"
p.style.border = "2px solid brown"


const ul = document.createElement("ul")
const intocode = document.createElement("a")
const google = document.createElement("a")
const instagram = document.createElement("a")

intocode.textContent = "intocode"
google.textContent = "google"
instagram.textContent = "instagram"

intocode.href = "#"
google.href = "#"
instagram.href = "#"



ul.style.display = "flex"
ul.style.justifyContent = "space-between"
ul.style.padding = "10px"
ul.style.margin = "auto"
ul.style.width = "500px"
ul.append(intocode, google, instagram)
root.append(p, ul)