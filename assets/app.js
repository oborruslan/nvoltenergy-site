const DATA = {
  ro: {
    metaTitle: "NVoltenerergy SRL | Servicii profesionale de instalații electrice",
    ui: {
      skip: "Sari la conținut",
      nav: {
        about: "DESPRE",
        services: "SERVICII",
        projects: "LUCRĂRI",
        prices: "PREȚURI",
        contacts: "CONTACTE",
      },
      cta: {
        call: "APELAȚI",
        consult: "CONSULTANȚĂ",
        service: "Solicită serviciul",
      },
      hero: {
        eyebrow: "servicii de instalații",
        title: "ELECTRICE LA CHEIE PENTRU CASE, AFACERI ȘI HALE INDUSTRIALE",
        meterLabel: "stare proiect",
        meterValue: "audit + deviz + montaj",
      },
      about: {
        eyebrow: "despre noi",
        title: "NVoltenerergy SRL",
        p1: "NVoltenerergy SRL este o companie specializată în servicii profesionale de instalații electrice și soluții tehnice pentru clădiri rezidențiale, comerciale și industriale.",
        p2: "Oferim servicii complete, de la proiectare și execuție până la întreținere, modernizare și intervenții rapide pentru instalații electrice.",
        mission: "Misiunea NVoltenerergy SRL este să ofere lucrări executate la standarde înalte de calitate, cu accent pe siguranță, profesionalism și fiabilitate.",
        more: "CITEȘTE MAI MULT",
        less: "ASCUNDE",
      },
      why: {
        eyebrow: "serviciile noastre",
        title: "De ce ne aleg clienții",
      },
      calc: {
        eyebrow: "soluții moderne",
        title: "Solicită un calcul pentru proiectul tău electric",
        text: "Trimite câteva detalii despre obiect, iar echipa pregătește o estimare inițială pentru materiale, lucrări și termene.",
        button: "SOLICITĂ CALCUL",
      },
      process: {
        eyebrow: "cum lucrăm",
        title: "De la prima discuție până la punerea în funcțiune",
      },
      services: {
        eyebrow: "serviciile noastre",
        title: "Lucrări electrice complete",
        subtitle: "Servicii adaptate pentru locuințe, spații comerciale, hale industriale și clădiri publice.",
      },
      projects: {
        eyebrow: "lucrările noastre",
        title: "Galerie temporară pentru proiecte",
        subtitle: "Imaginile sunt abstracte și pot fi înlocuite ulterior cu fotografii reale din șantier.",
      },
      prices: {
        eyebrow: "prețuri",
        title: "Prețuri orientative pentru început",
        subtitle: "Valorile sunt exemple inițiale și pot fi ajustate după auditul obiectului, materiale și complexitate.",
        all: "Toate",
        interior: "Interior",
        exterior: "Exterior",
      },
      reviews: {
        eyebrow: "recenzii",
        title: "Ce spun clienții demo",
        button: "Lăsați o recenzie",
      },
      contact: {
        eyebrow: "contacte",
        title: "Suntem gata să discutăm proiectul",
        subtitle: "Datele de mai jos sunt demo și pot fi înlocuite cu informațiile oficiale ale companiei.",
        scheduleLabel: "Grafic",
        schedule: "Ln-Vn, 09:00-18:00",
        addressLabel: "Adresă",
        address: "mun. Chișinău, str. Exemplu 10",
        phoneLabel: "Telefon",
      },
      form: {
        name: "Nume",
        phone: "Telefon de contact *",
        message: "Mesaj",
        service: "Serviciu",
        send: "Trimite",
        sendMessage: "Trimite mesajul",
        servicePlaceholder: "Alege serviciul",
        success: "Mulțumim! Solicitarea demo a fost înregistrată local.",
        error: "Completați câmpurile obligatorii.",
      },
      modal: {
        eyebrow: "cerere rapidă",
        title: "Suntem gata să discutăm proiectul",
        text: "Lăsați o solicitare și managerul nostru vă va contacta.",
      },
      reviewModal: {
        eyebrow: "recenzie",
        title: "Lăsați o recenzie",
        comment: "Comentariu",
        send: "Trimite recenzia",
      },
      footer: {
        text: "Abordare completă pentru instalații electrice: proiectare, execuție și mentenanță.",
        copy: "© 2026 NVoltenerergy SRL. Toate drepturile sunt rezervate.",
      },
    },
    heroPoints: [
      "Lucrări electrice pentru case, apartamente, spații comerciale și hale industriale.",
      "Execuție atentă, cu accent pe siguranță, standarde tehnice și durabilitate.",
      "Diagnostic, modernizare, mentenanță și intervenții rapide pentru defecțiuni.",
    ],
    benefits: [
      ["01", "Echipă calificată", "Specialiști pregătiți pentru proiecte rezidențiale, comerciale și industriale."],
      ["02", "Siguranță reală", "Lucrări gândite pentru protecția oamenilor, echipamentelor și clădirii."],
      ["03", "Deviz transparent", "Estimări clare pentru materiale, manoperă, termene și etape de execuție."],
      ["04", "Termene asumate", "Planificare pe etape, cu comunicare directă și verificări la final."],
      ["05", "Soluții moderne", "Cablare, iluminat, automatizări și stații EV adaptate nevoilor actuale."],
      ["06", "Suport tehnic", "Mentenanță, diagnosticare și remediere pentru instalații noi sau vechi."],
    ],
    process: [
      ["Consultanță", "Discutăm cerințele, tipul obiectului, consumatorii principali și prioritățile de siguranță."],
      ["Audit tehnic", "Verificăm instalația sau planul inițial și identificăm riscurile, traseele și puterile necesare."],
      ["Deviz și plan", "Pregătim o estimare clară, cu materiale, etape, termene și opțiuni de optimizare."],
      ["Execuție", "Montăm cabluri, tablouri, prize, iluminat, automatizări și alte sisteme conform proiectului."],
      ["Testare", "Măsurăm, verificăm, configurăm protecțiile și predăm lucrarea doar după controlul final."],
      ["Garanție", "Rămânem disponibili pentru mentenanță, modernizări și intervenții după predarea proiectului."],
    ],
    services: [
      {
        title: "Instalații electrice locative",
        text: "Instalații pentru case, apartamente, blocuri și vile, cu trasee clare și distribuție sigură.",
        tags: ["case", "apartamente", "vile"],
      },
      {
        title: "Spații comerciale și birouri",
        text: "Rețele electrice pentru birouri, magazine, centre comerciale și spații cu flux mare de clienți.",
        tags: ["birouri", "magazine", "centre"],
      },
      {
        title: "Hale, depozite și fabrici",
        text: "Soluții pentru hale industriale, depozite și unități de producție cu sarcini ridicate.",
        tags: ["hale", "depozite", "fabrici"],
      },
      {
        title: "Tablouri electrice",
        text: "Montaj, înlocuire, configurare și conectare a tablourilor electrice de distribuție.",
        tags: ["montaj", "înlocuire", "protecții"],
      },
      {
        title: "Cablare și rețele de alimentare",
        text: "Cablare completă, linii de alimentare, trasee în tub, șanț sau canal tehnic.",
        tags: ["cablare", "alimentare", "trasee"],
      },
      {
        title: "Iluminat interior și exterior",
        text: "Montaj corpuri de iluminat, spoturi, benzi LED, iluminat exterior și fațade.",
        tags: ["interior", "exterior", "LED"],
      },
      {
        title: "Iluminat de siguranță",
        text: "Sisteme de iluminat de urgență și siguranță pentru spații comerciale și publice.",
        tags: ["urgență", "siguranță", "norme"],
      },
      {
        title: "Prize și întrerupătoare",
        text: "Montaj și înlocuire prize, întrerupătoare, doze și corpuri de iluminat.",
        tags: ["prize", "întrerupătoare", "doze"],
      },
      {
        title: "Împământare și paratrăsnete",
        text: "Soluții pentru protecție la supratensiuni, prize de pământ și sisteme de paratrăsnet.",
        tags: ["împământare", "protecție", "paratrăsnet"],
      },
      {
        title: "Măsurători și diagnosticare",
        text: "Verificări, măsurători și diagnosticarea instalațiilor pentru identificarea defecțiunilor.",
        tags: ["măsurători", "diagnostic", "verificări"],
      },
      {
        title: "Reparații și modernizări",
        text: "Reparații, mentenanță electrică și modernizarea instalațiilor vechi sau suprasolicitate.",
        tags: ["reparații", "mentenanță", "modernizare"],
      },
      {
        title: "Automatizări și stații EV",
        text: "Sisteme de control și comandă, automatizări electrice, stații de încărcare și intervenții rapide.",
        tags: ["automatizări", "control", "EV"],
      },
    ],
    projects: [
      ["Tablou de distribuție", "Placeholder abstract pentru lucrări de conectare și protecție."],
      ["Cablare tehnică", "Imagine temporară pentru trasee electrice și rețele de alimentare."],
      ["Iluminat comercial", "Placeholder pentru proiecte de iluminat în spații comerciale."],
      ["Automatizări", "Imagine abstractă pentru sisteme de comandă și control."],
      ["Modernizare", "Placeholder pentru instalații vechi aduse la standarde actuale."],
      ["Stații EV", "Imagine temporară pentru conectare și infrastructură de încărcare."],
    ],
    prices: {
      interior: {
        title: "Lucrări de interior",
        rows: [
          ["Instalare priză / întrerupător", "80 lei"],
          ["Înlocuire priză / întrerupător", "120 lei"],
          ["Montaj doză de aparat (beton)", "70 lei"],
          ["Montaj doză de aparat (gips-carton)", "50 lei"],
          ["Montaj doză de derivație", "100 lei"],
          ["Montaj spot încastrat", "120 lei"],
          ["Montaj corp de iluminat plafonier", "150 lei"],
          ["Montaj lustră standard", "70 lei"],
          ["Montaj bandă LED fără profil", "la cerere"],
          ["Montaj bandă LED în profil", "100 lei"],
          ["Pozare cablu în șanț (beton/cărămidă)", "22 lei"],
          ["Pozare cablu în tub flexibil (copex)", "30 lei"],
          ["Pozare cablu pe gips-carton", "22 lei"],
          ["Șanțuire pereți pentru cablu", "la cerere"],
          ["Montaj tablou electric", "400-650 lei"],
          ["Asamblare tablou (1 modul)", "100 lei"],
          ["Conectare linie la tablou", "150 lei"],
          ["Diagnosticare rețea electrică", "la cerere"],
          ["Identificare defecțiune", "1000-2000 lei"],
          ["Deplasare specialist (Chișinău)", "300 lei"],
        ],
      },
      exterior: {
        title: "Lucrări de exterior",
        rows: [
          ["Pozare cablu pe fațadă", "50 lei"],
          ["Pozare cablu în țeavă (exterior)", "70 lei"],
          ["Pozare cablu în pământ", "80 lei"],
          ["Montaj cablu în șanț", "250 lei"],
          ["Instalare țeavă de protecție", "40 lei"],
          ["Montaj corp de iluminat exterior", "250 lei"],
          ["Montaj corp de iluminat fațadă", "la cerere"],
          ["Montaj intrare electrică în casă", "1500 lei"],
          ["Montaj priză de pământ (împământare)", "3000 lei"],
          ["Conectare stabilizator / UPS", "400-650 lei"],
          ["Instalare tablou exterior", "500 lei"],
        ],
      },
    },
    reviews: [
      ["Oleg", "Lucrarea demo a fost planificată clar, cu deviz transparent și comunicare bună pe fiecare etapă."],
      ["Ludmila", "Echipa a propus o soluție sigură pentru modernizarea instalației și a lucrat foarte ordonat."],
      ["Elena", "Am primit explicații tehnice clare, variante de buget și o predare atentă după testare."],
      ["Andrei", "Pentru spațiul comercial am obținut iluminat eficient și distribuție electrică bine gândită."],
    ],
  },
  ru: {
    metaTitle: "NVoltenerergy SRL | Профессиональные электромонтажные услуги",
    ui: {
      skip: "Перейти к содержимому",
      nav: {
        about: "О НАС",
        services: "УСЛУГИ",
        projects: "РАБОТЫ",
        prices: "ЦЕНЫ",
        contacts: "КОНТАКТЫ",
      },
      cta: {
        call: "ПОЗВОНИТЬ",
        consult: "КОНСУЛЬТАЦИЯ",
        service: "Заказать услугу",
      },
      hero: {
        eyebrow: "электромонтажные услуги",
        title: "ЭЛЕКТРИКА ПОД КЛЮЧ ДЛЯ ДОМОВ, БИЗНЕСА И ПРОМЫШЛЕННЫХ ОБЪЕКТОВ",
        meterLabel: "статус проекта",
        meterValue: "аудит + смета + монтаж",
      },
      about: {
        eyebrow: "о нас",
        title: "NVoltenerergy SRL",
        p1: "NVoltenerergy SRL специализируется на профессиональных электромонтажных услугах и технических решениях для жилых, коммерческих и промышленных зданий.",
        p2: "Мы предлагаем полный цикл работ: проектирование, выполнение, обслуживание, модернизацию и быстрые выезды при неисправностях.",
        mission: "Миссия NVoltenerergy SRL - выполнять работы на высоком уровне качества, с акцентом на безопасность, профессионализм и надежность.",
        more: "ЧИТАТЬ ДАЛЬШЕ",
        less: "СКРЫТЬ",
      },
      why: {
        eyebrow: "наши услуги",
        title: "Почему клиенты выбирают нас",
      },
      calc: {
        eyebrow: "современные решения",
        title: "Запросите расчет для вашего электрического проекта",
        text: "Оставьте несколько деталей об объекте, и команда подготовит первичную оценку по материалам, работам и срокам.",
        button: "ЗАПРОСИТЬ РАСЧЕТ",
      },
      process: {
        eyebrow: "как мы работаем",
        title: "От первой консультации до ввода в эксплуатацию",
      },
      services: {
        eyebrow: "наши услуги",
        title: "Комплексные электромонтажные работы",
        subtitle: "Услуги для домов, коммерческих помещений, промышленных объектов и общественных зданий.",
      },
      projects: {
        eyebrow: "наши работы",
        title: "Временная галерея проектов",
        subtitle: "Изображения абстрактные и позже могут быть заменены реальными фотографиями с объектов.",
      },
      prices: {
        eyebrow: "цены",
        title: "Ориентировочные цены для старта",
        subtitle: "Значения указаны как стартовые примеры и уточняются после аудита объекта, материалов и сложности.",
        all: "Все",
        interior: "Внутри",
        exterior: "Снаружи",
      },
      reviews: {
        eyebrow: "отзывы",
        title: "Демо отзывы клиентов",
        button: "Оставить отзыв",
      },
      contact: {
        eyebrow: "контакты",
        title: "Готовы обсудить ваш проект",
        subtitle: "Данные ниже являются демо и могут быть заменены официальной информацией компании.",
        scheduleLabel: "График",
        schedule: "Пн-Пт, 09:00-18:00",
        addressLabel: "Адрес",
        address: "мун. Кишинев, ул. Пример 10",
        phoneLabel: "Телефон",
      },
      form: {
        name: "Имя",
        phone: "Контактный телефон *",
        message: "Сообщение",
        service: "Услуга",
        send: "Отправить",
        sendMessage: "Отправить сообщение",
        servicePlaceholder: "Выберите услугу",
        success: "Спасибо! Демо заявка сохранена локально.",
        error: "Заполните обязательные поля.",
      },
      modal: {
        eyebrow: "быстрая заявка",
        title: "Готовы обсудить проект",
        text: "Оставьте заявку, и менеджер свяжется с вами.",
      },
      reviewModal: {
        eyebrow: "отзыв",
        title: "Оставить отзыв",
        comment: "Комментарий",
        send: "Отправить отзыв",
      },
      footer: {
        text: "Комплексный подход к электромонтажу: проектирование, выполнение и обслуживание.",
        copy: "© 2026 NVoltenerergy SRL. Все права защищены.",
      },
    },
    heroPoints: [
      "Электромонтажные работы для домов, квартир, коммерческих помещений и промышленных объектов.",
      "Аккуратное выполнение с акцентом на безопасность, технические нормы и долговечность.",
      "Диагностика, модернизация, обслуживание и быстрые выезды при электрических неисправностях.",
    ],
    benefits: [
      ["01", "Квалифицированная команда", "Специалисты для жилых, коммерческих и промышленных проектов."],
      ["02", "Настоящая безопасность", "Работы продумываются для защиты людей, оборудования и здания."],
      ["03", "Прозрачная смета", "Понятные оценки по материалам, работам, срокам и этапам."],
      ["04", "Согласованные сроки", "Планирование по этапам, прямая коммуникация и финальные проверки."],
      ["05", "Современные решения", "Кабельные сети, освещение, автоматика и EV-станции под актуальные задачи."],
      ["06", "Техническая поддержка", "Обслуживание, диагностика и устранение проблем в новых и старых сетях."],
    ],
    process: [
      ["Консультация", "Обсуждаем требования, тип объекта, основные нагрузки и приоритеты безопасности."],
      ["Технический аудит", "Проверяем существующую сеть или план и определяем риски, трассы и требуемую мощность."],
      ["Смета и план", "Готовим понятную оценку с материалами, этапами, сроками и вариантами оптимизации."],
      ["Выполнение", "Монтируем кабели, щиты, розетки, освещение, автоматику и другие системы по проекту."],
      ["Тестирование", "Проводим измерения, проверяем защиту и сдаем работу только после финального контроля."],
      ["Гарантия", "Остаемся доступны для обслуживания, модернизации и выездов после сдачи проекта."],
    ],
    services: [
      {
        title: "Электрика для жилья",
        text: "Монтаж для домов, квартир, блоков и вилл с понятными трассами и безопасным распределением.",
        tags: ["дома", "квартиры", "виллы"],
      },
      {
        title: "Коммерческие помещения",
        text: "Электрические сети для офисов, магазинов, торговых центров и помещений с большим потоком людей.",
        tags: ["офисы", "магазины", "центры"],
      },
      {
        title: "Ангары, склады и фабрики",
        text: "Решения для промышленных объектов, складов и производств с повышенными нагрузками.",
        tags: ["ангары", "склады", "фабрики"],
      },
      {
        title: "Электрические щиты",
        text: "Монтаж, замена, настройка и подключение распределительных электрических щитов.",
        tags: ["монтаж", "замена", "защита"],
      },
      {
        title: "Кабельные линии и питание",
        text: "Полная кабельная разводка, линии питания, прокладка в трубе, штробе или техническом канале.",
        tags: ["кабели", "питание", "трассы"],
      },
      {
        title: "Внутреннее и наружное освещение",
        text: "Монтаж светильников, спотов, LED-лент, наружного и фасадного освещения.",
        tags: ["внутри", "снаружи", "LED"],
      },
      {
        title: "Аварийное освещение",
        text: "Системы аварийного и безопасного освещения для коммерческих и общественных помещений.",
        tags: ["аварийное", "безопасность", "нормы"],
      },
      {
        title: "Розетки и выключатели",
        text: "Установка и замена розеток, выключателей, коробок и осветительных приборов.",
        tags: ["розетки", "выключатели", "коробки"],
      },
      {
        title: "Заземление и молниезащита",
        text: "Решения для защиты от перенапряжений, контуры заземления и системы молниезащиты.",
        tags: ["заземление", "защита", "молния"],
      },
      {
        title: "Измерения и диагностика",
        text: "Проверки, измерения и диагностика электрических установок для поиска неисправностей.",
        tags: ["измерения", "диагностика", "проверки"],
      },
      {
        title: "Ремонт и модернизация",
        text: "Ремонт, электрическое обслуживание и модернизация старых или перегруженных сетей.",
        tags: ["ремонт", "сервис", "модернизация"],
      },
      {
        title: "Автоматика и EV-станции",
        text: "Системы управления, электрическая автоматика, зарядные станции и быстрые выезды.",
        tags: ["автоматика", "управление", "EV"],
      },
    ],
    projects: [
      ["Распределительный щит", "Абстрактный placeholder для работ по подключению и защите."],
      ["Техническая кабельная сеть", "Временное изображение для трасс и линий питания."],
      ["Коммерческое освещение", "Placeholder для проектов освещения в бизнес-пространствах."],
      ["Автоматизация", "Абстрактное изображение для систем управления и контроля."],
      ["Модернизация", "Placeholder для старых сетей, приведенных к современным стандартам."],
      ["EV-станции", "Временное изображение для инфраструктуры зарядки."],
    ],
    prices: {
      interior: {
        title: "Внутренние работы",
        rows: [
          ["Установка розетки / выключателя", "80 лей"],
          ["Замена розетки / выключателя", "120 лей"],
          ["Монтаж монтажной коробки (бетон)", "70 лей"],
          ["Монтаж монтажной коробки (гипсокартон)", "50 лей"],
          ["Монтаж распределительной коробки", "100 лей"],
          ["Монтаж встроенного спота", "120 лей"],
          ["Монтаж потолочного светильника", "150 лей"],
          ["Монтаж стандартной люстры", "70 лей"],
          ["Монтаж LED-ленты без профиля", "по запросу"],
          ["Монтаж LED-ленты в профиль", "100 лей"],
          ["Прокладка кабеля в штробе (бетон/кирпич)", "22 лея"],
          ["Прокладка кабеля в гибкой трубе", "30 лей"],
          ["Прокладка кабеля по гипсокартону", "22 лея"],
          ["Штробление стен под кабель", "по запросу"],
          ["Монтаж электрического щита", "400-650 лей"],
          ["Сборка щита (1 модуль)", "100 лей"],
          ["Подключение линии к щиту", "150 лей"],
          ["Диагностика электрической сети", "по запросу"],
          ["Поиск неисправности", "1000-2000 лей"],
          ["Выезд специалиста (Кишинев)", "300 лей"],
        ],
      },
      exterior: {
        title: "Наружные работы",
        rows: [
          ["Прокладка кабеля по фасаду", "50 лей"],
          ["Прокладка кабеля в трубе (наружно)", "70 лей"],
          ["Прокладка кабеля в земле", "80 лей"],
          ["Монтаж кабеля в траншее", "250 лей"],
          ["Установка защитной трубы", "40 лей"],
          ["Монтаж наружного светильника", "250 лей"],
          ["Монтаж фасадного светильника", "по запросу"],
          ["Монтаж электрического ввода в дом", "1500 лей"],
          ["Монтаж контура заземления", "3000 лей"],
          ["Подключение стабилизатора / UPS", "400-650 лей"],
          ["Установка наружного щита", "500 лей"],
        ],
      },
    },
    reviews: [
      ["Олег", "Демо работа была спланирована ясно, со сметой и хорошей коммуникацией на каждом этапе."],
      ["Людмила", "Команда предложила безопасное решение для модернизации и выполнила работу аккуратно."],
      ["Елена", "Получили понятные технические объяснения, варианты бюджета и внимательную сдачу после тестов."],
      ["Андрей", "Для коммерческого помещения получили эффективное освещение и грамотно продуманное распределение."],
    ],
  },
};

