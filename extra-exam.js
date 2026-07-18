const extraQuestions = [
  {
    topic: "צוות הנהלה",
    question: "בישיבת הנהלה כל סמנכ\"ל מגן על המחלקה שלו, ואף אחד לא מחבר את הדיון לראייה ארגונית כוללת. מה הבעיה המרכזית?",
    options: [
      { text: "הצוות אינו מתפקד כ-Top Management Team - צוות הנהלה בכירה שמכוון אסטרטגיה, תיאום והחלטות רוחב.", correct: true },
      { text: "חסרה רק שיחת היכרות קצרה בין המשתתפים.", correct: false },
      { text: "הפתרון הוא להעביר את כל ההחלטות לצוות טקטי בשטח.", correct: false },
      { text: "אין בעיה, כי כל מנהל אמור לייצג רק את היחידה שלו.", correct: false }
    ],
    explanation: "Top Management Team - צוות הנהלה בכירה אמור ליצור ראייה כוללת, תיאום בין יחידות והחלטות מורכבות ברמת הארגון."
  },
  {
    topic: "חוג איכות",
    question: "מפעל רוצה לשפר תהליך קטן שחוזר בכל משמרת. העובדים שמפעילים את הקו מכירים את התקלה הכי טוב. מהו המהלך הנכון ביותר?",
    options: [
      { text: "להקים Quality Circle - חוג איכות שמבוסס על ידע מהשטח ושיפור מתמשך.", correct: true },
      { text: "להמתין רק להחלטת דירקטוריון כי כל שינוי תפעולי הוא אסטרטגי.", correct: false },
      { text: "להקים צוות פיתוח מוצר חדש למרות שאין כאן מוצר חדש.", correct: false },
      { text: "למנוע מהעובדים להציע פתרונות כדי לשמור על אחידות.", correct: false }
    ],
    explanation: "Quality Circle - חוג איכות נשען על עובדים שמכירים את העבודה בפועל ומציעים שיפורים קטנים ומעשיים בתהליכים."
  },
  {
    topic: "צוות טקטי",
    question: "בצוות חדר ניתוח או כיבוי אש, למה פרוטוקולים קצרים וברורים חשובים במיוחד?",
    options: [
      { text: "כי בסביבה לחוצה ומסוכנת צריך להפחית עמימות ולאפשר פעולה מהירה ומתואמת.", correct: true },
      { text: "כי צוות טקטי אמור להימנע מכל מומחיות מקצועית.", correct: false },
      { text: "כי ככל שיש יותר זמן לדגירה יצירתית כך התגובה טובה יותר.", correct: false },
      { text: "כי אין צורך בתיאום כאשר כל אחד מומחה בתחומו.", correct: false }
    ],
    explanation: "Tactical Team - צוות טקטי פועל בתנאי לחץ, ולכן פרוטוקולים ותפקידים ברורים עוזרים למנוע בלבול בזמן אמת."
  },
  {
    topic: "פיתוח מוצרים",
    question: "צוות חדשנות מקבל ביקורת כי בשבועות הראשונים הוא בודק כיוונים, זורק רעיונות ומאפשר טעויות. לפי חומר הקורס, מה חשוב להבין?",
    options: [
      { text: "ב-New Product Development Team - צוות פיתוח מוצרים חדשים נדרשות גמישות, דגירה וסובלנות לאי-ודאות.", correct: true },
      { text: "כל טעות בשלב הרעיונות מוכיחה שהצוות צריך להפוך לצוות עבודה שגרתי.", correct: false },
      { text: "חדשנות טובה נוצרת רק באמצעות פרוטוקול קשיח ובלתי משתנה.", correct: false },
      { text: "צריך למדוד את הצוות רק לפי מספר הישיבות שנערכו.", correct: false }
    ],
    explanation: "צוות פיתוח מוצרים חדשים זקוק למרחב ניסוי ולגמישות, משום שחדשנות אינה מתקדמת כמו משימה שגרתית."
  },
  {
    topic: "התאמת סוג צוות",
    question: "מנהל מפעיל על צוות חדשנות את אותם נהלים קשיחים של צוות חירום. מה הסיכון?",
    options: [
      { text: "אי-התאמה בין סוג הצוות לבין אופי המשימה עלולה לחסום יצירתיות ולמידה.", correct: true },
      { text: "כל סוגי הצוותים צריכים לעבוד בדיוק באותו מבנה.", correct: false },
      { text: "צוות חדשנות אינו צריך שום גבול או יעד.", correct: false },
      { text: "נהלים קשיחים תמיד מגבירים חדשנות.", correct: false }
    ],
    explanation: "החומר מבחין בין סוגי צוותים שונים; מבנה שמתאים לצוות טקטי אינו בהכרח מתאים לצוות פיתוח חדש."
  },
  {
    topic: "עבודת צוות מרחוק",
    question: "בצוות מרוחק, שתיקה בצ'אט מפורשת בטעות כהסכמה. מה כדאי לקבוע כדי להפחית אי-הבנות?",
    options: [
      { text: "נורמות תגובה, תיעוד החלטות וכללי זמינות שמותאמים לעבודה דיגיטלית.", correct: true },
      { text: "להניח שכל מי שלא ענה מסכים בהכרח.", correct: false },
      { text: "לבטל כל תיעוד כדי לשמור על זרימה.", correct: false },
      { text: "להעביר כל החלטה רק לשיחת מסדרון.", correct: false }
    ],
    explanation: "בצוותים מרוחקים צריך להפוך ציפיות תקשורתיות לגלויות, כי רמזים חברתיים רבים נעלמים בתקשורת דיגיטלית."
  },
  {
    topic: "שיתוף פעולה",
    question: "שני צוותים משתמשים באותה מערכת: בראשון כל עובד מסיים חלק עצמאי, ובשני כל פעולה של אחד משנה מיד את עבודת האחרים. איזה פרמטר השתנה?",
    options: [
      { text: "Degree of Cooperation - מידת שיתוף פעולה ותלות הדדית בפועל.", correct: true },
      { text: "רק צבע הממשק של המערכת.", correct: false },
      { text: "מספר השנים של העובדים בארגון בלבד.", correct: false },
      { text: "השם הרשמי של המחלקה.", correct: false }
    ],
    explanation: "Degree of Cooperation - מידת שיתוף פעולה בוחנת עד כמה נדרש סנכרון בין חברי הצוות, ולא רק אם הם עובדים באותו מקום."
  },
  {
    topic: "גבולות מנדט",
    question: "צוות מומחים מגיש המלצה מצוינת, אבל ההנהלה ציפתה שהוא גם ינהל את היישום. מה היה צריך להגדיר מראש?",
    options: [
      { text: "Mandate - מנדט: האם הצוות רק מייעץ, מחליט או גם מבצע.", correct: true },
      { text: "רק את צבע המצגת הסופית.", correct: false },
      { text: "שכל מומחה יעבוד בלי לדעת מה האחרים עושים.", correct: false },
      { text: "שאין צורך בבעלי עניין אחרי הגשת ההמלצה.", correct: false }
    ],
    explanation: "בצוות ייעוץ חשוב להבהיר גבולות סמכות: המלצה, החלטה, יישום, אחריות וממשק עם מקבלי ההחלטות."
  },
  {
    topic: "צוות עבודה אורגני",
    question: "צוות קבוע עובד שנים יחד ומכיר היטב את המשימות, אבל דוחה כל שינוי בטענה ש'ככה תמיד עבדנו'. מהו הסיכון?",
    options: [
      { text: "יתרון השגרה והקשרים האישיים עלול להפוך לקיבעון והתנגדות לשינוי.", correct: true },
      { text: "צוות קבוע לעולם אינו מפתח נורמות.", correct: false },
      { text: "הפתרון הוא למחוק כל ידע שנצבר בצוות.", correct: false },
      { text: "צוות עבודה אורגני מתאים רק למשימה חד-פעמית.", correct: false }
    ],
    explanation: "Organic Work Team - צוות עבודה אורגני נהנה מלמידה וקשרים, אך עלול לפתח קיבעון, חשיבת קבוצה וקושי בשינוי."
  },
  {
    topic: "אוטונומיה צוותית",
    question: "מנהל דורש לאשר כל החלטה קטנה של הצוות. חברי הצוות מפסיקים להציע שיפורים ומחכים להוראות. מה נפגע בעיקר?",
    options: [
      { text: "תחושת בעלות, אחריות והשפעה על המשימה.", correct: true },
      { text: "רק מספר המשתתפים בישיבות.", correct: false },
      { text: "היכולת לקרוא את שם הצוות.", correct: false },
      { text: "הצורך במטרה משותפת נעלם לגמרי.", correct: false }
    ],
    explanation: "כאשר אין מרחב החלטה אמיתי, הצוות עלול לאבד יוזמה ומעורבות גם אם המטרה מוגדרת היטב."
  },
  {
    topic: "תרבות ארגונית",
    question: "על הקיר כתוב 'אנחנו מעודדים ביקורת', אבל מי שחולק על המנהל נענש בעקיפין. מה מסביר את הפער?",
    options: [
      { text: "פער בין Espoused Values - ערכים מוצהרים לבין Basic Assumptions - הנחות יסוד בפועל.", correct: true },
      { text: "הוכחה שאין תרבות ארגונית בארגון.", correct: false },
      { text: "בעיה טכנית בלבד במערכת נוכחות.", correct: false },
      { text: "סימן לכך שכל העובדים כבר מרגישים ביטחון פסיכולוגי מלא.", correct: false }
    ],
    explanation: "Schein Iceberg Model - מודל הקרחון של שיין מדגיש שההתנהגות נקבעת לעיתים לפי הנחות יסוד עמוקות, ולא לפי הערכים המוצהרים."
  },
  {
    topic: "נורמות סמויות",
    question: "עובד חדש רואה שכולם שולחים מיילים אחרי חצות, אף אחד לא ביקש זאת במפורש, והוא מתחיל לחקות אותם. מה כדאי למנהל לבדוק?",
    options: [
      { text: "האם נוצרה נורמה סמויה שמגדירה זמינות כמדד למחויבות.", correct: true },
      { text: "האם העובד מכיר את כל קיצורי המקלדת.", correct: false },
      { text: "האם צריך להאריך את כל הישיבות.", correct: false },
      { text: "האם אין בכלל השפעה חברתית בצוות.", correct: false }
    ],
    explanation: "נורמות יכולות להתפתח גם בלי הוראה רשמית, ולהשפיע על התנהגות עובדים חדשים דרך חיקוי ולחץ קבוצתי."
  },
  {
    topic: "ביילס",
    question: "באותה ישיבה דנה מציגה נתון מקצועי, ובהמשך עוצרת כדי להרגיע מתח בין שני חברים. כיצד נכון לנתח זאת לפי Bales - ביילס?",
    options: [
      { text: "לסווג כל התנהגות בנפרד: אחת תרומה למשימה ואחת תרומה ליחסים.", correct: true },
      { text: "לקבוע שדנה היא תמיד רק טיפוס יחסים.", correct: false },
      { text: "להתעלם מההתנהגות השנייה כי רק נתונים נחשבים.", correct: false },
      { text: "להסיק שאסור לאדם אחד לתרום בשתי דרכים.", correct: false }
    ],
    explanation: "Bales - ביילס בוחן התנהגויות בזמן אמת, לא תווית קבועה על האדם."
  },
  {
    topic: "צוות אד-הוק",
    question: "צוות אד-הוק פתר את התקלה שלשמה הוקם, אך ממשיך להתכנס בלי יעד חדש או בעל החלטה ברור. מה נכון לעשות?",
    options: [
      { text: "לסגור את המשימה או להגדיר Mandate - מנדט חדש, יעד חדש ואחריות חדשה.", correct: true },
      { text: "להמשיך להיפגש תמיד כי כל צוות זמני צריך להפוך לקבוע.", correct: false },
      { text: "להוסיף עוד מומחים בלי להבין מה הבעיה החדשה.", correct: false },
      { text: "לבטל תיעוד כדי שהצוות ירגיש גמיש יותר.", correct: false }
    ],
    explanation: "Problem-Solving / Ad-hoc Team - צוות פתרון בעיה / אד-הוק מוקם לצורך מוגדר; אחרי פתרון הבעיה צריך סגירה או מנדט חדש."
  },
  {
    topic: "תיאום בין מודלים",
    question: "מנהל רואה קונפליקט בישיבה, אך אינו יודע אם זו בעיית שלב התפתחות, תפקיד חסר או נורמה סמויה. מה נכון לעשות?",
    options: [
      { text: "להצליב עדשות: Tuckman - טאקמן לשלב, Belbin - בלבין לתפקידים, ונורמות להבנת הכללים הלא כתובים.", correct: true },
      { text: "לבחור תמיד מודל אחד ולהתעלם מכל האחרים.", correct: false },
      { text: "להחליט שהבעיה בהכרח מקצועית בלבד.", correct: false },
      { text: "לפרק את הצוות לפני כל אבחון.", correct: false }
    ],
    explanation: "החומר מציע כמה עדשות אבחון; באירוע מורכב כדאי לבדוק שלב, תפקידים, התנהגויות ונורמות יחד."
  },
  {
    topic: "פער בין תכנון לביצוע",
    question: "צוות פרויקט הגדיר אבני דרך, אבל אף אחד לא מחבר בין הסיכונים, המשאבים והלו\"ז. מה חסר בניהול הפרויקט?",
    options: [
      { text: "אינטגרציה ניהולית בין Milestones - אבני דרך, משאבים וסיכונים.", correct: true },
      { text: "רק שם יצירתי יותר לפרויקט.", correct: false },
      { text: "ביטול כל נקודת בקרה כדי לחסוך זמן.", correct: false },
      { text: "העברת כל הידע ללקוח בלי תיאום פנימי.", correct: false }
    ],
    explanation: "צוות פרויקט אינו רק רשימת משימות; הוא דורש חיבור בין יעד, זמן, תקציב, משאבים וסיכונים."
  },
  {
    topic: "למידה מהסיום",
    question: "בסיום פרויקט מוצלח כולם ממהרים למשימה הבאה, בלי לתעד החלטות או להעביר ידע. מה עלול להיפגע?",
    options: [
      { text: "למידה ארגונית והמשכיות ידע לצוותים הבאים.", correct: true },
      { text: "רק עיצוב שקופית הסיום.", correct: false },
      { text: "היכולת לזכור את שם המנהל.", correct: false },
      { text: "אין שום נזק, כי הצלחה תמיד מספיקה.", correct: false }
    ],
    explanation: "סיום צוות כולל גם הפקת לקחים, העברת ידע וסגירת אחריות, כדי שהארגון ילמד מהעבודה."
  },
  {
    topic: "עולם העבודה המודרני",
    question: "ארגון עובר ממבנה היררכי קשיח לעבודה חוצת-תחומים. מה משתנה בדרישות מהעובדים?",
    options: [
      { text: "נדרשות יכולות תיאום, שיתוף ידע וקבלת אחריות מעבר לגבולות תפקיד צרים.", correct: true },
      { text: "אין יותר צורך בתקשורת בין אנשים.", correct: false },
      { text: "כל עובד חוזר לעבוד רק לפי הוראה אחת קבועה.", correct: false },
      { text: "הצורך בצוותים נעלם כי המבנה נעשה שטוח.", correct: false }
    ],
    explanation: "Flat Organizations - ארגונים שטוחים וחוצי תחומים מעלים את הצורך בעבודת צוות, תיאום ואחריות משותפת."
  },
  {
    topic: "שייכות מול בידול",
    question: "צוות גאה בעצמו עד כדי זלזול קבוע בצוותים אחרים. מה המנהל צריך לאזן?",
    options: [
      { text: "לחזק זהות צוותית חיובית בלי להפוך אותה להתנשאות או פגיעה בשיתוף פעולה בין קבוצות.", correct: true },
      { text: "לבטל כל תחושת שייכות כדי למנוע גאווה.", correct: false },
      { text: "לעודד תחרות עוינת כי היא תמיד משפרת ביצועים.", correct: false },
      { text: "להפריד את הצוות מכל ממשק ארגוני.", correct: false }
    ],
    explanation: "זהות חברתית חיובית מחזקת שייכות ומשמעות, אך מנהל צריך למנוע הידרדרות להשוואה שלילית ולעוינות בין קבוצות."
  },
  {
    topic: "תרגום מושג לפעולה",
    question: "מנהל אומר 'צריך יותר ביטחון פסיכולוגי', אבל לא משנה את דרך ניהול הישיבות. מה חסר?",
    options: [
      { text: "תרגום המושג להתנהגויות: הזמנה לדעות שונות, תגובה עניינית לשגיאות ושאלות פתוחות.", correct: true },
      { text: "החלפת שם הצוות לשם באנגלית בלבד.", correct: false },
      { text: "הפחתת כל משוב כדי שלא תהיה ביקורת.", correct: false },
      { text: "הסתפקות בסיסמה על הקיר.", correct: false }
    ],
    explanation: "Psychological Safety - ביטחון פסיכולוגי חייב להתבטא בהתנהגויות ניהוליות שמאפשרות למידה, ביקורת ושיחה פתוחה."
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
    "צוות הנהלה": "materials.html#team-types",
    "חוג איכות": "materials.html#team-types",
    "צוות טקטי": "materials.html#team-types",
    "פיתוח מוצרים": "materials.html#team-types",
    "התאמת סוג צוות": "materials.html#team-types",
    "עבודת צוות מרחוק": "materials.html#team-types",
    "שיתוף פעולה": "materials.html#team-comparison",
    "גבולות מנדט": "materials.html#advice-team",
    "צוות עבודה אורגני": "materials.html#team-types",
    "אוטונומיה צוותית": "materials.html#fish-empowerment",
    "תרבות ארגונית": "materials.html#schein-culture",
    "נורמות סמויות": "materials.html#norms",
    "ביילס": "materials.html#bales",
    "האריסון": "materials.html#harrison",
    "תיאום בין מודלים": "materials.html#bales",
    "פער בין תכנון לביצוע": "materials.html#team-types",
    "למידה מהסיום": "materials.html#tuckman",
    "עולם העבודה המודרני": "materials.html#modern-work",
    "שייכות מול בידול": "materials.html#positive-social-identity",
    "תרגום מושג לפעולה": "materials.html#psychological-safety"
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
