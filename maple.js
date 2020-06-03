var character = {
    hp: 50,
    mp: 100,
    job: "마법사",
    nickname: "honey",

    attack: function () {
        console.log("공격!!");
    }

}

console.log(character);

console.log(character['hp']);
console.log(character['mp']);
console.log(character['job']);

character.attack();

character.level = 30;

console.log(character);

character.speakMyInfo = function () {
    console.log("나의 직업은 " + this.job + "입니다.");
    console.log("나의 레벨은 " + this.level + "입니다.");
    console.log("나의 이름은 " + this.nickname + "입니다.");


}
character.speakMyInfo();

character['level'] += 1;

console.log(character['level']);

character.levelUp = function() {
    this.level += 1;
}

character.levelUp();

console.log(character.level);
console.log(character['level']);

function MapleCharacter(job, nickname){
    this.hp = 50;
    this.mp = 50;
    this.lever = 10;
    this.job = job;
    this.nickname = nickname;

    this.attack = function(){
        console.log(this.nickname + '님의 공격!!');
    }
}

var character_1 = new MapleCharacter('전사', '윤정');
var character_2 = new MapleCharacter('궁수', '동현');
var character_3 = new MapleCharacter('마법사', '선영');
var character_4 = new MapleCharacter('도적', '부화');

console.log(character_1);
console.log(character_2);
console.log(character_3);
console.log(character_4);

character_1.attack();
character_2.attack();
character_3.attack();
character_4.attack();
