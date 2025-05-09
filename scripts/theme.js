var data = {
    "theme": "light"
}

function changetheme() {

    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark")
        data.theme = "light"
        document.getElementById("changetheme").src = "assets/moon.png"
    } else {
        document.body.classList.add("dark")
        data.theme = "dark"
        document.getElementById("changetheme").src = "assets/sun.png"
    }

    save()

}

function load() {
    const getSave = localStorage.getItem("rapture-theme");
    try {
        if (getSave != null) {
            data = JSON.parse(getSave)

            if (data.theme == "dark") {
                document.getElementById("changetheme").src = "assets/sun.png"
            }

        }

    } catch (e) {
        console.log("data didn't load properly, throw error and show error overlay.")
    }
}

function save() {
    data = data
    localStorage.setItem("rapture-theme", JSON.stringify(data))
}

load()