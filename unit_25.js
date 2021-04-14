// Task 1 ============================================

function t1() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myfunc(this.responseText);
        }
    }
    xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=1",true);
    xhttp.send();
   function myfunc(data) {
       document.querySelector('.out-1').innerHTML = data;
       console.log(data);
   }
}
document.querySelector('.b-1').addEventListener('click',t1);


// Task 2 ============================================

function t2() {
    let xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myfunc2(this.responseText);
        }
    }
    xhttp2.open("GET", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=2&name=Vitalii",true);
    xhttp2.send();
    function myfunc2(data) {
        document.querySelector('.out-2').innerHTML = data;
        console.log(data);
    }

}
document.querySelector('.b-2').addEventListener('click',t2);


// Task 3 ============================================

function t3() {
    let xhttp3 = new XMLHttpRequest();
    xhttp3.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myfunc3(this.responseText);
        }
    }
    xhttp3.open("GET", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=3&num1=30&num2=8",true);
    xhttp3.send();
    function myfunc3(data) {
        document.querySelector('.out-3').innerHTML = data;
        console.log(data);
    }
}
document.querySelector('.b-3').onclick = t3;



// Task 4 ============================================


function t4() {
    let xhttp4 = new XMLHttpRequest();
    xhttp4.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myfunc4(this.responseText);
        }
    }
    xhttp4.open("GET", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=4&num1=30&num2=80",true);
    xhttp4.send();
    function myfunc4(data) {
        document.querySelector('.out-4').innerHTML = data;
        console.log(data);
    }

}
document.querySelector('.b-4').onclick = t4;


// Task 5 ============================================

function t5() {
    let xhttp5 = new XMLHttpRequest();
    xhttp5.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myfunc5(this.responseText);
        }
    }
    xhttp5.open("GET", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=5",true);
    xhttp5.send();
    function myfunc5(data) {
        document.querySelector('.out-5').innerHTML = data;
        console.log(data);
    }
}
document.querySelector('.b-5').onclick = t5;

// Task 6 ============================================

function t6() {
    let xhttp6 = new XMLHttpRequest();
    xhttp6.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myfunc6(this.responseText);
        }
    }
    xhttp6.open("GET", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=6&num1=90&num2=45",true);
    xhttp6.send();
    function myfunc6(data) {
        document.querySelector('.out-6').innerHTML = data;
        console.log(data);
    }
}

document.querySelector('.b-6').onclick = t6;


// Task 7 ============================================

function t7() {
    let xhttp7 = new XMLHttpRequest();
    xhttp7.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myfunc7(this.responseText);
        }
    }
    xhttp7.open("GET", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=7",true);
    xhttp7.send();
    function myfunc7(data) {
        document.querySelector('.out-7').innerHTML = `<img src="${data}" style="width: 200px" height="200px">`;
        console.log(data);
    }
}
document.querySelector('.b-7').onclick = t7;



// Task 8 ============================================

function t8() {
    let xhttp8 = new XMLHttpRequest();
    xhttp8.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myfunc8(this.responseText);
        }
    }
    xhttp8.open("GET", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=8&year=1992",true);
    xhttp8.send();
    function myfunc8(data) {
        document.querySelector('.out-8').innerHTML = data;
        console.log(data);
    }
}
document.querySelector('.b-8').onclick = t8;



// Task 9 ============================================

function t9() {
    let xhttp9 = new XMLHttpRequest();
    xhttp9.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myfunc9(this.responseText);
        }
    }
    xhttp9.open("GET", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=9&m=1&d=1&y=1",true);
    xhttp9.send();
    function myfunc9(data) {
        document.querySelector('.out-9').innerHTML = data;
        console.log(data);
    }
}
document.querySelector('.b-9').onclick = t9;


// Task 10 ============================================

function t10() {
    let xhttp10 = new XMLHttpRequest();
    xhttp10.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myfunc10(this.responseText);
        }
    }
    xhttp10.open("POST", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=1",true);
    xhttp10.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp10.send("auth=DdC33D7d2C2a7&action=1");

    function myfunc10(data) {
       let a = data;
        document.querySelector('.out-10').innerHTML = a;
        console.log(a);
    }
}
document.querySelector('.b-10').onclick = t10;


