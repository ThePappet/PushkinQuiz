/* ==================================================================
   Данные вопросов из info.txt
   ================================================================== */
const quizData = [
  // ── ЧАСТЬ 1: Один вариант ответа (1–20) ────────────────────────
  {
    id: 1, type: 'single',
    question: 'В каком году родился Александр Сергеевич Пушкин?',
    options: [
      { text: '1797', correct: false },
      { text: '1798', correct: false },
      { text: '1799', correct: true },
      { text: '1800', correct: false }
    ],
    explanation: 'Пушкин родился 6 июня (26 мая по старому стилю) 1799 года в Москве.'
  },
  {
    id: 2, type: 'single',
    question: 'В каком учебном заведении учился Пушкин?',
    options: [
      { text: 'Московский университет', correct: false },
      { text: 'Царскосельский лицей', correct: true },
      { text: 'Смольный институт', correct: false },
      { text: 'Академия наук', correct: false }
    ],
    explanation: 'В 1811 году Пушкин поступил в Царскосельский лицей, где получил образование и начал литературную карьеру.'
  },
  {
    id: 3, type: 'single',
    question: 'Кто был наставником молодых поэтов и высоко оценил талант Пушкина?',
    options: [
      { text: 'Николай Карамзин', correct: false },
      { text: 'Василий Жуковский', correct: true },
      { text: 'Иван Крылов', correct: false },
      { text: 'Михаил Ломоносов', correct: false }
    ],
    explanation: 'Жуковский поддерживал молодого поэта и позже подарил ему свой портрет с памятной надписью.'
  },
  {
    id: 4, type: 'single',
    question: 'Какое произведение принесло Пушкину широкую известность?',
    options: [
      { text: 'Медный всадник', correct: false },
      { text: 'Борис Годунов', correct: false },
      { text: 'Руслан и Людмила', correct: true },
      { text: 'Дубровский', correct: false }
    ],
    explanation: 'Поэма «Руслан и Людмила» стала крупным литературным успехом молодого автора.'
  },
  {
    id: 5, type: 'single',
    question: 'В каком городе Пушкин провёл южную ссылку?',
    options: [
      { text: 'Архангельск', correct: false },
      { text: 'Одесса', correct: true },
      { text: 'Казань', correct: false },
      { text: 'Смоленск', correct: false }
    ],
    explanation: 'Во время ссылки Пушкин жил в том числе в Одессе.'
  },
  {
    id: 6, type: 'single',
    question: 'Как звали жену Пушкина?',
    options: [
      { text: 'Мария Волконская', correct: false },
      { text: 'Анна Керн', correct: false },
      { text: 'Наталья Гончарова', correct: true },
      { text: 'Екатерина Трубецкая', correct: false }
    ],
    explanation: 'Пушкин женился на Наталье Николаевне Гончаровой в 1831 году.'
  },
  {
    id: 7, type: 'single',
    question: 'Как называлось знаменитое стихотворение, начинающееся словами «Я помню чудное мгновенье…»?',
    options: [
      { text: 'Пророк', correct: false },
      { text: 'Осень', correct: false },
      { text: 'К Чаадаеву', correct: false },
      { text: 'Керн', correct: true }
    ],
    explanation: 'Стихотворение посвящено Анне Керн.'
  },
  {
    id: 8, type: 'single',
    question: 'Кто стал противником Пушкина на последней дуэли?',
    options: [
      { text: 'Пётр Чаадаев', correct: false },
      { text: 'Жорж Дантес', correct: true },
      { text: 'Михаил Лермонтов', correct: false },
      { text: 'Александр Бенкендорф', correct: false }
    ],
    explanation: 'Дуэль состоялась 27 января 1837 года.'
  },
  {
    id: 9, type: 'single',
    question: 'Где состоялась последняя дуэль Пушкина?',
    options: [
      { text: 'На Красной площади', correct: false },
      { text: 'На Чёрной речке', correct: true },
      { text: 'В Царском Селе', correct: false },
      { text: 'В Павловске', correct: false }
    ],
    explanation: 'Место дуэли находится в Санкт-Петербурге.'
  },
  {
    id: 10, type: 'single',
    question: 'Как назывался роман в стихах Пушкина?',
    options: [
      { text: 'Дубровский', correct: false },
      { text: 'Евгений Онегин', correct: true },
      { text: 'Пиковая дама', correct: false },
      { text: 'Повести Белкина', correct: false }
    ],
    explanation: '«Евгений Онегин» считается одним из главных произведений русской литературы.'
  },
  {
    id: 11, type: 'single',
    question: 'Какое прозвище было у Пушкина в лицее?',
    options: [
      { text: 'Француз', correct: false },
      { text: 'Егоза', correct: false },
      { text: 'Обезьяна и тигр', correct: true },
      { text: 'Поэт', correct: false }
    ],
    explanation: 'Такое прозвище он получил за живой характер и внешность.'
  },
  {
    id: 12, type: 'single',
    question: 'Какой язык Пушкин в детстве знал лучше русского?',
    options: [
      { text: 'Немецкий', correct: false },
      { text: 'Французский', correct: true },
      { text: 'Итальянский', correct: false },
      { text: 'Английский', correct: false }
    ],
    explanation: 'Во многих дворянских семьях того времени основным языком общения был французский.'
  },
  {
    id: 13, type: 'single',
    question: 'В каком городе родился Пушкин?',
    options: [
      { text: 'Санкт-Петербург', correct: false },
      { text: 'Москва', correct: true },
      { text: 'Нижний Новгород', correct: false },
      { text: 'Тула', correct: false }
    ],
    explanation: 'Пушкин родился в Москве.'
  },
  {
    id: 14, type: 'single',
    question: 'Как звали знаменитую няню Пушкина?',
    options: [
      { text: 'Прасковья Петровна', correct: false },
      { text: 'Арина Родионовна', correct: true },
      { text: 'Дарья Ивановна', correct: false },
      { text: 'Марфа Семёновна', correct: false }
    ],
    explanation: 'Она оказала большое влияние на интерес поэта к народному творчеству.'
  },
  {
    id: 15, type: 'single',
    question: 'Какое произведение Пушкина посвящено восстанию Пугачёва?',
    options: [
      { text: 'Полтава', correct: false },
      { text: 'Капитанская дочка', correct: true },
      { text: 'Руслан и Людмила', correct: false },
      { text: 'Метель', correct: false }
    ],
    explanation: 'Исторической основой произведения стало восстание Емельяна Пугачёва.'
  },
  {
    id: 16, type: 'single',
    question: 'Сколько детей было у Пушкина?',
    options: [
      { text: '2', correct: false },
      { text: '3', correct: false },
      { text: '4', correct: true },
      { text: '5', correct: false }
    ],
    explanation: 'У Пушкина и Натальи Гончаровой было четверо детей.'
  },
  {
    id: 17, type: 'single',
    question: 'Какое произведение Пушкина считается «энциклопедией русской жизни»?',
    options: [
      { text: 'Медный всадник', correct: false },
      { text: 'Евгений Онегин', correct: true },
      { text: 'Полтава', correct: false },
      { text: 'Пророк', correct: false }
    ],
    explanation: 'Так определил роман критик Виссарион Белинский.'
  },
  {
    id: 18, type: 'single',
    question: 'Кто из русских императоров лично беседовал с Пушкиным после его возвращения из ссылки?',
    options: [
      { text: 'Павел I', correct: false },
      { text: 'Александр I', correct: false },
      { text: 'Николай I', correct: true },
      { text: 'Александр II', correct: false }
    ],
    explanation: 'Император взял на себя роль личного цензора поэта.'
  },
  {
    id: 19, type: 'single',
    question: 'Как называлась усадьба, где Пушкин провёл часть ссылки?',
    options: [
      { text: 'Ясная Поляна', correct: false },
      { text: 'Болдино', correct: false },
      { text: 'Михайловское', correct: true },
      { text: 'Абрамцево', correct: false }
    ],
    explanation: 'Именно там были созданы многие известные произведения.'
  },
  {
    id: 20, type: 'single',
    question: 'Что произошло осенью 1830 года в Болдине?',
    options: [
      { text: 'Свадьба Пушкина', correct: false },
      { text: 'Болдинская осень', correct: true },
      { text: 'Последняя ссылка', correct: false },
      { text: 'Дуэль', correct: false }
    ],
    explanation: 'В этот период Пушкин создал множество выдающихся произведений.'
  },

  // ── ЧАСТЬ 2: Несколько вариантов ответа (21–30) ──────────────
  {
    id: 21, type: 'multiple',
    question: 'Какие произведения принадлежат Пушкину?',
    options: [
      { text: 'Евгений Онегин', correct: true },
      { text: 'Герой нашего времени', correct: false },
      { text: 'Капитанская дочка', correct: true },
      { text: 'Пиковая дама', correct: true },
      { text: 'Мёртвые души', correct: false }
    ],
    explanation: 'Остальные произведения принадлежат Лермонтову и Гоголю.'
  },
  {
    id: 22, type: 'multiple',
    question: 'Какие города связаны с жизнью Пушкина?',
    options: [
      { text: 'Москва', correct: true },
      { text: 'Санкт-Петербург', correct: true },
      { text: 'Одесса', correct: true },
      { text: 'Владивосток', correct: false },
      { text: 'Томск', correct: false }
    ],
    explanation: 'В первых трёх городах Пушкин жил или работал.'
  },
  {
    id: 23, type: 'multiple',
    question: 'Какие произведения были написаны в Болдинскую осень?',
    options: [
      { text: 'Повести Белкина', correct: true },
      { text: 'Маленькие трагедии', correct: true },
      { text: 'Домик в Коломне', correct: true },
      { text: 'Герой нашего времени', correct: false },
      { text: 'Кому на Руси жить хорошо', correct: false }
    ],
    explanation: 'Остальные произведения принадлежат другим авторам.'
  },
  {
    id: 24, type: 'multiple',
    question: 'Какие прозвища или характеристики относились к Пушкину?',
    options: [
      { text: 'Француз', correct: true },
      { text: 'Обезьяна и тигр', correct: true },
      { text: 'Лицейский мудрец', correct: false },
      { text: 'Солнце русской поэзии', correct: true },
      { text: 'Великий математик', correct: false }
    ],
    explanation: 'Первые, вторые и четвёртые действительно связаны с Пушкиным.'
  },
  {
    id: 25, type: 'multiple',
    question: 'Какие произведения относятся к прозе Пушкина?',
    options: [
      { text: 'Дубровский', correct: true },
      { text: 'Капитанская дочка', correct: true },
      { text: 'Метель', correct: true },
      { text: 'Полтава', correct: false },
      { text: 'Пророк', correct: false }
    ],
    explanation: '«Полтава» и «Пророк» являются поэтическими произведениями.'
  },
  {
    id: 26, type: 'multiple',
    question: 'Какие люди входили в круг общения Пушкина?',
    options: [
      { text: 'Жуковский', correct: true },
      { text: 'Гоголь', correct: true },
      { text: 'Крылов', correct: true },
      { text: 'Чехов', correct: false },
      { text: 'Толстой', correct: false }
    ],
    explanation: 'Чехов и Толстой родились позже.'
  },
  {
    id: 27, type: 'multiple',
    question: 'Какие факты о няне Пушкина верны?',
    options: [
      { text: 'Её звали Арина Родионовна', correct: true },
      { text: 'Она рассказывала сказки Пушкину', correct: true },
      { text: 'Была крепостной', correct: true },
      { text: 'Училась в университете', correct: false },
      { text: 'Была писательницей', correct: false }
    ],
    explanation: 'Три первых утверждения соответствуют действительности.'
  },
  {
    id: 28, type: 'multiple',
    question: 'Какие произведения связаны с исторической тематикой?',
    options: [
      { text: 'Полтава', correct: true },
      { text: 'Борис Годунов', correct: true },
      { text: 'Капитанская дочка', correct: true },
      { text: 'Руслан и Людмила', correct: false },
      { text: 'Сказка о рыбаке и рыбке', correct: false }
    ],
    explanation: 'Исторические события лежат в основе первых трёх произведений.'
  },
  {
    id: 29, type: 'multiple',
    question: 'Какие факты относятся к дуэлям Пушкина?',
    options: [
      { text: 'Он участвовал во многих дуэльных историях', correct: true },
      { text: 'Последняя дуэль была с Дантесом', correct: true },
      { text: 'Дуэль проходила на Чёрной речке', correct: true },
      { text: 'Дуэль была с Лермонтовым', correct: false },
      { text: 'После дуэли он прожил много лет', correct: false }
    ],
    explanation: 'Верны первые три утверждения.'
  },
  {
    id: 30, type: 'multiple',
    question: 'Какие сказки написал Пушкин?',
    options: [
      { text: 'Сказка о царе Салтане', correct: true },
      { text: 'Сказка о рыбаке и рыбке', correct: true },
      { text: 'Сказка о золотом петушке', correct: true },
      { text: 'Конёк-Горбунок', correct: false },
      { text: 'Морозко', correct: false }
    ],
    explanation: '«Конёк-Горбунок» написал Ершов, «Морозко» — народная сказка.'
  },

  // ── ЧАСТЬ 3: Свой вариант (31–35) ─────────────────────────────
  {
    id: 31, type: 'text',
    question: 'Сколько детей было у Пушкина?',
    correctAnswer: '4',
    keywords: ['4', 'четыр'],
    explanation: 'Правильный ответ: 4. У Пушкина и Натальи Гончаровой было четверо детей.'
  },
  {
    id: 32, type: 'text',
    question: 'Сколько лет было Пушкину на момент смерти?',
    correctAnswer: '37',
    keywords: ['37', 'тридцать семь'],
    explanation: 'Правильный ответ: 37 лет. Поэт умер в 1837 году после ранения на дуэли.'
  },
  {
    id: 33, type: 'text',
    question: 'Как звали няню Пушкина?',
    correctAnswer: 'Арина Родионовна',
    keywords: ['арина', 'родионовна'],
    explanation: 'Правильный ответ: Арина Родионовна. Она сыграла важную роль в формировании интереса Пушкина к народному творчеству.'
  },
  {
    id: 34, type: 'text',
    question: 'В каком году был открыт Царскосельский лицей, в который поступил Пушкин?',
    correctAnswer: '1811',
    keywords: ['1811', 'тысяча восемьсот один'],
    explanation: 'Правильный ответ: 1811 год. Именно тогда началось обучение первого набора лицеистов.'
  },
  {
    id: 35, type: 'text',
    question: 'Как называлась знаменитая творческая пора Пушкина осенью 1830 года?',
    correctAnswer: 'Болдинская осень',
    keywords: ['болдин'],
    explanation: 'Правильный ответ: Болдинская осень. В этот период были созданы десятки произведений, вошедших в золотой фонд русской литературы.'
  }
];

