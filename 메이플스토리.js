// 메이플스토리 캐릭터 객체
// key : value 쌍으로 이루어져 있음
var character = {
    hp: 50,
    mp: 100,
    job: "마법사",
    nickname: "honey",

    attack: function () {
        console.log("공격!!");
    }
}






// 출력 시 전체 property가 출력 됨
// { hp: 50,
//     mp: 100,
//     job: '마법사',
//     nickname: 'honey',
//     attack: [Function: attack] }
console.log(character);

// 배열과 다르게 key 값으로 value에 접근이 가능
console.log(character['hp']); // 50
console.log(character['mp']); // 100
console.log(character['job']); // 마법사

// 객체 내부의 함수(메서드)는 변수 이름.메서드(); 로 실행가능
character.attack(); // 공격!!

// 이렇게 객체에 값을 추가할 수 있음
character.level = 30;

// hp: 50,
// mp: 100,
// job: '마법사',
// nickname: 'honey',
// attack: [Function: attack],
// level: 30 }   <-- 레벨이 추가 됨
console.log(character);

// 객체의 property는 this로 접근이 가능
// this를 사용한 메서드를 새로운 property로 추가해줌
character.speakMyInfo = function () {
    console.log("나의 직업은 " + this.job + "입니다.");
    console.log("나의 레벨은 " + this.level + "입니다.");
}


// 나의 직업은 마법사입니다.
// 나의 레벨은 30입니다.
character.speakMyInfo();

// property 값의 변경도 가능
character['level'] += 1;

// 1레벨이 더해져서 31레벨이 됨
console.log(character['level']);

// 하지만 더해지는 행위는 게임에서 레벨업이라는 '기능'으로 존재하기 때문에
// 메서드로 구현하는 것이 옳음
// 자신의 레벨에 접근해서 +1을 해주는 메서드를 구현
character.levelUp = function () {
    this.level += 1;
}

// 실행 레벨업을 함
character.levelUp();

// 레벨이 1 올라서 32가 됨
// character['level'] 뿐만 아니라 character.level로도 접근이 가능!
console.log(character.level);

// 생성자는 객체를 만드는 공장임
// 위에선 다른 캐릭터를 만드려면 일일이 객체를 만들어 줘야 하지만
// 생성자를 만들면 공장에서 인형 만들 듯 찍어낼 수 있음
function MapleCharacter(job, nickname){
    this.hp = 50;
    this.mp = 50;
    this.level = 10;
    this.job = job;
    this.nickname = nickname;

    this.attack = function(){
        console.log(this.nickname + '님의 공격!!');
    }
}

// new 생성자(매개변수)로 4개의 캐릭터를 만듦
var character_1 = new MapleCharacter('전사', '윤정');
var character_2 = new MapleCharacter('궁수', '동현');
var character_3 = new MapleCharacter('마법사', '선영');
var character_4 = new MapleCharacter('도적', '부화');

// 게임에서 캐릭터는 생성자를 통해 이렇게 생성이 됨!
// 와 신기하다!!!! 
console.log(character_1);
console.log(character_2);
console.log(character_3);
console.log(character_4);

// 와 신기해!!!!!!!!
character_1.attack();
character_2.attack();
character_3.attack();
character_4.attack();