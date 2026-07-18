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
  },
  {
    topic: "בהירות תפקידים",
    question: "שני עובדים בטוחים שכל אחד מהם אחראי לעדכן את הלקוח, ובסוף אף אחד לא עושה זאת. מהו הצעד הניהולי המדויק ביותר?",
    options: [
      { text: "להבהיר Role Clarity - בהירות תפקידים, אחריות ומנגנון תיאום סביב נקודת הממשק.", correct: true },
      { text: "להניח שהבעיה תיפתר אם יתווספו עוד אנשים לפגישה.", correct: false },
      { text: "לבטל את הקשר עם הלקוח עד סוף הפרויקט.", correct: false },
      { text: "להחליף את שם המשימה בלי לשנות אחריות.", correct: false }
    ],
    explanation: "כאשר האחריות נופלת בין אנשים, הבעיה אינה רק מוטיבציה אלא עמימות תפקידית וחוסר תיאום."
  },
  {
    topic: "העברת ידע",
    question: "עובדת מרכזית עוזבת, וכל הידע שלה נשאר בראש שלה. מה צריך לעשות לפני הסיום?",
    options: [
      { text: "לבנות Knowledge Transfer - העברת ידע: תיעוד, חפיפה וסימון החלטות פתוחות.", correct: true },
      { text: "להמתין שהצוות ילמד הכל לבד אחרי העזיבה.", correct: false },
      { text: "למחוק מסמכים ישנים כדי לא לבלבל.", correct: false },
      { text: "להתמקד רק במסיבת פרידה.", correct: false }
    ],
    explanation: "בשלב סיום או שינוי בהרכב צוות, העברת ידע מונעת אובדן למידה ופגיעה בהמשכיות."
  },
  {
    topic: "ממשקים בין צוותים",
    question: "צוות פיתוח מאשים את צוות השירות, וצוות השירות מאשים את הפיתוח. הלקוח חווה פתרון מקוטע. מה חסר?",
    options: [
      { text: "תיאום בין-צוותי סביב מטרה משותפת, ממשקי אחריות והעברת מידע.", correct: true },
      { text: "עוד הפרדה בין היחידות כדי שכל אחת תעבוד לבד.", correct: false },
      { text: "החלטה שכל צוות ימדוד רק את הצלחתו הפנימית.", correct: false },
      { text: "ויתור על כל שיחה עם הלקוח.", correct: false }
    ],
    explanation: "עבודת צוות בארגון אינה מסתיימת בתוך הצוות; ממשקים בין צוותים דורשים תיאום כדי לא לפגוע בתוצאה הכוללת."
  },
  {
    topic: "בעלות על החלטה",
    question: "בפגישה התקבלה החלטה, אבל למחרת כל אחד מפרש אותה אחרת. מה היה צריך לסגור בסוף הישיבה?",
    options: [
      { text: "Decision Ownership - בעלות על החלטה: מה הוחלט, מי אחראי, עד מתי ומה הקריטריון להשלמה.", correct: true },
      { text: "רק מי דיבר הכי הרבה במהלך הישיבה.", correct: false },
      { text: "האם כולם הרגישו שהישיבה הייתה קצרה.", correct: false },
      { text: "איזה צבע יופיע בכותרת המסמך.", correct: false }
    ],
    explanation: "החלטה צוותית צריכה להפוך לפעולה דרך אחריות, לוח זמנים ותוצר ברור."
  },
  {
    topic: "עומס תיאום",
    question: "בצוות של 14 אנשים כל החלטה דורשת המון תיאומים, ורוב הישיבות הופכות לעדכונים ארוכים. מה כדאי לבחון?",
    options: [
      { text: "האם גודל הצוות ומבנה התיאום עדיין מתאימים למשימה.", correct: true },
      { text: "להוסיף עוד משתתפים לכל ישיבה כדי לייצר יותר קולות.", correct: false },
      { text: "לבטל כל תפקיד מובחן בצוות.", correct: false },
      { text: "להפוך כל עדכון להצבעה חשאית.", correct: false }
    ],
    explanation: "ככל שהצוות גדל, עומס התיאום גדל; לכן צריך להתאים גודל, תתי-צוותים ומנגנוני עבודה."
  },
  {
    topic: "עיצוב ישיבה",
    question: "ישיבה שבועית חוזרת בלי סדר יום, בלי החלטות ובלי המשך. איזו התערבות הכי מתאימה?",
    options: [
      { text: "להגדיר מטרה, תוצרים רצויים, תפקידים בזמן הישיבה ומעקב אחר החלטות.", correct: true },
      { text: "להאריך את הישיבה כדי שאולי יצא ממנה משהו.", correct: false },
      { text: "להחליף את כל המשתתפים בכל שבוע.", correct: false },
      { text: "לבטל סיכום כי הוא פורמלי מדי.", correct: false }
    ],
    explanation: "ישיבה היא מנגנון תיאום; בלי מטרה ותוצרים היא הופכת לזמן משותף שאינו משרת עבודת צוות."
  },
  {
    topic: "פערי שפה",
    question: "בצוות גלובלי כולם מדברים אנגלית, אבל מושגים מקצועיים מתפרשים אחרת בכל אתר. מה נכון לעשות?",
    options: [
      { text: "ליצור מילון עבודה משותף ודוגמאות שמבהירות את המשמעות המעשית של המונחים.", correct: true },
      { text: "להניח ששפה משותפת תמיד מונעת אי-הבנות.", correct: false },
      { text: "לאסור על שאלות הבהרה כדי לחסוך זמן.", correct: false },
      { text: "להעביר את כל העבודה לאתר אחד בלי בדיקה.", correct: false }
    ],
    explanation: "בצוותים גלובליים לא מספיק להשתמש באותה שפה; צריך לוודא ייצוגים ומשמעויות משותפים."
  },
  {
    topic: "תגובה לטעות",
    question: "חבר צוות מדווח על טעות קטנה מוקדם, והמנהל מגיב בכעס מול כולם. מה הסיכון ארוך הטווח?",
    options: [
      { text: "אנשים ילמדו להסתיר בעיות, והצוות יאבד למידה וביטחון לדווח.", correct: true },
      { text: "כל הטעויות ייעלמו כי הכעס יוצר דיוק מוחלט.", correct: false },
      { text: "הצוות יהפוך בהכרח לצוות ייעוץ.", correct: false },
      { text: "לא תהיה השפעה על התנהגות עתידית.", correct: false }
    ],
    explanation: "אופן התגובה לטעות יוצר נורמה: למידה פתוחה או הסתרה והגנה עצמית."
  },
  {
    topic: "התנגדות מועילה",
    question: "בדיון אסטרטגי כולם מסכימים מהר מדי, ואחת המשתתפות מבקשת לבחון את ההנחות מאחורי ההחלטה. איך נכון לראות זאת?",
    options: [
      { text: "כהתנגדות מועילה שמגינה מפני החלטה לא מבוקרת.", correct: true },
      { text: "כהפרעה שיש לעצור מיד כדי לשמור על קצב.", correct: false },
      { text: "כסימן לכך שאין צורך במידע נוסף.", correct: false },
      { text: "כהוכחה שהצוות סיים את עבודתו.", correct: false }
    ],
    explanation: "ביקורת עניינית יכולה לשמור על איכות החלטות, במיוחד בצוותים מלוכדים או בכירים."
  },
  {
    topic: "ציפיות זמינות",
    question: "חברי צוות מרוחק מתוסכלים כי חלק עונים תוך דקות וחלק תוך יום. אף אחד לא יודע מה מצופה. מה חסר?",
    options: [
      { text: "הסכם צוותי על זמני תגובה, ערוצי תקשורת ודחיפות.", correct: true },
      { text: "עוד כלי תקשורת לפני שמסכימים על כללים.", correct: false },
      { text: "הנחה שכל הודעה היא חירום.", correct: false },
      { text: "ביטול כל עדכון כתוב.", correct: false }
    ],
    explanation: "נורמות זמינות צריכות להיות מדוברות, במיוחד בצוותים וירטואליים שבהם אין סימנים סביבתיים ברורים."
  },
  {
    topic: "חלוקת עבודה",
    question: "כל חבר קיבל חלק במשימה, אבל אין מי שמחבר את החלקים למסמך אחד עקבי. מה לא הוגדר?",
    options: [
      { text: "תפקיד אינטגרציה שאחראי לחיבור, עקביות והשלמת התוצר המשותף.", correct: true },
      { text: "רק מספר העמודים שכל אדם כותב.", correct: false },
      { text: "שכל אחד יעבוד על סגנון אחר.", correct: false },
      { text: "שאין צורך בתוצר אחד.", correct: false }
    ],
    explanation: "חלוקת עבודה אינה מספיקה; צוות צריך גם מנגנון שמחבר חלקים לתוצאה משותפת."
  },
  {
    topic: "למידה מצוות אחר",
    question: "צוות אחד פתר בעיה חוזרת, אבל הצוותים האחרים בארגון ממשיכים להיתקל בה. מה כדאי לייצר?",
    options: [
      { text: "מנגנון שיתוף ידע בין צוותים, לא רק הצלחה מקומית.", correct: true },
      { text: "שמירה על הפתרון כסוד כדי לחזק גאווה צוותית.", correct: false },
      { text: "החלפת כל הצוותים האחרים.", correct: false },
      { text: "איסור על למידה בין מחלקות.", correct: false }
    ],
    explanation: "ידע צוותי יכול להפוך לנכס ארגוני רק אם יש דרך להעביר אותו מעבר לגבולות הצוות."
  },
  {
    topic: "אבחון לפני פתרון",
    question: "מנהל מזהה ירידה בביצועים ומיד קובע סדנת גיבוש. מה חסר בהחלטה שלו?",
    options: [
      { text: "אבחון אם הבעיה היא יחסים, משימה, תפקידים, תיאום או משאבים.", correct: true },
      { text: "בחירה מהירה בפתרון אחד בלי לבדוק את הסיבה.", correct: false },
      { text: "הנחה שכל בעיה היא בהכרח חברתית.", correct: false },
      { text: "ביטול כל שיחה עם הצוות.", correct: false }
    ],
    explanation: "התערבות צוותית טובה מתחילה באבחון; לא כל בעיית ביצוע נפתרת בגיבוש."
  },
  {
    topic: "חוזה עבודה צוותי",
    question: "צוות חדש מתחיל לעבוד בלי להסכים איך מקבלים החלטות, איך מעלים קושי ומתי מערבים מנהל. מה כדאי לבנות?",
    options: [
      { text: "חוזה עבודה צוותי שמגדיר כללי פעולה, תקשורת והסלמה.", correct: true },
      { text: "רק רשימת שמות ותפקידים פורמליים.", correct: false },
      { text: "החלטה שלא מדברים על קונפליקטים.", correct: false },
      { text: "מסמך שיווקי ללקוחות בלבד.", correct: false }
    ],
    explanation: "חוזה עבודה צוותי הופך ציפיות לא מדוברות לכללים מוסכמים ומקטין אי-הבנות."
  },
  {
    topic: "תלות סדרתית",
    question: "בפרויקט, עיכוב קטן באפיון גורם לעיכוב בפיתוח, בבדיקות ובהדגמה ללקוח. איזה סוג תלות בולט כאן?",
    options: [
      { text: "תלות סדרתית שבה תוצר של שלב אחד הוא קלט לשלב הבא.", correct: true },
      { text: "היעדר מוחלט של תלות בין חברי הצוות.", correct: false },
      { text: "תחרות בין צוותים שאינם קשורים.", correct: false },
      { text: "רק בעיית עיצוב חזותי.", correct: false }
    ],
    explanation: "כאשר תוצר אחד מזין את השלב הבא, צריך לנהל קדימויות, תיאום וסיכוני עיכוב."
  },
  {
    topic: "תלות הדדית גבוהה",
    question: "במוקד חירום, כל שינוי במידע של אחד מחייב תגובה מיידית של האחרים. מה דורש מצב כזה?",
    options: [
      { text: "תקשורת בזמן אמת, אמון בפרוטוקול ותפקידים ברורים.", correct: true },
      { text: "עבודה אישית מנותקת עד סוף היום.", correct: false },
      { text: "ויתור על כל תרגול מקדים.", correct: false },
      { text: "החלטה שכל אחד יפרש לבד את המידע.", correct: false }
    ],
    explanation: "בתלות הדדית גבוהה נדרש סנכרון מהיר וברור, אחרת טעות אחת מתגלגלת לכל המערכת."
  },
  {
    topic: "הקשבה בישיבה",
    question: "בכל פעם שחבר שקט מתחיל לדבר, אחרים משלימים את המשפט שלו. מה המנהל יכול לעשות מיד?",
    options: [
      { text: "לעצור את הדפוס, לתת זמן דיבור מלא ולסמן שהקשבה היא נורמה.", correct: true },
      { text: "להניח שהחבר השקט אינו רוצה לתרום.", correct: false },
      { text: "להעביר את כל ההחלטות למי שמדבר מהר.", correct: false },
      { text: "לבטל את הנושא כי הוא לא מקצועי.", correct: false }
    ],
    explanation: "התנהגות קטנה בישיבה יכולה לבנות או לפגוע בנורמות של השתתפות וביטחון."
  },
  {
    topic: "מסגור משימה",
    question: "צוות מקבל משימה בניסוח 'תעשו משהו עם השירות'. מה חסר כדי להפוך זאת למשימת צוות ברורה?",
    options: [
      { text: "יעד, גבולות, מדדי הצלחה ובעלי עניין.", correct: true },
      { text: "רק שם קצר יותר למשימה.", correct: false },
      { text: "עמימות כדי שכל אחד ינחש לבד.", correct: false },
      { text: "יותר פגישות בלי מטרה.", correct: false }
    ],
    explanation: "מטרה משותפת צריכה להיות מספיק ברורה כדי לאפשר תיאום, אחריות והערכת הצלחה."
  },
  {
    topic: "קונפליקט משימה",
    question: "שני עובדים מתווכחים בחריפות על הדרך המקצועית, אך מקשיבים לטיעונים ומעדכנים את הפתרון. איך נכון לפרש זאת?",
    options: [
      { text: "זה יכול להיות קונפליקט משימה מועיל אם הוא נשאר ענייני ומקדם למידה.", correct: true },
      { text: "כל קונפליקט הוא סימן שחייבים לפרק את הצוות.", correct: false },
      { text: "אין צורך לנהל את הדיון כי הוא תמיד יסתדר.", correct: false },
      { text: "אסור להציג יותר מחלופה אחת.", correct: false }
    ],
    explanation: "לא כל מחלוקת היא כשל; קונפליקט ענייני יכול לשפר החלטות כאשר יש גבולות ושיח מכבד."
  },
  {
    topic: "קונפליקט יחסים",
    question: "דיון מקצועי הופך להערות אישיות כמו 'אתה תמיד הורס'. מה צריך לעשות?",
    options: [
      { text: "להחזיר את השיחה להתנהגות, נתונים ומשימה, ולעצור התקפה אישית.", correct: true },
      { text: "לתת להערות האישיות להימשך כדי לפרוק לחץ.", correct: false },
      { text: "להכריז שכל ביקורת אסורה.", correct: false },
      { text: "להתעלם כי זה לא משפיע על תפקוד.", correct: false }
    ],
    explanation: "קונפליקט יחסים פוגע באמון וביכולת ללמוד; מנהל צריך להחזיר את השיח למישור ענייני."
  },
  {
    topic: "שימור מוטיבציה",
    question: "הצוות עומד ביעדים, אבל אנשים אומרים שאין להם תחושת משמעות או השפעה. מה כדאי לחזק?",
    options: [
      { text: "חיבור בין המשימה לתרומה, ומתן מרחב השפעה אמיתי.", correct: true },
      { text: "עוד בקרה על כל פעולה קטנה.", correct: false },
      { text: "הסתרת מטרות הארגון מהצוות.", correct: false },
      { text: "ביטול משוב חיובי.", correct: false }
    ],
    explanation: "מעורבות אינה רק עמידה ביעדים; היא קשורה למשמעות, השפעה ואחריות."
  },
  {
    topic: "קבלת חבר חדש",
    question: "חבר חדש מצטרף לצוות ותיק שבו הכל 'מובן מאליו'. מה יסייע לקליטה טובה?",
    options: [
      { text: "הסבר גלוי של נורמות, סיפורים, תפקידים וציפיות במקום לסמוך על ניחוש.", correct: true },
      { text: "להניח שהוא יבין הכל לבד דרך טעויות.", correct: false },
      { text: "לא לתת לו לשאול שאלות בחודש הראשון.", correct: false },
      { text: "להשאיר אותו מחוץ לישיבות כדי שלא יפריע.", correct: false }
    ],
    explanation: "צוות ותיק מחזיק ידע ונורמות סמויות; קליטה טובה הופכת אותן לנגישות לחבר החדש."
  },
  {
    topic: "מדדי הצלחה",
    question: "צוות נמדד רק על מהירות, ולכן מתחיל לדלג על בדיקות איכות. מה הבעיה במדידה?",
    options: [
      { text: "מדד יחיד מעוות התנהגות; צריך לאזן בין זמן, איכות, למידה ושביעות רצון בעלי עניין.", correct: true },
      { text: "מהירות היא תמיד המדד היחיד שצריך.", correct: false },
      { text: "אין קשר בין מדידה להתנהגות צוותית.", correct: false },
      { text: "כדאי לבטל כל מדד הצלחה.", correct: false }
    ],
    explanation: "מדדים מעצבים התנהגות; צוותים צריכים מדדים שמשרתים את התוצאה הכוללת ולא רק ממד אחד."
  },
  {
    topic: "תעדוף צוותי",
    question: "הצוות מקבל חמש משימות דחופות באותו זמן, וכל בעל עניין טוען ששלו הכי חשוב. מה נדרש?",
    options: [
      { text: "מנגנון תעדוף מוסכם שמחבר ערך, דחיפות, משאבים ותלות בין משימות.", correct: true },
      { text: "להתחיל את כל המשימות במקביל בלי סדר.", correct: false },
      { text: "לתת לכל עובד לבחור לבד בלי תיאום.", correct: false },
      { text: "להתעלם מבעלי העניין.", correct: false }
    ],
    explanation: "תעדוף הוא חלק מתיאום צוותי; בלי הסכמה, הצוות נקרע בין דרישות סותרות."
  },
  {
    topic: "הסלמה",
    question: "הצוות תקוע יומיים בגלל החלטה שאין לו סמכות לקבל, אך אף אחד לא מעלה זאת למנהל. מה חסר?",
    options: [
      { text: "Escalation Path - נתיב הסלמה ברור להחלטות שחורגות מהמנדט.", correct: true },
      { text: "עוד דיון פנימי בלי בעל סמכות.", correct: false },
      { text: "הסתרת התקיעות כדי לא להפריע.", correct: false },
      { text: "המתנה עד סוף הפרויקט.", correct: false }
    ],
    explanation: "מנדט צוותי צריך לכלול גם מתי ואיך מסלימים החלטות שאינן בסמכות הצוות."
  },
  {
    topic: "שונות בצוות",
    question: "בצוות יש מגוון מקצועי ותרבותי, אך הדיון מנוהל כך שרק סגנון אחד נשמע. מה מתפספס?",
    options: [
      { text: "הערך של Diversity - שונות כמשאב ללמידה, חלופות וזוויות חשיבה.", correct: true },
      { text: "הצורך שכל האנשים יחשבו אותו דבר.", correct: false },
      { text: "היתרון של השתקת דעות אחרות.", correct: false },
      { text: "האפשרות ללמוד ממומחיות מגוונת.", correct: false }
    ],
    explanation: "שונות תורמת רק אם מנגנוני השיחה מאפשרים לקולות שונים להשפיע על ההחלטה."
  },
  {
    topic: "שינוי הרכב צוות",
    question: "אחרי החלפת שני חברים, הצוות מתנהג כאילו שום דבר לא השתנה, אך מופיעים בלבול וזהירות. מה כדאי להכיר?",
    options: [
      { text: "שינוי בהרכב יכול להחזיר את הצוות לאבחון מחודש של תפקידים, יחסים ונורמות.", correct: true },
      { text: "הצוות תמיד נשאר באותו שלב ללא קשר להרכב.", correct: false },
      { text: "אין צורך להכיר את החברים החדשים.", correct: false },
      { text: "שינוי אנשים אינו משפיע על עבודה צוותית.", correct: false }
    ],
    explanation: "גם צוות ותיק עשוי להזדקק להתארגנות מחודשת כאשר הרכבו משתנה."
  },
  {
    topic: "זיהוי תקיעות",
    question: "הצוות מדבר על אותם נושאים בכל שבוע, אבל לא משנה התנהגות ולא מקבל החלטות. מה הסימן המרכזי?",
    options: [
      { text: "תקיעות ניהולית: יש שיחה, אך אין למידה, החלטה או פעולה חדשה.", correct: true },
      { text: "הצוות בהכרח במצב ביצוע מיטבי.", correct: false },
      { text: "זה מוכיח שאין צורך במנהל.", correct: false },
      { text: "שיחות חוזרות תמיד מעידות על התקדמות.", correct: false }
    ],
    explanation: "תקיעות אינה רק קונפליקט גלוי; היא יכולה להופיע כחזרתיות ללא שינוי וללא תוצר."
  },
  {
    topic: "אחריות משותפת",
    question: "לאחר כישלון, כל אחד אומר 'החלק שלי היה בסדר'. מה חסר בתפיסה הצוותית?",
    options: [
      { text: "Accountability - אחריות משותפת לתוצאה הכוללת, מעבר לחלק האישי.", correct: true },
      { text: "עוד פירוק של המשימה לחלקים מנותקים.", correct: false },
      { text: "החלטה שלא בודקים את התוצאה הסופית.", correct: false },
      { text: "מיקוד רק בציונים אישיים.", correct: false }
    ],
    explanation: "צוות נמדד גם בתוצאה המשותפת; אחריות אישית בלבד אינה מספיקה כאשר יש תלות ותוצר משותף."
  },
  {
    topic: "סגירת פערים",
    question: "בבדיקת מוכנות הצוות מגלה שחסר ידע קריטי אצל חלק מהחברים. מה נכון לעשות?",
    options: [
      { text: "לבנות חניכה או למידה ממוקדת שמחברת מומחים לחברי צוות הזקוקים לידע.", correct: true },
      { text: "להסתיר את הפער כדי לא לפגוע במורל.", correct: false },
      { text: "להניח שמוטיבציה גבוהה תחליף מומחיות.", correct: false },
      { text: "לחלק משימות בלי להתחשב בידע.", correct: false }
    ],
    explanation: "כאשר חסרה מומחיות, צריך לנהל למידה וחניכה ולא להסתפק ברצון טוב."
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
    "צוות אד-הוק": "materials.html#team-types",
    "תיאום בין מודלים": "materials.html#bales",
    "פער בין תכנון לביצוע": "materials.html#team-types",
    "למידה מהסיום": "materials.html#tuckman",
    "עולם העבודה המודרני": "materials.html#modern-work",
    "שייכות מול בידול": "materials.html#positive-social-identity",
    "תרגום מושג לפעולה": "materials.html#psychological-safety",
    "בהירות תפקידים": "materials.html#belbin",
    "העברת ידע": "materials.html#tuckman",
    "ממשקים בין צוותים": "materials.html#team",
    "בעלות על החלטה": "materials.html#team",
    "עומס תיאום": "materials.html#belbin",
    "עיצוב ישיבה": "materials.html#team",
    "פערי שפה": "materials.html#social-representation",
    "תגובה לטעות": "materials.html#psychological-safety",
    "התנגדות מועילה": "materials.html#stuck-team",
    "ציפיות זמינות": "materials.html#team-types",
    "חלוקת עבודה": "materials.html#group-vs-team",
    "למידה מצוות אחר": "materials.html#modern-work",
    "אבחון לפני פתרון": "materials.html#bales",
    "חוזה עבודה צוותי": "materials.html#harrison",
    "תלות סדרתית": "materials.html#team",
    "תלות הדדית גבוהה": "materials.html#team",
    "הקשבה בישיבה": "materials.html#psychological-safety",
    "מסגור משימה": "materials.html#team",
    "קונפליקט משימה": "materials.html#tuckman",
    "קונפליקט יחסים": "materials.html#tuckman",
    "שימור מוטיבציה": "materials.html#three-e",
    "קבלת חבר חדש": "materials.html#social-identity",
    "מדדי הצלחה": "materials.html#team-comparison",
    "תעדוף צוותי": "materials.html#team-types",
    "הסלמה": "materials.html#advice-team",
    "שונות בצוות": "materials.html#three-e",
    "שינוי הרכב צוות": "materials.html#tuckman",
    "זיהוי תקיעות": "materials.html#stuck-team",
    "אחריות משותפת": "materials.html#team",
    "סגירת פערים": "materials.html#three-e"
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
