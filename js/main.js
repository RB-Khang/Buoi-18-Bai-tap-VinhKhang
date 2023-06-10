var btnNhap = document.getElementById('btn__input')
var btnNhap2 = document.getElementById('btn__input2')
var btnReset = document.getElementById('btn__reset')
var myArray = [];
var myArray2 = []




btnReset.onclick = function () {
    myArray = [];
    document.querySelector('#array').innerHTML = ' '
}


btnNhap.onclick = function () {
    var arrayInput = +document.querySelector('#number__input').value;
    if (isNaN(arrayInput) || Number.isInteger(arrayInput) !== true) {
        alert('Nhập số nguyên nha a iu');
    } else {
        myArray.push(arrayInput);
        document.querySelector('#array').innerHTML = myArray;
    }

}

btnNhap2.onclick = function () {
    var arrayInput2 = +document.querySelector('#number__input2').value;
    if (isNaN(arrayInput2)) {
        alert('Nhập số thực nha a iu');
    } else {
        myArray2.push(arrayInput2);
        document.querySelector('#array2').innerHTML = myArray2;
    }

}

function tinhTong() {
    var sum1 = 0;
    for (var e = 0; e < myArray.length; e++) {
        if (myArray[e] >= 0) {
            sum1 += myArray[e];
        }
    }
    return sum1;
}

function demSoDuong() {
    var sum2 = 0;
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] >= 0) {
            sum2 += 1;
        }
    }
    return sum2;
}
function timMin() {
    var min = Infinity;
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] < min) {
            min = myArray[i];
        }
    }
    if (min == Infinity) {
        return 'Không có số nhỏ nhất - mảng rỗng'
    }
    return min;
}
function timMinDuong() {
    var minDuong = Infinity;
    for (var i = 0; i < myArray.length; i++) {
        if (0 <= myArray[i] && myArray[i] < minDuong) {
            minDuong = myArray[i];
        }
    }
    if (minDuong == Infinity) {
        return 'Mảng không có số dương'
    }
    return minDuong;
}
function lastEven() {
    var lastEven = Infinity;
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] % 2 === 0) {
            lastEven = myArray[i];
            console.log(lastEven)
        }
    }
    if (lastEven == Infinity) {
        return '-1'
    }
    return lastEven;
}
function swap() {
    var temp = 0;
    var poss1 = +document.getElementById('bt5__input1').value;
    var poss2 = +document.getElementById('bt5__input2').value;
    if (isNaN(poss1) || isNaN(poss2) || 0 > poss1 || 0 > poss2 || poss1 > myArray.length || poss2 > myArray.length) {
        alert('Nhập đúng index đi a iu')
    }
    var newArray =[...myArray];
    temp = newArray[poss1];
    newArray[poss1] = newArray[poss2];
    newArray[poss2] = temp;
    return newArray
}
function soNguyento(n) {
    if (n < 2) {
        return false;
    }
    else if (n === 2) {
        return true;
    }
    else {
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}





function timSnt() {
    var temp1 = 0;
    var isFlash = false;
    for (var i = 0; i < myArray.length; i++) {
        if (soNguyento(myArray[i])) {
            temp1 += myArray[i];
            isFlash = true;
            break
        }
    }
    return isFlash ? temp1 : '-1';
}


function demSoNguyen() {
    var count = 0
    for (var i = 0; i < myArray2.length; i++) {
        if (Number.isInteger(myArray2[i]) === true) {
            count += 1
        }
    }
    return count
}

function demAmDuong() {
    var soAm = 0;
    var soDuong = 0;
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] < 0) {
            soAm += 1;
        } else {
            soDuong += 1
        }
    }
    if (soAm<soDuong){
        return 'Số số âm là: ' + soAm + '; Số số dương là: '+ soDuong + '; Nên số số âm ít hơn số số dương'
    }else 
    if (soAm>soDuong){
        return 'Số số âm là: ' + soAm + '; Số số dương là: '+ soDuong + '; Nên số số âm nhiều hơn số số dương'
    } else return 'Số số âm bằng số số dương và bằng: ' +soAm
}






var btn1 = document.getElementById('btn1');
btn1.onclick = function () {
    document.getElementById('kq1').innerHTML = 'Tổng các số dương trong mảng là: ' + tinhTong();
}

var btn2 = document.getElementById('btn2');
btn2.onclick = function () {
    document.getElementById('kq2').innerHTML = 'Số các số dương trong mảng là: ' + demSoDuong();
}

var btn3 = document.getElementById('btn3');
btn3.onclick = function () {
    document.getElementById('kq3').innerHTML = 'Số nhỏ nhất trong mảng là: ' + timMin();
}

var btn4 = document.getElementById('btn4');
btn4.onclick = function () {
    document.getElementById('kq4').innerHTML = 'Số dương nhỏ nhất trong mảng là: ' + timMinDuong();
}

var btn5 = document.getElementById('btn5');
btn5.onclick = function () {
    document.getElementById('kq5').innerHTML = 'Số chẵn cuối cùng trong mảng là: ' + lastEven() + ' tại index:' + myArray.lastIndexOf(lastEven());
}

var btn6 = document.getElementById('btn6');
btn6.onclick = function () {
    document.getElementById('kq6').innerHTML = 'Mảng sau khi hoán đổi vị trí là: [' + swap() + ']'
}

var btn7 = document.getElementById('btn7');
btn7.onclick = function () {
    
    var sortedArray = [...myArray]
    document.getElementById('kq7').innerHTML = 'Mảng sau sắp xếp là: [' + sortedArray.sort((a, b) => a - b) + ']'

}

var btn8 = document.getElementById('btn8');
btn8.onclick = function () {
    document.getElementById('kq8').innerHTML = timSnt();
}

var btn9 = document.getElementById('btn9');
btn9.onclick = function () {
    document.getElementById('kq9').innerHTML = 'Số số nguyên trong mảng là: ' + demSoNguyen()

}


var btn10 = document.getElementById('btn10');
btn10.onclick = function () {
    document.getElementById('kq10').innerHTML = demAmDuong();


}








// toggle bt__content
var open = document.querySelectorAll('.bt__title i')
for (i = 0; i < open.length; i++) {
    const openBtn = open[i];
    const answerTab = document.querySelectorAll('.bt__content')[i];
    openBtn.onclick = function () {
        answerTab.classList.toggle('none')
    }
}