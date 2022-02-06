//let f
let ynm_Parameters = {
    stringArrayOfImageNames: ["pic1.png", "pic2.png", "pic3.png", "pic4.png", "pic5.png", "pic6.png"],
    imageCurrentNumber: 0

};
const ynm_Constants = {
    
    idRightArrowContainerWidth : 100

};
document.getElementById("idImageControlGridContainer").addEventListener("mouseup", ynm_showNextString);
//document.getElementById("idLeftArrowContainer").addEventListener("mouseup", ynm_showNextString);
//document.getElementById("idRightArrowContainer").addEventListener("mouseup", ynm_showNextString);
document.addEventListener("keyup", ynm_showNextString);

function ynm_showNextString(e) {
    //key ArrowRight ArrowLeft
    //console.log(document.getElementById(idImageControlGridContainer).getClientRect());
    console.log(document.getElementById("idImageControlGridContainer"));
    console.log(document.getElementById("idRightArrowContainer"));
    console.log(document.getElementById("idImageControlGridContainer").getBoundingClientRect());
    let tmpObj = document.getElementById("idImageControlGridContainer").getBoundingClientRect();
    console.log(tmpObj);
    console.log(document.getElementById("idImageControlGridContainer").getAttribute("grid-template-columns"));
    //console.log(document.getElementById(idImageControlGridContainer).clientWidth
    console.log("e.type =" + e.type, " e.key =" + e.key);
    
    //
    if( e.type === "mouseup"){
        console.log(e.x);
        if ( (Number(e.x) > Number(tmpObj.left)) && (Number(e.x) < (Number(tmpObj.left)+ Number(ynm_Constants.idRightArrowContainerWidth))) ){
            console.log("get left image");
            if (ynm_Parameters.imageCurrentNumber <= 0) ynm_Parameters.imageCurrentNumber = ynm_Parameters.stringArrayOfImageNames.length - 1;
            else ynm_Parameters.imageCurrentNumber -= 1;
            document.getElementById("idMasterpiece").src = "./gallery/" + ynm_Parameters.stringArrayOfImageNames[ynm_Parameters.imageCurrentNumber];
        } else if ((Number(e.x) < Number(tmpObj.right)) && (Number(e.x) > (Number(tmpObj.right) - Number(ynm_Constants.idRightArrowContainerWidth))) ){

            if (ynm_Parameters.imageCurrentNumber >= ynm_Parameters.stringArrayOfImageNames.length - 1) ynm_Parameters.imageCurrentNumber = 0;
            else ynm_Parameters.imageCurrentNumber += 1;
            document.getElementById("idMasterpiece").src = "./gallery/" + ynm_Parameters.stringArrayOfImageNames[ynm_Parameters.imageCurrentNumber];
            console.log("get right image");
        }else{
            console.log("you missed mother fucker");
            //fuck off
        }
        console.log(ynm_Parameters.imageCurrentNumber);
    }else if(e.type == "keyup"){
        if(e.key === "ArrowRight"){
            //do smth
            if (ynm_Parameters.imageCurrentNumber >= ynm_Parameters.stringArrayOfImageNames.length - 1) ynm_Parameters.imageCurrentNumber = 0;
            else ynm_Parameters.imageCurrentNumber += 1;
            document.getElementById("idMasterpiece").src = "./gallery/" + ynm_Parameters.stringArrayOfImageNames[ynm_Parameters.imageCurrentNumber];

            console.log("ArrowRight");
        }else if(e.key === "ArrowLeft"){
            //do smth
            if (ynm_Parameters.imageCurrentNumber <= 0) ynm_Parameters.imageCurrentNumber = ynm_Parameters.stringArrayOfImageNames.length - 1;
            else ynm_Parameters.imageCurrentNumber -= 1;
            document.getElementById("idMasterpiece").src = "./gallery/" + ynm_Parameters.stringArrayOfImageNames[ynm_Parameters.imageCurrentNumber];

            console.log("ArrowLeft");
        }else{
            //nothing
            console.log("anykey");
        }
    }
    else{
        //nothing
    }
    
    
    /*
    if(e.type === "keyup"){
        if(e.key === "leftArrow") document.getElementById("idMasterpiece").src = "./gallery/" + ynmParameters.stringArrayOfImageNames[--ynmParameters.imageNumber]; 
        if(e.key === "rightArrow") document.getElementById("idMasterpiece").src = "./gallery/" + ynmParameters.stringArrayOfImageNames[++ynmParameters.imageNumber];

    }else if(e.type === "mouseup"){
        //to do e.target to check source and then or inc or dec
        document.getElementById("idMasterpiece").src = "./gallery/" + ynmParameters.stringArrayOfImageNames[++ynmParameters.imageNumber];
    }else{
        //do nothing
    }
    document.getElementById("idMasterpiece").src = "./gallery/" + ynmParameters.stringArrayOfImageNames[++ynmParameters.imageNumber];
    */
}
