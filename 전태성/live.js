var say = 0;

function    talk()  {
    if(say == 0)    {
        document.getElementById("textbox").innerHTML = "* (지금 생각해보면 모든 것이 우연의 연속이었다.)"
        say += 1;
    }
    else if(say == 1)   {
        document.getElementById("textbox").innerHTML = "* (잠자고 일어나니 그가 내 앞에 있었다.)"
        document.getElementById("kaein").style.display = "block"
        say += 1;
    }
    else if (say == 2)  {
        document.getElementById("textbox").innerHTML = "* 태인:뭐야 여긴 도데체....저 아저씨는 도데체 뭐고?"
        say += 1;
    }   
    else if(say == 3)   {
        document.getElementById("textbox").innerHTML = "* ???:뭐? 아저씨? 어딜 그냥..야!"
        say += 1;
    }
    else if(say == 4)   {
        document.getElementById("textbox").innerHTML = "* (아무래도 수상하다...어떻게 할까?)"
        say += 1;
    }
    else if(say == 5)   {
        document.getElementById("select1").style.display = "block"
        document.getElementById("select2").style.display = "block"
        document.getElementById("black").style.display = "block"
    }
    else if (say == 6)  {
        document.getElementById("textbox").innerHTML = "* (의문의 남자가 마하9의 속도로 다가온다.)"
        document.getElementById("moving").style.display = "block"
        document.getElementById("kaein").style.display = "none"
        say += 2;
    }
    else if(say == 7)   {
        document.getElementById("textbox").innerHTML = "* 태인:이름이 뭡니까?"
        say += 2
    }  
    else if(say == 8)   {
        document.getElementById("textbox").innerHTML = "* 당신은 의문의 남자에게 부딪혀 사망했다."
        say += 2;
    }
    else if(say == 9)   {
        document.getElementById("textbox").innerHTML = "* ???:이 xxx가 지금 감히 누구한테 반말이야...야!"
        say += 2;
    }   
     else if(say == 10)   {
        document.getElementById("textbox").innerHTML = "* 'Game Over' *"
        document.getElementById("black").style.display = "block"
        document.getElementById("gameover").style.display = "block"
    }
    else if(say == 11)   {
        document.getElementById("textbox").innerHTML = "* 태인:아!....죄송한데 이름좀 가르쳐주세요."
        say += 1;
    }  
    else if(say == 12)   {
        document.getElementById("textbox").innerHTML = "* 케인:[케인]..기억해둬라.보니까 갈 곳도 없는거 같은데 우리집으로 올래?"
        say += 1;
    }  
    else if(say == 13)   {
        document.getElementById("textbox").innerHTML = "* 태인:혹시...'게이'는 아니죠?"
        say += 1;
    }  
    else if(say == 14)   {
        document.getElementById("textbox").innerHTML = "* 게이조이고:아잇!뭐라는 거니 얘가 지금! 그런거 아니야!"
        say += 1;
    }  
    else if(say == 15)   {
        document.getElementById("textbox").innerHTML = "* 태인:(저 태도 수상하지만 어쩔 수 없나..) 알겠어요,갈게요."
        say += 1;
    }  
    else if(say == 16)   {
        document.getElementById("textbox").innerHTML = "* (그렇게 우리들은 케인씨의 집으로 향했다.)"
        say += 1;
    }  
    else if(say == 17)   {
        document.getElementById("black").style.display = "block"
        document.getElementById("prolog").style.display = "block"
        say += 1;
    }  
    else if(say == 17)   {
        document.getElementById("black").style.display = "none"
        document.getElementById("prolog").style.display = "none"
        say += 1;
    } 
    else {
        document.getElementById("textbox").innerHTML = "Error"
    }

}

function select1()  {
    document.getElementById("textbox").innerHTML = "* ???:뭐...뭐야! 어딜 감히 그냥"
    say += 1;
    document.getElementById("select1").style.display = "none"
    document.getElementById("select2").style.display = "none"
    document.getElementById("black").style.display = "none"
}
function select2()  {
    document.getElementById("textbox").innerHTML = "* (그래 일단 부터 알아야 대화가 편해지겠지)"
    say += 2;
    document.getElementById("select1").style.display = "none"
    document.getElementById("select2").style.display = "none"
    document.getElementById("black").style.display = "none"
}