let currentLang = localStorage.getItem("nvoltenergy-lang") || "ro";
let currentPriceFilter = "all";
let revealObserver;

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

function getText(path) {
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), DATA[currentLang].ui) || "";
}

function setTextNodes() {
  qsa("[data-i18n]").forEach((node) => {
    const value = getText(node.dataset.i18n);
    if (value) node.textContent = value;
  });
  document.title = DATA[currentLang].metaTitle;
}

function createEl(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}

function renderHeroPoints() {
  const list = qs("[data-hero-points]");
  list.innerHTML = "";
  DATA[currentLang].heroPoints.forEach((point) => {
    list.append(createEl("li", "", point));
  });
}

function renderBenefits() {
  const grid = qs("[data-benefits]");
  grid.innerHTML = "";
  DATA[currentLang].benefits.forEach(([icon, title, text]) => {
    const card = createEl("article", "benefit-card reveal");
    card.append(createEl("span", "card-icon", icon));
    card.append(createEl("h3", "", title));
    card.append(createEl("p", "", text));
    grid.append(card);
  });
}

function renderProcess() {
  const grid = qs("[data-process]");
  grid.innerHTML = "";
  DATA[currentLang].process.forEach(([title, text], index) => {
    const card = createEl("article", "process-card reveal");
    card.append(createEl("span", "process-number", String(index + 1)));
    card.append(createEl("h3", "", title));
    card.append(createEl("p", "", text));
    grid.append(card);
  });
}

