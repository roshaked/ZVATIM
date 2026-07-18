const extraQuestions = [
  {
    topic: "קבוצה לעומת צוות",
    question: "מה מתאר בצורה הטובה ביותר את ההבדל בין Work Group - קבוצת עבודה לבין Team - צוות?",
    options: [
      { text: "בקבוצת עבודה האחריות לרוב אישית ובראש עומד גורם מרכזי; בצוות יש תלות הדדית ואחריות משותפת.", correct: true },
      { text: "אין הבדל מהותי בין המושגים.", correct: false },
      { text: "צוות הוא תמיד גדול יותר מקבוצת עבודה.", correct: false },
      { text: "קבוצת עבודה תמיד יעילה יותר מצוות.", correct: false }
    ],
    explanation: "בחומר הקורס Team - צוות מוגדר דרך מטרה משותפת, תלות הדדית, תיאום ואחריות משותפת; Work Group - קבוצת עבודה יכולה להסתפק בחלוקת עבודה אישית."
  },
  {
    topic: "סינרגיה",
    question: "מנהלת רואה שכל עובד מציג תוצר טוב לבד, אך התוצר המשותף חלש וחוזר על עצמו. מה חסר בעיקר?",
    options: [
      { text: "Synergy - סינרגיה, כלומר חיבור שמייצר תוצאה גדולה מסכום התרומות האישיות.", correct: true },
      { text: "עוד חלוקת משימות ללא מפגש בין העובדים.", correct: false },
      { text: "ביטול כל מנגנוני התיאום.", correct: false },
      { text: "הקטנת המטרה המשותפת.", correct: false }
    ],
    explanation: "סינרגיה נוצרת כשמומחיות, מעורבות וביצוע מתחברים לתוצאה משותפת ולא רק לאוסף תוצרים נפרדים."
  },
  {
    topic: "זהות חברתית",
    question: "איזה רצף מתאר נכון את בניית Social Identity - זהות חברתית לפי החומר?",
    options: [
      { text: "Social Categorization - סיווג חברתי, Social Identification - הזדהות חברתית, ואז Social Comparison - השוואה חברתית.", correct: true },
      { text: "השוואה חברתית, ביצוע משימה, ואז ביטול שייכות.", correct: false },
      { text: "רק קבלת תפקיד פורמלי מהמנהל.", correct: false },
      { text: "מדידת תפוקה אישית בלבד.", correct: false }
    ],
    explanation: "המצגות מציגות את הזהות החברתית כתהליך של סיווג, הזדהות והשוואה לקבוצות אחרות."
  },
  {
    topic: "ייצוג חברתי",
    question: "בצוות ותיק אומרים: \"כאן לא מערערים על החלטת המנהל\", אף שאין כלל כתוב כזה. מה המושג המתאים ביותר?",
    options: [
      { text: "Social Representation - ייצוג חברתי שמייצר משמעות ונורמה משותפת.", correct: true },
      { text: "Milestone - אבן דרך בפרויקט.", correct: false },
      { text: "Storming - סערה בלבד, בלי קשר לנורמות.", correct: false },
      { text: "Virtual Team - צוות וירטואלי.", correct: false }
    ],
    explanation: "ייצוג חברתי מחבר בין תפיסות, ערכים ונורמות, ומשפיע על ההתנהגות בפועל גם בלי נוהל כתוב."
  },
  {
    topic: "Norm Relevance Gap",
    question: "נוהל ישן מחייב לשלוח כל עדכון בשלושה מיילים שונים, אף שהמערכת החדשה כבר מרכזת הכל. מה הבעיה?",
    options: [
      { text: "Norm Relevance Gap - פער הרלוונטיות של הנורמות.", correct: true },
      { text: "הצוות נמצא בהכרח בשלב Performing - ביצוע.", correct: false },
      { text: "זו הוכחה לסינרגיה גבוהה.", correct: false },
      { text: "אין כאן נורמה בכלל.", correct: false }
    ],
    explanation: "פער רלוונטיות מתרחש כשנורמה ממשיכה לפעול גם אחרי שהסיבה המקורית שלה כבר אינה מתאימה."
  },
  {
    topic: "סוגי צוותים",
    question: "איזה צוות מתאים למשימה קצרה, ממוקדת ודחופה שבה צריך מענה מהיר לבעיה לא צפויה?",
    options: [
      { text: "Problem-Solving Team - צוות פתרון בעיה.", correct: true },
      { text: "Virtual Team - צוות וירטואלי.", correct: false },
      { text: "Top Management Team - צוות הנהלה בכירה.", correct: false },
      { text: "Quality Circle - חוג איכות.", correct: false }
    ],
    explanation: "צוות פתרון בעיה נועד לתת מענה מהיר, ממוקד ולעיתים חד-פעמי לבעיה ספציפית."
  },
  {
    topic: "צוות וירטואלי",
    question: "מהו אתגר מרכזי של Virtual Team - צוות וירטואלי לפי חומר הקורס?",
    options: [
      { text: "בניית אמון ותיאום למרות מרחק, אזורי זמן ותקשורת דיגיטלית.", correct: true },
      { text: "היעדר מוחלט של טכנולוגיה.", correct: false },
      { text: "חוסר צורך בתקשורת בין חברי הצוות.", correct: false },
      { text: "שייכות לאותה קומה במשרד.", correct: false }
    ],
    explanation: "בצוות וירטואלי היתרון הוא גישה לכישרונות גלובליים, אך האתגרים כוללים אמון, תיאום ופערי שפה/זמן."
  },
  {
    topic: "צוות פרויקט",
    question: "מה מאפיין Project Team - צוות פרויקט?",
    options: [
      { text: "משימה מוגדרת בזמן ובתקציב, עם אבני דרך ותכנון קדמי.", correct: true },
      { text: "פעילות קבועה שאינה מסתיימת לעולם.", correct: false },
      { text: "עבודה ללא לקוחות או בעלי עניין.", correct: false },
      { text: "רק דיון רעיוני ללא ביצוע.", correct: false }
    ],
    explanation: "צוות פרויקט מוקם סביב יעד מוגדר, משאבים מוגבלים, Milestones - אבני דרך וניהול סיכונים."
  },
  {
    topic: "Tuckman",
    question: "בשלב Forming - גיבוש, מה צפוי לראות בציר היחסים?",
    options: [
      { text: "תלות, בדיקת גבולות ורצון להבין את המקום של כל חבר בצוות.", correct: true },
      { text: "עצמאות מלאה וביצוע שוטף ללא אי-ודאות.", correct: false },
      { text: "פירוק סופי של הצוות.", correct: false },
      { text: "רק פתרון בעיות מורכבות.", correct: false }
    ],
    explanation: "בשלב הגיבוש חברי הצוות עדיין מחפשים ביטחון, שייכות והבנה של הציפיות."
  },
  {
    topic: "Tuckman",
    question: "מהו סימן טיפוסי לכך שצוות נמצא בשלב Storming - סערה?",
    options: [
      { text: "מחלוקות על סמכות, תפקידים ודרך העבודה.", correct: true },
      { text: "השלמה חגיגית של המשימה.", correct: false },
      { text: "ביצוע חלק ללא ויכוחים.", correct: false },
      { text: "היעדר כל אינטראקציה בין החברים.", correct: false }
    ],
    explanation: "בשלב הסערה עולים קונפליקטים סביב מבנה העבודה, גבולות, תפקידים והשפעה."
  },
  {
    topic: "Tuckman",
    question: "מהו תפקיד המנהל בשלב Norming - נרמול?",
    options: [
      { text: "לחזק נורמות עבודה, אמון, תקשורת ותיאום.", correct: true },
      { text: "להתעלם מהסכמות כדי ליצור עמימות.", correct: false },
      { text: "להחזיר את הצוות בכוונה לשלב הסערה.", correct: false },
      { text: "לבטל כל אחריות משותפת.", correct: false }
    ],
    explanation: "בשלב הנרמול הצוות בונה כללים משותפים, לכידות ותיאום שמאפשרים תפקוד טוב יותר."
  },
  {
    topic: "Tuckman",
    question: "מה מתאר Performing - ביצוע בצוות בוגר?",
    options: [
      { text: "עבודה עצמאית ומתואמת, פתרון בעיות ותלות הדדית יעילה.", correct: true },
      { text: "אי-הבנה בסיסית של מטרת הצוות.", correct: false },
      { text: "מאבקי כוח ראשוניים.", correct: false },
      { text: "רק היכרות חברתית ראשונה.", correct: false }
    ],
    explanation: "בשלב הביצוע הצוות כבר משתמש במבנה, באמון ובתפקידים כדי לפתור בעיות ולהשיג תוצאות."
  },
  {
    topic: "Adjourning",
    question: "מה נכון לעשות בשלב Adjourning - סיום/פירוק צוות?",
    options: [
      { text: "לסכם למידה, להעביר ידע, להכיר בתרומה ולסגור את המשימה רגשית ותפעולית.", correct: true },
      { text: "להפסיק מיד בלי סיכום או תיעוד.", correct: false },
      { text: "להתחיל מחדש את כל שלב הגיבוש.", correct: false },
      { text: "להתעלם מהשפעת הפרידה על החברים.", correct: false }
    ],
    explanation: "שלב הסיום כולל העברת ידע, הפקת לקחים, הכרה במאמץ וסגירת מעגל."
  },
  {
    topic: "Belbin",
    question: "צוות מלא רעיונות אך מתקשה להפוך אותם למשימות מסודרות. איזה תפקיד Belbin - בלבין כדאי לחזק?",
    options: [
      { text: "Implementer - מבצע, שמתרגם רעיונות לתוכנית פעולה.", correct: true },
      { text: "Plant - יוזם רעיונות בלבד.", correct: false },
      { text: "Teamworker - מלכד צוות בלבד.", correct: false },
      { text: "Specialist - מומחה ידע בלבד.", correct: false }
    ],
    explanation: "Implementer - מבצע מסייע להפוך כיוונים ורעיונות לפעולות ברורות וישימות."
  },
  {
    topic: "Belbin",
    question: "איזה תפקיד מתאים במיוחד לאדם שמוודא איכות, פרטים אחרונים ועמידה בלוחות זמנים?",
    options: [
      { text: "Completer Finisher - מסיים/סוגר קצוות.", correct: true },
      { text: "Resource Investigator - חוקר משאבים.", correct: false },
      { text: "Coordinator - מתאם.", correct: false },
      { text: "Monitor Evaluator - מעריך.", correct: false }
    ],
    explanation: "Completer Finisher - מסיים/סוגר קצוות מקפיד על פרטים, איכות וסיום משימות."
  },
  {
    topic: "FISH",
    question: "עובדת עוצרת את מה שהיא עושה ומקשיבה באופן מלא ללקוח מתוסכל. איזה עיקרון FISH בא לידי ביטוי?",
    options: [
      { text: "Be Present - להיות נוכח.", correct: true },
      { text: "Play - לשחק.", correct: false },
      { text: "Milestone - אבן דרך.", correct: false },
      { text: "Storming - סערה.", correct: false }
    ],
    explanation: "Be Present - להיות נוכח מדגיש הקשבה מלאה, תשומת לב ומפגש אמיתי עם האדם שמולנו."
  },
  {
    topic: "FISH",
    question: "מנהל פותח ישיבה קשה בשאלה: \"איזו גישה אנחנו בוחרים להביא היום?\" לאיזה עיקרון זה שייך?",
    options: [
      { text: "Choose Your Attitude - לבחור את הגישה שלך.", correct: true },
      { text: "Make Their Day - לעשות להם את היום.", correct: false },
      { text: "Social Comparison - השוואה חברתית.", correct: false },
      { text: "Adjourning - סיום.", correct: false }
    ],
    explanation: "העיקרון Choose Your Attitude - לבחור את הגישה שלך מדגיש בחירה מודעת בדרך שבה מגיעים לעבודה ולמפגש."
  },
  {
    topic: "העצמה",
    question: "איזו פעולה משקפת Empowerment - העצמה אמיתית של צוות?",
    options: [
      { text: "לתת סמכות החלטה, מידע ומשאבים יחד עם אחריות ברורה.", correct: true },
      { text: "להטיל משימה אך לשמור את כל ההחלטות אצל המנהל.", correct: false },
      { text: "לתת כותרת חדשה בלי לשנות סמכות בפועל.", correct: false },
      { text: "להימנע ממשוב כדי לא לפגוע באווירה.", correct: false }
    ],
    explanation: "העצמה אינה רק עידוד מילולי; היא כוללת העברת סמכות, נגישות למידע, משאבים ואחריות."
  },
  {
    topic: "תיאוריות ניהול",
    question: "מנהל מאמין שאנשים רוצים לתרום ולקחת אחריות אם יוצרים תנאים מתאימים. איזו הנחה מתאימה לכך?",
    options: [
      { text: "Theory Y - תיאוריה Y.", correct: true },
      { text: "Theory X - תיאוריה X.", correct: false },
      { text: "Norm Relevance Gap - פער רלוונטיות.", correct: false },
      { text: "Groupthink - חשיבת קבוצה.", correct: false }
    ],
    explanation: "Theory Y - תיאוריה Y מניחה שאנשים מסוגלים למוטיבציה פנימית, אחריות ויוזמה בתנאים מתאימים."
  },
  {
    topic: "Groupthink",
    question: "מהו סימן אזהרה ל-Groupthink - חשיבת קבוצה?",
    options: [
      { text: "חברי הצוות נמנעים מהעלאת ספק כדי לא לפגוע באחדות.", correct: true },
      { text: "מינוי אדם שמעלה ביקורת באופן מסודר.", correct: false },
      { text: "בדיקת חלופות לפני החלטה.", correct: false },
      { text: "הזמנת מידע חיצוני לדיון.", correct: false }
    ],
    explanation: "חשיבת קבוצה מתבטאת בין היתר בלחץ לקונפורמיות ובהימנעות מביקורת, גם כשיש סימני אזהרה."
  }
];

