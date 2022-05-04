var stairs = ["back2","2nd-1","3rd-2","4th-1","5th-1","6th-1"];
var first_floor = ["index","back1","back2","calculation","courtyard","inner_Plaque","outer"];
var second_floor = ["2nd-1","2nd-2"];
var third_floor = ["3rd-1","3rd-2","3rd-3"];
var fourth_floor = ["4th-1","4th-2"];
var fifth_floor = ["5th-1","5th-2"];
var sixth_floor = ["6th-1","6th-2"];
var path = window.location.pathname;
var page = path.split("/").pop();
var file_name = page.split(".");
// console.log(file_name[0]);
init();

function init(){
    console.log(window.screen.width);
    if(window.screen.width < 500){
        let x = document.getElementById("god").children["0"];
        // console.log(x);
        x.src = x.src.replace("pc","mobile");
        if(window.location.pathname == "/back1.html"){
            for(let x = 1; x<4; x++){
                let y = document.getElementById("god"+x).children["0"].src;
                y = y.replace("/pc/","/mobile/");
            }
        }
    }
}
function up(){
    var up = stair.indexOf(file_name[0]);
    console.log(up);
    if(up >= 0){
        window.location.href=stair[up+1] + ".html";
    }else{
        floor(file_name[0],-1);
    }
}

var stair = "none";
function show_stair(){
    if(stair == "none"){
        document.getElementById('all_stair').style.display = 'block';
        stair = "block";
    }else{
        document.getElementById('all_stair').style.display = 'none';
        stair = "none";
    }
}

function go(x){
    console.log("XXX");
    // console.log(x);
    var x_new = parseInt(x)-1;
    window.location.href=stairs[x_new] + ".html";
}

var value = "none";
function show_flat(){
    if(value == "none"){
        document.getElementById('flat_plan').style.display = 'block';
        value = "block";
    }else{
        document.getElementById('flat_plan').style.display = 'none';
        value = "none";
    }
}