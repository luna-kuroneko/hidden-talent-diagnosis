
const questions = [
  {
    question: "あなたは時間を守るほう？",
    answers: [
      "約束の5分前には到着！",
      "だいたい時間ぴったり！",
      "少しくらい遅れても気にしない🤣",
      "そもそも時間に縛られたくない！"
    ],
    types: [0, 3, 1, 5]
  },
  {
    question: "目の前に最後のケーキがひとつ。どうする？",
    answers: [
      "みんなに譲る♡",
      "遠慮しつつ、いただく😋",
      "迷わず食べる！",
      "半分に切るつもりが全部食べた🤣"
    ],
    types: [0, 6, 3, 4]
  },
  {
    question: "何も予定がない休日。あなたは？",
    answers: [
      "誰かと楽しく過ごす！",
      "趣味に没頭する✨",
      "とにかくゴロゴロする♡",
      "何もしないという重大任務を遂行する🤣"
    ],
    types: [4, 2, 5, 5]
  },
  {
    question: "友達が突然「宇宙人を見た！」と言い出したら？",
    answers: [
      "真剣に話を聞く",
      "面白そう！どこで！？",
      "とりあえず一緒に探す",
      "宇宙人のほうが気の毒になる🤣"
    ],
    types: [0, 1, 2, 7]
  },
  {
    question: "道端に100円玉が落ちていた！あなたは？",
    answers: [
      "落とした人がいないか周囲を見る",
      "交番に届けようかな？",
      "100円玉と目が合った気がする",
      "100円玉に人生相談を始める🤣"
    ],
    types: [0, 3, 6, 7]
  },
  {
    question: "友達が変な髪形で登場！どうする？",
    answers: [
      "似合ってるところを探す♡",
      "思わず「どうしたん！？」🤣",
      "何も言わずに様子を見る",
      "自分も同じ髪形にして友情を証明する"
    ],
    types: [0, 4, 7, 2]
  },
  {
    question: "魔法がひとつ使えるなら？",
    answers: [
      "誰かを幸せにする魔法",
      "どこでも瞬間移動！",
      "好きなものを無限に増やす",
      "寝ている間に全部終わる魔法🤣"
    ],
    types: [0, 1, 6, 5]
  },
  {
    question: "突然、王様になりました！最初にすることは？",
    answers: [
      "国民みんなにごちそうを振る舞う",
      "国中でお祭りを開催する！",
      "お城の宝物庫を見に行く✨",
      "とりあえず祝日にして二度寝する🤣"
    ],
    types: [0, 1, 3, 5]
  },
  {
    question: "あなたの前にしゃべる猫が現れた！第一声は？",
    answers: [
      "「かわいい〜♡」",
      "「えっ！？今しゃべった！？」",
      "「ちょっと人生相談していい？」",
      "「家賃、半分払ってくれる？」🤣"
    ],
    types: [0, 2, 7, 4]
  },
  {
    question: "最後の質問！あなたが世界にひとつだけ残したいものは？",
    answers: [
      "みんなの笑顔♡",
      "自由に楽しめる時間！",
      "愛と幸せと、おいしいご飯",
      "自分が寝ていた証拠の枕のへこみ🤣"
    ],
    types: [4, 1, 6, 5]
  }
];

// 8種類の隠れた才能
const results = [
  {
    animal: "🐈‍⬛",
    image: "assets/images/black_cat.png",
    name: "黒猫王子",
    talent: "世界を甘やかす天才",
    description: "あなたは人の心をほぐす天才！ただし、自分を甘やかすのも大得意🤣"
  },
  {
    animal: "🦌",
    image: "assets/images/reindeer.png",
    name: "陽気なトナカイ",  
    talent: "人生楽しんだもん勝ち王",
    description: "どんな状況でも楽しみを発見！ただし、調子に乗ると止まらない🤣"
  },
  {
    animal: "🐰",
    image: "assets/images/rabbit.png",
    name: "魔法使いうさぎ",
    talent: "奇跡を呼ぶ天然天才",
    description: "本人は普通のつもりなのに、なぜか周囲を驚かせる不思議な存在✨"
  },
  {
    animal: "🐹",
    image: "assets/images/hamster.png",
    name: "幸運ハムスター",
    talent: "おいしいところ総取り王",
    description: "チャンスを見つける嗅覚が抜群！ただし、お菓子の誘惑には勝てない🤣"
  },
  {
    animal: "🦨",
    image: "assets/images/skunk.png",
    name: "爆笑スカンク",
    talent: "笑いの天才",
    description: "あなたの笑顔は周囲を幸せにする特別な才能！ただし、笑いすぎておならが出ても責任は負いません🤣"
  },
  {
    animal: "🦥",
    image: "assets/images/sloth.png",
    name: "ぐうたらナマケモノ",
    talent: "休む天才",
    description: "何もしない時間を楽しめる究極の癒し系！ただし、やる気が出るまで平均3営業日かかります🤣"
  },
  {
    animal: "🐿️",
    image: "assets/images/squirrel.png",
    name: "欲張りリス",
    talent: "幸せを集める天才",
    description: "小さな幸せを見つけるのが得意！ただし、何を集めていたのか途中で忘れます🤣"
  },
  {
    animal: "🦙",
    image: "assets/images/alpaca.png",
    name: "不思議アルパカ",
    talent: "空気を変える天才",
    description: "あなたがいるだけで場の雰囲気が変わる！ただし、本人は空気を読まずに草を食べています🤣"
  }
];