const extraAnswered = new Map();

function extraTopicClass(value, offset = 0) {
  const text = String(value || "");
  const hash = [...text].reduce((sum, char) => sum + char.codePointAt(0), offset);
  return `topic-${(hash % 8) + 1}`;
}

function extraShuffle(items) {
  return [...items]
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function updateExtraScore() {
  const total = extraQuestions.length;
  const correct = [...extraAnswered.values()].filter(Boolean).length;
  const answered = extraAnswered.size;
  const score = document.querySelector("#extraScore");
  const scoreBar = document.querySelector("#extraScoreBar");
  const feedback = document.querySelector("#extraDecisionFeedback");

  score.textContent = `${correct} / ${total}`;
  scoreBar.style.width = `${total ? (correct / total) * 100 : 0}%`;
  feedback.textContent = answered
    ? `${answered} שאלות נענו. ${Math.round((correct / answered) * 100)}% הצלחה במבחן הנוסף.`
    : "ענו על שאלות כדי לקבל מדד מוכנות.";
}

function renderExtraQuiz() {
  const list = document.querySelector("#extraQuizList");
  list.innerHTML = "";

  extraQuestions.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = `card question-card ${extraTopicClass(item.topic)}`;
    card.innerHTML = `
      <span class="tag">${item.topic}</span>
      <h3>${index + 1}. ${item.question}</h3>
      <div class="answers"></div>
      <p class="explanation" hidden>${item.explanation}</p>
    `;

    const answers = card.querySelector(".answers");
    extraShuffle(item.options).forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = option.text;
      button.addEventListener("click", () => {
        if (extraAnswered.has(index)) return;
        extraAnswered.set(index, option.correct);
        [...answers.children].forEach((child) => {
          child.disabled = true;
          const matchingOption = item.options.find((candidate) => candidate.text === child.textContent);
          child.classList.toggle("correct", Boolean(matchingOption?.correct));
        });
        button.classList.add(option.correct ? "picked-correct" : "picked-wrong");
        card.querySelector(".explanation").hidden = false;
        updateExtraScore();
      });
      answers.append(button);
    });

    list.append(card);
  });

  updateExtraScore();
}