/* ==================================================================
   QUOTES / TITLES
   ================================================================== */
const quotes = [
  '«Чтение — вот лучшее учение!»',
  '«Мой друг, Отчизне посвятим души прекрасные порывы!»',
  '«Тьмы низких истин мне дороже нас возвышающий обман»',
  '«Блажен, кто смолоду был молод, блажен, кто вовремя созрел»',
  '«Привычка свыше нам дана: замена счастию она»',
  '«Мы почитаем всех нулями, а единицами — себя»',
  '«Не дай мне Бог сойти с ума…»',
  '«Что в имени тебе моём?»',
  '«Я памятник себе воздвиг нерукотворный»'
];

const rankLevels = [
  { min: 0,   title: 'Новичок',          desc: 'Вы только начинаете знакомство с творчеством великого поэта. Впереди много открытий!' },
  { min: 21,  title: 'Любознательный',   desc: 'Неплохое начало! Вы уже что-то знаете о Пушкине, но есть к чему стремиться.' },
  { min: 41,  title: 'Читатель',         desc: 'Вы знакомы с творчеством поэта. Похвально! Осталось углубить знания.' },
  { min: 61,  title: 'Знаток',           desc: 'Отличный результат! Вы хорошо знаете жизнь и произведения Пушкина.' },
  { min: 81,  title: 'Эксперт',          desc: 'Ваши познания глубоки. Вы прекрасно ориентируетесь в пушкинской эпохе!' },
  { min: 96,  title: 'Настоящий пушкиновед', desc: 'Блестяще! Вы — истинный ценитель наследия Александра Сергеевича!' }
];

