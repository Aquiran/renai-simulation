var say = 0

function next() {
    if (say == 0) {
        document.getElementById("talk").innerHTML = "  <br> 【 은식 】<br> <br> 그게... "
        document.getElementById("sik").style.opacity = " 1 "
        say += 1;
    }
    else if (say == 1) {
        document.getElementById("talk").innerHTML = "  <br> 【 은식 】<br> <br> 우리가 알고 지낸지 벌써 4년이잖아..."
        say += 1;
    }
    else if (say == 2) {
        document.getElementById("talk").innerHTML = "  <br> 【 태성 】<br> <br> (뭐지?) 어...근데?"
        say += 1;
    }
    else if (say == 3) {
        document.getElementById("talk").innerHTML = "  <br> 【 은식 】<br> <br> 사실...오래전부터 너를 좋아했어!!!"
        say += 1;
    }
    else if (say == 4) {
        document.getElementById("talk").innerHTML = " <br> ??? "
        setTimeout(() => {
            document.getElementById("talk").innerHTML = "  <br> 【 태성 】<br> <br> (지금 저게 무슨 소리야???)"
        }, 600);
        say += 1;
    }
    else if (say == 5) {
        document.getElementById("talk").innerHTML = " <br>【 은식 】<br> <br> 너가 나를 알기 전부터 계속....좋아해왔어!!"
        say += 1;
    }
    else if (say == 6) {
        document.getElementById("talk").innerHTML = " <br>【 태성 】<br> <br> ...그럼 나랑 친해진 것도..?"
        say += 1;
    }
    else if (say == 7) {
        document.getElementById("talk").innerHTML = "  <br> 【 은식 】<br> <br> 맞아...너가 좋아서 필사적으로 눈에 띄고 싶었어."
        say += 1;
    }
    else if (say == 8) {
        document.getElementById("talk").innerHTML = "  <br> 【 태성 】<br> <br> (아니라고 믿고싶었다..내친구가 게이(gay)라니!!그것도 상대가 나라니!!!)"
        say += 1;
    }
    else if (say == 9) {
        document.getElementById("talk").innerHTML = " <br>【 태성 】<br> <br> 아...아아아아아아아아아!!!!!!!!!"
        say += 1;
    }
    else if (say == 10) {
        document.getElementById("sik").style.opacity = " 0 "
        setTimeout(() => {
            document.getElementById("school").style.opacity = " 0 "
            document.getElementById("talk").style.opacity = " 0 "
            document.getElementById("line").style.opacity = " 0 "
            document.getElementById("next").style.opacity = " 0 "
            document.getElementById("white").style.opacity = " 1 "
            document.getElementById("next").style.display = " none "
        }, 500);
        setTimeout(() => {
            document.getElementById("white").style.opacity = " 0 "
            document.getElementById("school").style.opacity = " 0 "
            document.getElementById("talk").style.opacity = " 1 "
            document.getElementById("line").style.opacity = " 1 "
            document.getElementById("next").style.opacity = " 1 "
            document.getElementById("myroom").style.opacity = " 1 " 
            document.getElementById("next").style.display = " block "
        }, 2000);
        setTimeout(() => {
            document.getElementById("talk").innerHTML = " <br>【 태성 】<br> <br> 헉....헉헉...헉....후~"
        }, 2000);
        say += 1;
    }
    else if (say == 11) {
        document.getElementById("talk").innerHTML = "  <br> 【 태성 】<br> <br> 악몽인가?..하필 그 때의 기억이라니.."
        say += 1;
    }
    else if (say == 12) {
        document.getElementById("talk").innerHTML = " <br> (그때의 기억 떄문에 나는 인간관계 그자체를 두려워하게 되었고, <br>지금까지 집에서 히키코모리 생활을 하게 되었다.)"
        say += 1;
    }
    else if (say == 13) {
        document.getElementById("talk").innerHTML = "  <br> 【 태성 】<br> <br> 그러고보니 이제 곧 크리스마스였나? "
        say += 1;
    }
    else if (say == 14) {
        document.getElementById("talk").innerHTML = " <br> [크리스마스]....사람과 만나는 것이 두려운 나에게는 지옥과도 같은 날이다."
        say += 1
    }
    else if (say == 15) {
        document.getElementById("talk").innerHTML = " <br> 【 태성 】<br> <br> 이번 크리스마스도 그냥 집에 있자~ "
        say += 1
    }
    else if (say == 16) {
        document.getElementById("talk").innerHTML = " <br> 그렇게 생각하고 누워있었더니...."
        say += 1
    }
    else if (say == 17) {
        document.getElementById("phone").style.opacity = "1"
        document.getElementById("talk").innerHTML = "<br> 웅~~웅~~"
        say += 1
    }
    else if (say == 18) {
        document.getElementById("talk").innerHTML = "<br> 【 김준 】<br> <br> 야 이제 곧 크리스마스인데 놀러나가자."
        say += 1
    }
    else if (say == 19) {
        document.getElementById("talk").innerHTML = "<br> 【 태성 】<br> <br> 아니..이런 날에는 사람들이 몰리잖아...차라리 집에 있는게 더 편하고 좋아."
        say += 1
    }
    else if (say == 20) {
        document.getElementById("talk").innerHTML = "<br> 【 김준 】<br> <br> 그런 소리 하지 말고 나가자.<br>8시 30분까지 공원으로 와.<br>이런 날에라도 나가서 놀아야지."
        say += 1
    }
    else if (say == 21) {
        setTimeout(() => {
            document.getElementById("phone").style.opacity = "0"
        }, 1500);
        document.getElementById("talk").innerHTML = "<br> 【 태성 】<br> <br> 하...알았어.준비해야 되니까 끊는다."
        say += 1
    }
    else if (say == 22) {
        document.getElementById("talk").innerHTML = "<br> [김준]...내가 18년 인생에서 사귄 유일한 친구이다."
        say += 1
    }
    else if (say == 23) {
        document.getElementById("talk").innerHTML = "<br> 학교에는 나가고 있지만 말을 거의 하지 않고 <br> 귀가부로써 부활동을 충실히 수행하는 나로써는 <br> 악의없이 나에게 다가와준 그녀석은 지금 내 가장 소중한 친구이다. "
        say += 1
    }
    else if (say == 24) {
        document.getElementById("talk").innerHTML = "<br> 【 태성 】<br> <br> 어쩔 수 없나?. "
        say += 1
    }
    else if (say == 25) {
        document.getElementById("talk").innerHTML = "<br> (나는 밖으로 나갔다)"
        setTimeout(() => {
            document.getElementById("myroom").style.opacity = " 0 "
            document.getElementById("talk").style.opacity = " 0 "
            document.getElementById("line").style.opacity = " 0 "
            document.getElementById("next").style.opacity = " 0 "
            document.getElementById("next").style.display = " none "
            
        }, 0);
        setTimeout(() => {
            document.getElementById("street1").style.opacity = " 1 "
            document.getElementById("talk").style.opacity = " 1 "
            document.getElementById("line").style.opacity = " 1 "
            document.getElementById("next").style.opacity = " 1 "
            document.getElementById("next").style.display = " block "
        }, 1000);
        say += 1
    }
    else if (say == 26) {
        document.getElementById("talk").innerHTML = "<br> 【 태성 】<br> <br> 왠일로 이시간에 사람들이 없지? "
        say += 1
    }
    else if (say == 27) {
        document.getElementById("talk").innerHTML = "<br> 평소에도 이렇게까지 사람이 없지는 않다.<br>...하물며 오늘은 '12월 23일'이다.<br>거리에 아무도 없는 이 상황은 굉장히 부자연스럽다."
        say += 1
    }
    else if (say == 28) {
        document.getElementById("talk").innerHTML = "<br> 【 태성 】<br> <br> 뭐 나야 좋지만... "
        say += 1
    }
    else if (say == 29) {
        document.getElementById("talk").innerHTML = "<br> 그럼에도 안심할 수 없었던 나는 '김준'에게 전화해 보려고 전화기를 꺼냈다. "
        say += 1
    }
    else if (say == 30) {
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
            document.getElementById("talk").innerHTML = "<br> 발자국소리...같으면서도 무언가 이질감이 느껴지는 소리가 들린다. "
        }, 2000);
    }
    else if (say == 31) {
        document.getElementById("krampus").style.opacity = " 1 "
        document.getElementById("talk").innerHTML = "<br> 【 태성 】<br> <br> 산타?"
        say += 1
    }
    else if (say == 32) {
        document.getElementById("talk").innerHTML = "<br> 아니야...저건.."
        document.getElementById("talk").style.fontsize = "50px"
        document.getElementById("talk").style.color = "red"
        say += 1
    }
    else if (say == 33) {
        document.getElementById("talk").innerHTML = "<br> 생각할 틈 없이 눈앞의 괴물을 나를 공격해온다."
        document.getElementById("talk").style.fontsize = "35px"
        document.getElementById("talk").style.color = "white"
        say += 1
    }
    else if (say == 34) {
        document.getElementById("talk").innerHTML = "<br> 나는..."
        setTimeout(() => {
            document.getElementById("black").style.opacity = " 1 "
            document.getElementById("attack").style.opacity = " 1 "
            document.getElementById("runover").style.opacity = " 1 "
            document.getElementById("attack").style.display = "block"
            document.getElementById("runover").style.display = "block"
            document.getElementById("talk").style.opacity = " 0 "
            document.getElementById("line").style.opacity = " 0 "
            document.getElementById("next").style.opacity = " 0 "
        }, 800);
    }
    else if (say == 35) {
        document.getElementById("talk").innerHTML = "<br> 【 태성 】<br> <br> (위험해...저건 인간이 아니야...)"
        say += 2
    }
    else if (say == 36) {
        document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> 상식적으로 저런 괴물이랑 싸우는건 무리야!!!!!!"
        say += 2
    }
    else if (say == 37) {
        setTimeout(() => {
            document.getElementById("talk").style.fontsize = "50px"
            document.getElementById("talk").style.color = "red"
            document.getElementById("allred").style.opacity = " 1 "
            document.getElementById("talk").innerHTML = "<br>【 태성 】<br> <br> 커흑"
            document.getElementById("talk").style.opacity = " 0 "
            document.getElementById("line").style.opacity = " 0 "
            document.getElementById("next").style.opacity = " 0 "
            document.getElementById("next").style.display = " none "
        }, 0);
        setTimeout(() => {
            document.getElementById("allred").style.opacity = " 0 "
            document.getElementById("talk").style.opacity = " 1 "
            document.getElementById("line").style.opacity = " 1 "
            document.getElementById("next").style.opacity = " 1 "
            document.getElementById("next").style.display = " block"
        }, 1000);
        say += 2
    }
    else if (say == 38) {
        document.getElementById("talk").innerHTML = "<br> 필사적으로 도망치지만 괴물과의 거리는 점점 좁혀져만 간다."
        say += 2
    }
    else if (say == 39) {
        document.getElementById("talk").style.fontsize = "35px"
        document.getElementById("talk").style.color = "white"
        document.getElementById("talk").innerHTML = "<br> 나는 그대로 정신을 잃고 쓰러졌다."
        say += 2
    }
    else if (say == 40) {
        document.getElementById("talk").innerHTML = "<br>  【 태성 】<br> <br> 저게 모두가 사라진 원흉인가?"
        say += 2
    }
    else if (say == 41) {
        setTimeout(() => {
            document.getElementById("krampus").style.opacity = " 0 "
            document.getElementById("street1").style.opacity = " 0 "
            document.getElementById("talk").style.opacity = " 0 "
            document.getElementById("line").style.opacity = " 0 "
            document.getElementById("next").style.opacity = " 0 "
            document.getElementById("white").style.opacity = " 1 "
        }, 0);
        setTimeout(() => {
            document.getElementById("white").style.opacity = " 0 "
            document.getElementById("talk").style.opacity = " 1 "
            document.getElementById("line").style.opacity = " 1 "
            document.getElementById("next").style.opacity = " 1 "
            document.getElementById("myroom").style.opacity = " 1 "
            document.getElementById("talk").innerHTML = " <br> 【 태성 】<br> <br> 아무리 크리스마스라도 집 밖은 위험해...<br>특히 사람이 많이 몰리는 이런 날에는..."
        }, 3000);
        say += 2;
    }
    else if (say == 42) {
        document.getElementById("talk").innerHTML = "<br>  【 태성 】<br> <br> (아니..만약 그렇다면 이곳엔 이미 수많은 시체들이 있어야해)"
        say += 2
    }
    else if (say == 43) {
        document.getElementById("phone").style.opacity = "1"
        document.getElementById("talk").innerHTML = "<br> 웅~~웅~~"
        say += 2
    }

    else if (say == 44) {
        document.getElementById("talk").innerHTML = "<br>거리는 더 가까워져 괴물이 내 머리에 팔을 뻗는다."
        say += 2
    }
    else if (say == 45) {
        document.getElementById("talk").innerHTML = "<br> 【 김준 】<br> <br> 야 이제 곧 크리스마스인데 놀러나가자."
        say += 2
    }
    else if (say == 46) {
        document.getElementById("talk").innerHTML = "<br> 【 태성 】<br> <br> 히익!!"
        say += 2
    }
    else if (say == 47) {
        document.getElementById("talk").innerHTML = "<br> 【 태성 】<br> <br> 너 혼자가...나까지 끌러들일 생각하지 말고. <br> 가고싶으면 혼자 가면 되잖아?"
        say += 2
    }
    else if (say == 48) {
        document.getElementById("talk").innerHTML = "<br> 【 ??? 】<br> <br>...고개 숙여"
        say += 2
    }
    else if (say == 49) {
        document.getElementById("talk").innerHTML = "<br> 【 김준 】<br> <br> 왜그래? 갑자기 화나서는...아프냐?"
        say += 2
    }
    else if (say == 50) {
        document.getElementById("talk").innerHTML = " <br> 반사적으로 고개를 숙이자 앞에서 나이프 하나가 날아왔다."
        say += 2
    }
    else if (say == 51) {
        document.getElementById("talk").innerHTML = " <br> 【 태성 】<br> <br> 나한테 신경꺼...너 가고싶은데 혼자서 가라고."
        say += 2
    }
    else if (say == 52) {
        document.getElementById("talk").innerHTML = " <br> 괴물은 당연하다는 듯이 나이프를 피하고는 어둠속으로 사라진다."
        setTimeout(() => {
            document.getElementById("krampus").style.opacity = "0"
        }, 500);
        say += 2
    }
    else if (say == 53) {
        setTimeout(() => {
            document.getElementById("talk").innerHTML = " <br> 【 김준 】<br> <br> 뭐?...알았어."
        }, 0); 
        setTimeout(() => {
            document.getElementById("phone").style.opacity = "0"
        }, 500); 
        say += 2
    }
    else if (say == 54) {
        document.getElementById("talk").innerHTML = " <br> 【 태성 】<br> <br> 사라졌어...방금 그 목소리는.."
        say += 2
    }
    else if (say == 55) {
        document.getElementById("talk").innerHTML = " <br> 【 태성 】<br> <br> 그래...이제 사람은 지긋지긋해...<br>믿을 수 있는건..오직 '나'뿐이야..."
        say += 2
    }
    else if (say == 56) {
        document.getElementById("talk").innerHTML = " <br> 목소리가 들린 곳에서 @@한 사람이 등장한다."
        //이곳에 히로인 사진이 들어갈 거임//
        say += 2
    }
    else if (say == 57) {
        document.getElementById("black").style.opacity = "1"
        document.getElementById("badend1").style.opacity = "1"
        document.getElementById("badend1").style.display = "block"
        document.getElementById("talk").style.opacity = " 0 "
        document.getElementById("line").style.opacity = " 0 "
        document.getElementById("next").style.opacity = " 0 "
    }
    else if (say == 58) {
        document.getElementById("talk").innerHTML = " <br> 【 ??? 】<br> <br> 다친데 없어?"
        say += 1
    }
    else if (say == 59) {
        document.getElementById("talk").innerHTML = " <br> 【 태성 】<br> <br> 아!! 네...감사합ㄴ..."
        say += 1
    }
    else if (say == 60) {
        document.getElementById("talk").innerHTML = " <br> 갑자기 다리에 힘이 풀렸다...혹시?"
        say += 1
    }
    else if (say == 61) {
        document.getElementById("talk").innerHTML = " <br> 【 태성 】<br> <br> (어?? 설마...저 괴물한테 닿은건가?)"
        say += 1
    }
    else if (say == 62) {
        setTimeout(() => {
            document.getElementById("talk").style.fontsize = "50px"
        document.getElementById("talk").style.color = "red"
        document.getElementById("allred").style.opacity = " 1 "
        document.getElementById("talk").style.opacity = " 0 "
        document.getElementById("line").style.opacity = " 0 "
        document.getElementById("next").style.opacity = " 0 "
        }, 0);
        setTimeout(() => {
            document.getElementById("talk").innerHTML = " <br> 아프다 아프다 아프다 아프다 아프다 아프다 아프다 아프다 아프다 아프다<br> 아프다 아프다 아프다 아프다 아프다 아프다 아프다 아프다 아프다 아프다<br> 아프다 아프다 아프다 아프다 아프다 아프다 아프다 아프다 아프다 아프다<br> 아프다 아프다 아프다 아프다 아프다 아프다 아프다 아프다 아프다 아프다"
            document.getElementById("allred").style.opacity = " 0 "
            document.getElementById("talk").style.opacity = " 1 "
            document.getElementById("line").style.opacity = " 1 "
            document.getElementById("next").style.opacity = " 1 "
        }, 2000);
        say += 1
    }
    else if (say == 63) {
        document.getElementById("talk").style.fontsize = "35px"
        document.getElementById("talk").style.color = "white"
        document.getElementById("talk").innerHTML = " <br> 【 ??? 】<br> <br> 닿았구나...운이 나쁘네.<br> 하필 저 녀석이라니..."
        say += 1
    }
    else if (say == 64) {
        document.getElementById("talk").innerHTML = " <br> 【 ??? 】<br> <br> 지켜주고 있을 테니까 빨리 돌아와."
        say += 1
    }
    else if (say == 65) {
        document.getElementById("talk").innerHTML = " <br> 그 말을 끝으로 내 의식은 날아갔다."
        say += 1
    }
    else if (say == 66) {
            document.getElementById("talk").style.opacity = " 0 "
            document.getElementById("line").style.opacity = " 0 "
            document.getElementById("next").style.opacity = " 0 "
            document.getElementById("prolog").style.opacity = "1"
            document.getElementById("prolog").style.display = "block"
            document.getElementById("black").style.opacity = "1"
    }
    else {
        document.getElementById("talk").innerHTML = "Error"
        document.getElementById("talk").style.fontSize = "50px"
        document.getElementById("talk").style.color = "red"
    }
}

function attack() {
    document.getElementById("talk").innerHTML = "<br> 몸이 먼저 반응했다."
    say += 1;
    document.getElementById("attack").style.opacity = "0"
    document.getElementById("runover").style.opacity = "0"
    document.getElementById("black").style.opacity = "0"
    document.getElementById("attack").style.display = "none"
    document.getElementById("runover").style.display = "none"
    document.getElementById("talk").style.opacity = " 1 "
    document.getElementById("line").style.opacity = " 1 "
    document.getElementById("next").style.opacity = " 1 "
}
function runover() {
    document.getElementById("talk").innerHTML = "<br> 저건 인간이 아니다...내 힘으로 이길 수 있을지 모르겠다."
    say += 2;
    document.getElementById("attack").style.opacity = "0"
    document.getElementById("attack").style.display = "none"
    document.getElementById("runover").style.display = "none"
    document.getElementById("black").style.opacity = "0"
    document.getElementById("talk").style.opacity = " 1 "
    document.getElementById("line").style.opacity = " 1 "
    document.getElementById("next").style.opacity = " 1 "
}

function bad() {
    window.location = "title.html" ;
}

function prolog()   {
    window.location = "chapter1.html"
}