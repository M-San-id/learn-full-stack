function komputer() {
    const pilihan = Math.floor(Math.random() * 4)
    if(pilihan == 0) {
        return "batu"
    } else if(pilihan == 1) {
        return "gunting"
    } else {
        return "kertas"
    }
}

function manusia() {
    let pilihan = prompt("masukan pilihan (batu, gunting, kertas): ")
    return pilihan.toLowerCase()
}

let skorManusia = 0
let skorKomputer = 0
function main(pilihanManusia, pilihanKomputer){
    
    if(pilihanManusia === pilihanKomputer) {
        console.log(`seri komputer mimilih: ${pilihanKomputer} dan kamu ${pilihanManusia}`);
    } else if ((pilihanManusia === "batu" && pilihanKomputer === "gunting") || (pilihanManusia === "gunting" && pilihanKomputer === "kertas") || (pilihanManusia === "kertas" && pilihanKomputer === "batu")) {
        skorManusia++
        console.log(`kamu menang! komputer: ${pilihanKomputer} vs kamu: ${pilihanManusia}`)        
    } else {
        skorKomputer++
        console.log(`kamu kalah!? komputer: ${pilihanKomputer} vs kamu: ${pilihanManusia}`)        
    }
    
    console.log(`Skor: kamu ${skorManusia} vs ${skorKomputer} komputer`)
}



for (let i = 1; i <= 5; i++) {
    console.log(`Ronde ke: ${i}`)
    const getKomputer = komputer()
    const getManusia = manusia()
    main(getManusia, getKomputer)
}

console.log("===hasil===")
if(skorKomputer > skorManusia) {
    console.log(`Komputer menang! dengan skor: ${skorKomputer}`)
} else if(skorManusia > skorKomputer) {
    console.log(`Kamu menang! dengan skor: ${skorManusia}`)
} else {
    console.log(`hasilnya seri! kamu: ${skorManusia} vs Komputer ${skorKomputer}`)
}
