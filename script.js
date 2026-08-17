/* ==========================================================================
   Run & Relax x Chisinau Marathon — Interactive Script
   Multi-language dictionary (RU / RO / EN), State management, Modal & Form Logic
   ========================================================================== */

// Multi-Language Dictionary
const translations = {
	RU: {
		nav_about: "О событии",
		nav_three_r: "Три R",
		nav_zones: "Зоны комплекса",
		nav_timeline: "Программа",
		nav_book: "Забронировать",
		nav_cta: "Забронировать",

		hero_formula_run: "42 км. 5 часов. 0 сожалений.",
		hero_subtext:
			"Эксклюзивное восстановление в Woloshin banya сразу после марафона.",
		hero_date: "13 сентября 2026",
		hero_time: "16:00–21:00 (5 часов)",
		hero_location: "Woloshin banya",
		hero_price: "4 000 MDL / чел",
		hero_spots: "{{total}} места (осталось {{spots}})",
		hero_cta_primary: "Забронировать место",
		hero_cta_secondary: "Узнать детали",
		countdown_label: "ДО СТАРТА:",
		countdown_days: "дней",

		about_tag: "Коллаборация Woloshin banya × Chisinau Marathon",
		steps_tag: "01 / ПРОГРАММА ВОССТАНОВЛЕНИЯ",
		steps_title: "Что тебя ожидает после марафона",
		steps_subtitle:
			"5 последовательных этапов для вывода лактата, снятия мышечного спазма и глубокого перезапуска всего тела.",
		step1_title: "Персональный приём & Электролиты",
		step1_desc:
			"Встреча в Woloshin banya, выдача мягкого халата, полотенца и персонального шкафчика. Приветственный авторский банный напиток-электролит для быстрой регидратации.",
		step2_title: "Контрастные купели & Кристальный пруд",
		step2_desc:
			"Мощный термоконтраст: ледяная купель (+8°C) моментально сужает сосуды и гасит воспаление в мышцах ног, а теплая купель глубоко расслабляет связки.",
		step3_title: "Глиняная парная & Парение вениками",
		step3_desc:
			"Кедровые полки с ароматным сеном, мягкий пар и глубокая пробивка дубовыми вениками от сертифицированных пар-мастеров для скорейшего вывода молочной кислоты.",
		step4_title: "Спортивный массаж ног & Мыльная мойка",
		step4_desc:
			"Индивидуальный спортивный массаж с акцентом на забитые икры и стопы, с последующим старинным мыльно-лыковым ритуалом для глубокого расслабления и очищения.",
		step5_title: "Восстанавливающий ужин & Трапеза",
		step5_desc:
			"Сытный горячий ужин в каминной трапезной: первое блюдо, традиционная молдавская токана с мамалыгой, свежие ягодные лимонады и травяные сборы для восполнения запасов гликогена.",

		three_r_tag: "Концепция 3R",
		three_r_title: "Три фазы вашего вечера",
		r1_title: "1. RUN (Бег)",
		r1_sub: "Финиш — это только начало",
		r1_desc:
			"42 км по асфальту остались позади. Медаль на шее, усталость в ногах. Вы направляетесь в Woloshin banya — место, где ваше тело вернётся к жизни.",
		r1_stat_lbl: "Дистанция:",
		r1_stat_val: "42 / 21 / 10 км",

		r2_title: "2. RELAX (Контраст)",
		r2_sub: "90°C пар ↔ 8°C купель",
		r2_desc:
			"Контрастные заходы под руководством опытных банщиков. Каменная печь-гигант отдаёт мягкое глубокое тепло, снимающее мышечные спазмы.",
		r2_stat_lbl: "Температура:",
		r2_stat_val: "90°C ↔ 8°C",

		r3_title: "3. RECOVER (Ритуал)",
		r3_sub: "5 часов полноценной перезагрузки",
		r3_desc:
			"Индивидуальный спортивный массаж с фокусом на икры и бедра. Мыльно-лыковая мойка, классическое парение вениками и сытный ужин.",
		r3_stat_lbl: "Время слота:",
		r3_stat_val: "16:00 – 21:00",

		zones_tag: "Пространство силы",
		zones_title: "Зоны комплекса Woloshin banya",
		tab_sauna: "1. Парная и купель",
		tab_massage: "2. Массажная зона",
		tab_kitchen: "3. Chill-кухня",
		zone1_title: "Банный комплекс Woloshin banya",
		zone1_desc:
			"Уникальная парная, стилизованная под трипольское жилище с гигантской гранитной печью. Мягкий туманный пар и артезианская ледяная купель.",
		zone1_b1: "Печь из природного гранита (12 тонн камня)",
		zone1_b2: "Купель с проточной артезианской водой 8°C",
		zone1_b3: "Дубовые и берёзовые веники для парения",

		zone2_title: "Кабинет спортивного восстановления",
		zone2_desc:
			"Тихое пространство с массажными столами. 3 профессиональных мастера работают с бегунами, снимая зажимы и лимфостаз.",
		zone2_b1: "30 минут проработки ног на каждого гостя",
		zone2_b2: "Натуральные масла и разогревающие бальзамы",
		zone2_b3: "Персональный подход с учётом вашей дистанции",

		zone3_title: "Трапезная & Chill-room",
		zone3_desc:
			"Уютная зона отдыха с камином. Специально подготовленное меню для восполнения гликогена и водно-солевого баланса.",
		zone3_b1: "Первое + второе на выбор (традиционная токаны с мамалыгой)",
		zone3_b2: "Авторский банный напиток-электролит",
		zone3_b3: "Домашний лимонад из лесных ягод",

		stejar_section_title: "Проводится в комплексе Dragon:",
		stejar_1_title: "Холодная купель",
		stejar_1_desc: "Ледяная купель с артезианской водой (+8°C) для мощного контраста после парной. Моментально тонизирует сосуды и снимает воспаление в мышцах.",
		stejar_2_title: "Горячая купель",
		stejar_2_desc: "Деревянная бочка с горячей водой (+38С) для глубокого прогрева. Ароматы цитруса и хвои, снимающие напряжение.",
		stejar_3_title: "Кристальный пруд",
		stejar_3_desc: "Кристально чистая холодная вода. Глубина более 2 метров. Огромные гранитные валуны и успокаивающий водопад.",
		stejar_4_title: "Ароматное парение",
		stejar_4_desc: "Кедровые полки, покрытые ароматным сеном. Мягкое парение при температуре +60С и высокой влажности. Только живой запах трав без эфирных масел и эссенций.",
		stejar_5_title: "Глиняная Трипольская баня",
		stejar_5_desc: "Потрясающий дизайн, мощная печь с уникальным паром и ощущаемая энергия тысячелетий наших предков создают атмосферу неповторимого парения.",
		stejar_6_title: "Индивидуальное парение",
		stejar_6_desc: "Активная пробивка горячим паром и дубовыми вениками. Особые программы парения на любой вкус.",
		stejar_7_title: "Массаж",
		stejar_7_desc: "Несколько разновидностей массажа для максимального расслабления и оздоровления.",

		reasons_tag: "Преимущества",
		reasons_title: "Почему стоит выбрать этот слот",
		reas1_title: "Разработано для бегунов",
		reas1_desc: "Разработана банными мастерами для скорейшего восстановления.",
		reas2_title: "Всё включено (All-Inclusive)",
		reas2_desc:
			"Персональный массаж ног + банный ритуал с вениками + мыльно-лыковая мойка + сытный ужин и электролиты. Полный комплекс заботы в одном ваучере 4000 MDL.",
		reas3_title: "Камерность: 24 места",
		reas3_desc:
			"Ограниченное количество гостей гарантирует персональное внимание мастеров и отсутствие суеты.",

		time_tag: "Расписание вечера",
		time_title: "Таймлайн 13 сентября 2026",
		t1_time: "16:00",
		t1_title: "Прибытие в Woloshin banya",
		t1_desc:
			"Прибытие участников в Woloshin banya. Выдача персонального халата, полотенца и первого восстанавливающего электролита.",
		t2_time: "16:30",
		t2_title: "Заезд & Первичный контраст",
		t2_desc:
			"Встреча, переодевание, ознакомительный легкий заход в парную, первый гидратационный напиток.",
		t3_time: "17:30",
		t3_title: "Индивидуальный массаж & Мойка",
		t3_desc:
			"Ротация гостей: спортивный массаж ног + традиционная мыльно-лыковая мойка для снятия усталости.",
		t4_time: "19:00",
		t4_title: "Классическое парение вениками",
		t4_desc:
			"Глубокое прогревание в парной с банным мастером, окунание в ледяную купель.",
		t5_time: "20:00",
		t5_title: "Восстанавливающий ужин",
		t5_desc:
			"Подача первого и второго блюда на выбор, дегустация крафтовых лимонадов и электролитов.",
		t6_time: "21:00",
		t6_title: "Завершение программы",
		t6_desc: "Вы снова полны сил и энергии.",

		book_tag: "Официальное бронирование",
		book_title: "Забронировать recovery-пакет",
		book_spots: "Осталось {{spots}} мест из {{total}}",
		sticky_price: "4 000 MDL",
		sticky_spots: "Осталось {{spots}} мест из {{total}}",
		sticky_cta: "Забронировать →",
		lbl_name: "Ваше Имя и Фамилия",
		ph_name: "Иван Иванов",
		lbl_phone: "Номер телефона",
		ph_phone: "+373 60 000 000",
		lbl_email: "Email адрес",
		ph_email: "runner@example.com",
		lbl_tickets: "Количество билетов (4000 MDL / шт)",
		lbl_food: "Особенности питания (опционально)",
		ph_food: "Например: вегетарианство, аллергия на орехи...",
		lbl_agree: "Я согласен с правилами посещения и ",
		lbl_refund_link: "условиями возврата",
		price_total_label: "Итого к оплате:",
		btn_submit_pay: "Забронировать",

		refund_title: "Условия бронирования и возврата",
		refund_p1:
			"Для сохранения камерности слота количество мест ограничено 24 участниками.",
		refund_li1:
			"Возврат 100% — при отмене бронирования не позднее чем за 14 дней до события (до 31.08.2026 включительно).",
		refund_li2:
			"Возврат 50% — при отмене менее чем за 14 дней (или возможность перенести бронь на другого человека).",
		refund_li3:
			"Возврат 100% — в случае форс-мажорных обстоятельств со стороны организаторов.",
		refund_close: "Понятно",

		success_title: "Заявка успешно создана!",
		success_desc:
			"Спасибо! Мы зарезервировали ваши места на recovery-слот 13 сентября.",
		success_step:
			"Менеджер Woloshin banya свяжется с вами в Telegram/WhatsApp для подтверждения деталей и оплаты.",
		success_close: "Закрыть",
	},

	RO: {
		nav_about: "Despre eveniment",
		nav_three_r: "Cele 3 R-uri",
		nav_zones: "Zonele complexului",
		nav_timeline: "Program",
		nav_book: "Rezervare",
		nav_cta: "Rezervă",

		hero_formula_run: "42 km. 5 ore. 0 regrete.",
		hero_subtext:
			"Recuperare exclusivă la Woloshin banya imediat după maraton.",
		hero_date: "13 septembrie 2026",
		hero_time: "16:00–21:00 (5 ore)",
		hero_location: "Woloshin banya",
		hero_price: "4 000 MDL / pers",
		hero_spots: "{{total}} locuri (rămase {{spots}})",
		hero_cta_primary: "Rezervă un loc",
		hero_cta_secondary: "Vezi detalii",
		countdown_label: "PÂNĂ LA START:",
		countdown_days: "zile",

		about_tag: "Colaborare Woloshin banya × Chisinau Marathon",
		steps_tag: "01 / PROGRAM DE RECUPERARE",
		steps_title: "Ce te așteaptă după maraton",
		steps_subtitle:
			"5 etape consecutive pentru eliminarea acidului lactic, reducerea spasmelor musculare și regenerarea completă a corpului.",
		step1_title: "Primire personalizată & Electroliți",
		step1_desc:
			"Sosire la Woloshin banya, primirea halatului moale, a prosopului și a dulapului personal. Băutură artizanală electrolitică pentru rehidratare rapidă.",
		step2_title: "Băi de contrast & Iaz de cristal",
		step2_desc:
			"Contrast termic puternic: ciubărul rece (+8°C) calmează inflamația musculară, iar ciubărul cald relaxează profund tendoanele.",
		step3_title: "Saună de lut & Ritual cu măturici",
		step3_desc:
			"Polițe de cedru cu fân aromat, abur blând și încălzire profundă cu măturici de stejar conduse de maeștri parangii pentru eliminarea acidului lactic.",
		step4_title: "Masaj sportiv al picioarelor & Spălare ritualică",
		step4_desc:
			"Masaj sportiv personalizat axat pe gambe și tălpi, urmat de ritualul străvechi de spălare cu tei pentru curățare și relaxare profundă.",
		step5_title: "Cină de regenerare & Tradiție",
		step5_desc:
			"Cină caldă și copioasă lângă șemineu: felul 1, tocană moldovenească tradițională cu mămăligă, limonade proaspete de pădure și ceaiuri din plante.",

		three_r_tag: "Conceptul 3R",
		three_r_title: "Cele trei faze ale serii tale",
		r1_title: "1. RUN (Alergare)",
		r1_sub: "Finișul este doar începutul",
		r1_desc:
			"42 km de asfalt au rămas în urmă. Medalia este la gât, picioarele sunt obosite. Te îndrepți spre Woloshin banya — locul unde corpul tău își va recăpăta energia.",
		r1_stat_lbl: "Distanță:",
		r1_stat_val: "42 / 21 / 10 km",

		r2_title: "2. RELAX (Contrast)",
		r2_sub: "Saună 90°C ↔ Apa 8°C",
		r2_desc:
			"Ședințe de contrast ghidate de maeștri parangii. Cuptorul uriaș din granit oferă o căldură profundă care elimină spasmele musculare.",
		r2_stat_lbl: "Temperatură:",
		r2_stat_val: "90°C ↔ 8°C",

		r3_title: "3. RECOVER (Ritual)",
		r3_sub: "5 ore de reîncărcare totală",
		r3_desc:
			"Masaj sportiv axat pe gambe și coapse. Spălare tradițională, ritual cu măturici de stejar și o cină copioasă.",
		r3_stat_lbl: "Durată slot:",
		r3_stat_val: "16:00 – 21:00",

		zones_tag: "Spațiul de forță",
		zones_title: "Zonele complexului Woloshin banya",
		tab_sauna: "1. Saună & Baie rece",
		tab_massage: "2. Zona de Masaj",
		tab_kitchen: "3. Chill & Bucătărie",
		zone1_title: "Complexul Woloshin banya",
		zone1_desc:
			"O saună unică inspirată din arhitectura tripoliană cu un cuptor masiv din granit. Abur fin și baie cu apă arteziană rece.",
		zone1_b1: "Cuptor din granit natural (12 tone de piatră)",
		zone1_b2: "Baie de imersie cu apă arteziană la 8°C",
		zone1_b3: "Măturici din stejar și mesteacăn",

		zone2_title: "Cabinet de Recuperare Sportivă",
		zone2_desc:
			"Spațiu liniștit cu mese de masaj profesionale. 3 maeștri lucrează individual cu fiecare alergător.",
		zone2_b1: "Masaj intensiv al picioarelor pentru fiecare oaspete",
		zone2_b2: "Uleiuri naturale și balsamuri de încălzire",
		zone2_b3: "Abordare personalizată în funcție de distanță",

		zone3_title: "Zona de Recreere & Bucătărie",
		zone3_desc:
			"Spațiu confortabil cu șemineu. Meniu special creat pentru refacerea glicogenului și a balanței hidro-electrolitice.",
		zone3_b1: "Felul 1 + felul 2 la alegere (tocană cu mămăligă)",
		zone3_b2: "Băutură artizanală electrolitică de baie",
		zone3_b3: "Limonadă de casă din fructe de pădure",

		stejar_section_title: "Se desfășoară în complexul Dragon:",
		stejar_1_title: "Ciubăr rece",
		stejar_1_desc: "Ciubăr cu apă rece arteziană (+8°C) pentru un contrast puternic după saună. Tonifiază instant vasele și reduce inflamația musculară.",
		stejar_2_title: "Ciubăr fierbinte",
		stejar_2_desc: "Butoi din lemn cu apă fierbinte (+38°C) pentru încălzire profundă. Arome de citrice și conifere ce elimină tensiunea.",
		stejar_3_title: "Iaz de cristal",
		stejar_3_desc: "Apă rece de o puritate cristalină. Adâncime de peste 2 metri. Bolovani uriași de granit și o cascadă liniștitoare.",
		stejar_4_title: "Aburire aromată",
		stejar_4_desc: "Polițe din cedru acoperite cu fân aromat. Aburire blândă la +60°C și umiditate ridicată. Doar mireasmă vie de ierburi fără uleiuri sintetice.",
		stejar_5_title: "Baia de lut Tripoliană",
		stejar_5_desc: "Design impresionant, sobă puternică cu abur unic și energia milenară a strămoșilor ce creează o atmosferă inegalabilă de relaxare.",
		stejar_6_title: "Aburire individuală",
		stejar_6_desc: "Încălzire activă cu abur fierbinte și mături din stejar. Programe speciale de relaxare pentru fiecare gust.",
		stejar_7_title: "Masaj",
		stejar_7_desc: "Diferite tipuri de masaj pentru relaxare musculară maximă și recuperare completă.",

		reasons_tag: "Avantaje",
		reasons_title: "De ce să alegi acest slot",
		reas1_title: "Conceput pentru alergători",
		reas1_desc: "Conceput de maeștri banya pentru o recuperare rapidă.",
		reas2_title: "Pachet All-Inclusive",
		reas2_desc:
			"Masaj personal al picioarelor + saună tradițională cu măturici + spălare ritualică + cină caldă și electroliți. Totul inclus în voucherul de 4000 MDL.",
		reas3_title: "Exclusivitate: 24 locuri",
		reas3_desc:
			"Numărul limitat de participanți garantează atenție maximă din partea echipei noastre.",

		time_tag: "Programul serii",
		time_title: "Timeline 13 septembrie 2026",
		t1_time: "16:00",
		t1_title: "Sosire la Woloshin banya",
		t1_desc:
			"Sosirea oaspeților la Woloshin banya. Primirea halatului personal, prosopului și primei băuturi electrolitice.",
		t2_time: "16:30",
		t2_title: "Sosire & Primul contrast",
		t2_desc:
			"Cazare, schimbare, prima intrare ușoară în saună și prima băutură hidratantă.",
		t3_time: "17:30",
		t3_title: "Masaj individual & Spălare",
		t3_desc:
			"Rotația oaspeților: masaj sportiv al picioarelor + spălare ritualică cu tei.",
		t4_time: "19:00",
		t4_title: "Ritual clasic cu măturici",
		t4_desc:
			"Încălzire profundă în saună cu maestrul parangiu, urmată de baie rece la 8°C.",
		t5_time: "20:00",
		t5_title: "Cină de reabilitare",
		t5_desc:
			"Servirea bucatelor la alegere, degustare de limonadă de casă și electroliți.",
		t6_time: "21:00",
		t6_title: "Încheierea programului",
		t6_desc: "Ești complet refăcut și plin de energie.",

		book_tag: "Rezervare Oficială",
		book_title: "Rezervă pachetul de recovery",
		book_spots: "Locuri rămase: {{spots}} din {{total}}",
		sticky_price: "4 000 MDL",
		sticky_spots: "{{spots}} locuri din {{total}}",
		sticky_cta: "Rezervă →",
		lbl_name: "Numele și Prenumele",
		ph_name: "Ion Popescu",
		lbl_phone: "Număr de telefon",
		ph_phone: "+373 60 000 000",
		lbl_email: "Adresă Email",
		ph_email: "runner@example.com",
		lbl_tickets: "Număr de bilete (4000 MDL / buc)",
		lbl_food: "Preferințe alimentare (opțional)",
		ph_food: "De ex: vegetarian, alergie la nuci...",
		lbl_agree: "Sunt de acord cu regulile și ",
		lbl_refund_link: "condițiile de rambursare",
		price_total_label: "Total spre plată:",
		btn_submit_pay: "Rezervă",

		refund_title: "Condiții de rezervare și rambursare",
		refund_p1:
			"Pentru a menține caracterul exclusiv, numărul de locuri este limitat la 24 participanți.",
		refund_li1:
			"Rambursare 100% — în caz de anulare cu cel puțin 14 zile înainte de eveniment (până la 31.08.2026).",
		refund_li2:
			"Rambursare 50% — în caz de anulare în mai puțin de 14 zile (sau posibilitatea de a transfera biletul altei persoane).",
		refund_li3:
			"Rambursare 100% — în caz de forță majoră din partea organizatorilor.",
		refund_close: "Am înțeles",

		success_title: "Rezervare înregistrată cu succes!",
		success_desc:
			"Îți mulțumim! Am rezervat locurile tale pentru slotul din 13 septembrie.",
		success_step:
			"Un manager Woloshin banya te va contacta pe Telegram/WhatsApp pentru detalii și achitare.",
		success_close: "Închide",
	},

	EN: {
		nav_about: "About Event",
		nav_three_r: "The 3 R's",
		nav_zones: "Complex Zones",
		nav_timeline: "Timeline",
		nav_book: "Book Now",
		nav_cta: "Book Slot",

		hero_formula_run: "42 km. 5 hours. 0 regrets.",
		hero_subtext:
			"Exclusive recovery at Woloshin banya right after the marathon.",
		hero_date: "September 13, 2026",
		hero_time: "16:00–21:00 (5 Hours)",
		hero_location: "Woloshin banya",
		hero_price: "4 000 MDL / person",
		hero_spots: "{{total}} Spots Only ({{spots}} Left)",
		hero_cta_primary: "Reserve Your Spot",
		hero_cta_secondary: "View Details",
		countdown_label: "UNTIL START:",
		countdown_days: "days",

		about_tag: "Woloshin banya × Chisinau Marathon Collaboration",
		steps_tag: "01 / RECOVERY PROGRAM",
		steps_title: "What Awaits You After the Marathon",
		steps_subtitle:
			"5 consecutive phases to flush lactic acid, eliminate muscle spasms, and revitalize your body.",
		step1_title: "Personal Reception & Electrolytes",
		step1_desc:
			"Arrival at Woloshin banya, plush robe, towel, and private locker. House craft electrolyte recovery tonic for immediate rehydration.",
		step2_title: "Thermal Plunge Contrast & Crystal Pond",
		step2_desc:
			"High-contrast immersion: chilled cold plunge (+8°C) rapidly reduces leg muscle inflammation, while warm thermal tub eases tendon tension.",
		step3_title: "Clay Steam Room & Oak Broom Ritual",
		step3_desc:
			"Cedar benches layered with wild hay, gentle herbal steam, and deep oak broom revival by master bathers to flush lactic acid.",
		step4_title: "Targeted Sports Leg Massage & Soap Wash",
		step4_desc:
			"Focused 30-min sports massage targeting sore calves and feet, followed by authentic natural soap washing ritual for deep tissue relaxation.",
		step5_title: "Post-Run Nourishing Feast & Chill",
		step5_desc:
			"Warm wholesome fireside dinner: hot soup, traditional Moldavian tocană stew with mamaliga, wild berry lemonades, and botanical herbal teas.",

		three_r_tag: "3R Concept",
		three_r_title: "Three Phases of Your Recovery Evening",
		r1_title: "1. RUN",
		r1_sub: "Crossing the finish line is just phase one",
		r1_desc:
			"42 km of asphalt behind you. Medal around your neck, heavy legs. You head straight to Woloshin banya — where your body recharges.",
		r1_stat_lbl: "Distance:",
		r1_stat_val: "42 / 21 / 10 km",

		r2_title: "2. RELAX",
		r2_sub: "90°C Steam ↔ 8°C Cold Plunge",
		r2_desc:
			"Guided contrast sauna sessions led by master bath attendants. The massive granite stove radiates soft, deep warmth that relaxes sore muscles.",
		r2_stat_lbl: "Contrast:",
		r2_stat_val: "90°C ↔ 8°C",

		r3_title: "3. RECOVER",
		r3_sub: "5 hours of full physiological reboot",
		r3_desc:
			"Individual sports leg massage, traditional oak broom steaming ritual, soap washing, and a freshly prepared dinner.",
		r3_stat_lbl: "Slot Time:",
		r3_stat_val: "16:00 – 21:00",

		zones_tag: "Power Sanctuary",
		zones_title: "Woloshin banya Complex Zones",
		tab_sauna: "1. Steam Room & Cold Pool",
		tab_massage: "2. Recovery Massage Zone",
		tab_kitchen: "3. Chill Lounge & Dining",
		zone1_title: "Woloshin banya Bath Complex",
		zone1_desc:
			"A unique earthen sauna inspired by ancient Trypillian architecture featuring a 12-ton granite stone fireplace, soft mist, and cold plunge.",
		zone1_b1: "Natural granite fireplace (12 tons of thermal stone)",
		zone1_b2: "Artesian cold plunge pool at 8°C",
		zone1_b3: "Oak & birch broom steaming rituals",

		zone2_title: "Sports Recovery Lounge",
		zone2_desc:
			"Tranquil massage room with 3 certified sports therapists dedicated to relieving leg tightness and muscle soreness.",
		zone2_b1: "Deep tissue leg massage per guest",
		zone2_b2: "Organic recovery oils and warming balms",
		zone2_b3: "Personalized care based on your race distance",

		zone3_title: "Dining Room & Fireside Chill",
		zone3_desc:
			"Cozy fireside lounge with a specially crafted post-run menu designed to replenish glycogen and hydration levels.",
		zone3_b1:
			"Soup + Main course choice (traditional Moldavian stew & mamaliga)",
		zone3_b2: "House electrolyte recovery bath tonic",
		zone3_b3: "Fresh craft wild berry lemonade",

		stejar_section_title: "Held in the Dragon Complex:",
		stejar_1_title: "Cold Plunge Tub",
		stejar_1_desc: "Artesian cold plunge (+8°C) for thermal contrast recovery after the hot steam room. Instantly stimulates circulation and flushes leg inflammation.",
		stejar_2_title: "Hot Thermal Plunge",
		stejar_2_desc: "Wooden hot tub (+38°C) for deep thermal warm-up. Infused with natural citrus and pine aromas that relieve stress.",
		stejar_3_title: "Crystal Pond",
		stejar_3_desc: "Crystal-clear natural cold water. Over 2 meters deep with giant granite boulders and a soothing waterfall.",
		stejar_4_title: "Aromatic Steam Ritual",
		stejar_4_desc: "Cedar benches layered with fragrant wild hay. Gentle steam at +60°C with high humidity and pure botanical herbal aroma.",
		stejar_5_title: "Cucuteni-Trypillian Clay Bathhouse",
		stejar_5_desc: "Stunning authentic clay architecture, powerful hearth stove with unique steam, and ancient energy for a magical bathing experience.",
		stejar_6_title: "Individual Steam Session",
		stejar_6_desc: "Deep thermal revival with hot steam and oak brooms. Tailored sauna rituals for every preference.",
		stejar_7_title: "Therapeutic Massage",
		stejar_7_desc: "Tailored post-run restorative massage techniques for total muscle recovery and revitalization.",

		reasons_tag: "Key Highlights",
		reasons_title: "Why Choose This Recovery Experience",
		reas1_title: "Engineered for Runners",
		reas1_desc: "Designed by banya masters for fast recovery.",
		reas2_title: "All-Inclusive Recovery Voucher",
		reas2_desc:
			"Sports leg massage + oak broom steaming ritual + soap wash + recovery dinner and electrolytes. Everything included in a single 4000 MDL voucher.",
		reas3_title: "Strictly Limited to 24 Guests",
		reas3_desc:
			"An intimate setting ensuring personal care, zero rush, and maximum comfort.",

		time_tag: "Evening Schedule",
		time_title: "Timeline for September 13, 2026",
		t1_time: "16:00",
		t1_title: "Arrival at Woloshin banya",
		t1_desc:
			"Arrival at Woloshin banya. Receiving your personal bathrobe, towel, and welcome electrolyte recovery drink.",
		t2_time: "16:30",
		t2_title: "Arrival & Initial Thermal Contrast",
		t2_desc:
			"Welcome, changing room, initial gentle sauna intro session, first electrolyte drink.",
		t3_time: "17:30",
		t3_title: "Sports Massage & Soap Wash",
		t3_desc:
			"Guest rotation: targeted sports leg massage + traditional soap-bast wash to relieve fatigue.",
		t4_time: "19:00",
		t4_title: "Classic Broom Steaming Ritual",
		t4_desc:
			"Deep body warming with oak brooms, followed by an exhilarating cold plunge.",
		t5_time: "20:00",
		t5_title: "Post-Run Recovery Dinner",
		t5_desc:
			"Serving of warm 2-course meal, craft lemonade, and herbal electrolyte tonic.",
		t6_time: "21:00",
		t6_title: "Event Conclusion",
		t6_desc: "Feel completely rejuvenated and pain-free.",

		book_tag: "Official Booking",
		book_title: "Reserve Your Recovery Package",
		book_spots: "Spots Remaining: {{spots}} of {{total}}",
		sticky_price: "4 000 MDL",
		sticky_spots: "{{spots}} of {{total}} spots left",
		sticky_cta: "Book Now →",
		lbl_name: "Full Name",
		ph_name: "John Doe",
		lbl_phone: "Phone Number",
		ph_phone: "+373 60 000 000",
		lbl_email: "Email Address",
		ph_email: "runner@example.com",
		lbl_tickets: "Ticket Quantity (4000 MDL / each)",
		lbl_food: "Dietary Preferences (Optional)",
		ph_food: "e.g. Vegetarian, nut allergies...",
		lbl_agree: "I agree to the booking rules & ",
		lbl_refund_link: "refund terms",
		price_total_label: "Total Price:",
		btn_submit_pay: "Reserve",

		refund_title: "Booking & Cancellation Policy",
		refund_p1:
			"To maintain an intimate, high-quality experience, this slot is capped at 24 guests.",
		refund_li1:
			"100% Refund — for cancellations made at least 14 days prior to the event (on or before Aug 31, 2026).",
		refund_li2:
			"50% Refund — for cancellations under 14 days (or option to transfer your spot to a friend).",
		refund_li3:
			"100% Refund — in the unlikely event of organizer force majeure.",
		refund_close: "Understood",

		success_title: "Booking Request Received!",
		success_desc:
			"Thank you! We have reserved your recovery package for September 13.",
		success_step:
			"A Woloshin Banya representative will contact you shortly via Telegram/WhatsApp to confirm details and payment.",
		success_close: "Close",
	},
};

