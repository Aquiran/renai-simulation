var say = 0

function next() {
    if (say == 0) {
        say += 1
        setTimeout(() => {
            document.getElementById("white").style.opacity = " 1 "
            document.getElementById("talk").style.opacity = " 0 "
            document.getElementById("line").style.opacity = " 0 "
            document.getElementById("next").style.opacity = " 0 "
            document.getElementById("next").style.display = " none "
        }, 500);
        setTimeout(() => {
            document.getElementById("white").style.opacity = " 0 "
        }, 1000);
        setTimeout(() => {
            document.getElementById("white").style.opacity = " 1 "
        }, 1500);
        setTimeout(() => {
            document.getElementById("white").style.opacity = " 0 "
            document.getElementById("talk").style.opacity = " 1 "
            document.getElementById("line").style.opacity = " 1 "
            document.getElementById("next").style.opacity = " 1 "
            document.getElementById("next").style.display = " block "
            document.getElementById("talk").innerHTML = "<br> 발자국 소리가 들린다... "
        }, 2000);
    }
    else if(say == 1)   {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br>설마...아까 그 괴물이 나를 쫓아온건가?"
        say += 1
    }
    else if(say == 2)   {
        document.getElementById("talk").innerHTML = "<br>【 은식 】<br> <br> 안녕?? 태성아?"
        document.getElementById("sik").style.opacity = " 1 "
        say += 1
    }
    else if(say == 3)   {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> 괴물보다 더 하잖아!!!"
        say += 1
    }
    else if(say == 4)   {
        document.getElementById("talk").innerHTML = "<br>【 은식 】<br> <br> 중학교 때 헤어진 이후로도 계속 찾아다녔어..."
        say += 1
    }
    else if(say == 5)   {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> 꺼져!! XX 스토커 새끼야!!  "
        say += 1
    }
    else if(say == 6)   {
        document.getElementById("talk").innerHTML = "<br>【 은식 】<br><br> 아직도...그렇게 말하는구나..."
        say += 1
    }
    else if(say == 7)   {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> 너 때문에 XX 내인생이 망했으니까!!! "
        say += 1
    }
    else if(say == 8)   {
        document.getElementById("talk").innerHTML = "<br>【 은식 】<br> <br> 하~ 억지로 밀어붙이기는 싫었는데.."
        say += 1
    }
    else if(say == 9)   {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> 뭐? "
        say += 1
    }
    else if(say == 10)   {
        document.getElementById("talk").innerHTML = "<br> 게이(Gay)가 다가온다...(우웩)"
        say += 1
    }
    else if(say == 11)   {
        document.getElementById("talk").innerHTML = "<br> 【 태성 】<br> <br> 오지마!! 이 게이(Gay)새끼야!!!"
        say += 1
    }
    else if(say == 12)   {
        document.getElementById("talk").innerHTML = "<br> 【 은식 】<br> <br> 말했잖아...이렇게까지 하기는 싫었다고..."
        say += 1
    }
    else if(say == 13)   {
        document.getElementById("talk").innerHTML = "<br> 【 태성 】<br> <br> ...더 가까이 오면 죽일거야."
        say += 1
    }
    else if(say == 14)   {
        document.getElementById("talk").innerHTML = "<br> 【 은식 】<br> <br> 오히려 좋아."
        say += 1
    }
    else if(say == 15)   {
        document.getElementById("talk").innerHTML = "<br> 계속 다가오는 '윤은식'을 향해 주먹을 날렸다."
        say += 1
    }
    else if(say == 16)   {
        document.getElementById("talk").innerHTML = "<br> 【 태성 】<br> <br> 맞으면서도 다가온다고??....아니 오히려 좋아하잖아??"
        say += 1
    }
    else if(say == 17)   {
        document.getElementById("talk").innerHTML = "<br> 이젠 다 싫다...이건 꿈이다..그냥 악몽일 뿐이다..."
        say += 1;
    }
    else if(say == 18)  {
        document.getElementById("talk").style.fontsize = "50px"
        document.getElementById("talk").style.color = "red"
        document.getElementById("talk").innerHTML = "<br>깨어나라 깨어나라 깨어나라 깨어나라 깨어나라 깨어나라 깨어나라<br>깨어나라 깨어나라 깨어나라 깨어나라 깨어나라 깨어나라 깨어나라<br>깨어나라 깨어나라 깨어나라 깨어나라 깨어나라 깨어나라 깨어나라<br>깨어나라 깨어나라 깨어나라 깨어나라 깨어나라 깨어나라 깨어나라"
        say += 1;
    }
    else if(say == 19)  {
        setTimeout(() => {
            document.getElementById("allblack").style.opacity = " 0 "
            document.getElementById("sik").style.opacity = " 0 "
            document.getElementById("white").style.opacity = " 1 "
            document.getElementById("talk").style.opacity = " 0 "
            document.getElementById("line").style.opacity = " 0 "
            document.getElementById("next").style.opacity = " 0 "
            document.getElementById("next").style.display = " none "
        }, 0);
        setTimeout(() => {
            document.getElementById("white").style.opacity = " 0 "
            document.getElementById("subway").style.opacity = " 1 "
            document.getElementById("talk").style.fontsize = "35px"
            document.getElementById("talk").style.color = "white"
            document.getElementById("talk").innerHTML = "<br> ???"
            document.getElementById("talk").style.opacity = " 1 "
            document.getElementById("line").style.opacity = " 1 "
            document.getElementById("next").style.opacity = " 1 "
            document.getElementById("next").style.display = " block"
        }, 1500);
        say += 1;
    }
    else if(say == 20)   {
        document.getElementById("talk").innerHTML = "<br> 【 태성 】<br> <br> 진짜 꿈인가 보네..."
        say += 0.5;
    }
    else if(say == 20.5)  {
        document.getElementById("talk").style.opacity = " 0 "
        document.getElementById("line").style.opacity = " 0 "
        document.getElementById("next").style.opacity = " 0 "
        document.getElementById("chapter1").style.opacity = "1"
        document.getElementById("chapter1").style.display = "block"
        document.getElementById("next").style.display = "none"
        document.getElementById("black").style.opacity = "1"
    }
    else if(say == 21)   {
        document.getElementById("talk").innerHTML = "<br> 하루에 악몽을 2번이나 꾸다니... <br> <br> 그 사람 말대로 오늘은 운이 안좋나보다..."
        say += 1;
    }
    else if(say == 22)   {
        document.getElementById("talk").innerHTML = "<br> 【 태성 】<br> <br> 여기는...지하철인가?"
        say += 1;
    }
    else if(say == 23)   {
        document.getElementById("talk").innerHTML = "<br> 【 ??? 】<br> <br> 늦어..."
        say += 1;
    }
    else if(say == 24)   {
        document.getElementById("standing1").style.opacity = "0"
        document.getElementById("talk").innerHTML = "<br> ...모르는 사람이 나를 내려다보고 있다."
        say += 1;
    }
    else if(say == 25)   {
        document.getElementById("standing1").style.opacity = "1"
        document.getElementById("talk").innerHTML = "<br> 아...기다리고 있었구나..."
        say += 1;
    }
    else if(say == 26)   {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> 죄송해요...악몽을 꿔서.. "
        say += 1;
    }
    else if(say == 27)   {
        document.getElementById("talk").innerHTML = "<br>【 ??? 】<br> <br> 그정도는 알고있어...그래서 일찍 돌아오라고 했는데..."
        say += 1;
    }
    else if(say == 28)   {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> 네...? 제가 악몽을 꿀 걸 알고 있었어요?"
        say += 1;
    }
    else if(say == 29)   {
        document.getElementById("talk").innerHTML = "<br>【 ??? 】<br> <br> 크람푸스한테 닿았잖아.. 그 녀석한테 닿으면 닿은 사람의 트라우마를 보여주거든..."
        say += 1;
    }
    else if(say == 30)   {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> 크람푸스?"
        say += 1;
    }
    else if(say == 31)   {
        document.getElementById("talk").innerHTML = "<br> 지금까지 일어난 일들이 너무 갑작스러워서 가장 중요한 질문을 잊고있었다."
        say += 1;
    }
    else if(say == 32)   {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> 맞아! 여긴 어디고 아까 그 괴물은 뭐죠?"
        say += 1;
    }
    else if(say == 33)   {
        document.getElementById("talk").innerHTML = "<br>【 ??? 】<br> <br> 참 빨리도 물어보는구나...."
        say += 0.5;
    }
    else if(say == 33.5)   {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> 지금까지 일어난 일들이 너무 갑작스러워서...."
        say += 0.5;
    }
    else if(say == 34)   {
        document.getElementById("talk").innerHTML = "<br>【 하윤 】<br> <br> 뭐...일단 자기소개부터 할까?<br>나는 '이하윤'이야."
        say += 1;
    }
    else if(say == 35)   {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> 저는 전태성이에요.지금 18살이고 밖에 나왔다가<br>아까 그 괴물을 마주쳐서 도망다니고 있었어요."
        say += 1;
    }
    else if(say == 36)  {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> 저는 전태성이에요.지금 18살이고 밖에 나왔다가<br>아까 그 괴물을 마주쳐서 도망다니고 있었어요."
        say += 1;
    }
    else if(say == 37)  {
        document.getElementById("talk").innerHTML = "<br>【 하윤 】<br> <br> 나는 19살이니까 너보다 연상이네?...그럼 나를'누나'라고 불러."
        say += 1;
    }
    else if(say == 38)  {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> 네?...아니..'누나'라니요...모르는 사람한테.."
        say += 1;
    }
    else if(say == 39)  {
        document.getElementById("talk").innerHTML = "<br>【 하윤 】<br> <br> 괜찮아~ 오히려 나는 외동이라서 항상 동생이 있었으면 했거든."
        say += 1;
    }
    else if(say == 40)  {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> 아니...그래도..."
        say += 1;
    }
    else if(say == 41)  {
        document.getElementById("talk").innerHTML = "<br>【 하윤 】<br> <br> 『괜찮으니까 누나라고 불러』"
        say += 1;
    }
    else if(say == 42)  {
        document.getElementById("talk").innerHTML = "<br> 싫다고 하면 한 대 때릴 기세다...어쩔 수 없나?"
        say += 1;
    }
    else if(say == 43)  {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> 알겠어요 누나...그래서 여기는 어디죠?"
        say += 1;
    }
    else if(say == 44)  {
        document.getElementById("talk").innerHTML = "<br>【 하윤 】<br> <br> 그전에 혹시 크람푸스에 대해서 알고있어?"
        say += 1;
    }
    else if(say == 45)  {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> 네?...아니요,전혀 몰라요."
        say += 1;
    }
    else if(say == 46)  {
        document.getElementById("talk").innerHTML = "<br>【 하윤 】<br> <br> 역시 그런가...크람푸스는 성탄절 기간동안 착한 행동을 한 어린이에게 <br>선물을 주는 산타클로스와 정반대로 <br>나쁜 행동을 한 어린이에게 벌을 내리는 괴물이야."
        say += 1;
    }
    else if(say == 47)  {
        document.getElementById("talk").innerHTML = "<br>【 하윤 】<br> <br> 지금 이 세계는 이곳에 들어온 아이들의 트라우마가 구현된 세계야."
        say += 1;
    }
    else if(say == 48)  {
        document.getElementById("talk").innerHTML = "<br>【 하윤 】<br> <br> 그리고 어째서인지 이곳에는 트라우마와 같이 크람푸스도 존재하지..."
        say += 1;
    }
    else if(say == 49)  {
        document.getElementById("talk").innerHTML = "<br>【 하윤 】<br> <br> 너가 이곳에 온 날은 크리스마스까지 얼마 남지 않았었지?"
        say += 1;
    }
    else if(say == 50)  {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> 네...정확히 크리스마스 이틀전 12월 23일에 이곳에 왔을거에요."
        say += 1;
    }
    else if(say == 51)  {
        document.getElementById("talk").innerHTML = "<br>【 하윤 】<br> <br> 크리스마스가 가까워지면 이곳으로 트라우마를 가진 아이들이 들어와..."
        say += 0.5;
    }
    else if(say == 51.5)  {
        document.getElementById("talk").innerHTML = "<br>【 하윤 】<br> <br> 가지고있는 트라우마가 강하면 강할수록 이곳에 들어올 가능성은 높아져."
        say += 0.5;
    }
    else if(say == 52)  {
        document.getElementById("talk").innerHTML = "<br>【 하윤 】<br> <br> 도대체 무슨 이유에서 이런 세계가 만들어 졌는지는 모르겠지만 <br> 이곳에 들어온 사람들은 이곳을 Nightmare라고 부르고있었어."
        say += 1;
    }
    else if(say == 53)  {
        document.getElementById("talk").innerHTML = "<br>【 하윤 】<br> <br> 지금까지는 크람푸스가 아이들을 이곳으로 납치해서<br>괴롭히고 있다는 정도로 이곳을 보고있어."
        say += 1;
    }
    else if(say == 54)  {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> 잠시만요,크람푸스는 나쁜 아이에게 벌을 주는 존재라고 했잖아요.<br>그런데...어째서 트라우마를 가진 아이들을 이곳으로 불러들이는거죠?"
        say += 1;
    }
    else if(say == 55)  {
        document.getElementById("talk").innerHTML = "<br>【 하윤 】<br> <br> 나도 거기까지는 모르겠어...애초에 저 괴물을 크람푸스라고 생각하는 것도<br>괴물의 외형과 크리스마스라는 것 때문이고...저것도 누군가의 트라우마 일지도 모르지. "
        say += 0.5;
    }
    else if(say == 55.5)  {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> (겨우 그정도의 정보로 저 괴물을 크람푸스라고 확신한 것은<br>수상하다.무언가 숨기는게 있는 듯 하지만..) "
        say += 0.5;
    }
    else if(say == 56)  {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> ...그럼 일단 나중에 생각해도록 하고<br>저 괴물을 쓰러트리면 현실로 돌아갈 수 있는 건가요?"
        say += 1;
    }
    else if(say == 57)  {
        document.getElementById("talk").innerHTML = "<br>【 하윤 】<br> <br> 아니...전에 이곳에 있었던 사람은 자신의 트라우마가 <br>형상화된 괴물을 쓰러트리면 돌아갈 수 있다고 말했어."
        say += 1;
    }
    else if(say == 58)  {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> 그러니까 트라우마의 극복이 Nightmare를 탈출하는 방법이라는 건가요?"
        say += 1;
    }
    else if(say == 59)  {
        document.getElementById("talk").innerHTML = "<br>【 하윤 】<br> <br> 그래..."
        say += 0.5;
    }
    else if(say == 59.5)  {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> (큰일이다...도저히 내 트라우마를 극복할 용기가 안나..)"
        say += 0.5;
    }
    else if(say == 60)  {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> 누나는 이곳에 들어온지 얼마나 지났어요?"
        say += 1;
    }
    else if(say == 61)  {
        document.getElementById("talk").innerHTML = "<br>【 하윤 】<br> <br> 나는 작년 크리스마스이브에 들어왔어."
        say += 1;
    }
    else if(say == 62)  {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> 네? 그럼 현실에서는 도대체 어떻게...."
        say += 1;
    }
    else if(say == 63)  {
        document.getElementById("talk").innerHTML = "<br>【 하윤 】<br> <br>이곳을 나가게 된다면 여기 들어오기 얼마 전으로 돌아간다고 하더라고<br>그러니까 걱정하지마..괜찮으니까."
        say += 1;
    }
    else if(say == 64)  {
        document.getElementById("talk").innerHTML = "<br> 【 태성 】<br> <br> (수상하다....어떻게 현실에서만 알 수 있는 정보를 알고있지?)"
        say += 1;
    }
    else if(say == 65)  {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> 누나는 혹시 이곳을 나간 적이 있나요?"
        say += 1;
    }
    else if(say == 66)  {
        document.getElementById("talk").innerHTML = "<br>【 하윤 】<br> <br> 아니...이건 그저 다른사람들의 이야기를 들었을 뿐이야."
        say += 1;
    }
    else if(say == 67)  {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> 하지만 그건 이상하잖아요.방금 그 이야기는<br>밖에 나갔다가 이곳에 다시 들어온 사람아니면 이곳에대해 미리 알고있는<br>사람만이 알 수 있는 정보인데.."
        say += 0.5;
    }
    else if(say == 67.5)  {
        document.getElementById("talk").innerHTML = "<br>【 하윤 】<br> <br> ...예리하구나."
        say += 0.5;
    }
    else if(say == 68)  {
        document.getElementById("talk").innerHTML = "<br>【 하윤 】<br> <br> 아까 크람푸스랑 트라우마가 형상화된 괴물이 존재한다고 말했었지?"
        say += 1;
    }
    else if(say == 69)  {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> 네."
        say += 1;
    }
    else if(say == 70)  {
        document.getElementById("talk").innerHTML = "<br>【 하윤 】<br> <br> 이곳에서 죽으면 현실에서 깨어난다고 하더라<br>하지만 이곳에서의 기억은 잃어버리고 평소보다 트라우마가 <br>더욱 강해져서 심하면 생활이 불가능해질 정도라고 하더라고."
        say += 1;
    }
    else if(say == 71)  {
        document.getElementById("talk").innerHTML = "<br>【 하윤 】<br> <br> 이렇게 트라우마가 강해진 사람은 크리스마스가 되면<br>다시 이곳에 돌아올 가능성이 높아지지."
        say += 1;
    }
    else if(say == 72)  {
        document.getElementById("talk").innerHTML = "<br>【 하윤 】<br> <br> 이곳에 돌아오면 다시 이곳에서의 기억과 원래의 성격을 되찾는다 하더라.<br>결국 Nightmare에서 벗어나는 방법은 자신의 <br>트라우마를 극복하는 방법뿐이라는 거지..."
        say += 1;
    }
    else if(say == 73)  {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> 그렇구나..."
        say += 1;
    }
    else if(say == 74)  {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> (그러니까 트라우마를 극복하지 않으면 죽어도 계속되는 무한루프라는 거잖아? <br>누가 이런 악질적인 시스템을 만든거야?)"
        say += 1;
    }
    else if(say == 75)  {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> (누나에게서 들은 정보를 정리하면 대략 이렇다...)"
        say += 1;
    }
    else if(say == 76)  {
        document.getElementById("subway").style.opacity = "0"
        document.getElementById("allblack").style.opacity = "1"
        document.getElementById("talk").style.opacity = " 0 "
        document.getElementById("line").style.opacity = " 0 "
        document.getElementById("next").style.opacity = " 0 "
        document.getElementById("next").style.display = "none"
        document.getElementById("setting").style.opacity = "1"
        document.getElementById("setting").style.display ="block"
        document.getElementById("standing1").style.opacity = "0"
    }
    else if(say == 77)  {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> 대략 이정도인가..."
        say += 1
    }
    else    {
        document.getElementById("talk").innerHTML = "Error";
        document.getElementById("talk").style.fontSize = "50px";
        document.getElementById("talk").style.color = "red";
    }
}

function chapter1() {
    document.getElementById("talk").style.opacity = " 1 "
    document.getElementById("line").style.opacity = " 1 "
    document.getElementById("next").style.opacity = " 1 "
    document.getElementById("chapter1").style.opacity = "0"
    document.getElementById("chapter1").style.display = "none"
    document.getElementById("next").style.display = "block"
    document.getElementById("black").style.opacity = "0"
    say += 0.5;
}

function setting()  {
    document.getElementById("subway").style.opacity = "1"
    document.getElementById("standing1").style.opacity = "1"
    document.getElementById("allblack").style.opacity = "0"
    document.getElementById("talk").style.opacity = " 1 "
    document.getElementById("line").style.opacity = " 1 "
    document.getElementById("next").style.opacity = " 1 "
    document.getElementById("next").style.display = "block"
    document.getElementById("setting").style.opacity = "0"
    document.getElementById("setting").style.display ="none"
    say += 1;
}