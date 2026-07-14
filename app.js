const questions = [
  {
    topic: "הגדרת צוות",
    question: "מהו תנאי מרכזי לכך שקבוצה תיחשב Team - צוות לפי חומר הקורס?",
    options: [
      { text: "קיימות מטרה משותפת, תלות הדדית, מחויבות ואחריות משותפת לתוצאות.", correct: true },
      { text: "כל אחד מבצע משימה אישית נפרדת ואין צורך בתיאום בין החברים.", correct: false },
      { text: "מספיק שאנשים יושבים באותו חדר או שייכים לאותה מחלקה.", correct: false },
      { text: "רק מנהל אחד מקבל החלטות והחברים אינם נדרשים להשפיע על התוצאה.", correct: false }
    ],
    explanation: "במצגות צוות מוגדר דרך תלות הדדית, מטרה משותפת, מנגנוני תיאום, מחויבות ואחריות לתוצאות."
  },
  {
    topic: "קבוצה לעומת צוות",
    question: "מה מבדיל בעיקר בין Work Group - קבוצת עבודה לבין Team - צוות?",
    options: [
      { text: "בקבוצה התרומה לרוב אישית וברת חלוקה, ובצוות יש מחויבות ותלות הדדית.", correct: true },
      { text: "בקבוצה תמיד יש פחות אנשים מאשר בצוות, ולכן הגודל הוא ההבדל היחיד.", correct: false },
      { text: "בצוות אין צורך במטרה משותפת כי כל חבר יודע לבד מה עליו לעשות.", correct: false },
      { text: "בקבוצת עבודה אין משימות בכלל, אלא רק שיחות כלליות ובלתי מחייבות.", correct: false }
    ],
    explanation: "החומר מדגיש שכל צוות הוא קבוצה, אך לא כל קבוצה היא צוות."
  },
  {
    topic: "סינרגיה",
    question: "מה מתאר העיקרון Synergy - סינרגיה בעבודת צוות?",
    options: [
      { text: "התפוקה של צוות מלוכד גבוהה ואיכותית מסכום התפוקות של חבריו כפרטים.", correct: true },
      { text: "כל חבר עובד לבד ולכן התוצר הסופי שווה בדיוק לסכום החלקים האישיים.", correct: false },
      { text: "הצוות מצליח רק כאשר אין הבדלי דעות ואין צורך בחלוקת תפקידים.", correct: false },
      { text: "סינרגיה פירושה שהמנהל מבצע את רוב העבודה כדי למנוע חיכוכים.", correct: false }
    ],
    explanation: "בחומר מופיע העיקרון 2+2>4 לצד המונח synergos - לעבוד יחד."
  },
  {
    topic: "3E",
    question: "מהם שלושת מרכיבי ההצלחה של צוות לפי מודל 3E שמופיע במצגת?",
    options: [
      { text: "Expertise - מומחיות, Engagement - מעורבות, Execution - ביצוע.", correct: true },
      { text: "Efficiency - יעילות, Emotion - רגש, Equality - שוויון מוחלט בכל החלטה.", correct: false },
      { text: "Education - השכלה, Evaluation - הערכה, Ego - אגו ניהולי מוביל.", correct: false },
      { text: "Experience - ניסיון, Economy - תקציב, Expansion - התרחבות לשווקים.", correct: false }
    ],
    explanation: "המצגת מציגה מומחיות, מעורבות וביצוע כרכיבי הצלחת צוות."
  },
  {
    topic: "סוגי צוותים",
    question: "מה מאפיין Tactical Team - צוות טקטי לפי חומר הקורס?",
    options: [
      { text: "מומחיות גבוהה, תפקידים ברורים, פרוטוקולים נוקשים ופעולה קצרה/ממוקדת.", correct: true },
      { text: "חדשנות פתוחה, גבולות נזילים וסובלנות גבוהה לטעות כחלק מהדגירה.", correct: false },
      { text: "חיים ארוכים וקבועים סביב משימות ליבה שוטפות של מחלקה.", correct: false },
      { text: "ניהול דרך צוותים אחרים, החלטות מורכבות וראייה כוללת של הארגון.", correct: false }
    ],
    explanation: "במפת סוגי הצוותים צוות טקטי מתואר כצוות מומחים למשימות מורכבות, זמניות וממוקדות."
  },
  {
    topic: "סוגי צוותים",
    question: "איזה צוות מתאים לבעיה לא צפויה, מורכבת ומוגבלת בזמן?",
    options: [
      { text: "Problem-Solving / Ad-hoc Team - צוות פתרון בעיה / אד-הוק.", correct: true },
      { text: "Organic Work Team - צוות עבודה אורגני שגרתי וקבוע.", correct: false },
      { text: "Virtual Team - צוות וירטואלי שמוגדר בעיקר לפי ריחוק גאוגרפי.", correct: false },
      { text: "Quality Circle - חוג איכות שמטרתו שיפור תהליכים באופן מתמשך.", correct: false }
    ],
    explanation: "צוות פתרון בעיה/אד-הוק מוקם לצורך מוגדר ומתפרק לאחר סיום המשימה."
  },
  {
    topic: "זהות חברתית",
    question: "מהי Social Identity - זהות חברתית לפי המצגת?",
    options: [
      { text: "תפיסת העצמי כחלק מקבוצה חברתית, עם משמעות רגשית וערכית להשתייכות.", correct: true },
      { text: "רשימת התפקידים הפורמליים שכל עובד קיבל מהארגון בתחילת השנה.", correct: false },
      { text: "מדד כספי שמראה עד כמה הצוות עמד בתקציב וביעדי הביצוע.", correct: false },
      { text: "החלטה ניהולית שמבטלת את ההבדלים בין כל חברי הצוות.", correct: false }
    ],
    explanation: "החומר מדבר על תפיסת עצמי כחלק מקבוצה, נכונות להשתייך, משמעות רגשית ומשמעות ערכית."
  },
  {
    topic: "יצירת זהות",
    question: "מהם שלבי היווצרות Social Identity - זהות חברתית לפי חומר ההכנה?",
    options: [
      { text: "סיווג חברתי, הזדהות חברתית והשוואה חברתית.", correct: true },
      { text: "גיוס, הערכת ביצועים, שכר והכשרה מקצועית.", correct: false },
      { text: "הגדרת תקציב, ניהול סיכונים, בדיקות איכות ופרסום.", correct: false },
      { text: "תכנון, ביצוע, בקרה וסגירת פרויקט לפי לוח זמנים.", correct: false }
    ],
    explanation: "במצגת ההכנה שלושת המנגנונים מופיעים במפורש תחת היווצרות זהות חברתית."
  },
  {
    topic: "ייצוג חברתי",
    question: "מהו Social Representation - ייצוג חברתי בהקשר הצוותי?",
    options: [
      { text: "משמעות משותפת שמארגנת איך חברי קבוצה מבינים תופעה, ערכים ונורמות.", correct: true },
      { text: "קובץ נהלים טכני שמחליף לחלוטין שיחה בין חברי הצוות.", correct: false },
      { text: "רק המצגת הגרפית שמוצגת בשיעור, בלי קשר להתנהגות או לזהות.", correct: false },
      { text: "רשימת ציונים אישית שמדרגת את העובדים מהטוב ביותר לחלש ביותר.", correct: false }
    ],
    explanation: "בחומר ייצוגים חברתיים קשורים לזהות חברתית, ערכים, נורמות ועיגון/החפצה."
  },
  {
    topic: "טאקמן",
    question: "בשלב Forming - גישוש במודל טאקמן, מה מאפיין את הצוות?",
    options: [
      { text: "זהירות, תלות במנחה או במנהל, בדיקת גבולות והסתגלות למשימה.", correct: true },
      { text: "פתרון בעיות מתקדם, תלות הדדית מלאה ועבודה בשיא הביצועים.", correct: false },
      { text: "קונפליקט גלוי סביב סמכויות וקצב בלי ניסיון להבין את המשימה.", correct: false },
      { text: "התפרקות סופית של הצוות ללא צורך בעיבוד או למידה מהתהליך.", correct: false }
    ],
    explanation: "בדף לסטודנט: ציר היחסים הוא תלות, וציר המשימה הוא הסתגלות."
  },
  {
    topic: "טאקמן",
    question: "מה נכון לגבי Storming - התמודדות/סערה?",
    options: [
      { text: "זה שלב נורמלי והכרחי של חיכוך, מחלוקות ומאבקי השפעה.", correct: true },
      { text: "זה סימן שהצוות נכשל ולכן צריך לפרק אותו מיד וללא אבחון.", correct: false },
      { text: "בשלב זה אין ויכוחים על תפקידים, סמכויות או סדרי עדיפויות.", correct: false },
      { text: "הצוות כבר הגיע ללכידות מלאה ולכן אין צורך בהתערבות ניהולית.", correct: false }
    ],
    explanation: "המסמך מדגיש שצוות שמדלג על שלב זה רק דוחה אותו להמשך."
  },
  {
    topic: "בלבין",
    question: "מה הלקח מניסוי Apollo Teams - צוותי אפולו של Belbin - בלבין?",
    options: [
      { text: "צוות מצליח אינו אוסף החזקים ביותר, אלא תמהיל מאוזן של תפקידים משלימים.", correct: true },
      { text: "כדאי לבנות צוות רק מאנשים מבריקים שרוצים כולם לנתח ולהוביל.", correct: false },
      { text: "אין חשיבות לתפקידים התנהגותיים כל עוד התפקידים הפורמליים ברורים.", correct: false },
      { text: "צוות נכשל כאשר יש בו יותר מדי יישום, גישור וסגירת קצוות.", correct: false }
    ],
    explanation: "במצגת תפקידי צוות נאמר שצוותי אפולו נכשלו כי חסרו יישום, גישור וסגירת קצוות."
  },
  {
    topic: "בלבין",
    question: "איזה תפקיד Belbin - בלבין מתואר כ-Completer - סוגר קצוות?",
    options: [
      { text: "תפקיד פעולה שמוודא השלמה, דיוק וסגירת פרטים לפני תוצר.", correct: true },
      { text: "תפקיד אנשים שמביא קשרי חוץ ומשאבים מהסביבה החיצונית.", correct: false },
      { text: "תפקיד חשיבה שמייצר רעיונות מקוריים ופתרונות לא שגרתיים.", correct: false },
      { text: "תפקיד שמטרתו היחידה לדחוף להחלטות גם אם אף אחד לא מסיים אותן.", correct: false }
    ],
    explanation: "Completer מופיע במשפחת תפקידי הפעולה לצד Shaper ו-Implementer."
  },
  {
    topic: "ביילס",
    question: "מה בוחן Bales - ביילס?",
    options: [
      { text: "התנהגויות ברגע נתון: תרומה למשימה מול תרומה ליחסים.", correct: true },
      { text: "אבחון קבוע של אישיות האדם והצבתו בתפקיד אחד לכל החיים.", correct: false },
      { text: "חלוקה פורמלית של משרות לפי המבנה ההיררכי של הארגון בלבד.", correct: false },
      { text: "מדידת תקציב הפרויקט והערכת כדאיות כלכלית של צוותים.", correct: false }
    ],
    explanation: "ביילס אינו מסווג אנשים אלא התנהגויות: משימה ויחסים."
  },
  {
    topic: "האריסון",
    question: "מה מטרת Harrison - האריסון בגישת יותר / פחות / להמשיך?",
    options: [
      { text: "להפוך ציפיות סמויות לגלויות וליצור חוזה ציפיות מדובר בצוות.", correct: true },
      { text: "לקבוע מי העובד המצטיין ומי צריך לעזוב את הצוות.", correct: false },
      { text: "לבטל מחלוקות באמצעות הצבעה מהירה בלי שיחה על ציפיות.", correct: false },
      { text: "להחליף את מודל בלבין ולהתעלם מתפקידי צוות קיימים.", correct: false }
    ],
    explanation: "החומר מתאר כתיבה על האחרים ושיחה שמייצרת חוזה ציפיות."
  },
  {
    topic: "תקיעות צוותית",
    question: "מה קורה כאשר חסר תפקיד מסוים בשלב התפתחותי של צוות?",
    options: [
      { text: "הצוות עלול להיתקע; צריך לאבחן מה חסר ולספק את התפקיד הדרוש.", correct: true },
      { text: "הצוות תמיד יתקדם לבד כי שלבי טאקמן מתרחשים אוטומטית ובקו ישר.", correct: false },
      { text: "צריך להוסיף עוד אנשים חזקים בלי לבדוק איזה תפקיד חסר בפועל.", correct: false },
      { text: "הפתרון הוא להימנע משיחה על תפקידים כדי לא ליצור קונפליקט.", correct: false }
    ],
    explanation: "במצגת התפקידים: תפקיד חסר = תקיעות; מאבחנים מה חסר ומספקים אותו."
  }
];