/* ==================================================================
   STATE
   ================================================================== */
let currentIndex = 0;
let results = [];           // boolean[] — правильный/нет для каждого вопроса
let answered = false;
let currentCorrect = false; // флаг для текущего вопроса (для подсветки)

/* ==================================================================
   DOM refs
   ================================================================== */
const mainEl       = document.getElementById('main-content');
const footerEl     = document.getElementById('footer-area');
const progressStep = document.getElementById('progress-step');
const counterEl    = document.getElementById('counter');

/* ==================================================================
   RENDER
   ================================================================== */
function render() {
  const total = quizData.length;
  const q = quizData[currentIndex];

  progressStep.style.width = `${((currentIndex) / total) * 100}%`;
  counterEl.textContent = `Вопрос ${currentIndex + 1} из ${total}`;

  let typeLabel = '';
  if (q.type === 'single')   typeLabel = 'Один вариант';
  else if (q.type === 'multiple') typeLabel = 'Несколько вариантов';
  else typeLabel = 'Свой ответ';

  const qIdx = currentIndex;

  let optionsHtml = '';
  let inputName = `q_${qIdx}`;

  if (q.type === 'single') {
    optionsHtml = '<div class="options">';
    q.options.forEach((opt, oi) => {
      optionsHtml += `
        <label class="option" data-oi="${oi}">
          <input type="radio" name="${inputName}" value="${oi}">
          <span class="option-text">${opt.text}</span>
        </label>`;
    });
    optionsHtml += '</div>';
  } else if (q.type === 'multiple') {
    optionsHtml = '<div class="options">';
    q.options.forEach((opt, oi) => {
      optionsHtml += `
        <label class="option" data-oi="${oi}">
          <input type="checkbox" name="${inputName}" value="${oi}">
          <span class="option-text">${opt.text}</span>
        </label>`;
    });
    optionsHtml += '</div>';
  } else {
    optionsHtml = `
      <div class="text-input-wrapper">
        <input type="text" class="text-input" id="text-input" placeholder="Введите ваш ответ…" autocomplete="off">
      </div>`;
  }

  const html = `
    <div class="question-card">
      <div class="question-type-badge">${typeLabel}</div>
      <div class="question-text">${q.question}</div>
      ${optionsHtml}
      <div id="explanation-area"></div>
    </div>`;

  mainEl.innerHTML = html;

  // Кнопка
  footerEl.innerHTML = `
    <div class="btn-area">
      <button class="btn" id="btn-action" disabled>Ответить</button>
    </div>`;

  const btn = document.getElementById('btn-action');

  // Включаем кнопку когда есть выбор
  if (q.type === 'single') {
    const radios = mainEl.querySelectorAll('input[type="radio"]');
    radios.forEach(r => {
      r.addEventListener('change', () => { btn.disabled = false; });
    });
  } else if (q.type === 'multiple') {
    const checks = mainEl.querySelectorAll('input[type="checkbox"]');
    checks.forEach(c => {
      c.addEventListener('change', () => {
        btn.disabled = !mainEl.querySelectorAll('input[type="checkbox"]:checked').length;
      });
    });
  } else {
    const inp = document.getElementById('text-input');
    inp.addEventListener('input', () => {
      btn.disabled = inp.value.trim().length === 0;
    });
  }

  btn.addEventListener('click', onAnswer);
  answered = false;
}

