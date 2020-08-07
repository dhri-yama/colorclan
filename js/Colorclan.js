function random_number(min,max){
    let num=Math.floor( Math.random()*(max-min+1)) + min;
    return num;
}

function color_generator(num,angle){
    hue_value=random_number(0,360);
    s=100;
    l=random_number(50,80);

    let x=document.getElementById('box1');
    x.style.background="none";
    x.style.backgroundColor="hsl("+hue_value+","+s+"%,"+l+"%)";
    
    for (let i=2;i<=num;++i){
        hue_value=hue_value+angle;
        x=document.getElementById('box'+i);
        x.style.background="none";
        x.style.backgroundColor="hsl("+hue_value+","+s+"%,"+l+"%)";
    }
}
function color_generator_mono(num){
    hue_value=random_number(0,360);
    s=100;
    l=45; 

    let x=document.getElementById('box1');
    x.style.background="none";
    x.style.backgroundColor="hsl("+hue_value+","+s+"%,"+l+"%)";
    
    for (let i=2;i<=num;++i){
        l=l+10;
        
        x=document.getElementById('box'+i);
        x.style.background="none";
        x.style.backgroundColor="hsl("+hue_value+","+s+"%,"+l+"%)";
    }
}

function color_generator_random(num){
    hue_value=random_number(0,360);
    s=random_number(50,100);
    l=random_number(20,100); 

    let x=document.getElementById('box1');
    x.style.background="none";
    x.style.backgroundColor="hsl("+hue_value+","+s+"%,"+l+"%)";
    
    for (let i=2;i<=num;++i){
        hue_value=random_number(0,360);
        s=random_number(50,100);
        l=random_number(20,100);
            
        x=document.getElementById('box'+i);
        x.style.background="none";
        x.style.backgroundColor="hsl("+hue_value+","+s+"%,"+l+"%)";
    }
}

function color_generator_tetra(){
    hue_value=random_number(0,360);
    angle=random_number(25,90);
    s=100;
    l=random_number(50,80);

    let x=document.getElementById('box1');
    x.style.background="none";
    x.style.backgroundColor="hsl("+hue_value+","+s+"%,"+l+"%)";
    console.log(hue_value);
    hue_value=hue_value+angle;
    x=document.getElementById('box2');
    x.style.background="none";
    x.style.backgroundColor="hsl("+hue_value+","+s+"%,"+l+"%)";
    
    hue_value=hue_value+180-angle
    x=document.getElementById('box3');
    x.style.background="none";
    x.style.backgroundColor="hsl("+hue_value+","+s+"%,"+l+"%)";
    
    hue_value=hue_value+angle;
    x=document.getElementById('box4');
    x.style.background="none";
    x.style.backgroundColor="hsl("+hue_value+","+s+"%,"+l+"%)";
    
}

function navleave(){
    nl=document.getElementById("navigation");
    console.log(nl);
}