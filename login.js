

    let username;
    let password;
    let checkValidate = false;
    let listUser = JSON.parse(localStorage.getItem('list_user'));
    if(listUser==null){
    listUser = []
}
    console.log('list User id--->', listUser)

    function validate() {
    username = document.getElementById('username').value;
    if (username.trim()==""){
    checkValidate = false;
    document.getElementById('validate_username').innerHTML = "<label style='color: red'> The name is required! </label> "
}else {
    checkValidate = true;
    document.getElementById('validate_username').innerHTML = "";
}
    password = document.getElementById('password').value;
    if (password.trim()==""){
    checkValidate = false;
    document.getElementById('validate-password').innerHTML = "<label style='color: red'>The password is required!</label>"
}else {
    checkValidate=true ;
    document.getElementById('validate-password').innerHTML = "";
}
}
    function findByUserName(username) {
    for (let i = 0; i < listUser.length; i++) {
    if (listUser[i].username==username){
    return listUser[i]

}
}
}
    let checkLogin;
    function login() {
    if (checkValidate) {
    checkLogin = false;
    for (let i = 0; i < listUser.length ; i++) {
    if ( listUser[i].username==username && listUser[i].password == password ){
        localStorage.setItem('user',JSON.stringify(listUser[i]));
    console.log('i============',i)
    checkLogin = true ;
    //     console.log(check);
    // check = false;
    //     console.log(check);
    let name = findByUserName(username).name
    localStorage.setItem("nameKey" ,name )
    console.log(name)
    break;
}else {
    checkLogin = false;
}
}
    console.log(checkLogin)
    if (checkLogin){
    location.href = "index.html"
}else { document.getElementById('checklogin').innerHTML='Tài khoản không đúng mời nhập lại' }
}
}
