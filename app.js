const questions = [
  {
    topic: "ניהול מול מנהיגות",
    question: "מה ההבדל המרכזי בין Management - ניהול, לבין Leadership - מנהיגות?",
    options: [
      { text: "ניהול עוסק בעיקר בתכנון ובקרה, ומנהיגות עוסקת בהשפעה, כיוון ומשמעות.", correct: true },
      { text: "ניהול ומנהיגות הם מושגים זהים לחלוטין.", correct: false },
      { text: "מנהיגות היא רק מתן פקודות מפורטות לעובדים כדי לוודא שאין להם שיקול דעת עצמאי.", correct: false },
      { text: "ניהול רלוונטי רק לצוותים גדולים מאוד.", correct: false }
    ],
    explanation: "ניהול יוצר סדר וביצוע. מנהיגות יוצרת מחויבות, השראה וכיוון."
  },
  {
    topic: "משוב",
    question: "איזו דוגמה מתארת Feedback - משוב אפקטיבי?",
    options: [
      { text: "בישיבה אתמול קטעת את דנה פעמיים. בפעם הבאה נאפשר לה לסיים ואז נגיב.", correct: true },
      { text: "אתה פשוט לא מספיק מקצועי.", correct: false },
      { text: "כולם חושבים שאתה צריך להשתפר מאוד בהרבה תחומים שונים, אבל אין צורך לפרט דוגמאות.", correct: false },
      { text: "אני לא מרוצה, תבין לבד למה.", correct: false }
    ],
    explanation: "משוב טוב מתייחס להתנהגות נצפית, בזמן קרוב, ומציע פעולה להמשך."
  },
  {
    topic: "מוטיבציה",
    question: "מה מאפיין Motivation - מוטיבציה פנימית?",
    options: [
      { text: "פעולה מתוך עניין, משמעות, התפתחות או תחושת מסוגלות.", correct: true },
      { text: "פעולה רק כדי להימנע מעונש חיצוני, בלי עניין אישי, משמעות או רצון להתפתח.", correct: false },
      { text: "פעולה שנובעת אך ורק מבונוס כספי חודשי.", correct: false },
      { text: "מצב שבו העובד אינו זקוק למטרות.", correct: false }
    ],
    explanation: "מוטיבציה פנימית נשענת על גורמים כמו משמעות, אוטונומיה ומומחיות."
  },
  {
    topic: "האצלה",
    question: "מה נדרש כדי ש-Delegation - האצלת סמכויות תצליח?",
    options: [
      { text: "להגדיר תוצאה, סמכות, גבולות ומשאבי תמיכה.", correct: true },
      { text: "להעביר משימה בלי להסביר את הציפיות.", correct: false },
      { text: "להמשיך לבדוק כל פעולה קטנה של העובד גם אחרי שהוגדרו יעד, סמכות וגבולות.", correct: false },
      { text: "לוותר על אחריות המנהל לתוצאה.", correct: false }
    ],
    explanation: "האצלה אינה נטישה. היא דורשת בהירות, אמון ומעקב במינון נכון."
  },
  {
    topic: "התפתחות צוות",
    question: "בשלב Storming - סערה בצוות, מה נכון במיוחד?",
    options: [
      { text: "יש מתחים סביב תפקידים, גבולות ודרכי עבודה.", correct: true },
      { text: "הצוות כבר פועל בשיא היעילות, אין קונפליקטים ואין צורך להבהיר תפקידים.", correct: false },
      { text: "אין צורך בהתערבות ניהולית כלל.", correct: false },
      { text: "כל חברי הצוות מסכימים תמיד על סדרי עדיפויות.", correct: false }
    ],
    explanation: "שלב הסערה טבעי. ניהול נכון הופך אותו לבניית נורמות עבודה."
  },
  {
    topic: "ביטחון פסיכולוגי",
    question: "מהי המשמעות של Psychological Safety - ביטחון פסיכולוגי?",
    options: [
      { text: "תחושה שאפשר לשאול, לטעות ולהביע דעה בלי חשש מהשפלה או ענישה.", correct: true },
      { text: "הבטחה שאף עובד לא יקבל ביקורת לעולם, גם כאשר יש טעות מקצועית משמעותית.", correct: false },
      { text: "מצב שבו מנהל נמנע מכל החלטה קשה.", correct: false },
      { text: "שיטה לביטול יעדים ומדדים.", correct: false }
    ],
    explanation: "ביטחון פסיכולוגי מאפשר למידה, יוזמה ודיבור פתוח על בעיות."
  },
  {
    topic: "קונפליקט",
    question: "מהי גישה נכונה ל-Conflict Management - ניהול קונפליקטים?",
    options: [
      { text: "להקשיב לאינטרסים של הצדדים, להפריד בין האדם לבעיה ולהגדיר הסכמה מעשית.", correct: true },
      { text: "להתעלם עד שהבעיה תיעלם לבד.", correct: false },
      { text: "לקבוע מיד מי אשם לפני שמבינים את העובדות.", correct: false },
      { text: "לאפשר לצד החזק יותר להכריע תמיד כדי לחסוך זמן ולמנוע שיחה מורכבת.", correct: false }
    ],
    explanation: "ניהול קונפליקט אפקטיבי מחפש הבנה, בהירות והסכמות פעולה."
  },
  {
    topic: "אימון",
    question: "מה מאפיין Coaching - אימון ניהולי?",
    options: [
      { text: "שאלות, שיקוף והכוונה שמפתחים חשיבה עצמאית אצל העובד.", correct: true },
      { text: "פתרון כל בעיה במקום העובד כדי שיקבל מענה מהיר ולא יצטרך להתמודד בעצמו.", correct: false },
      { text: "ביקורת כללית ללא יעד למידה.", correct: false },
      { text: "שיחה חד פעמית בלי מעקב.", correct: false }
    ],
    explanation: "אימון ניהולי עוזר לעובד לנסח תובנות ופעולות בעצמו."
  }
];

