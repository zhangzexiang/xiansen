
var password="123";
password=prompt('请输入密码 (本网站需输入密码才可进入):','');

if (password != 'mima') {
    alert("密码不正确,无法进入本站!!");    
    window.opener=null; 
    window.close();
}  // 密码不正确就关闭