/* ==================================================================
   ANSWER HANDLER
   ================================================================== */
function onAnswer() {
  if (answered) return;
  const q = quizData[currentIndex];
  let isCorrect = false;

  if (q.type === 'single') {
    const selected = mainEl.querySelector('input[type="radio"]:checked');
    if (!selected) return;
    const val = parseInt(selected.value);
    isCorrect = q.options[val].correct;

    // Подсветка
    const labels = mainEl.querySelectorAll('.option');
    labels.forEach((lbl, i) => {
      lbl.classList.add('disabled');
      if (q.options[i].correct) {
        lbl.classList.add('correct');
      }
      if (i === val && !q.options[val].correct) {
        lbl.classList.add('wrong');
      }
    });

  } else if (q.type === 'multiple') {
    const checked = mainEl.querySelectorAll('input[type="checkbox"]:checked');
    const selectedVals = Array.from(checked).map(c => parseInt(c.value));

    const allCorrectSelected = q.options.every((opt, i) => {
      if (opt.correct) return selectedVals.includes(i);
      return !selectedVals.includes(i);
    });
    isCorrect = allCorrectSelected;

    const labels = mainEl.querySelectorAll('.option');
    labels.forEach((lbl, i) => {
      lbl.classList.add('disabled');
      const isSelected = selectedVals.includes(i);
      if (q.options[i].correct && isSelected) {
        lbl.classList.add('correct');
      } else if (!q.options[i].correct && isSelected) {
        lbl.classList.add('wrong');
      } else if (q.options[i].correct && !isSelected) {
        lbl.classList.add('missed');
      } else {
        lbl.classList.add('disabled');
      }
    });

  } else {
    // text
    const inp = document.getElementById('text-input');
    const userVal = inp.value.trim().toLowerCase();
    isCorrect = q.keywords.some(kw => userVal.includes(kw.toLowerCase()));

    inp.classList.add(isCorrect ? 'correct-input' : 'wrong-input');
    inp.disabled = true;
  }

  results[currentIndex] = isCorrect;

  // Показываем пояснение
  const expArea = document.getElementById('explanation-area');
  const expClass = isCorrect ? 'correct-explain' : 'wrong-explain';
  expArea.innerHTML = `<div class="explanation ${expClass}">${q.explanation}</div>`;

  // Меняем кнопку
  const btn = document.getElementById('btn-action');
  const isLast = currentIndex === quizData.length - 1;
  btn.textContent = isLast ? 'Результаты →' : 'Следующий →';
  btn.className = 'btn btn-next';
  btn.disabled = false;

  // Заменяем обработчик
  btn.removeEventListener('click', onAnswer);
  btn.addEventListener('click', onNext);
  answered = true;
}

