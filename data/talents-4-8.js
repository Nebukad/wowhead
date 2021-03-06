$WowheadTalentCalculator.registerClass(4, [
{
	n: 'Ликвидация',
	color: '#FFB81A',
	role: 8,
	mastery: {
		description: 'Опаснейший знаток ядов, который расправляется с противниками ударами отравленных кинжалов.',
		spells: [
			{id:1329,name:'Расправа',icon:'ability_rogue_shadowstrikes'},
			{id:14117,name:'Улучшенные яды',icon:'ability_poisons'},
			{id:84601,name:'Решимость ликвидатора',icon:'ability_rogue_sinistercalling'}
		],
		rating: [
			{id:76803,name:'Сильные яды',description:'<!--sp76803:0-->Увеличивает урон от ваших ядов на 28%. Каждое очко искусности увеличивает урон еще на 3.5%.<!--sp76803-->'}
		]
	},
	icon: 'ability_rogue_eviscerate',
	t: [
	{
		i: 6514,
		n: 'Смертельный импульс',
		m: 2,
		s: [79121,79122],
		d: [
			'После убийства цели, за которое вы получаете опыт или честь, с вероятностью 50% вы нанесете критический удар при следующей атаке повысится на 40%, а время действия эффектов "Мясорубка" и "Заживление ран" будет обновлено. Время действия – 15 сек.',
			'После убийства цели, за которое вы получаете опыт или честь, вероятность нанести критический удар при следующей атаке повысится на 40%, а время действия эффектов "Мясорубка" и "Заживление ран" будет обновлено. Время действия – 15 сек.'
		],
		x: 0,
		y: 0
	},
	{
		i: 276,
		n: 'Удар милосердия',
		m: 3,
		s: [14162,14163,14164],
		d: [
			'Увеличивает урон, наносимый способностями "Потрошение" и "Отравление", на 7%.',
			'Увеличивает урон, наносимый способностями "Потрошение" и "Отравление", на 14%.',
			'Увеличивает урон, наносимый способностями "Потрошение" и "Отравление", на 20%.'
		],
		x: 1,
		y: 0
	},
	{
		i: 269,
		n: 'Смертоносность',
		m: 3,
		s: [14128,14132,14135],
		d: [
			'Увеличивает дополнительный урон от критических ударов способностей "Коварный удар", "Удар в спину", "Расправа" и "Кровоизлияние" на 10%.',
			'Увеличивает дополнительный урон от критических ударов способностей "Коварный удар", "Удар в спину", "Расправа" и "Кровоизлияние" на 20%.',
			'Увеличивает дополнительный урон от критических ударов способностей "Коварный удар", "Удар в спину", "Расправа" и "Кровоизлияние" на 30%.'
		],
		x: 2,
		y: 0
	},
	{
		i: 273,
		n: 'Жестокость',
		m: 3,
		s: [14156,14160,14161],
		d: [
			'С вероятностью 20% ваш завершающий прием засчитается как первый прием новой серии.',
			'С вероятностью 40% ваш завершающий прием засчитается как первый прием новой серии.',
			'С вероятностью 60% ваш завершающий прием засчитается как первый прием новой серии.'
		],
		x: 0,
		y: 1
	},
	{
		i: 1721,
		n: 'Активизация',
		m: 2,
		s: [31208,31209],
		d: [
			'Повышает эффективность применяемого к вам лечения на 10% и повышает скорость передвижения на 8%. Не суммируется с большинством других эффектов, влияющих на скорость передвижения.',
			'Повышает эффективность применяемого к вам лечения на 20% и повышает скорость передвижения на 15%. Не суммируется с большинством других эффектов, влияющих на скорость передвижения.'
		],
		j: [
			{_healpct:10},
			{_healpct:20}
		],
		x: 1,
		y: 1
	},
	{
		i: 277,
		n: 'Колотые раны',
		m: 3,
		s: [13733,13865,13866],
		d: [
			'Повышает вероятность нанесения критического удара способностью "Удар в спину" на 10%, а способностью "Расправа" – на 5%.',
			'Повышает вероятность нанесения критического удара способностью "Удар в спину" на 20%, а способностью "Расправа" – на 10%.',
			'Повышает вероятность нанесения критического удара способностью "Удар в спину" на 30%, а способностью "Расправа" – на 15%.'
		],
		x: 2,
		y: 1
	},
	{
		i: 6515,
		n: 'Червленый вяз',
		m: 2,
		s: [79123,79125],
		d: [
			'Даже по завершении действия способности "Ошеломление" противники остаются подвержены остаточным эффектам. Наносимый ими урон снижен на 35% на 8 сек.',
			'Даже по завершении действия способности "Ошеломление" противники остаются подвержены остаточным эффектам. Наносимый ими урон снижен на 70% на 8 сек.'
		],
		x: 3,
		y: 1
	},
	{
		i: 2065,
		n: 'Смертельное варево',
		m: 2,
		s: [51625,51626],
		d: [
			'Отравляя противника быстродействующим, нейтрализующим или дурманящим ядом вы с вероятностью 50% также отравляете его калечащим ядом.',
			'Отравляя противника быстродействующим, нейтрализующим или дурманящим ядом вы с вероятностью 100% также отравляете его калечащим ядом.'
		],
		x: 0,
		y: 2
	},
	{
		i: 280,
		n: 'Хладнокровие',
		m: 1,
		s: [14177],
		d: [
			'При использовании этой способности восстанавливается 25 ед. энергии. Вероятность критического эффекта следующей способности, наносящей непериодический урон, возрастает на 100%.'
		],
		t: ['Восстановление: 2 мин'],
		x: 1,
		y: 2
	},
	{
		i: 682,
		n: 'Тлетворные яды',
		m: 3,
		s: [16513,16514,16515],
		d: [
			'Увеличивает урон от ваших ядов на 7%. Повышает вероятность того, что при применении способности "Веер клинков" ваше оружие ближнего боя отравит цель ядом, на 33%.',
			'Увеличивает урон от ваших ядов на 14%. Повышает вероятность того, что при применении способности "Веер клинков" ваше оружие ближнего боя отравит цель ядом, на 67%.',
			'Увеличивает урон от ваших ядов на 20%. Повышает вероятность того, что при применении способности "Веер клинков" ваше оружие ближнего боя отравит цель ядом, на 100%.'
		],
		x: 2,
		y: 2
	},
	{
		i: 11209,
		n: 'Омертвевшие нервы',
		m: 3,
		s: [31380,31382,31383],
		d: [
			'Уменьшает весь получаемый урон на 3%.',
			'Уменьшает весь получаемый урон на 7%.',
			'Уменьшает весь получаемый урон на 10%.'
		],
		j: [
			{_mledmgpct:-3,_rgddmgpct:-3,_holdmgpct:-3,_firdmgpct:-3,_natdmgpct:-3,_frodmgpct:-3,_shadmgpct:-3,_arcdmgpct:-3},
			{_mledmgpct:-7,_rgddmgpct:-7,_holdmgpct:-7,_firdmgpct:-7,_natdmgpct:-7,_frodmgpct:-7,_shadmgpct:-7,_arcdmgpct:-7},
			{_mledmgpct:-10,_rgddmgpct:-10,_holdmgpct:-10,_firdmgpct:-10,_natdmgpct:-10,_frodmgpct:-10,_shadmgpct:-10,_arcdmgpct:-10}
		],
		x: 0,
		y: 3
	},
	{
		i: 283,
		n: 'Печать судьбы',
		m: 2,
		s: [14186,14190],
		d: [
			'В случае, если прием, увеличивающий длину серии, нанесет критический урон, есть вероятность 50%, что длина серии увеличится дополнительно на 1 прием.',
			'В случае, если прием, увеличивающий длину серии, нанесет критический урон, есть вероятность 100%, что длина серии увеличится дополнительно на 1 прием.'
		],
		x: 1,
		y: 3,
		r: [8,1]
	},
	{
		i: 6516,
		n: 'Жестокие намерения',
		m: 2,
		s: [14158,14159],
		d: [
			'Используя способность "Удар в спину" против врага, запас здоровья которого не превышает 35%, вы моментально восстанавливаете 15 ед. энергии.',
			'Используя способность "Удар в спину" против врага, запас здоровья которого не превышает 35%, вы моментально восстанавливаете 30 ед. энергии.'
		],
		x: 0,
		y: 4
	},
	{
		i: 281,
		n: 'Бойня',
		m: 1,
		s: [58426],
		d: [
			'Дополнительно восстанавливает 30% энергии в режиме незаметности и в течение 20 секунд после выхода из него.'
		],
		x: 1,
		y: 4
	},
	{
		i: 1715,
		n: 'Мастер ядоварения',
		m: 1,
		s: [58410],
		d: [
			'Увеличивает магический урон, получаемый отравленным вами противником, на 8%. Сокращает время действия ядов на вас на 50%. При применении "Отравления" с цели не снимается эффект "Смертельного яда".'
		],
		x: 2,
		y: 4,
		r: [9,3]
	},
	{
		i: 278,
		n: 'Сильное ослабление доспеха',
		m: 2,
		s: [14168,14169],
		d: [
			'При использовании способности "Ослабление доспеха" есть 50%-я вероятность восстановить длину серии приемов.',
			'При использовании способности "Ослабление доспеха" есть 100%-я вероятность восстановить длину серии приемов.'
		],
		x: 3,
		y: 4
	},
	{
		i: 2070,
		n: 'Сразу к делу',
		m: 3,
		s: [51664,51665,51667],
		d: [
			'С вероятностью 33% применение способностей "Потрошение" и "Отравление" возобновит продолжительность действия вашей способности "Мясорубка" до максимально возможного времени.',
			'С вероятностью 67% применение способностей "Потрошение" и "Отравление" возобновит продолжительность действия вашей способности "Мясорубка" до максимально возможного времени.',
			'С вероятностью 100% применение способностей "Потрошение" и "Отравление" возобновит продолжительность действия вашей способности "Мясорубка" до максимально возможного времени.'
		],
		x: 1,
		y: 5
	},
	{
		i: 6517,
		n: 'Незаживающие раны',
		m: 2,
		s: [79133,79134],
		d: [
			'С вероятностью 30% разбойник наносит дополнительно <!--pts1-->675<!----> ед. урона от сил природы и восстанавливает 10 ед. энергии при нанесении урона способностью "Рваная рана" или "Гаррота" противнику, которого он отравил ядом. Если противник умирает, находясь под воздействием эффекта "Рваная рана", разбойник восстанавливает энергию в количестве, пропорциональном оставшемуся времени действия этого эффекта.',
			'С вероятностью 60% разбойник наносит дополнительно <!--pts1-->675<!----> ед. урона от сил природы и восстанавливает 10 ед. энергии при нанесении урона способностью "Рваная рана" или "Гаррота" противнику, которого он отравил ядом. Если противник умирает, находясь под воздействием эффекта "Рваная рана", разбойник восстанавливает энергию в количестве, пропорциональном оставшемуся времени действия этого эффекта.'
		],
		x: 2,
		y: 5
	},
	{
		i: 2071,
		n: 'Вендетта',
		m: 1,
		s: [79140],
		d: [
			'Метка смерти увеличивает весь наносимый вами противнику урон на 20% и позволяет видеть его, даже если он находится в состоянии незаметности или невидимости. Время действия – 30 сек.'
		],
		t: ['Радиус действия: 30 м<br />Восстановление: 2 мин'],
		x: 1,
		y: 6
	}
	]
},
{
	n: 'Бой',
	color: '#FF0000',
	role: 8,
	mastery: {
		description: 'Ловкий и коварный головорез, мастер ближнего боя.',
		spells: [
			{id:13877,name:'Шквал клинков',icon:'ability_warrior_punishingblow'},
			{id:61329,name:'Живучесть',icon:'ability_warrior_revenge'},
			{id:13852,name:'Амбидекстрия',icon:'ability_dualwield'}
		],
		rating: [
			{id:76806,name:'Правой, левой',description:'<!--sp76806:0-->Атакуя оружием в правой руке, вы с вероятностью 16% выполните дополнительный удар, наносящий 100% урона от этого оружия. Каждое очко искусности повышает эту вероятность еще на 2.00%.<!--sp76806-->'}
		]
	},
	icon: 'ability_backstab',
	t: [
	{
		i: 6395,
		n: 'Ускоренное заживление ран',
		m: 2,
		s: [79007,79008],
		d: [
			'Способность "Заживление ран" восполняет дополнительно 0.5% вашего максимального запаса здоровья и уменьшает весь получаемый урон на 3% во время действия этой способности.',
			'Способность "Заживление ран" восполняет дополнительно 1% вашего максимального запаса здоровья и уменьшает весь получаемый урон на 6% во время действия этой способности.'
		],
		x: 0,
		y: 0
	},
	{
		i: 201,
		n: 'Усиленный коварный удар',
		m: 3,
		s: [13732,13863,79004],
		d: [
			'Снижает расход энергии на способность "Коварный удар" на 2 ед. и увеличивает наносимый ею урон на 10%.',
			'Снижает расход энергии на способность "Коварный удар" на 4 ед. и увеличивает наносимый ею урон на 20%.',
			'Снижает расход энергии на способность "Коварный удар" на 6 ед. и увеличивает наносимый ею урон на 30%.'
		],
		x: 1,
		y: 0
	},
	{
		i: 181,
		n: 'Точность',
		m: 3,
		s: [13705,13832,13843],
		d: [
			'Повышает на 2% вероятность попадания оружием или ядом.',
			'Повышает на 4% вероятность попадания оружием или ядом.',
			'Повышает на 6% вероятность попадания оружием или ядом.'
		],
		j: [
			{mlehitpct:[2,'forClass',[2,368797,1]],rgdhitpct:[2,'forClass',[2,368797,1]],splhitpct:[2,'forClass',[2,368797,1]]},
			{mlehitpct:[4,'forClass',[2,368797,1]],rgdhitpct:[4,'forClass',[2,368797,1]],splhitpct:[4,'forClass',[2,368797,1]]},
			{mlehitpct:[6,'forClass',[2,368797,1]],rgdhitpct:[6,'forClass',[2,368797,1]],splhitpct:[6,'forClass',[2,368797,1]]}
		],
		x: 2,
		y: 0
	},
	{
		i: 1827,
		n: 'Жестокая мясорубка',
		m: 2,
		s: [14165,14166],
		d: [
			'Увеличивает время действия способности "Мясорубка" на 25%.',
			'Увеличивает время действия способности "Мясорубка" на 50%.'
		],
		x: 0,
		y: 1
	},
	{
		i: 222,
		n: 'Улучшенный спринт',
		m: 2,
		s: [13743,13875],
		d: [
			'При использовании способности "Спринт" с вероятностью 50% с вас снимаются все затрудняющие передвижение эффекты.',
			'При использовании способности "Спринт" с вероятностью 100% с вас снимаются все затрудняющие передвижение эффекты.'
		],
		x: 1,
		y: 1
	},
	{
		i: 1122,
		n: 'Агрессивность',
		m: 3,
		s: [18427,18428,18429],
		d: [
			'Увеличивает урон, наносимый вашими способностями "Коварный удар", "Удар в спину" и "Потрошение" на 7%.',
			'Увеличивает урон, наносимый вашими способностями "Коварный удар", "Удар в спину" и "Потрошение" на 14%.',
			'Увеличивает урон, наносимый вашими способностями "Коварный удар", "Удар в спину" и "Потрошение" на 20%.'
		],
		x: 2,
		y: 1
	},
	{
		i: 206,
		n: 'Подлый пинок',
		m: 2,
		s: [13754,13867],
		d: [
			'Способность "Пинок" также лишает противника дара речи на 1 сек.',
			'Способность "Пинок" лишает противника дара речи на 3 сек.'
		],
		x: 3,
		y: 1
	},
	{
		i: 186,
		n: 'Молниеносные рефлексы',
		m: 3,
		s: [13712,13788,13789],
		d: [
			'Повышают вероятность уклонения на 3%. Скорость атаки возрастает на 2%.',
			'Повышают вероятность уклонения на 6%. Скорость атаки возрастает на 4%.',
			'Повышают вероятность уклонения на 9%. Скорость атаки возрастает на 6%.'
		],
		j: [
			{dodgepct:3},
			{dodgepct:6},
			{dodgepct:9}
		],
		x: 0,
		y: 2
	},
	{
		i: 11171,
		n: 'Пробивающий удар',
		m: 1,
		s: [84617],
		d: [
			'Мгновенный удар, наносящий <!--ppl29:80:81:86-->125% обычного урона от оружия и повышающий эффективность следующего атакующего завершающего приема, направленного против той же цели, на 35% на 15 сек. Длина серии приемов увеличивается на 1.'
		],
		t: ['<table width="100%"><tr><td>40 Энергия</td><th>Дистанция ближнего боя</th></tr></table>Мгновенное действие','Требуется: Оружие ближнего боя'],
		x: 1,
		y: 2
	},
	{
		i: 6511,
		n: 'Укрепленная кожаная броня',
		m: 2,
		s: [79077,79079],
		d: [
			'Увеличивает показатель брони за счет кожаных и тканевых доспехов на 25%.',
			'Увеличивает показатель брони за счет кожаных и тканевых доспехов на 50%.'
		],
		j: [
			{armor:[25/100,'forSlots',[0,2,4,7,8,9,10,11,17]]},
			{armor:[50/100,'forSlots',[0,2,4,7,8,9,10,11,17]]}
		],
		x: 2,
		y: 2
	},
	{
		i: 203,
		n: 'Мощный парализующий удар',
		m: 2,
		s: [13741,13793],
		d: [
			'Увеличивает время действия эффекта способности "Парализующий удар" на 1 сек. Снижает расход энергии на ее применение на 15 ед.',
			'Увеличивает время действия эффекта способности "Парализующий удар" на 2 сек. Снижает расход энергии на ее применение на 30 ед.'
		],
		x: 3,
		y: 2
	},
	{
		i: 1825,
		n: 'Боевой потенциал',
		m: 3,
		s: [35541,35550,35551],
		d: [
			'Каждая успешная атака левой рукой и каждое срабатывание способности "Правой, левой" с вероятностью 20% восстанавливают 5 ед. энергии.',
			'Каждая успешная атака левой рукой и каждое срабатывание способности "Правой, левой" с вероятностью 20% восстанавливают 10 ед. энергии.',
			'Каждая успешная атака левой рукой и каждое срабатывание способности "Правой, левой" с вероятностью 20% восстанавливают 15 ед. энергии.'
		],
		x: 1,
		y: 3
	},
	{
		i: 1706,
		n: 'Вращение лезвий',
		m: 2,
		s: [31124,31126],
		d: [
			'Ваши успешные атаки ближнего боя с вероятностью 20% могут наложить на противника эффект "Головокружение", снижающий скорость передвижения на 70% на 4 сек.',
			'Ваши успешные атаки ближнего боя с вероятностью 40% могут наложить на противника эффект "Головокружение", снижающий скорость передвижения на 70% на 8 сек.'
		],
		x: 2,
		y: 3
	},
	{
		i: 2072,
		n: 'Специализация на метательном оружии',
		m: 2,
		s: [5952,51679],
		d: [
			'Увеличивает дальность действия способностей "Бросок" и "Смертельный бросок" на 5 м. Способность "Смертельный бросок" может предотвратить произнесение заклинаний на 3 сек. с вероятностью 50%.',
			'Увеличивает дальность действия способностей "Бросок" и "Смертельный бросок" 10 м. Способность "Смертельный бросок" может предотвратить произнесение заклинаний на 3 сек. с вероятностью 100%.'
		],
		x: 0,
		y: 4
	},
	{
		i: 205,
		n: 'Выброс адреналина',
		m: 1,
		s: [13750],
		d: [
			'Повышает скорость восстановления энергии на 100%, а скорость атаки в ближнем бою – на 20%. Время действия – 15 сек.'
		],
		t: ['Восстановление: 3 мин'],
		x: 1,
		y: 4
	},
	{
		i: 2074,
		n: 'Жар битвы',
		m: 2,
		s: [51682,58413],
		d: [
			'Повышает силу атаки на 2% и увеличивает весь физический урон, наносимый отравленным вами противникам, на 2%.',
			'Повышает силу атаки на 4% и увеличивает весь физический урон, наносимый отравленным вами противникам, на 4%.'
		],
		j: [
			{mleatkpwr:[2/100,'percentOf','mleatkpwr']},
			{mleatkpwr:[4/100,'percentOf','mleatkpwr']}
		],
		x: 2,
		y: 4
	},
	{
		i: 11174,
		n: 'Коварство бандита',
		m: 3,
		s: [84652,84653,84654],
		d: [
			'Ваши способности "Коварный удар" и "Пробивающий удар" с вероятностью 33% дают вам возможность понять намерения вашего противника. Бонус урона по этому противнику при этом может достигать 30%. Со временем противник адаптируется, и эффект рассеивается. Ударив другого противника, вы вновь запустите цикл.',
			'Ваши способности "Коварный удар" и "Пробивающий удар" с вероятностью 67% дают вам возможность понять намерения вашего противника. Бонус урона по этому противнику при этом может достигать 30%. Со временем противник адаптируется, и эффект рассеивается. Ударив другого противника, вы вновь запустите цикл.',
			'Ваши способности "Коварный удар" и "Пробивающий удар" с вероятностью 100% дают вам возможность понять намерения вашего противника. Бонус урона по этому противнику при этом может достигать 30%. Со временем противник адаптируется, и эффект рассеивается. Ударив другого противника, вы вновь запустите цикл.'
		],
		x: 0,
		y: 5
	},
	{
		i: 6513,
		n: 'Не знающие устали клинки',
		m: 2,
		s: [79095,79096],
		d: [
			'Ваши наносящие урон завершающие приемы сокращают время восстановления способностей "Выброс адреналина", "Череда убийств", "Смена приоритетов" и "Спринт" на 1 сек. за каждый прием в серии.',
			'Ваши наносящие урон завершающие приемы сокращают время восстановления способностей "Выброс адреналина", "Череда убийств", "Смена приоритетов" и "Спринт" на 2 сек. за каждый прием в серии.'
		],
		x: 2,
		y: 5
	},
	{
		i: 2076,
		n: 'Череда убийств',
		m: 1,
		s: [51690],
		d: [
			'Разбойник проходит сквозь тень от противника к противнику в радиусе 10 м, атакуя раз в 0.5 сек. обоими оружиями, пока не будет совершено 5 атак. Во время действия эффекта весь наносимый урон возрастает на 20%. Разбойник может атаковать одну цель несколько раз. Не затрагивает невидимые или незаметные цели.'
		],
		t: ['Радиус действия: 10 м<br />Восстановление: 2 мин','Требуется: Оружие ближнего боя'],
		x: 1,
		y: 6,
		r: [14,1]
	}
	]
},
{
	n: 'Скрытность',
	color: '#4D80FF',
	role: 8,
	mastery: {
		description: 'Мастер скрытности, в совершенстве владеющий искусством незаметного передвижения, внезапных и смертельных атак.',
		spells: [
			{id:36554,name:'Шаг сквозь тень',icon:'ability_rogue_shadowstep'},
			{id:31223,name:'Мастер скрытности',icon:'ability_rogue_masterofsubtlety'},
			{id:31220,name:'Коварное призвание',icon:'ability_rogue_sinistercalling'}
		],
		rating: [
			{id:76808,name:'Палач',description:'<!--sp76808:0-->Урон от всех завершающих ударов и эффективность способности "Мясорубка" увеличивается на 20%. Каждое очко искусности усиливает бонус на 2.5%.<!--sp76808-->'}
		]
	},
	icon: 'ability_stealth',
	t: [
	{
		i: 244,
		n: 'Ночной ловец',
		m: 2,
		s: [13975,14062],
		d: [
			'Увеличивает вашу скорость в состоянии незаметности на 5% и сокращает время восстановления способности "Незаметность" на 2 сек.',
			'Увеличивает вашу скорость в состоянии незаметности на 10% и сокращает время восстановления способности "Незаметность" на 4 сек.'
		],
		x: 0,
		y: 0
	},
	{
		i: 263,
		n: 'Разрушительный внезапный удар',
		m: 3,
		s: [14079,14080,84661],
		d: [
			'Повышает вероятность нанесения критического удара способностью "Внезапный удар" на 20% и увеличивает урон от этой способности на 5%.',
			'Повышает вероятность нанесения критического удара способностью "Внезапный удар" на 40% и увеличивает урон от этой способности на 10%.',
			'Повышает вероятность нанесения критического удара способностью "Внезапный удар" на 60% и увеличивает урон от этой способности на 15%.'
		],
		x: 1,
		y: 0
	},
	{
		i: 2244,
		n: 'Неослабевающие удары',
		m: 3,
		s: [14179,58422,58423],
		d: [
			'С вероятностью 7% за каждый прием в серии ваш завершающий прием восполнит 25 энергии.',
			'С вероятностью 14% за каждый прием в серии ваш завершающий прием восполнит 25 энергии.',
			'С вероятностью 20% за каждый прием в серии ваш завершающий прием восполнит 25 энергии.'
		],
		x: 2,
		y: 0
	},
	{
		i: 247,
		n: 'Неуловимость',
		m: 2,
		s: [13981,14066],
		d: [
			'Сокращает время восстановления способностей "Исчезновение" и "Ослепление" на 30 сек. и "Плащ Теней" на 10 сек.',
			'Сокращает время восстановления способностей "Исчезновение" и "Ослепление" на 60 сек. и "Плащ Теней" на 20 сек.'
		],
		x: 0,
		y: 1
	},
	{
		i: 2077,
		n: 'Засада',
		m: 2,
		s: [51692,51696],
		d: [
			'С вероятностью 50% успешное применение способностей "Внезапный удар" и "Удар в спину" заставит противника потерять равновесие, что увеличит время между его атаками в ближнем и дальнем бою на 20%, а также снизит скорость его передвижения на 50% на 8 сек.',
			'С вероятностью 100% успешное применение способностей "Внезапный удар" и "Удар в спину" заставит противника потерять равновесие, что увеличит время между его атаками в ближнем и дальнем бою на 20%, а также снизит скорость его передвижения на 50% на 8 сек.'
		],
		x: 1,
		y: 1,
		r: [1,3]
	},
	{
		i: 261,
		n: 'Правильный момент',
		m: 3,
		s: [14057,14072,79141],
		d: [
			'Увеличивает урон, наносимый способностями "Удар в спину", "Расправа", "Гаррота" и "Внезапный удар", на 10%.',
			'Увеличивает урон, наносимый способностями "Удар в спину", "Расправа", "Гаррота" и "Внезапный удар", на 20%.',
			'Увеличивает урон, наносимый способностями "Удар в спину", "Расправа", "Гаррота" и "Внезапный удар", на 30%.'
		],
		x: 2,
		y: 1
	},
	{
		i: 245,
		n: 'Инициатива',
		m: 2,
		s: [13976,13979],
		d: [
			'С вероятностью 50% в результате проведения приемов "Внезапный удар", "Гаррота" и "Подлый трюк" длина серии приемов, проводимой против цели, увеличится дополнительно на 1 прием.',
			'С вероятностью 100% в результате проведения приемов "Внезапный удар", "Гаррота" и "Подлый трюк" длина серии приемов, проводимой против цели, увеличится дополнительно на 1 прием.'
		],
		x: 3,
		y: 1
	},
	{
		i: 11665,
		n: 'Восстановление энергии',
		m: 3,
		s: [79150,79151,79152],
		d: [
			'Периодический эффект способности "Заживление ран" также восстанавливает 4 ед. энергии.',
			'Периодический эффект способности "Заживление ран" также восстанавливает 8 ед. энергии.',
			'Периодический эффект способности "Заживление ран" также восстанавливает 12 ед. энергии.'
		],
		x: 0,
		y: 2
	},
	{
		i: 6519,
		n: 'Поиск слабости',
		m: 2,
		s: [51632,91023],
		d: [
			'Используя способности "Внезапный удар", "Гаррота" или "Подлый трюк", вы отыскиваете слабые места противника. В течение следующих 10 сек. при всех ваших атаках игнорируется 35% показателя брони противника.',
			'Используя способности "Внезапный удар", "Гаррота" или "Подлый трюк", вы отыскиваете слабые места противника. В течение следующих 10 сек. при всех ваших атаках игнорируется 70% показателя брони противника.'
		],
		x: 1,
		y: 2
	},
	{
		i: 681,
		n: 'Кровоизлияние',
		m: 1,
		s: [16511],
		d: [
			'Мгновенный удар, наносящий <!--ppl29:80:69:80-->110% урона от оружия ((<!--ppl29:80:69:80-->110 * 1.45)%, если вы вооружены кинжалом).<!--sp56807:0--><!--sp56807--> Увеличивает урон от эффектов кровотечения на 30%. Время действия – 1 мин. Длина серии приемов увеличивается на 1.'
		],
		t: ['<table width="100%"><tr><td>35 Энергия</td><th>Дистанция ближнего боя</th></tr></table>Мгновенное действие','Требуется: Оружие ближнего боя'],
		x: 2,
		y: 2
	},
	{
		i: 2078,
		n: 'Воровская честь',
		m: 3,
		s: [51698,51700,51701],
		d: [
			'Повышает вероятность нанесения критического удара всеми участниками группы и рейда на 5%. Если какой-либо игрок в группе или рейде наносит критический удар заклинанием или способностью, с вероятностью 33% длина вашей серии приемов на текущей цели увеличивается на 1. Эффект не может срабатывать чаще, чем раз в 4 секунды.',
			'Повышает вероятность нанесения критического удара всеми участниками группы и рейда на 5%. Если какой-либо игрок в группе или рейде наносит критический удар заклинанием или способностью, с вероятностью 66% длина вашей серии приемов на текущей цели увеличивается на 1. Эффект не может срабатывать чаще, чем раз в 3 секунды.',
			'Повышает вероятность нанесения критического удара всеми участниками группы и рейда на 5%. Если какой-либо игрок в группе или рейде наносит критический удар заклинанием или способностью, с вероятностью 100% длина вашей серии приемов на текущей цели увеличивается на 1. Эффект не может срабатывать чаще, чем раз в 2 секунды.'
		],
		j: [
			{mlecritstrkpct:5,rgdcritstrkpct:5,holsplcritstrkpct:5,firsplcritstrkpct:5,natsplcritstrkpct:5,frosplcritstrkpct:5,shasplcritstrkpct:5,arcsplcritstrkpct:5},
			{mlecritstrkpct:5,rgdcritstrkpct:5,holsplcritstrkpct:5,firsplcritstrkpct:5,natsplcritstrkpct:5,frosplcritstrkpct:5,shasplcritstrkpct:5,arcsplcritstrkpct:5},
			{mlecritstrkpct:5,rgdcritstrkpct:5,holsplcritstrkpct:5,firsplcritstrkpct:5,natsplcritstrkpct:5,frosplcritstrkpct:5,shasplcritstrkpct:5,arcsplcritstrkpct:5}
		],
		x: 0,
		y: 3
	},
	{
		i: 381,
		n: 'Умысел',
		m: 1,
		s: [14183],
		d: [
			'Подготовительный прием, засчитывающийся за 2 прием. Необходимо продолжить или завершить серию в течение 20 сек. или эффект пропадет.'
		],
		t: ['Радиус действия: 30 м<br />Восстановление: 20 сек.','Требуется: Незаметность'],
		x: 1,
		y: 3
	},
	{
		i: 11664,
		n: 'Окутывающие тени',
		m: 3,
		s: [31211,31212,31213],
		d: [
			'Снижает урон, получаемый от действующих на область заклинаний на 10%. Увеличивает время действия способности "Ложный выпад" на 1 сек.',
			'Снижает урон, получаемый от действующих на область заклинаний на 20%. Увеличивает время действия способности "Ложный выпад" на 2 сек.',
			'Снижает урон, получаемый от действующих на область заклинаний на 30%. Увеличивает время действия способности "Ложный выпад" на 3 сек.'
		],
		x: 3,
		y: 3
	},
	{
		i: 1722,
		n: 'Обман смерти',
		m: 3,
		s: [31228,31229,31230],
		d: [
			'При получении смертельного урона с вероятностью 33% вы останетесь живы и уровень вашего здоровья не упадет ниже 10% от максимального. При этом на следующие 3 сек. весь получаемый урон уменьшится на 80%. Этот эффект может срабатывать не чаще чем раз в минуту.',
			'При получении смертельного урона с вероятностью 66% вы останетесь живы и уровень вашего здоровья не упадет ниже 10% от максимального. При этом на следующие 3 сек. весь получаемый урон уменьшится на 80%. Этот эффект может срабатывать не чаще чем раз в минуту.',
			'При получении смертельного урона с вероятностью 100% вы останетесь живы и уровень вашего здоровья не упадет ниже 10% от максимального. При этом на следующие 3 сек. весь получаемый урон уменьшится на 80%. Этот эффект может срабатывать не чаще чем раз в минуту.'
		],
		x: 0,
		y: 4
	},
	{
		i: 284,
		n: 'Подготовка',
		m: 1,
		s: [14185],
		d: [
			'При использовании немедленно завершает время восстановления способностей "Спринт", "Исчезновение"<!--sp56819:0--><!--sp56819--> и "Шаг сквозь тень".'
		],
		t: ['Восстановление: 5 мин'],
		x: 1,
		y: 4
	},
	{
		i: 6520,
		n: 'Вспарывание вен',
		m: 2,
		s: [79146,79147],
		d: [
			'Увеличивает урон, наносимый истекающим кровью целям, на 5%. Вызванное вашими атаками кровотечение с вероятностью 50% не прерывает эффект вашего "Парализующего удара".',
			'Увеличивает урон, наносимый истекающим кровью целям, на 10%. Вызванное вашими атаками кровотечение с вероятностью 100% не прерывает эффект вашего "Парализующего удара".'
		],
		x: 2,
		y: 4,
		r: [9,1]
	},
	{
		i: 2080,
		n: 'Резня во тьме',
		m: 3,
		s: [51708,51709,51710],
		d: [
			'Снижает расход энергии на ваши способности "Удар в спину" и "Внезапный удар" на 7 ед., а на способности "Кровоизлияние" и "Веер клинков" – на 2 ед.',
			'Снижает расход энергии на ваши способности "Удар в спину" и "Внезапный удар" на 14 ед., а на способности "Кровоизлияние" и "Веер клинков" – на 4 ед.',
			'Снижает расход энергии на ваши способности "Удар в спину" и "Внезапный удар" на 20 ед., а на способности "Кровоизлияние" и "Веер клинков" – на 6 ед.'
		],
		x: 1,
		y: 5
	},
	{
		i: 1123,
		n: 'Зазубренные клинки',
		m: 2,
		s: [14171,14172],
		d: [
			'Способность "Потрошение" с вероятностью 10% за каждый прием в серии обновит время действия эффекта "Рваная рана".',
			'Способность "Потрошение" с вероятностью 20% за каждый прием в серии обновит время действия эффекта "Рваная рана".'
		],
		x: 2,
		y: 5
	},
	{
		i: 2081,
		n: 'Танец теней',
		m: 1,
		s: [51713],
		d: [
			'Начав танец теней, вы можете использовать способности "Ошеломление", "Гаррота", "Внезапный удар", "Подлый трюк", "Умысел", "Обшаривание карманов" и "Обезвреживание ловушки" независимо от того, находитесь ли вы в состоянии незаметности, в течение 6 сек.'
		],
		t: ['Восстановление: 1 мин'],
		x: 1,
		y: 6
	}
	]
}
]);