function renderServices() {
  const grid = qs("[data-services]");
  grid.innerHTML = "";
  DATA[currentLang].services.forEach((service, index) => {
    const card = createEl("article", "service-card reveal");
    card.append(createEl("span", "card-icon", String(index + 1).padStart(2, "0")));
    card.append(createEl("h3", "", service.title));
    card.append(createEl("p", "", service.text));

    const tags = createEl("div", "service-tags");
    service.tags.forEach((tag) => tags.append(createEl("span", "", tag)));
    card.append(tags);

    const button = createEl("button", "btn btn-outline", getText("cta.service"));
    button.type = "button";
    button.dataset.openModal = "lead";
    button.dataset.service = service.title;
    card.append(button);
    grid.append(card);
  });
}

function renderProjects() {
  const slider = qs("[data-project-slider]");
  slider.innerHTML = "";
  DATA[currentLang].projects.forEach(([title, text], index) => {
    const card = createEl("article", "project-card");
    const img = document.createElement("img");
    img.src = `./assets/work-${index + 1}.jpg`;
    img.alt = title;
    img.loading = "lazy";
    const copy = createEl("div");
    copy.append(createEl("h3", "", title));
    copy.append(createEl("p", "", text));
    card.append(img, copy);
    slider.append(card);
  });
}

