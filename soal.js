const jawaban = {
    nomor1: {
      variasi1: "ibu sedang memasak di dapur.",
      variasi2: "ibu",
      variasi3: "sedang",
      variasi4: "memasak",
      variasi5: "di dapur.",
      variasi6: "didapur.",
      variasi7: "ibu sedang",
      variasi8: "memasak di dapur",
      variasi9: "ibu sedang memasak",
    },

    nomor2: {
      variasi1: "gina berangkat sekolah menggunakan sepeda.",
      variasi2: "gina",
      variasi3: "berangkat",
      variasi4: "sekolah",
      variasi5: "menggunakan",
      variasi6: "sepeda.",
      variasi7: "gina berangkat",
      variasi8: "sekolah menggunakan sepeda.",
      variasi9: "gina berangkat sekolah",
    },
    nomor3: {
      variasi1: "pelangi berwarna merah, kuning, hijau.",
      variasi2: "pelangi",
      variasi3: "berwarna",
      variasi4: "merah,",
      variasi5: "kuning,",
      variasi6: "hijau.",
      variasi7: "pelangi berwarna",
      variasi8: "merah, kuning, hijau.",
      variasi9: "pelangi berwarna merah,",
    },
    nomor4: {
      variasi1: "lihat kebunku penuh dengan bunga.",
      variasi2: "lihat",
      variasi3: "kebunku",
      variasi4: "penuh",
      variasi5: "dengan",
      variasi6: "bunga.",
      variasi7: "lihat kebunku",
      variasi8: "penuh dengan bunga.",
      variasi9: "lihat kebunku penuh",
    },
    nomor5: {
      variasi1: "minumannya ada teh, kopi, jus.",
      variasi2: "minumannya",
      variasi3: "ada",
      variasi4: "teh",
      variasi5: "kopi",
      variasi6: "jus.",
      variasi7: "minumannya ada",
      variasi8: "teh, kopi, jus.",
      variasi9: "minumannya ada teh,",
    }
  }

  let score1 = 0
  let score2 = 0
  let score3 = 0
  let score4 = 0
  let score5 = 0

  const coba = () => {
    const jwban1 = document.getElementById('jwb1').value
    const jwban2 = document.getElementById('jwb2').value
    const jwban3 = document.getElementById('jwb3').value
    const jwban4 = document.getElementById('jwb4').value
    const jwban5 = document.getElementById('jwb5').value

    const array = [jwban1, jwban2, jwban3, jwban4, jwban5]

    const lowerCase = array.map(newArray => {
      return newArray.toLowerCase()
    })

    const jwbFinal1 = lowerCase[0]
    const jwbFinal2 = lowerCase[1]
    const jwbFinal3 = lowerCase[2]
    const jwbFinal4 = lowerCase[3]
    const jwbFinal5 = lowerCase[4]

    let cek1 = Object.values(jawaban.nomor1).includes(jwbFinal1)
    let cek2 = Object.values(jawaban.nomor2).includes(jwbFinal2)
    let cek3 = Object.values(jawaban.nomor3).includes(jwbFinal3)
    let cek4 = Object.values(jawaban.nomor4).includes(jwbFinal4)
    let cek5 = Object.values(jawaban.nomor5).includes(jwbFinal5)

    if (cek1) {
      const splitKata1 = jwbFinal1.split(" ")
      const jmlKata1 = splitKata1.length

      if (jmlKata1 == 1) {
        score1 += 20
      } else if (jmlKata1 == 2) {
        score1 += 40
      } else if (jmlKata1 == 3) {
        score1 += 60
      } else if (jmlKata1 == 4) {
        score1 += 80
      } else if (jmlKata1 == 5) {
        score1 += 100
      }

    } else {
      score1 = 0
    }

    if (cek2) {
      const splitKata2 = jwbFinal2.split(" ")
      const jmlKata2 = splitKata2.length

      if (jmlKata2 == 1) {
        score2 += 20
      } else if (jmlKata2 == 2) {
        score2 += 40
      } else if (jmlKata2 == 3) {
        score2 += 60
      } else if (jmlKata2 == 4) {
        score2 += 80
      } else if (jmlKata2 == 5) {
        score2 += 100
      }

    } else {
      score2 = 0
    }
    if (cek3) {
      const splitKata3 = jwbFinal3.split(" ")
      const jmlKata3 = splitKata3.length

      if (jmlKata3 == 1) {
        score3 += 20
      } else if (jmlKata3 == 2) {
        score3 += 40
      } else if (jmlKata3 == 3) {
        score3 += 60
      } else if (jmlKata3 == 4) {
        score3 += 80
      } else if (jmlKata3 == 5) {
        score3 += 100
      }

    } else {
      score3 = 0
    }
    if (cek4) {
      const splitKata4 = jwbFinal4.split(" ")
      const jmlKata4 = splitKata4.length

      if (jmlKata4 == 1) {
        score4 += 20
      } else if (jmlKata4 == 2) {
        score4 += 40
      } else if (jmlKata4 == 3) {
        score4 += 60
      } else if (jmlKata4 == 4) {
        score4 += 80
      } else if (jmlKata4 == 5) {
        score4 += 100
      }

    } else {
      score4 = 0
    }
    if (cek5) {
      const splitKata5 = jwbFinal5.split(" ")
      const jmlKata5 = splitKata5.length

      if (jmlKata5 == 1) {
        score5 += 20
      } else if (jmlKata5 == 2) {
        score5 += 40
      } else if (jmlKata5 == 3) {
        score5 += 60
      } else if (jmlKata5 == 4) {
        score5 += 80
      } else if (jmlKata5 == 5) {
        score5 += 100
      }

    } else {
      score5 = 0
    }

    const total = (score1 + score2 + score3 + score4 + score5) / 5

    alert(`Skor Anda : ${total}`)

  }