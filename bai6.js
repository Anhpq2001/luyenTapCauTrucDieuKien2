let a = +prompt("nhap so a:");
let b = +prompt("nhap so b:");
let x;
if(a == 0 && b == 0){
    alert("ham co vo so nghiem");
}else if(a == 0 && b != 0){
    alert("ham vo nghiem");
}else {
    x = - b/a;
    alert(x);
}
