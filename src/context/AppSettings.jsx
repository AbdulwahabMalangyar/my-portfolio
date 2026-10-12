import { createContext, useContext, useState } from "react";

const translations = {
  en: {
    home: "Home", about: "About", skills: "Skills", services: "Services",
    projects: "Projects", education: "Education", contact: "Contact",
    greeting: "Assalamu Alaikum", heroTitle: "Web Developer in Afghanistan",
    heroTitle2: "App and Database Developer in Afghanistan",
    heroText: "I am a web, application, and database developer based in Afghanistan. I create practical, responsive digital solutions for businesses and organizations, with a focus on clean design, reliable functionality, and user-friendly experiences.",
    viewWork: "View My Work", servicesButton: "Services", contactMe: "Contact Me",
    aboutTitle: "About Me", about1: "I graduated from the Information Systems Department at the Faculty of Computer Science, Wardak University, Afghanistan. I apply my knowledge to build practical digital solutions.",
    about2: "I am passionate about Web Development, Database Systems, Mobile Apps, and Desktop Applications. I enjoy turning ideas into clean, responsive, user-friendly applications that address real needs.",
    about3: "My goal is to grow as a Software Engineer and deliver modern websites and information systems that are well-structured, maintainable, and useful.",
    university: "University", department: "Department", status: "Status", faculty: "Faculty",
    location: "Location", english: "English", informationSystems: "Information Systems",
    engineerGraduate: "Engineer / Graduate", computerScience: "Computer Science",
    wardakAfghanistan: "Wardak, Afghanistan", languageSkills: "English language skills",
    skillsTitle: "Skills & Technologies", skillsIntro: "Modern technologies and tools I use to design, develop, and build professional websites and practical systems.",
    servicesTitle: "My Services", servicesIntro: "Practical software solutions designed around real user needs.  ",
    webDevelopment: "Web Development", webDescription: "I design and develop responsive, user-friendly websites using modern web technologies. My focus is on clean layouts, accessible interfaces, reliable functionality, and experiences that work smoothly on desktop, tablet, and mobile devices.",
    databaseDevelopment: "Database Design & Development", databaseDescription: "I design and manage structured databases for practical information systems. This includes organizing data, creating relationships, writing queries, and connecting applications to databases such as MySQL and MongoDB with attention to accuracy and maintainability.",
    appDevelopment: "Desktop & Mobile Applications", appDescription: "I build practical desktop and mobile application interfaces that help users complete everyday tasks efficiently. I focus on clear navigation, useful features, dependable data handling, and responsive layouts suited to each project.",
    whyTitle: "Why Work With Me", whyIntro: "I am hardworking, responsible, and motivated, with a strong desire to learn and achieve goals.",
    modernSolutions: "Modern Solutions", modernSolutionsText: "I use modern technology to build useful digital solutions that improve everyday work.",
    cleanCode: "Clean Code", cleanCodeText: "I write readable, organized code that is easier to maintain and improve.",
    responsiveDesign: "Responsive Design", responsiveDesignText: "I create websites that work smoothly on desktops, tablets, and phones.",
    practicalSystems: "Practical Systems", practicalSystemsText: "I develop reliable, user-friendly systems that solve real problems.",
    userFocused: "User-Focused Design", userFocusedText: "I design clear interfaces around users’ needs and comfort.",
    databaseSolutions: "Database Solutions", databaseSolutionsText: "I build organized databases for storing, managing, and accessing information.",
    projectsTitle: "Featured Projects", projectsIntro: "Projects that reflect my interest in web development, applications, and practical systems.",
    projectDescription: "An application developed for Wardak University to manage final project records and help prevent duplicate submissions.", viewProject: "View Project",
    educationTitle: "Education", educationIntro: "Education builds knowledge, develops skills, and helps us work toward a better future.",
    universityName: "Wardak University", universitySubtitle: "Computer Science Faculty — Information Systems", universityDescription: "Graduate of Information Systems, focused on web development, applications, databases, and practical software solutions.",
    schoolName: "Baghak High School", secondaryEducation: "Secondary Education", schoolDescription: "Completed secondary education at Baghak High School.",
    languagesTitle: "Languages", languagesSubtitle: "Pashto · Dari · English", languagesDescription: "I speak Pashto and Dari and continue improving my English communication skills.",
    englishCenter: "Change English Language Center", englishGraduate: "English Language Studies", englishDescription: "Studied grammar, speaking, listening, reading, and writing to improve communication.",
    officeManagement: "Office Management", professionalSkills: "Professional Skills", officeDescription: "Skills in programming, web development, database management, and continuous learning.",
    computerCenter: "Vectore Computer Center", computerTraining: "Computer Training", computerDescription: "Completed computer training and gained practical knowledge of computer applications.",
    contactEyebrow: "GET IN TOUCH", contactTitle: "Contact Me", contactIntro: "Have a project, question, or opportunity? Send me a message. I would be happy to hear from you.",
    workTogether: "Let’s work together", contactIntro2: "Contact me about web development, applications, databases, or collaboration.", email: "Email", locationLabel: "Location", github: "GitHub", visitGithub: "Visit my GitHub profile", whatsapp: "WhatsApp", whatsappChat: "Chat with me on WhatsApp",
    yourName: "Your name", enterName: "Enter your name", emailAddress: "Email address", emailPlaceholder: "you@example.com", message: "Message", messagePlaceholder: "Write your message...", sendMessage: "Send Message", emailNote: "The Send button opens your email application.",
    quickLinks: "Quick Links", letsConnect: "Let’s Connect", footerConnectText: "Have an idea or project in mind? Visit the contact section and send me a message.", allRightsReserved: "All rights reserved.", backToTop: "Back to top", footerDescription: "Web, application, and database development focused on practical and user-friendly digital solutions.",
    lightMode: "Light mode", darkMode: "Dark mode"
  },
  ps: {
    home: "کور", about: "زما په اړه", skills: "مهارتونه", services: "خدمتونه",
    projects: "پروژې", education: "زده کړې", contact: "اړیکه",
    greeting: "السلام علیکم", heroTitle: "په افغانستان کې د وېب جوړولو متخصص",
    heroTitle2: "د اپلېکېشنونو او ډیټابېس جوړوونکی",
    heroText: "زه په افغانستان کې د وېب، اپلېکېشنونو او ډیټابېس جوړوونکی یم. د شرکتونو او ادارو لپاره عملي او ځواب ویونکي ډیجیټلي حلونه جوړوم، او پاک ډیزاین، باوري فعالیت او د کاروونکي اسانتیا ته پام کوم.",
    viewWork: "زما پروژې وګورئ", servicesButton: "خدمتونه", contactMe: "اړیکه راسره ونیسئ",
    aboutTitle: "زما په اړه", about1: "ما د افغانستان د وردګ پوهنتون د کمپیوټر ساینس پوهنځي د معلوماتي سیسټمونو له څانګې څخه فراغت اخیستی دی. خپله پوهه د عملي ډیجیټلي حلونو په جوړولو کې کاروم.",
    about2: "زه د وېب جوړولو، ډیټابېس سیسټمونو، موبایل اپلېکېشنونو او ډیسټاپ پروګرامونو سره مینه لرم. هڅه کوم مفکورې په منظم، ځواب ویونکي او د کاروونکي لپاره اسانه پروګرامونو بدلې کړم.",
    about3: "زما موخه دا ده چې د سافټویر د انجنیر په توګه پرمختګ وکړم او داسې عصري وېب‌سایټونه او معلوماتي سیسټمونه جوړ کړم چې منظم، د ساتنې وړ او ګټور وي.",
    university: "پوهنتون", department: "څانګه", status: "حالت", faculty: "پوهنځی",
    location: "ځای", english: "انګلیسي", informationSystems: "معلوماتي سیسټمونه",
    engineerGraduate: "انجنیر / فارغ", computerScience: "کمپیوټر ساینس",
    wardakAfghanistan: "وردګ، افغانستان", languageSkills: "د انګلیسي ژبې مهارت",
    skillsTitle: "مهارتونه او ټکنالوژۍ", skillsIntro: "هغه عصري ټکنالوژۍ او وسایل چې د وېب‌سایټونو او عملي سیسټمونو د جوړولو لپاره یې کاروم.",
    servicesTitle: "زما خدمتونه", servicesIntro: "د کاروونکو د واقعي اړتیاوو لپاره عملي سافټویري حلونه.",
    webDevelopment: "د وېب‌سایټونو جوړول", webDescription: "زه د عصري وېب ټکنالوژیو په کارولو ځواب ویونکي او د کاروونکي لپاره اسانه وېب‌سایټونه جوړوم. پاک ترتیب، د لاسرسي اسانتیا، باوري فعالیت او په کمپیوټر، ټابلیټ او موبایل کې ښه کار کول زما لومړیتوبونه دي.",
    databaseDevelopment: "د ډیټابېس طرحه او جوړول", databaseDescription: "زه د معلوماتي سیسټمونو لپاره منظم ډیټابېسونه طرحه او اداره کوم. پکې د معلوماتو تنظیم، د جدولونو اړیکې، د پوښتنو لیکل او د MySQL او MongoDB له ډیټابېسونو سره د اپلېکېشنونو نښلول شامل دي.",
    appDevelopment: "ډیسټاپ او موبایل اپلېکېشنونه", appDescription: "زه داسې عملي ډیسټاپ او موبایل اپلېکېشنونه جوړوم چې ورځني کارونه اسانه کړي. روښانه مینو، ګټورې ځانګړنې، د معلوماتو باوري اداره او د هرې پروژې مطابق ځواب ویونکی ډیزاین ته پام کوم.",
    whyTitle: "ولې له ما سره کار وکړئ؟", whyIntro: "زه زیارکښ، مسؤول او هڅاند یم؛ د نوې پوهې زده کړې او خپلو موخو ته د رسېدو لپاره هڅه کوم.",
    modernSolutions: "عصري حللارې", modernSolutionsText: "د عصري ټکنالوژۍ په وسیله ګټور ډیجیټلي حلونه جوړوم.",
    cleanCode: "پاک کوډ", cleanCodeText: "لوستل کېدونکی او منظم کوډ لیکم چې ساتنه او پرمختګ یې اسانه وي.",
    responsiveDesign: "ځواب ویونکی ډیزاین", responsiveDesignText: "داسې وېب‌سایټونه جوړوم چې په کمپیوټر، ټابلیټ او موبایل کې ښه کار وکړي.",
    practicalSystems: "عملي سیسټمونه", practicalSystemsText: "باوري او د کاروونکي لپاره اسانه سیسټمونه جوړوم چې واقعي ستونزې حل کړي.",
    userFocused: "د کاروونکي پر اړتیاوو ولاړ ډیزاین", userFocusedText: "روښانه او ساده بڼې د کاروونکو د اړتیاوو مطابق طرحه کوم.",
    databaseSolutions: "د ډیټابېس حللارې", databaseSolutionsText: "د معلوماتو د ساتلو، تنظیم او ترلاسه کولو لپاره منظم ډیټابېسونه جوړوم.",
    projectsTitle: "زما غوره پروژې", projectsIntro: "دا پروژې د وېب جوړولو، اپلېکېشنونو او عملي سیسټمونو په برخه کې زما لېوالتیا څرګندوي.",
    projectDescription: "د وردګ پوهنتون لپاره جوړ شوی اپلېکېشن چې د فراغت پروژې ثبتوي او د تکراري موضوعاتو مخه نیسي.", viewProject: "پروژه وګورئ",
    educationTitle: "زده کړې", educationIntro: "زده کړه پوهه او مهارتونه زیاتوي او د ښه راتلونکي لپاره لاره برابروي.",
    universityName: "وردګ پوهنتون", universitySubtitle: "د کمپیوټر ساینس پوهنځی — معلوماتي سیسټمونه", universityDescription: "د معلوماتي سیسټمونو فارغ؛ د وېب جوړولو، اپلېکېشنونو، ډیټابېسونو او عملي سافټویر حللارو ته لېوالتیا لرم.",
    schoolName: "د باغک عالي لېسه", secondaryEducation: "منځنۍ او ثانوي زده کړې", schoolDescription: "ثانوي زده کړې مې په باغک عالي لېسه کې بشپړې کړې دي.",
    languagesTitle: "ژبې", languagesSubtitle: "پښتو · دري · انګلیسي", languagesDescription: "په پښتو او دري خبرې کوم او د انګلیسي ژبې د اړیکو مهارتونه مې لا پیاوړي کېږي.",
    englishCenter: "چینج د انګلیسي ژبې مرکز", englishGraduate: "د انګلیسي ژبې زده کړې", englishDescription: "د ګرامر، خبرو، اورېدو، لوستلو او لیکلو مهارتونو د ښه کولو لپاره مې زده کړې کړې دي.",
    officeManagement: "د دفتر مدیریت", professionalSkills: "مسلکي مهارتونه", officeDescription: "د پروګرام جوړولو، وېب، ډیټابېس مدیریت او دوامدارې زده کړې مهارتونه لرم.",
    computerCenter: "ویکټور د کمپیوټر مرکز", computerTraining: "کمپیوټري زده کړې", computerDescription: "کمپیوټري زده کړې مې بشپړې کړې او د کمپیوټري پروګرامونو عملي پوهه مې ترلاسه کړې ده.",
    contactEyebrow: "اړیکه ونیسئ", contactTitle: "اړیکه راسره ونیسئ", contactIntro: "پروژه، پوښتنه یا کاري فرصت لرئ؟ پیغام راته واستوئ؛ ستاسو له پیغامه به خوشحاله شم.",
    workTogether: "راځئ یوځای کار وکړو", contactIntro2: "د وېب جوړولو، اپلېکېشنونو، ډیټابېسونو یا ګډ کار لپاره اړیکه راسره ونیسئ.", email: "برېښنالیک", locationLabel: "ځای", github: "ګیټ‌هاب", visitGithub: "زما د ګیټ‌هاب پروفایل وګورئ", whatsapp: "واټس‌اپ", whatsappChat: "په واټس‌اپ راسره خبرې وکړئ",
    yourName: "ستاسو نوم", enterName: "خپل نوم ولیکئ", emailAddress: "برېښنالیک پته", emailPlaceholder: "you@example.com", message: "پیغام", messagePlaceholder: "خپل پیغام ولیکئ...", sendMessage: "پیغام واستوئ", emailNote: "د لېږلو تڼۍ ستاسو د برېښنالیک اپلېکېشن پرانیزي.",
    quickLinks: "چټک لینکونه", letsConnect: "اړیکه ونیسو", footerConnectText: "نظر یا پروژه لرئ؟ د اړیکې برخې ته لاړ شئ او پیغام راته واستوئ.", allRightsReserved: "ټول حقونه خوندي دي.", backToTop: "بېرته سر ته", footerDescription: "د وېب، اپلېکېشنونو او ډیټابېس عملي او د کاروونکي لپاره اسانه حللارې.",
    lightMode: "روښانه بڼه", darkMode: "تیاره بڼه"
  },
  fa: {
    home: "خانه", about: "درباره من", skills: "مهارت‌ها", services: "خدمات",
    projects: "پروژه‌ها", education: "تحصیلات", contact: "تماس",
    greeting: "السلام علیکم", heroTitle: "توسعه‌دهنده وب در افغانستان",
    heroTitle2: "توسعه‌دهنده اپلیکیشن و پایگاه داده",
    heroText: "من توسعه‌دهنده وب، اپلیکیشن و پایگاه داده در افغانستان هستم. راهکارهای دیجیتالی کاربردی و واکنش‌گرا برای شرکت‌ها و سازمان‌ها می‌سازم و بر طراحی منظم، عملکرد قابل اعتماد و تجربه آسان کاربر تمرکز دارم.",
    viewWork: "مشاهده پروژه‌ها", servicesButton: "خدمات", contactMe: "تماس با من",
    aboutTitle: "درباره من", about1: "من از دیپارتمنت سیستم‌های معلوماتی پوهنځی کمپیوترساینس پوهنتون وردک در افغانستان فارغ شده‌ام و دانش خود را برای ساخت راهکارهای دیجیتالی کاربردی به کار می‌برم.",
    about2: "به توسعه وب، سیستم‌های پایگاه داده، اپلیکیشن‌های موبایل و برنامه‌های دسکتاپ علاقه دارم. تلاش می‌کنم ایده‌ها را به برنامه‌های منظم، واکنش‌گرا و آسان برای کاربران تبدیل کنم.",
    about3: "هدف من پیشرفت به‌عنوان انجینر نرم‌افزار و ساخت وب‌سایت‌ها و سیستم‌های معلوماتی مدرن، منظم، قابل نگهداری و مفید است.",
    university: "پوهنتون", department: "دیپارتمنت", status: "وضعیت", faculty: "پوهنځی",
    location: "موقعیت", english: "انگلیسی", informationSystems: "سیستم‌های معلوماتی",
    engineerGraduate: "انجینر / فارغ", computerScience: "کمپیوترساینس",
    wardakAfghanistan: "وردک، افغانستان", languageSkills: "مهارت زبان انگلیسی",
    skillsTitle: "مهارت‌ها و تکنالوژی‌ها", skillsIntro: "تکنالوژی‌ها و ابزارهای مدرنی که برای طراحی و ساخت وب‌سایت‌ها و سیستم‌های کاربردی استفاده می‌کنم.",
    servicesTitle: "خدمات من", servicesIntro: "راهکارهای نرم‌افزاری کاربردی بر اساس نیازهای واقعی کاربران.",
    webDevelopment: "توسعه وب", webDescription: "من با استفاده از تکنالوژی‌های مدرن وب‌سایت‌های واکنش‌گرا و آسان برای کاربران طراحی و توسعه می‌دهم. تمرکز من بر چیدمان منظم، دسترسی آسان، عملکرد قابل اعتماد و نمایش مناسب در کمپیوتر، تبلت و موبایل است.",
    databaseDevelopment: "طراحی و توسعه پایگاه داده", databaseDescription: "من پایگاه‌های داده منظم برای سیستم‌های معلوماتی طراحی و مدیریت می‌کنم. این کار شامل تنظیم معلومات، ایجاد ارتباط میان جدول‌ها، نوشتن پرس‌وجوها و اتصال برنامه‌ها به MySQL و MongoDB با توجه به دقت و نگهداری آسان است.",
    appDevelopment: "اپلیکیشن‌های دسکتاپ و موبایل", appDescription: "من اپلیکیشن‌های کاربردی دسکتاپ و موبایل می‌سازم تا انجام کارهای روزمره برای کاربران آسان شود. به راهنمای روشن، امکانات مفید، مدیریت مطمئن معلومات و طراحی واکنش‌گرا توجه می‌کنم.",
    whyTitle: "چرا با من کار کنید؟", whyIntro: "من فردی پرتلاش، مسئول و باانگیزه هستم و برای یادگیری و رسیدن به اهداف خود کوشش می‌کنم.",
    modernSolutions: "راهکارهای مدرن", modernSolutionsText: "با استفاده از تکنالوژی مدرن، راهکارهای دیجیتالی مفید می‌سازم.",
    cleanCode: "کد منظم", cleanCodeText: "کد خوانا و منظم می‌نویسم تا نگهداری و توسعه آن آسان باشد.",
    responsiveDesign: "طراحی واکنش‌گرا", responsiveDesignText: "وب‌سایت‌هایی می‌سازم که در کمپیوتر، تبلت و موبایل به‌خوبی کار کنند.",
    practicalSystems: "سیستم‌های کاربردی", practicalSystemsText: "سیستم‌های قابل اعتماد و آسان برای کاربران می‌سازم که مشکلات واقعی را حل کنند.",
    userFocused: "طراحی کاربرمحور", userFocusedText: "رابط‌های ساده و روشن را مطابق نیازهای کاربران طراحی می‌کنم.",
    databaseSolutions: "راهکارهای پایگاه داده", databaseSolutionsText: "پایگاه‌های داده منظم برای ذخیره، مدیریت و دسترسی به معلومات می‌سازم.",
    projectsTitle: "پروژه‌های منتخب", projectsIntro: "این پروژه‌ها علاقه من به توسعه وب، اپلیکیشن‌ها و سیستم‌های کاربردی را نشان می‌دهند.",
    projectDescription: "اپلیکیشنی برای پوهنتون وردک جهت مدیریت ثبت پروژه‌های نهایی و جلوگیری از ثبت موضوعات تکراری.", viewProject: "مشاهده پروژه",
    educationTitle: "تحصیلات", educationIntro: "تحصیل دانش را افزایش می‌دهد، مهارت‌ها را رشد می‌دهد و برای آینده بهتر زمینه فراهم می‌کند.",
    universityName: "پوهنتون وردک", universitySubtitle: "پوهنځی کمپیوترساینس — سیستم‌های معلوماتی", universityDescription: "فارغ سیستم‌های معلوماتی با علاقه به توسعه وب، اپلیکیشن‌ها، پایگاه داده و راهکارهای کاربردی نرم‌افزاری.",
    schoolName: "لیسه عالی باغک", secondaryEducation: "تحصیلات متوسطه", schoolDescription: "تحصیلات متوسطه را در لیسه عالی باغک به پایان رساندم.",
    languagesTitle: "زبان‌ها", languagesSubtitle: "پشتو · دری · انگلیسی", languagesDescription: "به پشتو و دری صحبت می‌کنم و مهارت‌های ارتباطی انگلیسی خود را بهبود می‌بخشم.",
    englishCenter: "مرکز زبان انگلیسی چینج", englishGraduate: "آموزش زبان انگلیسی", englishDescription: "برای بهبود گرامر، صحبت کردن، شنیدن، خواندن و نوشتن آموزش دیده‌ام.",
    officeManagement: "مدیریت دفتر", professionalSkills: "مهارت‌های مسلکی", officeDescription: "در برنامه‌نویسی، توسعه وب، مدیریت پایگاه داده و یادگیری دوامدار مهارت دارم.",
    computerCenter: "مرکز کمپیوتر ویکتور", computerTraining: "آموزش کمپیوتر", computerDescription: "آموزش کمپیوتر را تکمیل کرده و دانش عملی برنامه‌های کمپیوتر را به دست آورده‌ام.",
    contactEyebrow: "با من در تماس شوید", contactTitle: "تماس با من", contactIntro: "پروژه، پرسش یا فرصت کاری دارید؟ برایم پیام بفرستید؛ خوشحال می‌شوم از شما بشنوم.",
    workTogether: "بیایید با هم کار کنیم", contactIntro2: "برای توسعه وب، اپلیکیشن، پایگاه داده یا همکاری با من تماس بگیرید.", email: "ایمیل", locationLabel: "موقعیت", github: "گیت‌هاب", visitGithub: "مشاهده پروفایل گیت‌هاب من", whatsapp: "واتس‌اپ", whatsappChat: "در واتس‌اپ پیام بدهید",
    yourName: "نام شما", enterName: "نام خود را وارد کنید", emailAddress: "آدرس ایمیل", emailPlaceholder: "you@example.com", message: "پیام", messagePlaceholder: "پیام خود را بنویسید...", sendMessage: "ارسال پیام", emailNote: "دکمه ارسال، برنامه ایمیل شما را باز می‌کند.",
    quickLinks: "لینک‌های سریع", letsConnect: "در تماس باشیم", footerConnectText: "ایده یا پروژه‌ای دارید؟ به بخش تماس بروید و برایم پیام بفرستید.", allRightsReserved: "تمام حقوق محفوظ است.", backToTop: "بازگشت به بالا", footerDescription: "توسعه وب، اپلیکیشن و پایگاه داده با تمرکز بر راهکارهای کاربردی و آسان برای کاربران.",
    lightMode: "حالت روشن", darkMode: "حالت تاریک"
  }
};

const AppSettingsContext = createContext(null);

export function AppSettingsProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("light");
  const t = (key) => translations[language]?.[key] ?? translations.en[key] ?? key;

  return (
    <AppSettingsContext.Provider value={{ language, setLanguage, theme, setTheme, t }}>
      <div className={`app-shell ${theme}`} lang={language} dir={language === "en" ? "ltr" : "rtl"}>
        {children}
      </div>
    </AppSettingsContext.Provider>
  );
}

export function useAppSettings() {
  const context = useContext(AppSettingsContext);
  if (!context) throw new Error("useAppSettings must be used inside AppSettingsProvider");
  return context;
}
