var buttons=document.getElementsByClassName("buttons");
var naviListener=document.querySelector(".navi");
var operator="";
var operand="";

// buttons.style.display="flex";
var obj={
    0:"AC +/- % /",
    1:"7 8 9 *",
    2:"4 5 6 -",
    3:"1 2 3 +",
    4:"0 ^2 . ="
};
for(let i=0;i<buttons.length;i++)
{
    var signs=obj[i].split(" ");
    for(let j=0;j<4;j++)
    {
        let divmaking=document.createElement("div");
        divmaking.style.height="100%";
        divmaking.style.width="7.30vw";
        divmaking.style.marginLeft="2.1px";
        divmaking.style.display="inline-block";
        divmaking.style.backgroundColor="purple";
        // obj.j;
        // console.log(signs[j]);
        // console.log(typeof(signs[j]));
        let addBtn = signs[j];
        // divmaking.style.innerText=addBtn;
        divmaking.innerText=addBtn;
        divmaking.classList.add("styling");
        buttons[i].appendChild(divmaking);
    }

}
var signatures=document.querySelectorAll(".styling");
for(let i=0;i<buttons.length;i++)
{
    for(let j=0;j<4;j++)
    {
        console.log(i*4+j);
        signatures[i*4+j].addEventListener("click",function()
        {
            var KeyValue=signatures[i*4+j].innerText;
            if(KeyValue=="AC")
            naviListener.innerText=" ";
            else if(KeyValue=="+")
            {
                operand=naviListener.innerText;
                operator="+";
                naviListener.innerText="+";
            }
            else if(KeyValue=="-")
            {
                operand=naviListener.innerText;
                operator="-";
                naviListener.innerText="-";
            }
            else if(KeyValue=="*")
            {
                operand=naviListener.innerText;
                operator="*";
                naviListener.innerText="*";

            }
            else if(KeyValue=="/")
            {
                operand=naviListener.innerText;
                operator="/";
                naviListener.innerText="/";
            }
            else if(KeyValue=="+/-")
            {
                let tempValue=naviListener.innerText;
                let integralValue=parseInt(tempValue,10);
                let ans=-(integralValue);
                naviListener.innerText=ans;
            }
            else if(KeyValue=="%")
            {
                let tempValue=naviListener.innerText;
                let integralValue=parseInt(tempValue,10);
                let ans=integralValue/100;
                naviListener.innerText=ans;
            }
            else if(KeyValue =="=")
            {
                let tempValue=naviListener.innerText;
                let integralValue=parseInt(tempValue,10);
                if(operator=="+")
                {
                    operand=parseInt(operand,10);
                    naviListener.innerText=integralValue+operand;
                }
                else if(operator=="-")
                {
                    naviListener.innerText=operand-integralValue;
                }
                else if(operator=="*")
                {
                    naviListener.innerText=integralValue*operand;
                }
                else if(operator=="/")
                {
                    if(integralValue==0)
                    naviListener.innerText="Error";
                    else
                    naviListener.innerText=operand/integralValue;
                }
                operand="";
                operator="";
            }
            else if(KeyValue=="^2")
            {
                let tempValue=naviListener.innerText;
                let integralValue=parseInt(tempValue,10);
                let ans=Math.pow(integralValue,2);
                naviListener.innerText=ans;
            }
            else
            {
                let tempValue=naviListener.innerText;
                if(tempValue=="+" || tempValue=="-" || tempValue=="*" || tempValue=="/" || tempValue=="%" || tempValue=="^2" || tempValue=="=" || tempValue=="+/-")
                tempValue="";
                naviListener.innerText=tempValue+KeyValue;
            }
        });
    }
}