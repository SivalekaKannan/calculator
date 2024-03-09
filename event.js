const v=document.getElementById("get");
function add(a){
    v.value+=a;
}
function allclear(){
    v.value="";
}
function del(){
    v.value=v.value.substr(0,v.value.length-1);
}
function equal(){
    v.value=eval(v.value);
}