// Task 11 ============================================

function t11() {
    let xhttp11 = new XMLHttpRequest();
    xhttp11.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myfunc11(this.responseText);
        }
    }
    xhttp11.open("POST", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=2&name=Vitalii",true);
    xhttp11.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp11.send("auth=DdC33D7d2C2a7&action=2");

    function myfunc11(data) {
        let a = data;
        document.querySelector('.out-11').innerHTML = a;
        console.log(a);
    }
}
document.querySelector('.b-11').onclick = t11;

// Task 12 ============================================

function t12() {
    let xhttp12 = new XMLHttpRequest();
    xhttp12.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myfunc12(this.responseText);
        }
    }
    xhttp12.open("POST", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=3&num1=3&num2=89",true);
    xhttp12.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp12.send("auth=DdC33D7d2C2a7&action=3");

    function myfunc12(data) {
        let a = data;
        document.querySelector('.out-12').innerHTML = a;
        console.log(a);
    }
}
document.querySelector('.b-12').onclick = t12;


// Task 13 ============================================

function t13() {
    let xhttp13 = new XMLHttpRequest();
    xhttp13.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myfunc13(this.responseText);
        }
    }
    xhttp13.open("POST", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=4&num1=45&num2=89",true);
    xhttp13.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp13.send("auth=DdC33D7d2C2a7&action=4");

    function myfunc13(data) {
        let a = data;
        document.querySelector('.out-13').innerHTML = a;
        console.log(a);
    }
}
document.querySelector('.b-13').onclick = t13;


// Task 14 ============================================

function t14() {
    let xhttp14 = new XMLHttpRequest();
    xhttp14.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myfunc14(this.responseText);
        }
    }
    xhttp14.open("POST", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=5",true);
    xhttp14.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp14.send("auth=DdC33D7d2C2a7&action=5");

    function myfunc14(data) {
        let a = data;
        document.querySelector('.out-14').innerHTML = a;
        console.log(a);
    }
}

document.querySelector('.b-14').onclick = t14;

// Task 15============================================


function t15() {
    let xhttp15 = new XMLHttpRequest();
    xhttp15.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myfunc15(this.responseText);
        }
    }
    xhttp15.open("POST", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=6&num1=33&num2=999",true);
    xhttp15.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp15.send("auth=DdC33D7d2C2a7&action=6");

    function myfunc15(data) {
        let a = data;
        document.querySelector('.out-15').innerHTML = a;
        console.log(a);
    }
}

document.querySelector('.b-15').onclick = t15;

// Task 16 ============================================


function t16() {
    let xhttp16 = new XMLHttpRequest();
    xhttp16.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myfunc16(this.responseText);
        }
    }
    xhttp16.open("POST", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=7",true);
    xhttp16.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp16.send("auth=DdC33D7d2C2a7&action=7");

    function myfunc16(data) {
        let a = data;
        document.querySelector('.out-16').innerHTML = `<img src="${a}" style="width: 200px" height="200px">`;
        console.log(a);
    }
}

document.querySelector('.b-16').onclick = t16;

// Task 17 ============================================

function t17() {
    let xhttp17 = new XMLHttpRequest();
    xhttp17.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myfunc17(this.responseText);
        }
    }
    xhttp17.open("POST", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=8&year=1992",true);
    xhttp17.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp17.send("auth=DdC33D7d2C2a7&action=8");

    function myfunc17(data) {
        let a = data;
        document.querySelector('.out-17').innerHTML = a;
        console.log(a);
    }
}

document.querySelector('.b-17').onclick = t17;

// Task 18 ============================================


function t18() {
    let xhttp18 = new XMLHttpRequest();
    xhttp18.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myfunc18(this.responseText);
        }
    }
    xhttp18.open("POST", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=9&m=1&d=1&y=1",true);
    xhttp18.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp18.send("auth=DdC33D7d2C2a7&action=9");

    function myfunc18(data) {
        let a = data;
        document.querySelector('.out-18').innerHTML = a;
        console.log(a);
    }
}

document.querySelector('.b-18').onclick = t18;
