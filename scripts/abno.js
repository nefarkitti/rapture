const title = document.getElementById("title")
const tab = document.getElementById("tab")

const abnoname = document.getElementById("abnoname")
const abnoid = document.getElementById("abnoid")
const quip = document.getElementById("abnoquip")
const icon = document.getElementById("abnoicon")
const desc = document.getElementById("desc")

axios.get('jsons/abnormalities.json').then(res => {
    
    axios.get('jsons/ego.json').then(ego => {

        let jsonData = res.data // should be json by default
        let egogear = ego.data

        let windowIndex = window.location.search
        const urlParams = new URLSearchParams(windowIndex);
        
        let index = urlParams.get("id")
    
        if (index && index.length >= 1) {
            // id is valid
            var abnormality
            jsonData.forEach(abno => { // inefficient but who cares
    
                if (abno.id == index) {
    
                    console.log("found abnormality")
                    abnormality = abno
                    return
    
                }
    
            });
    
            if (abnormality) {
    
                console.log("loading abnormality info")
    
                title.innerHTML = abnormality.name + ` - Rapture Corporation`
                tab.innerHTML = abnormality.name
                icon.src = abnormality.icon
                abnoname.innerHTML = `${abnormality.name} <span class="abnoid">(${abnormality.id})</span>`
                quip.innerHTML = abnormality.quip
                desc.innerHTML = abnormality.desc
    
    
            }
        }

    })

}).catch(console.error)