// Global App State
let currentLang = "RU";
const SPOTS_TOTAL = 24;
const SPOTS_REMAINING = 18; // update this number as tickets sell; refreshed at 02:00 daily by admin

document.addEventListener("DOMContentLoaded", () => {
	initLanguageSwitcher();
	initZoneTabs();
	initModals();
	initMobileMenu();
	initLiveCountdown();
	initHeroSteamCanvas();
	initBatteryCellAnimator();
	initHeroInteractiveSplit();
	initHero3RSlider();
	initFaqAccordion();
	initBookingGuestsCalculator();
	applyTranslations(currentLang);
});

// Dynamic Calculator for Booking Guests & Total Price
function initBookingGuestsCalculator() {
	const select = document.getElementById("guests_count");
	const totalDisplay = document.getElementById("total-price-display");
	const submitBtn = document.getElementById("btn-submit-booking");

	if (!select || !totalDisplay) return;

	select.addEventListener("change", () => {
		const count = parseInt(select.value, 10) || 1;
		const total = count * 4000;
		const formatted = total.toLocaleString("ru-RU") + " MDL";
		totalDisplay.textContent = formatted;
		if (submitBtn) {
			if (currentLang === "RO") {
				submitBtn.textContent = `Rezervă (${formatted}) →`;
			} else if (currentLang === "EN") {
				submitBtn.textContent = `Book Recovery Pass (${formatted}) →`;
			} else {
				submitBtn.textContent = `Забронировать (${formatted}) →`;
			}
		}
	});
}

