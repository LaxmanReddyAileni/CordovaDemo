
function check(){
   if(document.getElementById("myfile").value !== "")
   {  var close=document.getElementById("form");
       close.target="_blank";
       close.action="http://ptsv2.com/t/1586525471/post";//http://ptsv2.com/t/1586525471
       console.log("Uploaded File");
       alert("Uploaded File");
   }else
   {
       var close=document.getElementById("form");
       close.target="hiddenFrame";
       console.log("File not Uploaded");
       alert("Select File to Upload");
   }
   
}
function refresh(){
   document.getElementById("myfile").value ="";
   console.log("Page Refreshed");
     var close=document.getElementById("form");
    close.action="";
}

