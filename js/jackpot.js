function jackpot() {
    var randomNumbers = [];// mang chua 6 so ngau nhien
    var ticketNumbers = [];// mang chua 6 so nguoi dung mua ve
// tao ngau nhien 6 so tu 0->45
    while (randomNumbers.length < 6) {
        var r = Math.random();
        r = r * 46;// muon co gia tri 45 phai nhan voi 46
        r = parseInt(r);
        if (!randomNumbers.includes(r)) {
            randomNumbers.push(r);
        }
    }


// yeu cau nhap 6 so khac nhau tu 0->45
    while (ticketNumbers.length < 6) {
        var n = prompt("Nhap so tu 0->45:");
        n = parseInt(n);
        if (!isNaN(n) && !ticketNumbers.includes(n) && n >= 0 && n <= 45) {
            ticketNumbers.push(n);
        }
    }

    var dem = 0;

    for (var i = 0; i < randomNumbers.length; i++) {
        if (ticketNumbers.includes(randomNumbers[i])) {
            dem++;
        }
    }
// setTimeout(function () {
//     switch (dem) {
//         case 6: alert("Chúc mừng, bạn đã trúng 100 tỷ");break;
//         case 5: alert("Chúc mừng, bạn đã trúng 10 triệu");break;
//         case 4: alert("Chúc mừng, bạn đã trúng 300.000");break;
//         case 3: alert("Chúc mừng, bạn đã trúng 50.000");break;
//         default: alert("Chúc may mắn lần sau!");
//     }
// },5000);
    var x = 0;
    var xyz = setInterval(function () {
        switch (dem) {
            case 6:
                alert("Chúc mừng, bạn đã trúng 100 tỷ");
                break;
            case 5:
                alert("Chúc mừng, bạn đã trúng 10 triệu");
                break;
            case 4:
                alert("Chúc mừng, bạn đã trúng 300.000");
                break;
            case 3:
                alert("Chúc mừng, bạn đã trúng 50.000");
                break;
            default:
                alert("Chúc may mắn lần sau!");
        }
        x++;
        if (x == 3) {
            clearInterval(xyz);
        }
    }, 1000);
}