// Truy cập vào phần tử thông qua TÊN.
// let frmTourRegister = document.forms['frmTourRegister'];
// frmTourRegister.submit(function(){
//     console.log('A haha, toi dang submit');
// })

let btnOK = document.querySelector('button');
btnOK.addEventListener('click', function(e){
    // Chặn sự kiện Submit mặc định  của FORM
    e.preventDefault();
    // Kiểm tra Yêu cầu nhập/chọn dữ liệu của người dùng
    let txtFullName = document.getElementById('txtFullName');
    let txtAddress = document.getElementById('txtAddress');
    let txtPhone = document.getElementById('txtPhone');
    let sltTour = document.querySelector('select');
    let rdoVehicle1 = document.getElementById("rdoVehicle1");
    let rdoVehicle2 = document.getElementById("rdoVehicle2");

    let txtAdult = document.getElementById("txtAdult");
    let txtChildren = document.getElementById("txtChildren");

    let notification = document.querySelector('.notification');

    if(txtFullName.value == '')
        notification.innerHTML += 'Fullname is empty <br>';
    if(txtAddress.value == '') 
        notification.innerHTML += 'Address is empty <br>';
    if(txtPhone.value == '') 
        notification.innerHTML += 'Phone is empty <br>';
        // Chỗ này ko cần CHECK phần tử có được seleted ko vì mặc định có THIẾT LẬP
    if(sltTour.value == '') 
        notification.innerHTML += 'Tour is not selected <br>';
        // Chỗ này thừa, ko cần thiếu nếu THIẾT KẾ đã có 1 phần tử cheked mặc định
    if((rdoVehicle1.checked || rdoVehicle2.checked)  == false) 
        notification.innerHTML += 'Vehicle is not checked <br>';
    if(txtAdult.value == '')
        notification.innerHTML += 'The nummber of adults is not define <br>';
    if(txtChildren.value == '')
        notification.innerHTML += 'The nummber of adults is not define <br>';

    // Validate dữ liệu trong Trường hợp người dùng có Nhập nhưng sai Tiêu chuẩn/Điều kiện

    // VÍ DỤ: Validate dữ liệu của thuộc tính Email
    // Biểu thức chính qui: Nó là 1 MẪU được dùng để so sánh/kiểm tra tính hợp lệ của 1 CHUỖI
    // Tìm hiểu về Biểu thức chính quy:
        // Để đọc và hiểu được nó 
        // Để xây dựng 1 BTCQ cho Bài toán mình đặt ra
        // Ứng dụng của BTCQ:
            //Validate dữ liệu người dùng nhập vào FORM > Tránh các lỗi xử lý phía Backend (SQL Injection)
            //Viết lại URL (URL rewrite)
                // http://tlu.edu.vn > http://tlu.edu.vn/index.php
                // http://tlu.edu.vn/gioi-thieu > http://tlu.edu.vn/about.php

    // let emailPattern = /^([a-z0-9_\.-]+)@e\.tlu\.edu\.vn$/;
    // // let emailPattern = /^([az]{5, 10})$/;

    // // // let emailPattern = new RegExp("/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/")
    // let email = document.getElementById('txtEmail');

    // if(!emailPattern.test(email.value)){
    //     notification.textContent = 'Email không hợp lệ';
    //     notification.style.color = 'red';
    // }else{
    //     notification.textContent = 'Email hợp lệ';
    //     notification.style.color = 'blue';

    // }
})