// Language Switching Logic
function initLanguageSwitcher() {
	const langBtns = document.querySelectorAll(".lang-btn");
	langBtns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			const selectedLang = e.target.getAttribute("data-lang");
			if (selectedLang && translations[selectedLang]) {
				currentLang = selectedLang;
				langBtns.forEach((b) => b.classList.remove("active"));
				e.target.classList.add("active");
				applyTranslations(currentLang);
			}
		});
	});
}

function applyTranslations(lang) {
	const dict = translations[lang];
	if (!dict) return;

	document.documentElement.setAttribute("data-current-lang", lang);

	// Update elements with data-i18n attribute
	document.querySelectorAll("[data-i18n]").forEach((elem) => {
		const key = elem.getAttribute("data-i18n");
		if (dict[key]) {
			// Substitute dynamic placeholders: {{spots}}, {{total}}
			const value = dict[key]
				.replace(/\{\{spots\}\}/g, SPOTS_REMAINING)
				.replace(/\{\{total\}\}/g, SPOTS_TOTAL);
			elem.textContent = value;
		}
	});

	// Update input placeholders
	document.querySelectorAll("[data-i18n-ph]").forEach((elem) => {
		const key = elem.getAttribute("data-i18n-ph");
		if (dict[key]) {
			elem.placeholder = dict[key];
		}
	});
}

