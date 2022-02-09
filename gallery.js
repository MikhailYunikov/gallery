//let f
let ynm_Parameters = {
    stringArrayOfImageNames: ["pic1.png", "pic2.png", "pic3.png", "pic4.png", "pic5.png", "pic6.png"],
    //imageCurrentNumber: 5 //remove need to 

};
const ynm_Constants = {
    
    arrowContainerWidth : 100,
    arrowOpacityMax: 0.7,
    arrowOpacityMin: 0.1,
    arrowOpacityDefault: 0

};
document.getElementById("idImageControlGridContainer").addEventListener("mouseup", ynm_masterpieceControl);
document.getElementById("idImageControlGridContainer").addEventListener("mousemove", ynm_arrowImgOpacityControl);
document.getElementById("idImageControlGridContainer").addEventListener("mouseout", ynm_arrowImgSetOpacityToDefault);
/*document.getElementsByClassName("imageIcon").addEventListener("mouseup", ynm_masterpieceControlViaIcon);*/
let a_tmpNodeList = document.querySelectorAll(".imageIcon");
for(let cnt_tmp = 0; cnt_tmp < a_tmpNodeList.length; cnt_tmp++)
{
	a_tmpNodeList[cnt_tmp].addEventListener("mouseup", ynm_masterpieceControlViaIcon);
}

//document.getElementById("idLeftArrowContainer").addEventListener("mouseup", ynm_showNextString);
//document.getElementById("idRightArrowContainer").addEventListener("mouseup", ynm_showNextString);
document.addEventListener("keyup", ynm_masterpieceControl);

