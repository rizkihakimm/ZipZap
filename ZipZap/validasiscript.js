function validasilogin() {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    if (email == '') {

        alert('Email harus di isi')

    } else if (!email.includes('@')) {

        alert('Email harus terdapat @')

    } else if (email.indexOf('@') <= 0) {

        alert("Email tidak boleh diawali dengan '@'")

    } else if (email.includes('.@')) {

        alert('Email tidak valid ')

    } else if (email.includes('@.')) {

        alert('Email tidak valid')

    } else if (!email.endsWith('.com') && !email.endsWith('.co.id')) {

        alert("Email harus berakhiran ‘.com’ atau ‘.co.id’")
    

    } else if (password == '') {

        alert("Password harus di isi")

    } else if (password.length < 8 || password.length > 10) {

        alert("Password minimal 8-10 Karakter")

    } else if (password.search(/[a-z]/) == -1) {

        alert("password harus terdapat 1 huruf kecil")

    } else if (password.search(/[A-Z]/) == -1) {

        alert("password harus terdapat 1 huruf kapital")

    } else if (password.search(/[0-9]/) == -1) {

        alert("password harus terdapat angka")

    }

    else {
        if (confirm('Login Berhasil')) {
            return true
        }
    }
    return false;
}

function validasiregis() {
    var nama = document.getElementById('namalengkap').value;
    var alamat = document.getElementById('alamat').value;
    var dob = document.getElementById('dob').value;
    var email = document.getElementById('email').value;
    var nomor = document.getElementById('phonenum').value;
    
    if (nama == '') {

        alert('Nama harus di isi')

    } else if (nama.length < 4 || nama.length > 25) {

        alert('Panjang Nama Lengkap harus 4 sampai 25 karakter')

    } else if (alamat == '') {

        alert('Alamat Harus di isi')

    } else if (!dob) {

        alert('Tanggal Lahir Harus di isi')

    } else if (email == '') {

        alert('Email harus di isi')

    } else if (!email.includes('@')) {

        alert('Email harus terdapat @')

    } else if (email.indexOf('@') <= 0) {

        alert("Email tidak boleh diawali dengan '@'")

    } else if (email.includes('.@')) {

        alert('Email tidak valid')

    } else if (email.includes('@.')) {

        alert('Email tidak valid')

    } else if (!email.endsWith('.com') && !email.endsWith('.co.id')) {

        alert("Email harus berakhiran ‘.com’ atau ‘.co.id’")
   
    } else if (nomor == '') {

        alert('Nomor Hp harus di isi')

    } else if (isNaN(nomor)) {

        alert('Nomor Hp harus angka')

    } else if (nomor.length < 10 || nomor.length > 12) {

        alert('Nomor Hp harus 10 sampai 12 digit')

    } else {
        if (confirm('Registrasi Berhasil')) {
            return true
        }
    }
    return false;
}