const terms = [
  { en: "Team", he: "צוות", source: "materials.html#team", sourceNote: "זהות חברתית, שקופית 3", note: "קבוצת אנשים עם תלות הדדית, מטרה משותפת, הכרה כיחידה מובחנת, אחריות ומנגנוני תיאום." },
  { en: "Work Group", he: "קבוצת עבודה", source: "materials.html#group-vs-team", sourceNote: "זהות חברתית, שקופית 2", note: "קבוצה שבה המטלות ברות חלוקה והאחריות לרוב אישית וממוקדת בראש." },
  { en: "Synergy", he: "סינרגיה", source: "materials.html#synergy", sourceNote: "זהות חברתית, שקופית 4", note: "מצב שבו תפוקת הצוות המלוכד גבוהה ואיכותית מסכום תפוקות הפרטים." },
  { en: "Expertise", he: "מומחיות", source: "materials.html#three-e", sourceNote: "זהות חברתית, שקופית 4", note: "רכיב 3E: אנשים מוכשרים ומומחים בתחומם." },
  { en: "Engagement", he: "מעורבות", source: "materials.html#three-e", sourceNote: "זהות חברתית, שקופית 4", note: "רכיב 3E: מוטיבציה ומחויבות אמיתיות של חברי הצוות." },
  { en: "Execution", he: "ביצוע", source: "materials.html#three-e", sourceNote: "זהות חברתית, שקופית 4", note: "רכיב 3E: היכולת להוציא לפועל בפועל." },
  { en: "Social Identity", he: "זהות חברתית", source: "materials.html#social-identity", sourceNote: "זהות חברתית ומצגת הכנה", note: "תפיסת העצמי כחלק מקבוצה חברתית, עם משמעות רגשית וערכית להשתייכות." },
  { en: "Social Categorization", he: "סיווג חברתי", source: "materials.html#identity-formation", sourceNote: "מצגת הכנה, שקופית 3", note: "שלב בהיווצרות זהות חברתית: חלוקה לקבוצות חברתיות." },
  { en: "Social Identification", he: "הזדהות חברתית", source: "materials.html#identity-formation", sourceNote: "מצגת הכנה, שקופית 3", note: "שלב שבו האדם מייחס לעצמו שייכות ומשמעות כחלק מהקבוצה." },
  { en: "Social Comparison", he: "השוואה חברתית", source: "materials.html#identity-formation", sourceNote: "מצגת הכנה, שקופית 3", note: "השוואת קבוצת השייכות לקבוצות אחרות כחלק מבניית זהות." },
  { en: "Social Representation", he: "ייצוג חברתי", source: "materials.html#social-representation", sourceNote: "מצגת הכנה וייצוג חברתי", note: "משמעות משותפת שמחברת בין תפיסות, ערכים, נורמות והתנהגות." },
  { en: "Norms", he: "נורמות", source: "materials.html#norms", sourceNote: "מצגת הכנה, שקופית 4", note: "כללי התנהגות קבוצתיים הנוצרים ומפוקחים דרך הייצוגים והתרבות." },
  { en: "Cohesion", he: "לכידות", source: "materials.html#cohesion", sourceNote: "מצגת הכנה, שקופית 4", note: "מידת החיבור של חברי הקבוצה; יכולה לתרום לביצועים אך אינה מספיקה לבדה." },
  { en: "Forming", he: "גישוש", source: "materials.html#tuckman", sourceNote: "דף שלבי התפתחות", note: "שלב ראשון בטאקמן: תלות ביחסים והסתגלות במשימה." },
  { en: "Storming", he: "התמודדות / סערה", source: "materials.html#tuckman", sourceNote: "דף שלבי התפתחות", note: "שלב של קונפליקט, מחלוקות, מאבקי השפעה ודיון על איך עובדים." },
  { en: "Norming", he: "גיבוש נורמות", source: "materials.html#tuckman", sourceNote: "דף שלבי התפתחות", note: "שלב שבו נוצרת לכידות, זרימת מידע והסכמות עבודה." },
  { en: "Performing", he: "עבודת צוות", source: "materials.html#tuckman", sourceNote: "דף שלבי התפתחות", note: "שלב של פתרון בעיות, תלות הדדית וביצוע צוותי." },
  { en: "Adjourning", he: "סיום", source: "materials.html#tuckman", sourceNote: "דף שלבי התפתחות", note: "שלב סגירת הצוות, עיבוד, למידה ופרידה." },
  { en: "Tactical Team", he: "צוות טקטי", source: "materials.html#team-types", sourceNote: "מפת סוגי צוותים", note: "צוות מומחים למשימות קצרות, מורכבות וממוקדות עם פרוטוקולים נוקשים." },
  { en: "Quality Circle", he: "חוג איכות", source: "materials.html#team-types", sourceNote: "מפת סוגי צוותים", note: "צוות לשיפור איכות ותהליכים, לרוב עם עובדים מהשטח." },
  { en: "Virtual Team", he: "צוות וירטואלי", source: "materials.html#team-types", sourceNote: "מפת סוגי צוותים", note: "צוות שחבריו פועלים במקומות שונים ונעזרים בתקשורת דיגיטלית." },
  { en: "Problem-Solving / Ad-hoc Team", he: "צוות פתרון בעיה / אד-הוק", source: "materials.html#team-types", sourceNote: "מפת סוגי צוותים", note: "צוות זמני לצורך מוגדר, מורכב או לא צפוי, שמתפרק לאחר סיום המשימה." },
  { en: "Belbin", he: "בלבין", source: "materials.html#belbin", sourceNote: "תפקידים בצוות, שקופיות 5-7", note: "מודל תפקידי צוות המדגיש תמהיל מאוזן של תפקידים משלימים." },
  { en: "Shaper", he: "דוחף להחלטות", source: "materials.html#belbin", sourceNote: "תפקידים בצוות, שקופית 6", note: "תפקיד פעולה בבלבין: דוחף את הצוות להכרעות ולהתקדמות." },
  { en: "Implementer", he: "מבצע", source: "materials.html#belbin", sourceNote: "תפקידים בצוות, שקופית 6", note: "תפקיד פעולה בבלבין: הופך רעיון לביצוע מעשי." },
  { en: "Completer", he: "סוגר קצוות", source: "materials.html#belbin", sourceNote: "תפקידים בצוות, שקופית 6", note: "תפקיד פעולה בבלבין: מוודא השלמה, דיוק וסגירת פרטים." },
  { en: "Coordinator", he: "מתאם", source: "materials.html#belbin", sourceNote: "תפקידים בצוות, שקופית 6", note: "תפקיד אנשים בבלבין: יוצר כיוון ותיאום בין חברי הצוות." },
  { en: "Teamworker", he: "מגשר ותומך", source: "materials.html#belbin", sourceNote: "תפקידים בצוות, שקופית 6", note: "תפקיד אנשים בבלבין: תומך ביחסים, מגשר ומשחרר מתחים." },
  { en: "Resource Investigator", he: "קשר חוץ", source: "materials.html#belbin", sourceNote: "תפקידים בצוות, שקופית 6", note: "תפקיד אנשים בבלבין: מביא קשרים, מידע ומשאבים מבחוץ." },
  { en: "Plant", he: "רעיונות", source: "materials.html#belbin", sourceNote: "תפקידים בצוות, שקופית 6", note: "תפקיד חשיבה בבלבין: מעלה רעיונות ופתרונות מקוריים." },
  { en: "Monitor-Evaluator", he: "מנתח", source: "materials.html#belbin", sourceNote: "תפקידים בצוות, שקופית 6", note: "תפקיד חשיבה בבלבין: מנתח, מעריך ובוחן אפשרויות." },
  { en: "Specialist", he: "מומחה", source: "materials.html#belbin", sourceNote: "תפקידים בצוות, שקופית 6", note: "תפקיד חשיבה בבלבין: מביא ידע מקצועי ייחודי." },
  { en: "Bales", he: "ביילס", source: "materials.html#bales", sourceNote: "תפקידים בצוות, שקופיות 9-11", note: "גישה המתבוננת בהתנהגויות: תרומה למשימה ותרומה ליחסים." },
  { en: "Harrison", he: "האריסון", source: "materials.html#harrison", sourceNote: "תפקידים בצוות, שקופית 12", note: "גישת יותר / פחות / להמשיך ליצירת חוזה ציפיות מדובר." },
  { en: "Groupthink", he: "חשיבת קבוצה", source: "materials.html#stuck-team", sourceNote: "תפקידים בצוות, שקופית 15", note: "תקיעות אפשרית בשלב גיבוש כאשר חסרה בחינה ביקורתית או רעיונות חלופיים." },
  { en: "Swift Trust", he: "אמון מהיר", source: "materials.html#team-types", sourceNote: "זהות חברתית, שקופית 5", note: "אמון המבוסס על מקצועיות, אופייני לצוות טקטי." }
];