// Zone Tabs Switching
function initZoneTabs() {
	const tabBtns = document.querySelectorAll(".zone-tab-btn");
	const zoneImg = document.getElementById("zone-display-img");

	const zoneData = {
		sauna: {
			img: "./assets/banya_grot.jpg",
			tag: "01 / ТЕРМОКОНТРАСТ & ПАР",
			titleKey: "zone1_title",
			descKey: "zone1_desc",
			b1Key: "zone1_b1",
			b2Key: "zone1_b2",
			b3Key: "zone1_b3",
		},
		massage: {
			img: "./assets/massage.jpg",
			tag: "02 / СПОРТИВНЫЙ МАССАЖ",
			titleKey: "zone2_title",
			descKey: "zone2_desc",
			b1Key: "zone2_b1",
			b2Key: "zone2_b2",
			b3Key: "zone2_b3",
		},
		kitchen: {
			img: "./assets/banya_feast.jpg",
			tag: "03 / ТРАПЕЗНАЯ & CHILL",
			titleKey: "zone3_title",
			descKey: "zone3_desc",
			b1Key: "zone3_b1",
			b2Key: "zone3_b2",
			b3Key: "zone3_b3",
		},
	};

	tabBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			const zoneKey = btn.getAttribute("data-zone");
			if (!zoneData[zoneKey]) return;

			tabBtns.forEach((b) => b.classList.remove("active"));
			btn.classList.add("active");

			const data = zoneData[zoneKey];
			if (zoneImg) zoneImg.src = data.img;

			const monoTag = document.getElementById("zone-mono-tag");
			if (monoTag) monoTag.textContent = data.tag;

			document
				.getElementById("zone-title")
				.setAttribute("data-i18n", data.titleKey);
			document
				.getElementById("zone-desc")
				.setAttribute("data-i18n", data.descKey);
			document.getElementById("zone-b1").setAttribute("data-i18n", data.b1Key);
			document.getElementById("zone-b2").setAttribute("data-i18n", data.b2Key);
			document.getElementById("zone-b3").setAttribute("data-i18n", data.b3Key);

			applyTranslations(currentLang);
		});
	});
}

