//question 1:check whether prime
function prime(){
    var a=[];
    var f=0;
    for(var i=0;i<3;i++){
        a[i]=prompt("enter a number");
    }
    console.log(a[0]);
    if(a[0]==1||a[0]==0){
        document.getElementById("prm").innerHTML=a[0]+" is not prime";
    }
    else if(a[0]==2){
        document.getElementById("prm").innerHTML="2 is prime";
    }
    else{
        for(var i=2;i<a[0];i++){
            if(a[0]%i==0){
                f++;
                break;
            }
        }
        if(f==0){
            document.getElementById("prm").innerHTML=a[0]+" is prime";
        }
        else{
            document.getElementById("prm").innerHTML=a[0]+" is not prime";
        }
    }
}

//question 2:find most frequent item in the array
function most(){
    var a=['a',1,1,3,9,10,'a',1,1,1,1,'b','a',0,'a',1,2,3];
    var m;
    var mf=0;
    var mfe;
    for(var i=0;i<a.length-1;i++){
        m=0;
        for(var j=i;j<a.length;j++){
            if(a[i]==a[j]){
                m++;
            }
            if(mf<m){
                mf=m;
                mfe=a[i];
            }
            // console.log("i="+i);
            // console.log("j="+j);
            // console.log("mf="+mf);
            // console.log("m="+m);
            // console.log("mfe="+mfe);
        }
    }
    // document.getElementById("pri1").style.border="2px solid red";
    document.getElementById("mst").innerHTML="array is : "+a;
    document.getElementById("most").innerHTML="<b>"+mfe+"</b>"+" occuring "+mf+" times is the most frequent element in the array";
}


//question3: change cases of letters in a string
function swap(){
    var x=document.getElementById("in").value;
    var y,z="";
    for(var i=0;i<x.length;i++){
        y=x.charAt(i);
        if(y==y.toUpperCase()){
            z+=y.toLowerCase();
        }
        else{
            z+=y.toUpperCase();
        }
    }
    // console.log(z);
    document.getElementById("out").innerHTML=z;
}

//question 4: check wether odd or even
function oddeven(){
    for(var i=0;i<=15;i++){
        if(i%2==0){
            document.write(i+" is even<br>");
        }
        else{
            document.write(i+" is odd"+"<br>");
        }
    }
}

//question 5: find sum of squares of elements of an array
function sum(){
    var a=[1,2,3,4,5];
    var sum=0;
    document.getElementById("arr").innerHTML="Array:"+a;
    for(var i=0;i<a.length;i++){
        sum=sum+(a[i]*a[i]);
    }
    document.getElementById("sum").innerHTML="sum of squares="+sum;
}

//qs 6: truncate a string
function truncate(){
    var x=document.getElementById("str").value;
    // console.log(x);
    var y;
    y=x.substring(0,5);
    document.getElementById("tstr").innerHTML="Truncated string of length 5 is: "+y;
}

//qs 7: find largest 
function large(){
    var x=document.getElementById("in1").value;
    var y=document.getElementById("in2").value;
    var big=0;
    if(x>y){
        big=x;
    }
    else{
        big=y;
    }
    document.getElementById("large").innerHTML="Largest is "+big;
}

//qs 8: print in alphabetical order
function alpha(){
    var a=[];
    var out="";
    var fout="";
    for(var i=0;i<5;i++){
        a[i]=prompt("enter a word");
    }
    for(var i=0;i<a.length;i++){
        out+=a[i]+", ";
    }
    document.getElementById("alp1").innerHTML="Entered array of strings: "+"<b>"+out+"</b>";
    // console.log(a);
    a.sort();
    // console.log(a);
    for(var i=0;i<a.length;i++){
        fout+=a[i]+", ";
    }
    document.getElementById("alp2").innerHTML="sorted array: "+"<b>"+fout+"</b>";
}

//qs 9: print patter of javascript
function genjs(){
    var x="javascript";
    // alert(x.length);
    var y=x.length;
    for(i=0;i<=y;i++){
        var z=x.substring(0,i);
        document.write(z+"<br>");
    }
}

//qs 10: print pattern of stars
function generate(){
    // window.open("output.html");
    for(var i=0;i<=5;i++){
        for(var j=0;j<i;j++){
            document.write("*  ");
        }
        document.write("<br>");
    }
}