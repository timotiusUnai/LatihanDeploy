// console.log(1+2)
// alert("sukses belajar")
// prompt("masukkan umur anda")

// let nilai = 80
// let perilaku = "baik"

// let prestasimurid = nilai > 70 ? "prestasi" : "kurang prestasi"
// console.log(prestasimurid)

// console.log(nilai < 70 ? "kurang prestasi" : "prestasi")
 
// if(nilai<60 && perilaku !== "baik"){
//     console.log("kurang prestasi")
// } else if (nilai <= 70){
//     console.log("biasa")
// } else {
//     console.log("prestasi")
// }

// switch (perilaku){
//     case "Kurang baik" :
//         console.log("kurang prestasi")
//         break
//     case "baik" :
//         console.log("baik")
//         break
//     default :
//         console.log("error")    
// }


// ---------------------------------
// let mahasiswa = [70,80,90,19]

// mahasiswa.push(99)
// mahasiswa.pop()

// mahasiswa.unshift(65)
// mahasiswa.shift

// console.log(mahasiswa)

// ------------------------------------
// for(var i = 0; i < 10; i++){
//     console.log("Nama" + i)
// }

// let mahasiswa = ["May", "Agus", "Doni"]
// let nilai = [70,80,90]

// for(var i = 0; i < mahasiswa.length; i++) {
//     console.log(mahasiswa[i] + " " + nilai[i])
// }

// for(nama of mahasiswa){
//     console.log(nama)
// }

//--------------- objek

// let kalkulator = {
//     nama: "Kalkulator A",
//     jenis: "Jadul",
//     penambahan: function(a,b) {return a+b},
//     pengurangan: function(a,b) {return a-b}
// }

// console.log(kalkulator.pengurangan(1,5))

// let kulkas ={
//     nama: "Kulkas A",
//     pendingin : {
//         nama: "Pendingin A",
//         dinginin: function() {console.log("dinginnnnn...")}
//     }
// }

// console.log(kulkas.pendingin.nama)

// ------------------- DOM --> document objek model

// document.addEventListener('DOMContentLoaded', () => {
//     let p = document.querySelector("p")

//     // console.log(p.classList.remove("pindah"))  // Should log the input element

//     let button = document.querySelector("button")
//     let input = document.querySelector("input")

//     button.addEventListener('click', function() {
//         let isi = input.value
//         p.innerHTML = isi
//     })
//     // -------------------------------------------------
//     let clickhandler = function() {
//         let isi = input.value
//         p.innerHTML = isi
//     }

//     button.addEventListener('click', clickhandler)
//     //--------------------------------------------------
//     input.addEventListener('input', clickhandler)
// });

// ------------------------------jquery dom

$(document).ready(function (){
    let h2 = $('h2')
    h2.html("<b>ini hasil h2.html</b>")
    console.log(h2.text("Selamat datang"))
    h2.append('<i> Pelanggan</i>')
    h2.prepend('<i>Hello </i>')
    h2.after('<i>hellooo</i>')
    h2.before('<i>beforee</i>')
    // let input = $('input')
    // console.log(input.val(""))
    // h2.empty()
    // h2.remove()
    // console.log($('h2').html("tes h2"))

    // h2.addClass('biru')
    // h2.removeClass('border')
    let style = {
        color: 'salmon',
        fontSize: '100px'
    }
    // h2.css(style)

    let button = $('button')
    let input = $('input')
    let p = $('p')

    // button.on('click', function(){
    //     console.log(input.val())
    // })

    // button.click(function(){
    //     console.log(input.val())
    // })

    button.on('click', function() {
        p.toggleClass('biru')
        // p.toggle(2000)
    })
})

// ------------------------