// Modal Dialogs (Refund Policy & Success Modal)
function initModals() {
	const refundModal = document.getElementById("refund-modal");
	const successModal = document.getElementById("success-modal");
	const refundLink = document.getElementById("refund-modal-trigger");
	const bookingForm = document.getElementById("booking-form");

	if (refundLink && refundModal) {
		refundLink.addEventListener("click", (e) => {
			e.preventDefault();
			refundModal.classList.add("active");
		});
	}

	document.querySelectorAll(".modal-close-trigger").forEach((btn) => {
		btn.addEventListener("click", () => {
			document
				.querySelectorAll(".modal-backdrop")
				.forEach((m) => m.classList.remove("active"));
		});
	});

	document.querySelectorAll(".modal-backdrop").forEach((modal) => {
		modal.addEventListener("click", (e) => {
			if (e.target === modal) {
				modal.classList.remove("active");
			}
		});
	});

	if (bookingForm) {
		bookingForm.addEventListener("submit", (e) => {
			e.preventDefault();
			if (successModal) {
				successModal.classList.add("active");
			}
		});
	}
}

// Live Countdown Timer (Marathon.md style)
function initLiveCountdown() {
	const cntDays = document.getElementById("cnt-days");
	const cntTime = document.getElementById("cnt-time");

	if (!cntDays || !cntTime) return;

	// Target Event Date: September 13, 2026 16:00:00 EEST (UTC+3)
	const targetDate = new Date("2026-09-13T16:00:00+03:00").getTime();

	function updateTimer() {
		const now = new Date().getTime();
		const distance = targetDate - now;

		if (distance < 0) {
			cntDays.textContent = "0";
			cntTime.textContent = "00:00:00";
			return;
		}

		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		const hours = String(
			Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
		).padStart(2, "0");
		const minutes = String(
			Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
		).padStart(2, "0");
		const seconds = String(
			Math.floor((distance % (1000 * 60)) / 1000),
		).padStart(2, "0");

		cntDays.textContent = days;
		cntTime.textContent = `${hours}:${minutes}:${seconds}`;
	}

	updateTimer();
	setInterval(updateTimer, 1000);
}

