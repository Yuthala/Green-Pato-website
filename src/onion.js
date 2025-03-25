//for assort
import sevokShalot from './images/onion/onion-sevok.webp';
import onionSeeds from './images/onion/onion-seeds.webp';
import onionSeeds2 from './images/onion/onion-seeds2.webp';
import onionRedBaron from './images/onion/onion-redbaron.webp';

//сорта лук-шалот
import zolotinka from './images/onion/zolotinka.webp';
import kwochka from './images/onion/kwochka.webp';
import rose from './images/onion/izumrud.webp';
import banan from './images/onion/banan.webp';
import karmen from './images/onion/karmen.webp';
import redbaron from './images/onion/redbaron.webp';
import stardust from './images/onion/stardust.webp';
import shtut from './images/onion/shtut-risen.webp';

//сорта лук репчатый

export const assort = [
	{
		id: 1,
		src: sevokShalot,
		alt: 'sevok-shalot',
		label: 'шалот севок'
	}, {
		id: 2,
		src: onionSeeds,
		alt: 'onion-seeds',
		label: 'шалот семена'
	}, {
		id: 3,
		src: onionRedBaron,
		alt: 'sevok-redbaron',
		label: 'лук севок'
	}, {
		id: 4,
		src: onionSeeds2,
		alt: 'onion-seeds',
		label: 'лук семена'
	}
];

export const sorts = [
	{
		id: 1,
		src: zolotinka,
		alt: 'золотистый',
		label: 'шалот',
		item: 'Золотинка',
		text: 'Средне-ранний сорт (вегетационный период 90 дней), внешние чешуи яркого золотистого цвета. Луковицы небольшие 20-30 г, 6-10 штук в гнезде.',
		priceA: '1500 р.',
		priceB: '200 р.'
	}, {
		id: 2,
		src: kwochka,
		alt: 'квочка',
		label: 'шалот',
		item: 'Квочка',
		text: 'Урожайный сорт с большими "гнездами" до 15 луковиц. Луковицы крупные до 100 г (в основной массе 60 г). Бело-розовые сочные чешуи со сладко-острым вкусом. Старинный кубанский сорт - устойчив к нехватке влаги.',
		priceA: '1500 р.',
		priceB: '200 р.'
	}, {
		id: 3,
		src: rose,
		alt: 'розовый',
		label: 'шалот',
		item: 'Изумруд',
		text: 'Ранний сорт (вегетационный период 75 дней). Луковицы крупные до 100 г, 5-10 штук в гнезде. Дает хорошее мощное перо.',
		priceA: '1500 р.',
		priceB: '200 р.'
	}, {
		id: 4,
		src: banan,
		alt: 'банан',
		label: 'шалот',
		item: 'Банановый Гигант',
		text: 'Красивые луковицы овально-вытянутой формы до 10 см в длину, довольно крупные (до 100 г). Классический сорт французской кухни. Раннеспелый, высокоурожайный.',
		priceA: 'временно нет в продаже',
		priceB: 'временно нет в продаже'
	}, {
		id: 5,
		src: karmen,
		alt: 'кармен',
		label: 'салатный',
		item: 'Кармен',
		text: 'Ранний сорт (вегетационный период 60 дней). Луковица красивого фиолетового цвета, внутри белая с фиолетовыми прослойками. Лук салатного назначения, для употребления в сыром виде, вкус остро-сладкий.',
		priceA: '680 р.',
		priceB: '50 р.'
	}, {
		id: 6,
		src: redbaron,
		alt: 'ред барон',
		label: 'салатный',
		item: 'Ред Барон',
		text: 'Один из самых лежких сортов салатного лука. Луковица красивого фиолетово-красного цвета, среднего размера. Лук салатного назначения, для употребления в сыром виде, вкус острый с оттенком сладкого.',
		priceA: '680 р.',
		priceB: '50 р.'
	}, {
		id: 7,
		src: stardust,
		alt: 'стардаст',
		label: 'универсальный',
		item: 'Стардаст',
		text: 'Луковицы красивого, жемчужно-белого цвета, выровненные. Универсальный сорт как для салата, так и для вторых блюд, а также на перо. Вкус остро-сладкий.',
		priceA: '780 р.',
		priceB: 'временно нет в продаже'
	}, {
		id: 8,
		src: shtut,
		alt: 'штутгартер',
		label: 'популярный',
		item: 'Штутгартер Ризен',
		text: 'Самый популярный и распространенный сорт в нашей стране, благодаря чему цена севка этого сорта доступна, при этом качество луковицы превосходное. Луковицы золотисто-желтого цвета, сочные чешуи белые. Вкусное длинное перо.',
		priceA: 'временно нет в продаже',
		priceB: 'временно нет в продаже'
	}
]