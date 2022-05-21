const training = 'обучение';
const speed = 'скорость';
const cost = 'цена';
const lvl = ' уровень';

export default [
  {
    id: 1,
    alias: 'barbarian',
    title: 'Варвар',
    descr:
      'Варвар - одетый в килт шотландский воин с сердитым, готовым к битве выражением лица, жаждущий разрушения. У него убийственные желтые подковообразные усы.',
    img: require('@/assets/img/barbarian.png'),
    //'https://tocode.ru/static/uploads/courses/3/clash-of-clans-images/barbarian.png',
    lvl: 4 + lvl,
    info: [
      { title: training, value: '20с' },
      { title: speed, value: '16' },
      { title: cost, value: '150' }
    ]
  },
  {
    id: 2,
    alias: 'archer',
    title: 'Лучница',
    descr:
      'Лучница - женщина-воин с острым взглядом. На ней короткое светло-зеленое платье, накидка с капюшоном, кожаный пояс и прикрепленная к нему маленькая сумочка.',
    img: require('@/assets/img/archer.png'),
      // 'https://tocode.ru/static/uploads/courses/3/clash-of-clans-images/archer.png',
    lvl: 4 + lvl,
    info: [
      { title: training, value: '25с' },
      { title: speed, value: '24' },
      { title: cost, value: '300' }
    ]
  },
  {
    id: 3,
    alias: 'giant',
    title: 'Гигант',
    descr:
      'Медленные, устойчивые и мощные Гиганты - это массивные воины, которые наносят огромный урон. Покажите им башню или пушку, и вы увидите, как их ярость высвободится!',
    img: require('@/assets/img/giant.png'),
      // 'https://tocode.ru/static/uploads/courses/3/clash-of-clans-images/giant.png',
    lvl: 4 + lvl,
    info: [
      { title: training, value: '2м' },
      { title: speed, value: '12' },
      { title: cost, value: '2250' }
    ]
  },
  {
    id: 4,
    alias: 'goblin',
    title: 'Гоблин',
    descr:
      'У этих надоедливых маленьких существ есть глаза только на одно: ДОБЫЧА! Они быстрее, чем капкан, и их жажда ресурсов безгранична.',
    img:  require('@/assets/img/goblin.png'),
      // 'https://tocode.ru/static/uploads/courses/3/clash-of-clans-images/goblin.png',
    lvl: 5 + lvl,
    info: [
      { title: training, value: '30с' },
      { title: speed, value: '32' },
      { title: cost, value: '100' }
    ]
  },
  {
    id: 5,
    alias: 'wizard',
    title: 'Волшебник',
    descr:
      'Волшебник - это устрашающее присутствие на поле боя. Соедините его с некоторыми из его товарищей и направьте концентрированные взрывы разрушения на что угодно, землю или небо!',
    img: require('@/assets/img/wizard.png'),
      // 'https://tocode.ru/static/uploads/courses/3/clash-of-clans-images/wizard.png',
    lvl: 6 + lvl,
    info: [
      { title: training, value: '5м' },
      { title: speed, value: '16' },
      { title: cost, value: '3800' }
    ]
  }
]