// Interactive Steam/Particle Canvas for Hero Section
function initHeroSteamCanvas() {
	const canvas = document.getElementById("hero-steam-canvas");
	if (!canvas) return;

	const ctx = canvas.getContext("2d");
	let width = (canvas.width = canvas.offsetWidth);
	let height = (canvas.height = canvas.offsetHeight);

	window.addEventListener("resize", () => {
		width = canvas.width = canvas.offsetWidth;
		height = canvas.height = canvas.offsetHeight;
	});

	const particles = [];
	const particleCount = 45;

	for (let i = 0; i < particleCount; i++) {
		particles.push({
			x: Math.random() * width,
			y: Math.random() * height,
			radius: Math.random() * 3 + 1,
			opacity: Math.random() * 0.5 + 0.2,
			speedY: Math.random() * 0.8 + 0.3,
			speedX: (Math.random() - 0.5) * 0.4,
			isEmber: Math.random() > 0.6,
		});
	}

	// 4-tone palette (mirrors CSS variables)
	const OLIVE = [63, 82, 64];
	const BONE = [245, 240, 232];

	function animate() {
		ctx.clearRect(0, 0, width, height);

		particles.forEach((p) => {
			p.y -= p.speedY;
			p.x += p.speedX;

			if (p.y < 0) {
				p.y = height;
				p.x = Math.random() * width;
			}

			ctx.beginPath();
			ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

			if (p.isEmber) {
				ctx.fillStyle = `rgba(${OLIVE[0]}, ${OLIVE[1]}, ${OLIVE[2]}, ${p.opacity})`;
				ctx.shadowBlur = 10;
				ctx.shadowColor = `rgb(${OLIVE[0]}, ${OLIVE[1]}, ${OLIVE[2]})`;
			} else {
				ctx.fillStyle = `rgba(${BONE[0]}, ${BONE[1]}, ${BONE[2]}, ${p.opacity * 0.6})`;
				ctx.shadowBlur = 15;
				ctx.shadowColor = `rgb(${BONE[0]}, ${BONE[1]}, ${BONE[2]})`;
			}

			ctx.fill();
			ctx.shadowBlur = 0;
		});

		requestAnimationFrame(animate);
	}

	animate();
}