const terms = [
  { en: "Team", he: "צוות", source: "materials.html#team", note: "קבוצה עם יעד משותף, תלות הדדית ואחריות לתוצאה." },
  { en: "Management", he: "ניהול", source: "materials.html#management", note: "תכנון, ארגון, בקרה והבטחת ביצוע." },
  { en: "Leadership", he: "מנהיגות", source: "materials.html#leadership", note: "השפעה, השראה, כיוון ומשמעות." },
  { en: "Motivation", he: "מוטיבציה", source: "materials.html#motivation", note: "הכוח שמניע פעולה והתמדה." },
  { en: "Feedback", he: "משוב", source: "materials.html#feedback", note: "מידע ספציפי שמטרתו שיפור ביצוע או התנהגות." },
  { en: "Delegation", he: "האצלת סמכויות", source: "materials.html#delegation", note: "העברת אחריות וסמכות במסגרת גבולות ברורים." },
  { en: "Conflict Management", he: "ניהול קונפליקטים", source: "materials.html#conflict", note: "הובלת מחלוקת להבנה, הסכמה ופעולה." },
  { en: "Psychological Safety", he: "ביטחון פסיכולוגי", source: "materials.html#psychological-safety", note: "יכולת לדבר, לטעות ולשאול בלי פחד מהשפלה." },
  { en: "Storming", he: "שלב הסערה", source: "materials.html#storming", note: "שלב התפתחות צוותי עם מתחים ובדיקת גבולות." },
  { en: "Coaching", he: "אימון ניהולי", source: "materials.html#coaching", note: "פיתוח עובד דרך שאלות, שיקוף והכוונה." }
];

const scenarios = [
  {
    title: "עובד מקצועי אך מתנגד לשיתוף פעולה",
    text: "חבר צוות חזק מקצועית עונה בקוצר רוח לאחרים ומחליש את האמון בצוות.",
    best: "לתת Feedback - משוב ספציפי על ההתנהגות, לקשור להשפעה על הצוות, ולהגדיר ציפייה לשיתוף פעולה.",
    why: "הבעיה אינה המקצועיות אלא ההתנהגות וההשפעה החברתית שלה."
  },
  {
    title: "צוות חדש מתווכח על תפקידים",
    text: "בפרויקט חדש כולם עובדים קשה, אך יש חיכוכים סביב מי מחליט ומה סדר העדיפויות.",
    best: "לזהות שזה עשוי להיות Storming - שלב הסערה, להבהיר תפקידים, תהליכי החלטה וגבולות אחריות.",
    why: "בשלב זה נדרשת מסגרת ברורה, לא התעלמות מהמתח."
  },
  {
    title: "מנהלת עמוסה לא מצליחה לשחרר משימות",
    text: "המנהלת אומרת שאין לה זמן ללמד אחרים ולכן היא עושה הכל לבד.",
    best: "לבנות Delegation - האצלת סמכויות הדרגתית: משימות מוגדרות, קריטריונים להצלחה ונקודות בדיקה.",
    why: "האצלה נכונה מגדילה יכולת צוותית ומפנה זמן ניהולי בטווח הבינוני."
  },
  {
    title: "ישיבה שקטה מדי",
    text: "בישיבות אף אחד לא מעלה בעיות, אבל לאחר מכן מתברר שכולם ידעו על סיכונים.",
    best: "לחזק Psychological Safety - ביטחון פסיכולוגי בעזרת הזמנה מפורשת לדעות שונות, תגובה עניינית לטעויות ושאלות פתוחות.",
    why: "כשהסביבה אינה בטוחה, מידע חשוב נשאר מחוץ לחדר."
  }
];