let currentQuestion = 0;
let scores = Array(8).fill(0);

// スタートボタン
document.getElementById("startButton").addEventListener("click", startQuiz);

function startQuiz() {
  currentQuestion = 0;
  scores = Array(8).fill(0);
  showQuestion();
}

// 質問を表示
function showQuestion() {
  const q = questions[currentQuestion];
  const main = document.querySelector("main");

  main.innerHTML = `
    <div class="crystal">🔮✨</div>
    <p>質問 ${currentQuestion + 1} / ${questions.length}</p>
    <h2>${q.question}</h2>
    <div id="answers"></div>
  `;

  const answerBox = document.getElementById("answers");

  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.style.marginBottom = "12px";
    button.addEventListener("click", () => selectAnswer(index));
    answerBox.appendChild(button);
  });
}

// 回答を選択
function selectAnswer(index) {
  const type = questions[currentQuestion].types[index];
  scores[type]++;

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// 診断結果
function showResult() {
  const maxScore = Math.max(...scores);

  // 最高得点の動物を全員集める
  const candidates = scores
    .map((score, index) => score === maxScore ? index : -1)
    .filter(index => index !== -1);

  // 同点なら、その中からランダムに選ぶ
  const winner = candidates[
    Math.floor(Math.random() * candidates.length)
  ];

  const result = results[winner];


  const main = document.querySelector("main");
  main.innerHTML = "";

  const certificate = document.createElement("div");
  certificate.className = "certificate";

  const heading = document.createElement("p");
  heading.className = "certificate-heading";
  heading.textContent = "🔮 隠れた才能認定証 🔮";

  const animal = document.createElement("img");
  animal.className = "certificate-animal";
  animal.src = result.image;
  animal.alt = result.name;

  const name = document.createElement("h2");
  name.className = "certificate-name";
  name.textContent = result.name;

  const talent = document.createElement("h1");
  talent.className = "certificate-talent";
  talent.textContent = result.talent;

  const divider = document.createElement("div");
  divider.className = "certificate-divider";

  const description = document.createElement("p");
  description.className = "certificate-description";
  description.textContent = result.description;

  const footer = document.createElement("p");
  footer.className = "certificate-footer";
  footer.textContent = "あなたの才能、ここに認定します✨";

  certificate.append(
    heading,
    animal,
    name,
    talent,
    divider,
    description,
    footer
  );

  // 認定証を画像で保存するボタン
  const saveButton = document.createElement("button");
  saveButton.textContent = "📸 認定証を画像で保存";
  saveButton.className = "save-button";

  saveButton.addEventListener("click", async () => {
    if (typeof html2canvas === "undefined") {
      alert("画像保存の準備ができませんでした。通信環境を確認してね。");
      return;
    }

    saveButton.disabled = true;
    saveButton.textContent = "画像を作成中…✨";

    try {
      const canvas = await html2canvas(certificate, {
        backgroundColor: "#ffffff",
        scale: 2
      });

const image = canvas.toDataURL("image/png");

const link = document.createElement("a");
link.href = image;
link.download = "隠れた才能認定証.png";

document.body.appendChild(link);
link.click();
link.remove();

    } catch (error) {
      console.error(error);
      alert("画像の保存に失敗しました。もう一度試してね。");
    } finally {
      saveButton.disabled = false;
      saveButton.textContent = "📸 認定証を画像で保存";
    }
  });

const xButton = document.createElement("button");
xButton.textContent = "𝕏 この結果をXに投稿する";
xButton.className = "x-button";

xButton.addEventListener("click", () => {
  const message =
    `🔮 私の隠れた才能は「${result.talent}」でした！🤣\n` +
    `診断キャラは「${result.name}」✨\n\n` +
    `あなたの隠れた才能は何かな？🐈‍⬛\n` +
    `#隠れた才能診断\n` +
    `https://luna-kuroneko.github.io/hidden-talent-diagnosis/`;

  const xUrl =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent(message);

  window.open(xUrl, "_blank");
});

  const retry = document.createElement("button");
  retry.textContent = "もう一度診断する🤣";
  retry.className = "retry-button";
  retry.addEventListener("click", startQuiz);

  main.append(certificate, saveButton, xButton, retry);

}