function initBatteryCellAnimator() {
	const runPctElem = document.getElementById("battery-pct-run");
	const recoverPctElem = document.getElementById("battery-pct-recover");

	if (!runPctElem && !recoverPctElem) return;

	let startTime = null;
	const DURATION_MS = 14000;

	const easeInOutSine = (t) => -(Math.cos(Math.PI * t) - 1) / 2;

	function animateBattery(timestamp) {
		if (!startTime) startTime = timestamp;
		const elapsed = (timestamp - startTime) % DURATION_MS;
		const rawProgress = elapsed / DURATION_MS;
		const progress = easeInOutSine(rawProgress);

		const runPct = Math.max(0, Math.round(100 * (1 - progress)));
		const recoverPct = Math.min(100, Math.round(100 * progress));

		if (runPctElem) runPctElem.textContent = `${runPct}%`;
		if (recoverPctElem) recoverPctElem.textContent = `${recoverPct}%`;

		requestAnimationFrame(animateBattery);
	}

	requestAnimationFrame(animateBattery);
}

// Word Hover Split Visual Highlight
function initHeroInteractiveSplit() {
	const wordLines = document.querySelectorAll(".r-word-line");
	const runHalf = document.getElementById("hero-half-run");
	const relaxHalf = document.getElementById("hero-half-relax");

	wordLines.forEach((line) => {
		line.addEventListener("mouseenter", () => {
			const word = line.getAttribute("data-word");
			if (word === "run") {
				if (runHalf) runHalf.style.filter = "brightness(1.2) contrast(1.1)";
				if (relaxHalf) relaxHalf.style.filter = "brightness(0.7)";
			} else {
				if (relaxHalf) relaxHalf.style.filter = "brightness(1.2) contrast(1.1)";
				if (runHalf) runHalf.style.filter = "brightness(0.7)";
			}
		});

		line.addEventListener("mouseleave", () => {
			if (runHalf) runHalf.style.filter = "none";
			if (relaxHalf) relaxHalf.style.filter = "none";
		});
	});
}

// Mobile Menu Toggle
function initMobileMenu() {
	const mobileBtn = document.getElementById("mobile-toggle-btn");
	const navLinks = document.querySelector(".nav-links");

	if (mobileBtn && navLinks) {
		mobileBtn.addEventListener("click", () => {
			if (navLinks.style.display === "flex") {
				navLinks.style.display = "none";
			} else {
				navLinks.style.display = "flex";
				navLinks.style.flexDirection = "column";
				navLinks.style.position = "absolute";
				navLinks.style.top = "80px";
				navLinks.style.left = "0";
				navLinks.style.width = "100%";
				navLinks.style.background = "rgba(10, 9, 8, 0.95)";
				navLinks.style.padding = "1.5rem";
				navLinks.style.borderBottom = "1px solid var(--border-light)";
			}
		});
	}
}

// FAQ Accordion Interactivity
function initFaqAccordion() {
	const faqItems = document.querySelectorAll(".faq-item");

	faqItems.forEach((item) => {
		const question = item.querySelector(".faq-question");
		const answer = item.querySelector(".faq-answer");

		if (question && answer) {
			question.addEventListener("click", () => {
				const isOpen = item.classList.contains("active");

				// Close all items
				faqItems.forEach((i) => {
					i.classList.remove("active");
					const a = i.querySelector(".faq-answer");
					if (a) a.style.maxHeight = null;
				});

				// If not open, open clicked item
				if (!isOpen) {
					item.classList.add("active");
					answer.style.maxHeight = answer.scrollHeight + "px";
				}
			});
		}
	});
}