function renderPrices() {
  const grid = qs("[data-prices]");
  grid.innerHTML = "";
  Object.entries(DATA[currentLang].prices).forEach(([category, panel]) => {
    const wrapper = createEl("article", "price-panel reveal");
    wrapper.dataset.category = category;
    const title = createEl("h3", "", panel.title);
    wrapper.append(title);
    panel.rows.forEach(([name, price]) => {
      const row = createEl("div", "price-row");
      row.append(createEl("span", "", name));
      row.append(createEl("strong", "", price));
      wrapper.append(row);
    });
    grid.append(wrapper);
  });
  applyPriceFilter();
}

function renderReviews() {
  const grid = qs("[data-reviews]");
  grid.innerHTML = "";
  DATA[currentLang].reviews.forEach(([name, text]) => {
    const card = createEl("article", "review-card reveal");
    card.append(createEl("strong", "", name));
    card.append(createEl("p", "", text));
    grid.append(card);
  });
}

function populateServiceSelect(selectedService) {
  qsa("[data-service-select]").forEach((select) => {
    select.innerHTML = "";
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = getText("form.servicePlaceholder");
    select.append(placeholder);
    DATA[currentLang].services.forEach((service) => {
      const option = document.createElement("option");
      option.value = service.title;
      option.textContent = service.title;
      select.append(option);
    });
    if (selectedService) select.value = selectedService;
  });
}

