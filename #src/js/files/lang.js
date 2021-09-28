let rus = {
  hello: 'Привіт, мене звати',
  name: 'Юрій Матвєєв',
  description: 'Я фронтенд-розробник-самоучка, що займається створенням якісних і сучасних веб-сайтів і додатків.',
  front: 'Розробник',
  biography: 'Про мене',
  biography_desc: 'Я цілеспрямований і наполегливий, готовий вчитися і швидко освоювати нові ідеї та концепції. Мені дуже цікаво рости в професійному плані. <br> Я присвячую себе створенню якісних і красивих сайтів і додатків. Деякі з технологій, з якими я працюю, - це HTML і CSS, JavaScript (ES6 +) і React.',
  title_name: 'Ім\'я:',
  title_birthday: 'Народився:',
  birthday: '5 Жовтня 1999',
  title_age: 'Вік:',
  age: '21 років',
  title_address: 'Проживаю у:',
  address: 'Києві',
  title_phone: 'Моб. тел.',
  iDo: 'Чим я займаюсь?',
  WebDesign: 'Web Design',
  WebDesignDesk: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  WebDevelopment: 'Web Development',
  WebDevelopmentDesk: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  coding: 'Coding',
  codingDesk: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  education: 'Education & Skills',
  present: 'Present',
  master: 'Master of Digital Economics',
  knute: 'Kyiv National University of Trade and Economics',
  bachelor: 'Bachelor in Economic Cybernetics',
  myWorks: 'My Works',
  all: 'All',
  contacts: 'Contacts',
  contactText: 'You can always contact me in the following ways:'
};

let eng = {
  hello: 'Hello, My name is',
  name: 'Yura Matveev',
  description: 'I\'m a self-taught front end developer, devoted to building quality and modern websites and apps.',
  front: 'Developer',
  biography: 'About me',
  biography_desc: 'I am a motivated and persistent person, ready to learn and quickly master new ideas and concepts. It is very interesting for me to grow professionally. <br> I am committed to creating high quality and beautiful websites and applications. Some of the technologies I work with are HTML and CSS, JavaScript (ES6 +) and React.',
  title_name: 'Name:',
  title_birthday: 'Birthday:',
  birthday: '5 October 1999',
  title_age: 'Age:',
  age: '21 years',
  title_address: 'Address:',
  address: 'Kyiv',
  title_phone: 'Phone',
  iDo: 'What I do?',
  WebDesign: 'Web Design',
  WebDesignDesk: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  WebDevelopment: 'Web Development',
  WebDevelopmentDesk: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  coding: 'Coding',
  codingDesk: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  education: 'Education & Skills',
  present: 'Present',
  master: 'Master of Digital Economics',
  knute: 'Kyiv National University of Trade and Economics',
  bachelor: 'Bachelor in Economic Cybernetics',
  myWorks: 'My Works',
  all: 'All',
  contacts: 'Contacts',
  contactText: 'You can always contact me in the following ways:'
};

changeLagnuage();

function changeLagnuage() {
  let language = lang.checked ? rus : eng;
  document.querySelectorAll('[text]').forEach(el => {
    el.innerHTML = language[el.getAttribute('text')];
  })
}