// Hero 3R slider: drives the RUN / RELAX / RECOVER pill ticker
// AND locks page scroll until the user has cycled through all 3 slides.
function initHero3RSlider() {
	const sliderWrap = document.getElementById("hero-scroll-slider");
	if (!sliderWrap) return;

	const pills = sliderWrap.querySelectorAll(".r-nav-pill");
	const track = document.getElementById("r-ticker-track");
	const items = sliderWrap.querySelectorAll(".r-ticker-item");
	const rightTrack = document.getElementById("hero-right-track");
	const rightItems = document.querySelectorAll(".hero-right-slide");
	const progressBar = document.getElementById("r-progress-bar");
	const heroSection = document.getElementById("hero");
	const TOTAL = items.length;
	// Longest CSS transition in this widget is .r-ticker-track (0.6s).
	// 600ms is enough for cubic-bezier(0.16,1,0.3,1) to settle.
	const TRANSITION_MS = 600;
	const WHEEL_THROTTLE_MS = 450;
	const AUTO_CYCLE_MS = 5000;

	let currentIndex = 0;
	let isTransitioning = false;
	let autoTimer = null;
	let lastWheelTime = 0;

	function stopAutoCycle() {
		if (autoTimer) {
			clearInterval(autoTimer);
			autoTimer = null;
		}
	}

	function startAutoCycle() {
		if (autoTimer) return;
		autoTimer = setInterval(() => {
			// Self-terminate once we reach the last slide so the cycle
			// never wraps around and re-locks a page the user has already
			// scrolled past.
			if (currentIndex >= TOTAL - 1) {
				stopAutoCycle();
				return;
			}
			setSlide(currentIndex + 1);
		}, AUTO_CYCLE_MS);
	}

	// Body scroll lock — toggles a class on <html> with overflow:hidden.
	// html has scrollbar-gutter:stable so the layout doesn't jump when
	// the scrollbar appears/disappears. No position:fixed, no scrollY
	// preservation — those race conditions are why the user got stuck
	// after reaching the last slide.
	function lockBodyScroll() {
		if (document.documentElement.classList.contains("scroll-locked")) return;
		document.documentElement.classList.add("scroll-locked");
	}

	function unlockBodyScroll() {
		if (!document.documentElement.classList.contains("scroll-locked")) return;
		document.documentElement.classList.remove("scroll-locked");
	}

	function setSlide(index) {
		if (index < 0) index = 0;
		if (index >= TOTAL) index = TOTAL - 1;
		if (index === currentIndex) return; // no-op for repeat clicks

		isTransitioning = true;
		currentIndex = index;

		pills.forEach((p, i) => p.classList.toggle("active", i === index));
		items.forEach((item, i) => item.classList.toggle("active", i === index));

		if (track) track.style.transform = `translateY(${-index * 200}px)`;
		if (rightTrack)
			rightTrack.style.transform = `translateY(${-index * 250}px)`;
		if (rightItems) {
			rightItems.forEach((item, i) =>
				item.classList.toggle("active", i === index),
			);
		}
		if (progressBar) {
			progressBar.style.transform = `translateX(${index * 100}%)`;
		}

		const isLast = index >= TOTAL - 1;
		if (isLast) unlockBodyScroll();
		else lockBodyScroll();

		// Hit last slide → kill auto-cycle so it can never re-lock.
		if (isLast) stopAutoCycle();

		// Reset transition guard after CSS transition settles.
		setTimeout(() => {
			isTransitioning = false;
		}, TRANSITION_MS);
	}

	// Manual interactions share the same guard: any user input stops the
	// auto-cycle so it doesn't fight with the user.
	function userSetSlide(index) {
		if (isTransitioning) return;
		stopAutoCycle();
		setSlide(index);
	}

	// Pill clicks — guarded against mid-transition double-fires.
	pills.forEach((pill) => {
		pill.addEventListener("click", () => {
			const idx = parseInt(pill.getAttribute("data-slide"), 10);
			userSetSlide(idx);
		});
	});

	// Wheel inside hero: advance/go-back through slides. On the last slide
	// the body is unlocked so the wheel scrolls the page naturally.
	if (heroSection) {
		heroSection.addEventListener(
			"wheel",
			(e) => {
				if (isTransitioning) return;
				const now = Date.now();
				if (now - lastWheelTime < WHEEL_THROTTLE_MS) return;

				if (e.deltaY > 25 && currentIndex < TOTAL - 1) {
					userSetSlide(currentIndex + 1);
					lastWheelTime = now;
				} else if (e.deltaY < -25 && currentIndex > 0) {
					userSetSlide(currentIndex - 1);
					lastWheelTime = now;
				}
				// On last slide: body unlocked → wheel scrolls page past hero.
			},
			{ passive: true },
		);
	}

	// Keyboard nav: ←/↑ go back, →/↓ go forward. Only active while hero
	// is in viewport so it doesn't hijack global arrow keys on other sections.
	document.addEventListener("keydown", (e) => {
		if (isTransitioning || !heroSection) return;
		const rect = heroSection.getBoundingClientRect();
		if (rect.bottom < 0 || rect.top > window.innerHeight) return;

		if (e.key === "ArrowDown" || e.key === "ArrowRight") {
			if (currentIndex < TOTAL - 1) {
				e.preventDefault();
				userSetSlide(currentIndex + 1);
			}
		} else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
			if (currentIndex > 0) {
				e.preventDefault();
				userSetSlide(currentIndex - 1);
			}
		}
	});

	// Re-engage: if user scrolled past the hero and then scrolled back up
	// to the top, reset to slide 0 and re-lock the page so they can cycle
	// through the slider again. Gated on currentIndex > 0 so it can't fire
	// on initial load (when rect.top and scrollY are both 0).
	if (heroSection) {
		window.addEventListener(
			"scroll",
			() => {
				if (document.documentElement.classList.contains("scroll-locked"))
					return;
				if (currentIndex === 0) return; // never re-engage from fresh state
				const rect = heroSection.getBoundingClientRect();
				if (rect.top >= -20 && rect.top <= 120 && window.scrollY <= 20) {
					lockBodyScroll();
					startAutoCycle();
					setSlide(0);
				}
			},
			{ passive: true },
		);
	}

	// Initial state: html locked, slide 0, auto-cycle running.
	// Explicit lockBodyScroll() so we don't depend on the re-engage
	// listener firing (which would race with setSlide(0) on init).
	lockBodyScroll();
	startAutoCycle();
	setSlide(0);
}