function ynm_masterpieceControl(e) {
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
            ynm_showNextPicture("left");
            /*
            if (tmpImageCurrentNumber <= 0) tmpImageCurrentNumber = ynm_Parameters.stringArrayOfImageNames.length - 1;
            else tmpImageCurrentNumber -= 1;
            document.getElementById("idMasterpiece").src = "./gallery/" + ynm_Parameters.stringArrayOfImageNames[tmpImageCurrentNumber];
            
            console.log("class ImageIcons");
            console.log(document.getElementsByClassName("imageIcon"));
            let tmpLenght = document.getElementsByClassName("imageIcon").length;
            let tmpArrayObjects =  document.getElementsByClassName("imageIcon");
            for(let i = 0; i < tmpLenght; i++){
                console.log(tmpArrayObjects[i].attributes.src);
               if (tmpArrayObjects[i].attributes.src.value === ("./gallery/" + ynm_Parameters.stringArrayOfImageNames[tmpImageCurrentNumber])){
                    //tmpArrayObjects[i].style. = "blue";
                    tmpArrayObjects[i].style.border = "2px solid black";
                    //tmpArrayObjects[i].style.border-width = "5px";
                    //tmpArrayObjects[i].style.border-color = "rgb(51, 49, 49)";
                    //tmpArrayObjects[i].style.border-style = "solid";
                    //border-color: rgb(51, 49, 49);
                    //border-width: 5px;
                    //border-style: solid;
                }
                else{
                    tmpArrayObjects[i].style.border = "2px solid transparent";
                }
            }
            */

        } else if ((Number(e.x) < Number(tmpObj.right)) && (Number(e.x) > (Number(tmpObj.right) - Number(ynm_Constants.arrowContainerWidth))) ){

            ynm_showNextPicture("right");
            /*
            if (tmpImageCurrentNumber >= ynm_Parameters.stringArrayOfImageNames.length - 1) tmpImageCurrentNumber = 0;
            else tmpImageCurrentNumber += 1;
            document.getElementById("idMasterpiece").src = "./gallery/" + ynm_Parameters.stringArrayOfImageNames[tmpImageCurrentNumber];
            console.log("get right image");
            */
            
        }else{
            console.log("you missed mother fucker");
            //fuck off
        }
        //console.log(tmpImageCurrentNumber);
    }else if(e.type == "keyup"){
        if(e.key === "ArrowRight"){
            //do smth
            ynm_showNextPicture("right");
            /*
            if (tmpImageCurrentNumber >= ynm_Parameters.stringArrayOfImageNames.length - 1) tmpImageCurrentNumber = 0;
            else tmpImageCurrentNumber += 1;
            document.getElementById("idMasterpiece").src = "./gallery/" + ynm_Parameters.stringArrayOfImageNames[tmpImageCurrentNumber];
            */
            console.log("ArrowRight");
            
        }else if(e.key === "ArrowLeft"){
            //do smth
            ynm_showNextPicture("left");
            /*
            if (tmpImageCurrentNumber <= 0) tmpImageCurrentNumber = ynm_Parameters.stringArrayOfImageNames.length - 1;
            else tmpImageCurrentNumber -= 1;
            document.getElementById("idMasterpiece").src = "./gallery/" + ynm_Parameters.stringArrayOfImageNames[tmpImageCurrentNumber];
            */
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
        if (tmpImageCurrentNumber <= 0) tmpImageCurrentNumber = ynm_Parameters.stringArrayOfImageNames.length - 1;
        else tmpImageCurrentNumber -= 1;
        document.getElementById("idMasterpiece").src = "./gallery/" + ynm_Parameters.stringArrayOfImageNames[tmpImageCurrentNumber];
        */
    } else if ((Number(e.x) < Number(tmpObj.right)) && (Number(e.x) > (Number(tmpObj.right) - Number(ynm_Constants.arrowContainerWidth))) ){
        //opacity right arrow MAx%, left Arrow should be Min%
        console.log("opacity Right arrow 0%");
        document.getElementById("idLeftArrowContainer").style.opacity = String(ynm_Constants.arrowOpacityMin);//"0.8";
        document.getElementById("idRightArrowContainer").style.opacity = String(ynm_Constants.arrowOpacityMax);//"0.1";

        /*
        if (tmpImageCurrentNumber >= ynm_Parameters.stringArrayOfImageNames.length - 1) tmpImageCurrentNumber = 0;
        else tmpImageCurrentNumber += 1;
        document.getElementById("idMasterpiece").src = "./gallery/" + ynm_Parameters.stringArrayOfImageNames[tmpImageCurrentNumber];
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

function ynm_showNextPicture(strDirection){
    let tmpNumDirection = 0;
    let tmpImageCurrentNumber = 0;
    //let tmpStrImgSrcValue = document.getElementById("idMasterpiece").attributes.src.value; //./gallery/pic1.png

    //tmpStrSrc.substring((tmpStrSrc.lastIndexOf("/") + 1));
    //let tmpNumLimitLenght = 0;
    if(strDirection === "right"){
        tmpNumDirection = 1; //tmpNumLimitLenght = ynm_Parameters.stringArrayOfImageNames.length - 1;
    }else if(strDirection === "left"){
        tmpNumDirection = -1; //tmpNumLimitLenght = 0;
    }
    
    for(let i = 0; i <= ynm_Parameters.stringArrayOfImageNames.length; i++){
        if(("./gallery/" + ynm_Parameters.stringArrayOfImageNames[i]) === document.getElementById("idMasterpiece").attributes.src.value){
            tmpImageCurrentNumber = i;
            console.log(tmpImageCurrentNumber);
        }
    }
    //if (tmpImageCurrentNumber <= tmpNumLimitLenght) tmpImageCurrentNumber = ynm_Parameters.stringArrayOfImageNames.length + tmpNumDirection;
    tmpImageCurrentNumber += tmpNumDirection;
    //image counter limitations
    if (tmpImageCurrentNumber > ynm_Parameters.stringArrayOfImageNames.length - 1) tmpImageCurrentNumber = 0;
    if (tmpImageCurrentNumber < 0) tmpImageCurrentNumber = ynm_Parameters.stringArrayOfImageNames.length - 1;

    document.getElementById("idMasterpiece").attributes.src.value = "./gallery/" + ynm_Parameters.stringArrayOfImageNames[tmpImageCurrentNumber];
    
    console.log("class ImageIcons");
    console.log(document.getElementsByClassName("imageIcon"));

    let tmpLenght = document.getElementsByClassName("imageIcon").length;
    let tmpArrayObjects =  document.getElementsByClassName("imageIcon");
    for(let i = 0; i < tmpLenght; i++){
        console.log(tmpArrayObjects[i].attributes.src);
       if (tmpArrayObjects[i].attributes.src.value === ("./gallery/" + ynm_Parameters.stringArrayOfImageNames[tmpImageCurrentNumber])){
             tmpArrayObjects[i].style.border = "2px solid black";
        }
        else{
            tmpArrayObjects[i].style.border = "2px solid transparent";
        }
    }

}

function ynm_masterpieceControlViaIcon(e){
    console.log(e.target);
    console.log(e.target.src);

    let tmpImageCurrentNumber = 0;
    let tmpStrSrc = e.target.src;
    tmpStrSrc = tmpStrSrc.substring((tmpStrSrc.lastIndexOf("/") + 1));
    console.log(tmpStrSrc);

    let tmpLenght = document.getElementsByClassName("imageIcon").length;
    let tmpArrayObjects =  document.getElementsByClassName("imageIcon");
    for(let i = 0; i < tmpLenght; i++){
        console.log(tmpArrayObjects[i].attributes.src);
       if (tmpArrayObjects[i].attributes.src.value === ("./gallery/" + tmpStrSrc)){
             tmpArrayObjects[i].style.border = "2px solid black";
             document.getElementById("idMasterpiece").src = "./gallery/" + tmpStrSrc;
        }
        else{
            tmpArrayObjects[i].style.border = "2px solid transparent";
        }
    }
    for(let i = 0; i <= ynm_Parameters.stringArrayOfImageNames.length; i++){
        if(ynm_Parameters.stringArrayOfImageNames[i] === tmpStrSrc){
            tmpImageCurrentNumber = i;
            console.log(tmpImageCurrentNumber);
        }else{
            tmpImageCurrentNumber = 0;
        }
    }

}