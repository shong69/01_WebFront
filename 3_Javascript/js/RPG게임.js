/*플레이어 정보
name(이름), job(직업), gender(성별), level(레벨), hp(체력), 
attack(공격력), defense(방어력), exp(누적경험치), gold(골드),
weapon(무기), armor(방어구)

const player = {
    name: "",
    job: "",
    gender: "",
    level: 1,
    hp: 100,
    attack: 10,
    defense: 5,
    exp: 0,
    gold: 0,
    weapon: null,
    armor: null
  };
*/
/*몬스터 정보
name(이름), hp(체력), attack(공격력), 
defense(방어력), expReward(획득경험치), dropRate(아이템드랍확률)

  const monster = {
    name: "Goblin",
    hp: 20,
    attack: 8,
    defense: 2,
    expReward: 15,
    dropRate: 0.5
  };
*/
/*상점 정보
sword(검), shield(방패), potion(물약) 
  const items = {
    sword: { name: "검", attackBonus: 5, price: 20 },
    shield: { name: "방패", defenseBonus: 3, price: 15 },
    potion: { name: "물약", hpBonus: 20, price: 10 }
  };
*/

  /*
  1. 캐릭터 생성 버튼 클릭 시 
- 입력값에 따라 캐릭터 생성하기
- 입력값에 따라 이미지도 달라지게끔 해야함. (남자_전사 / 남자_마법사 / 여자_전사 / 여자_마법사)
 */

function startGame() {
  const name = prompt("게임을 시작하시겠습니까? 이름을 입력해 주세요");
  if (name.length==0){
    alert("잘못된 시도입니다.");
    startGame();
  };
  
  const gender = prompt("성별을 입력해 주세요(여성 혹은 남성만 입력 가능)");
  if(gender !="여성" && gender!="남성"){
    alert("잘못된 시도입니다. 처음으로 되돌아갑니다.");
    startGame();

  };

  const charClass = prompt("직업을 입력해 주세요(마법사, 전사 중 택1)");
  if(charClass !="마법사" && charClass !="전사"){
    alert("잘못된 선택입니다. 처음으로 되돌아갑니다.")
    startGame();
  };
  alert("정보가 성공적으로 저장되었습니다.")
};

//다중if문으로 이미지 삽입하기+constplay 정보 저장하기

/*
2. 전투시작 버튼 클릭 시 
- 캐릭터가 이전에 생성되지 않았다면 "캐릭터가 생성되지 않았습니다" 경고창 출력
- 전투는 1회당 플레이어의 공격 1번, 몬스터의 공격 1번이 수행되어야 함.
- 데미지는 (공격하는대상의 공격력 - 공격받은대상의 방어력) 으로 계산해야 함.
- 전투할 때 마다 플레이어와 몬스터의 hp 도 매번 갱신되어야 함.
- 플레이어의 hp 가 0보다 작거나 0일 시 "전투에서 패배했습니다." 출력
- 몬스터의 hp 가 0보다 작거나 0일 시 "몬스터를 처치했습니다 ${경험치값} 경험치 획득!" 출력 후 경험치 누적과 골드 누적.
- 몬스터를 처치하고 전투가 종료될 때 마다 난수를 생성하여, 해당 난수가 몬스터의 아이템드랍확률보다 작은 값이면 아이템을 드랍하도록 해야함
- 드랍되는 아이템은 랜덤으로 선택됨. items 객체를 이용하여 무작위로 sword / shield / potion 중 드랍해야함
- 드랍된 아이템은 자동으로 장착되며, 장착 시 각 아이템의 능력치가 캐릭터의 능력치로 갱신되어야함.
 */



/*
3. 상점 구매 버튼 클릭 시
- 아이템 목록에 있는 sword / shield / potion 중 하나를 입력하여 구매할 수 있어야함
- 구매 시 플레이어가 소유한 골드가 아이템의 가격보다 커야만 구매 할 수 있어야한다.
- 구매한 자동으로 장착되며, 장착 시 각 아이템의 능력치가 캐릭터의 능력치로 갱신되어야함.
 */