let chieuRong = +prompt("Nhap chieu rong cua hinh chu nhat:");
let chieuDai = +prompt("Nhap chieu dai cua hinh chu nhat:");
let s;
if(chieuDai <= 0 && chieuRong <= 0){
    alert("Nhap chieu dai va chieu rong phai lon hon 0");
}else{
    s = chieuDai * chieuRong;
    alert(s);
}