/* ==================================================================
   NEXT / RESULT
   ================================================================== */
function onNext() {
  if (currentIndex < quizData.length - 1) {
    currentIndex++;
    render();
  } else {
    showResult();
  }
}

/* ==================================================================
   RESULT SCREEN
   ================================================================== */
function showResult() {
  const total = quizData.length;
  const correctCount = results.filter(v => v === true).length;
  const pct = Math.round((correctCount / total) * 100);

  const rank = rankLevels.slice().reverse().find(r => pct >= r.min) || rankLevels[0];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  progressStep.style.width = '100%';
  counterEl.textContent = 'Викторина завершена';

  mainEl.innerHTML = `
    <div class="result-screen">
      <div class="result-icon">❦</div>
      <h2 class="result-title">Поздравляем!</h2>
      <p class="result-subtitle">Викторина об Александре Сергеевиче Пушкине завершена</p>

      <div class="result-score">
        <div class="result-score-circle">
          <span class="result-score-number">${correctCount}</span>
          <span class="result-score-label">из ${total}</span>
        </div>
        <span class="result-percent">${pct}%</span>
      </div>

      <div class="result-rank">${rank.title}</div>
      <p class="result-detail">Верно отвечено на <span>${correctCount}</span> из <span>${total}</span> вопросов</p>
      <p class="result-quote">${quote}</p>
      <p class="result-detail" style="font-size:0.9rem; font-style:italic; color:#8b7355;">${rank.desc}</p>
    </div>`;

  footerEl.innerHTML = `
    <div class="btn-area">
      <button class="btn" id="btn-restart">Пройти заново</button>
    </div>`;

  document.getElementById('btn-restart').addEventListener('click', () => {
    currentIndex = 0;
    results = [];
    render();
  });
}

/* ==================================================================
   INIT
   ================================================================== */
render();