const quizList = document.querySelector("#quizList");
const termList = document.querySelector("#termList");
const scenarioList = document.querySelector("#scenarioList");
const score = document.querySelector("#score");
const scoreBar = document.querySelector("#scoreBar");

const state = {
  answered: new Map()
};

function shuffle(items) {
  return [...items]
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function updateScore() {
  const total = questions.length;
  const correct = [...state.answered.values()].filter(Boolean).length;
  score.textContent = `${correct} / ${total}`;
  scoreBar.style.width = `${total ? (correct / total) * 100 : 0}%`;
}

function renderQuiz() {
  quizList.innerHTML = "";
  questions.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "card question-card";
    card.innerHTML = `
      <span class="tag">${item.topic}</span>
      <h3>${index + 1}. ${item.question}</h3>
      <div class="answers"></div>
      <p class="explanation" hidden>${item.explanation}</p>
    `;

    const answers = card.querySelector(".answers");
    shuffle(item.options).forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = option.text;
      button.addEventListener("click", () => {
        if (state.answered.has(index)) return;
        state.answered.set(index, option.correct);
        [...answers.children].forEach((child) => {
          child.disabled = true;
          const matchingOption = item.options.find((candidate) => candidate.text === child.textContent);
          child.classList.toggle("correct", Boolean(matchingOption?.correct));
        });
        button.classList.add(option.correct ? "picked-correct" : "picked-wrong");
        card.querySelector(".explanation").hidden = false;
        updateScore();
      });
      answers.append(button);
    });

    quizList.append(card);
  });
  updateScore();
}

function renderTerms(filter = "") {
  const query = filter.trim().toLowerCase();
  termList.innerHTML = "";
  terms
    .filter((term) => `${term.en} ${term.he} ${term.note}`.toLowerCase().includes(query))
    .forEach((term) => {
      const card = document.createElement("article");
      card.className = "card term-card";
      card.innerHTML = `
        <div>
          <h3><span lang="en">${term.en}</span></h3>
          <strong>${term.he}</strong>
          <p>${term.note}</p>
        </div>
        <a href="${term.source}" aria-label="פתיחת חומר המצגת עבור ${term.he}">פתיחה בחומר</a>
      `;
      termList.append(card);
    });
}

function renderScenarios() {
  scenarioList.innerHTML = "";
  scenarios.forEach((scenario) => {
    const card = document.createElement("article");
    card.className = "card scenario-card";
    card.innerHTML = `
      <h3>${scenario.title}</h3>
      <p>${scenario.text}</p>
      <button type="button">הצגת דרך פעולה מומלצת</button>
      <div class="scenario-answer" hidden>
        <strong>${scenario.best}</strong>
        <p>${scenario.why}</p>
      </div>
    `;
    const button = card.querySelector("button");
    const answer = card.querySelector(".scenario-answer");
    button.addEventListener("click", () => {
      answer.hidden = !answer.hidden;
      button.textContent = answer.hidden ? "הצגת דרך פעולה מומלצת" : "הסתרת דרך פעולה";
    });
    scenarioList.append(card);
  });
}

document.querySelector("#resetQuiz").addEventListener("click", () => {
  state.answered.clear();
  renderQuiz();
});

document.querySelector("#termSearch").addEventListener("input", (event) => {
  renderTerms(event.target.value);
});

document.querySelector("#questionCount").textContent = questions.length;
document.querySelector("#termCount").textContent = terms.length;
document.querySelector("#scenarioCount").textContent = scenarios.length;

renderQuiz();
renderTerms();
renderScenarios();
