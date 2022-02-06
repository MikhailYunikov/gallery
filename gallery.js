//let f
let ynm_Parameters = {
    stringArrayOfImageNames: ["pic1.png", "pic2.png", "pic3.png", "pic4.png", "pic5.png", "pic6.png"],
    imageCurrentNumber: 5

};
const ynm_Constants = {
    
    arrowContainerWidth : 100,
    arrowOpacityMax: 0.7,
    arrowOpacityMin: 0.1,
    arrowOpacityDefault: 0

};
document.getElementById("idImageControlGridContainer").addEventListener("mouseup", ynm_showNextString);
document.getElementById("idImageControlGridContainer").addEventListener("mousemove", ynm_arrowImgOpacityControl);
document.getElementById("idImageControlGridContainer").addEventListener("mouseout", ynm_arrowImgSetOpacityToDefault);
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
        if ( (Number(e.x) > Number(tmpObj.left)) && (Number(e.x) < (Number(tmpObj.left)+ Number(ynm_Constants.arrowContainerWidth))) ){
            console.log("get left image");
            if (ynm_Parameters.imageCurrentNumber <= 0) ynm_Parameters.imageCurrentNumber = ynm_Parameters.stringArrayOfImageNames.length - 1;
            else ynm_Parameters.imageCurrentNumber -= 1;
            document.getElementById("idMasterpiece").src = "./gallery/" + ynm_Parameters.stringArrayOfImageNames[ynm_Parameters.imageCurrentNumber];
        } else if ((Number(e.x) < Number(tmpObj.right)) && (Number(e.x) > (Number(tmpObj.right) - Number(ynm_Constants.arrowContainerWidth))) ){

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

function ynm_arrowImgOpacityControl(e){
    let tmpObj = document.getElementById("idImageControlGridContainer").getBoundingClientRect();
    //console.log(e.x);

    if ( (Number(e.x) > Number(tmpObj.left)) && (Number(e.x) < (Number(tmpObj.left)+ Number(ynm_Constants.arrowContainerWidth))) ){
        //opacity left arrow Max%, right Arrow should be Min%
        console.log("opacity left arrow 0%");
        document.getElementById("idLeftArrowContainer").style.opacity = String(ynm_Constants.arrowOpacityMax);//"0.8";
        document.getElementById("idRightArrowContainer").style.opacity = String(ynm_Constants.arrowOpacityMin);//"0.1";
        /*
        if (ynm_Parameters.imageCurrentNumber <= 0) ynm_Parameters.imageCurrentNumber = ynm_Parameters.stringArrayOfImageNames.length - 1;
        else ynm_Parameters.imageCurrentNumber -= 1;
        document.getElementById("idMasterpiece").src = "./gallery/" + ynm_Parameters.stringArrayOfImageNames[ynm_Parameters.imageCurrentNumber];
        */
    } else if ((Number(e.x) < Number(tmpObj.right)) && (Number(e.x) > (Number(tmpObj.right) - Number(ynm_Constants.arrowContainerWidth))) ){
        //opacity right arrow MAx%, left Arrow should be Min%
        console.log("opacity Right arrow 0%");
        document.getElementById("idLeftArrowContainer").style.opacity = String(ynm_Constants.arrowOpacityMin);//"0.8";
        document.getElementById("idRightArrowContainer").style.opacity = String(ynm_Constants.arrowOpacityMax);//"0.1";

        /*
        if (ynm_Parameters.imageCurrentNumber >= ynm_Parameters.stringArrayOfImageNames.length - 1) ynm_Parameters.imageCurrentNumber = 0;
        else ynm_Parameters.imageCurrentNumber += 1;
        document.getElementById("idMasterpiece").src = "./gallery/" + ynm_Parameters.stringArrayOfImageNames[ynm_Parameters.imageCurrentNumber];
        console.log("get right image");
        */
    }else{
        //left/right arrow opacity should be computed
        //get current opacity
        let tmpLeftX = Number(tmpObj.left) + Number(ynm_Constants.arrowContainerWidth);
        let tmpRightX  = Number(tmpObj.right) - Number(ynm_Constants.arrowContainerWidth);
        let tmpImageContainerWidth = tmpRightX - tmpLeftX;
        let tmpMouseScaledX = Number(e.x) - tmpLeftX;
        let tmpRightImgOpacity = ((ynm_Constants.arrowOpacityMax - ynm_Constants.arrowOpacityMin) * (tmpMouseScaledX/tmpImageContainerWidth) + ynm_Constants.arrowOpacityMin).toPrecision(3);
        
        if(tmpRightImgOpacity > ynm_Constants.arrowOpacityMax)
            tmpRightImgOpacity = ynm_Constants.arrowOpacityMax;

        let tmpLeftImgOpacity = (ynm_Constants.arrowOpacityMax - tmpRightImgOpacity) + ynm_Constants.arrowOpacityMin;
        //set opacity
        document.getElementById("idLeftArrowContainer").style.opacity = String(tmpLeftImgOpacity);//"0.8";
        document.getElementById("idRightArrowContainer").style.opacity = String(tmpRightImgOpacity);//"0.1";
    
        console.log("variable opacity for both arrows");
        
        //fuck off
    }
    //console.log("mouseX =" + String(e.x), " mouseY =" + String(e.y));

}

function ynm_arrowImgSetOpacityToDefault(){
    //both arrow opacity should be default
    console.log("default opacity");
    document.getElementById("idLeftArrowContainer").style.opacity = String(ynm_Constants.arrowOpacityDefault);//"0.8";
    document.getElementById("idRightArrowContainer").style.opacity = String(ynm_Constants.arrowOpacityDefault);//"0.1";
}