function renderAll() {
  setTextNodes();
  renderHeroPoints();
  renderBenefits();
  renderProcess();
  renderServices();
  renderProjects();
  renderPrices();
  renderReviews();
  populateServiceSelect();
  setActiveLang();
  bindDynamicButtons();
  observeReveals();
}

function setActiveLang() {
  qsa("[data-lang]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === currentLang);
  });
}

function applyPriceFilter() {
  qsa("[data-price-filter]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.priceFilter === currentPriceFilter);
  });
  qsa("[data-category]").forEach((panel) => {
    panel.hidden = currentPriceFilter !== "all" && panel.dataset.category !== currentPriceFilter;
  });
}

function observeReveals() {
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );
  qsa(".reveal").forEach((item) => revealObserver.observe(item));
}

function bindDynamicButtons() {
  qsa("[data-open-modal]").forEach((button) => {
    button.onclick = () => openModal(button.dataset.openModal, button.dataset.service);
  });
}

function openModal(type = "lead", selectedService = "") {
  const modal = qs("[data-modal]");
  qsa("[data-modal-content]").forEach((content) => {
    content.hidden = content.dataset.modalContent !== type;
  });
  populateServiceSelect(selectedService);
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  const field = qs("[data-modal-content]:not([hidden]) input, [data-modal-content]:not([hidden]) textarea");
  if (field) field.focus();
}

