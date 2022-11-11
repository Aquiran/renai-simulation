var say = 0

function next() {
    if(say == 0)   {
        document.getElementById("talk").innerHTML = "   【 태성 】<br> <br> 뭐노? "
        say += 1
    }
    else if(say == 1)   {
        document.getElementById("talk").innerHTML = " (나는 밖으로 나갔다)"
        setTimeout(() => {
            document.getElementById("myroom").style.display = " none "
            document.getElementById("street1").style.display = " block "
        }, 3000);
    }
    else    {
        document.getElementById("talk").innerHTML = "Error"
        document.getElementById("talk").style.fontSize = "50px"
        document.getElementById("talk").style.color = "red"
    }
}