const scenarios = [
  {
    title: "קבוצה שעובדת ליד, לא יחד",
    text: "ארבעה סטודנטים מחלקים ביניהם חלקים בעבודה. כל אחד מגיש חלק משלו, אבל אין מטרה משותפת, אין תיאום ואין אחריות משותפת לתוצר.",
    best: "לאבחן שזו Work Group - קבוצת עבודה יותר מאשר Team - צוות. כדי להפוך אותה לצוות צריך ליצור מטרה משותפת, תלות הדדית, מנגנוני תיאום ואחריות משותפת.",
    why: "הגדרת צוות בחומר אינה נשענת על עצם ההתאספות, אלא על תלות הדדית ומחויבות לתוצאה משותפת."
  },
  {
    title: "הרבה רעיונות, אין תוצר",
    text: "צוות יצירתי מעלה רעיונות מצוינים, אבל בכל פגישה פותחים כיוון חדש ואף אחד לא סוגר החלטות או פרטים.",
    best: "לזהות חוסר בתפקיד Completer - סוגר קצוות, ואולי גם Implementer - מבצע. לפי בלבין, צוות צריך תמהיל מאוזן של תפקידים משלימים.",
    why: "במצגת התפקידים מופיע שצוות מלא רעיונות בלי Completer לא יוציא תוצר."
  },
  {
    title: "קונפליקט בתחילת פרויקט",
    text: "בשלב מוקדם בפרויקט מתחילים ויכוחים על מי מוביל, מי מחליט ומה סדר העדיפויות.",
    best: "לראות בכך Storming - התמודדות/סערה נורמלית. צריך לברר סמכויות, תפקידים ודרך עבודה, לא להתייחס לזה מיד ככישלון.",
    why: "בדף שלבי ההתפתחות נאמר שזה שלב הכרחי; דילוג עליו רק דוחה אותו."
  },
  {
    title: "שקט בחדר, תקיעות בהחלטות",
    text: "בישיבה דנה ויוסי מציעים מידע ורעיונות, אבל עידן שותק ומאיה מנסה להחזיר את כולם לשיחה רגועה.",
    best: "להשתמש ב-Bales - ביילס: לזהות מי תורם למשימה ומי תורם ליחסים, ולשאול מה חסר בחדר ברגע הזה.",
    why: "ביילס מתמקד בהתנהגות בזמן אמת ולא בתיוג קבוע של אנשים."
  },
  {
    title: "ציפיות סמויות יוצרות תסכול",
    text: "חברי צוות כועסים אחד על השני, אבל אף אחד לא אומר בגלוי מה הוא צריך יותר, פחות או שימשיך לקרות.",
    best: "להפעיל את Harrison - האריסון: יותר / פחות / להמשיך, ולנסח חוזה ציפיות מדובר.",
    why: "המצגת מתארת שהתרגיל הופך ציפיות סמויות לגלויות."
  },
  {
    title: "משימה לא צפויה ודחופה",
    text: "הארגון נתקל בתקלה חריגה שדורשת מומחים מתחומים שונים, פתרון מהיר וממוקד, ואז חזרה לשגרה.",
    best: "לבחור Problem-Solving / Ad-hoc Team - צוות פתרון בעיה / אד-הוק, ולא צוות עבודה אורגני קבוע.",
    why: "במפת סוגי הצוותים צוות אד-הוק מוקם לצורך מוגדר, מורכב או לא צפוי ומתפרק לאחר הפתרון."
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
          <small>${term.sourceNote}</small>
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