function closeModal() {
  const modal = qs("[data-modal]");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  qsa("[data-modal] [data-form-status]").forEach((status) => {
    status.textContent = "";
    status.classList.remove("is-error");
  });
}

function bindForms() {
  qsa("[data-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = qs("[data-form-status]", form);
      if (!form.checkValidity()) {
        status.textContent = getText("form.error");
        status.classList.add("is-error");
        form.reportValidity();
        return;
      }
      form.reset();
      status.textContent = getText("form.success");
      status.classList.remove("is-error");
    });
  });
}

function bindStaticEvents() {
  qsa("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      currentLang = button.dataset.lang;
      localStorage.setItem("nvoltenergy-lang", currentLang);
      document.documentElement.lang = currentLang;
      renderAll();
    });
  });

  qsa("[data-price-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      currentPriceFilter = button.dataset.priceFilter;
      applyPriceFilter();
    });
  });

  qsa("[data-close-modal]").forEach((item) => item.addEventListener("click", closeModal));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });

  const header = qs("[data-header]");
  const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 28);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const menuToggle = qs("[data-menu-toggle]");
  const mobileNav = qs("[data-mobile-nav]");
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    mobileNav.classList.toggle("is-open", !isOpen);
  });
  qsa(".mobile-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      mobileNav.classList.remove("is-open");
    });
  });

  const expandable = qs("[data-expandable]");
  const expandTrigger = qs("[data-expand-trigger]");
  expandTrigger.addEventListener("click", () => {
    expandable.classList.toggle("is-open");
    expandTrigger.textContent = expandable.classList.contains("is-open") ? getText("about.less") : getText("about.more");
  });

  const slider = qs("[data-project-slider]");
  qs("[data-slide-next]").addEventListener("click", () => scrollProjects(1));
  qs("[data-slide-prev]").addEventListener("click", () => scrollProjects(-1));
  let autoSlide = window.setInterval(() => scrollProjects(1), 4700);
  slider.addEventListener("pointerenter", () => window.clearInterval(autoSlide));
  slider.addEventListener("pointerleave", () => {
    autoSlide = window.setInterval(() => scrollProjects(1), 4700);
  });

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        qsa(".desktop-nav a").forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-35% 0px -55% 0px" }
  );
  qsa("main section[id]").forEach((section) => sectionObserver.observe(section));
}

function scrollProjects(direction) {
  const slider = qs("[data-project-slider]");
  const card = qs(".project-card", slider);
  if (!card) return;
  const step = card.getBoundingClientRect().width + 18;
  const endReached = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 12;
  if (direction > 0 && endReached) {
    slider.scrollTo({ left: 0, behavior: "smooth" });
    return;
  }
  slider.scrollBy({ left: step * direction, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  if (!DATA[currentLang]) currentLang = "ro";
  document.documentElement.lang = currentLang;
  renderAll();
  bindStaticEvents();
  bindForms();
});