function normalizeExtraSearch(value) {
  return String(value || "").trim().toLowerCase();
}

function sourceForExtraTopic(topic) {
  const sources = {
    "קבוצה לעומת צוות": "materials.html#group-vs-team",
    "סינרגיה": "materials.html#synergy",
    "זהות חברתית": "materials.html#social-identity",
    "ייצוג חברתי": "materials.html#social-representation",
    "Norm Relevance Gap": "materials.html#norms",
    "סוגי צוותים": "materials.html#team-types",
    "צוות וירטואלי": "materials.html#team-types",
    "צוות פרויקט": "materials.html#team-types",
    "Tuckman": "materials.html#tuckman",
    "Adjourning": "materials.html#tuckman",
    "Belbin": "materials.html#belbin",
    "FISH": "materials.html#fish-empowerment",
    "העצמה": "materials.html#fish-empowerment",
    "תיאוריות ניהול": "materials.html#fish-empowerment",
    "Groupthink": "materials.html#psychological-safety"
  };
  return sources[topic] || "materials.html#source-files";
}

function appendExtraSearchResults(filter = "") {
  const query = normalizeExtraSearch(filter);
  const resultsBox = document.querySelector("#globalSearchResults");
  if (query.length < 2 || !resultsBox) return;

  const matches = extraQuestions
    .map((item) => ({
      title: item.question,
      text: `${item.topic} ${item.options.map((option) => option.text).join(" ")} ${item.explanation}`,
      sourceHref: sourceForExtraTopic(item.topic)
    }))
    .filter((item) => normalizeExtraSearch(`${item.title} ${item.text}`).includes(query))
    .slice(0, 3);

  if (!matches.length) return;

  matches.forEach((item) => {
    const card = document.createElement("article");
    card.className = "global-result";
    card.innerHTML = `
      <a class="global-result-main" href="#extraQuiz">
        <span>מבחן קצר נוסף</span>
        <strong>${item.title}</strong>
        <small>${item.text.slice(0, 180)}${item.text.length > 180 ? "..." : ""}</small>
      </a>
      <a class="global-source-link" href="${item.sourceHref}">פתיחה בחומר הלימוד</a>
    `;
    resultsBox.append(card);
  });

  resultsBox.hidden = false;
}

document.querySelector("#resetExtraQuiz").addEventListener("click", () => {
  extraAnswered.clear();
  renderExtraQuiz();
});

document.querySelector("#globalSearch")?.addEventListener("input", (event) => {
  window.setTimeout(() => appendExtraSearchResults(event.target.value), 0);
});

renderExtraQuiz();
