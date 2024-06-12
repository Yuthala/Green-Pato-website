//for assort
import sevokShalot from './images/onion/onion-sevok.jpeg';
import onionSeeds from './images/onion/onion-seeds.jpg';
import onionSeeds2 from './images/onion/onion-seeds2.jpg';
import onionRedBaron from './images/onion/onion-redbaron.jpg';

//сорта лук-шалот
import zolotinka from './images/onion/zolotinka.jpg';
import kwochka from './images/onion/kwochka.jpg';
import rose from './images/onion/izumrud.jpg';
import banan from './images/onion/banan.png';
import karmen from './images/onion/karmen.jpeg';
import redbaron from './images/onion/redbaron.jpg';
import stardust from './images/onion/stardust.jpg';
import shtut from './images/onion/shtut-risen.jpg';

//сорта лук репчатый

export const assort = [
	{
		id: 1,
		src: sevokShalot,
		alt: 'sevok-shalot',
		label: 'лук-шалот севок'
	}, {
		id: 2,
		src: onionSeeds,
		alt: 'onion-seeds',
		label: 'лук-шалот семена'
	}, {
		id: 3,
		src: onionRedBaron,
		alt: 'sevok-redbaron',
		label: 'лук репчатый севок'
	}, {
		id: 4,
		src: onionSeeds2,
		alt: 'onion-seeds',
		label: 'лук репчатый семена'
	}
];

export const sorts = [
	{
		id: 1,
		src: zolotinka,
		alt: 'золотистый',
		label: 'шалот',
		item: 'Золотистый',
		text: 'Средне-ранний сорт (вегетационный период 90 дней), внешние чешуи яркого золотистого цвета. Луковицы небольшие 20-30 г, 6-10 штук в гнезде.',
		priceA: '1400 р.',
		priceB: '200 р.'
	}, {
		id: 2,
		src: kwochka,
		alt: 'квочка',
		label: 'шалот',
		item: 'Квочка',
		text: 'Урожайный сорт с большими "гнездами" до 15 луковиц. Луковицы крупные до 100 г (в основной массе 60 г). Бело-розовые сочные чешуи со сладко-острым вкусом. Старинный кубанский сорт - устойчив к нехватке влаги.',
		priceA: '1400 р.',
		priceB: 'временно нет в продаже'
	}, {
		id: 3,
		src: rose,
		alt: 'розовый',
		label: 'шалот',
		item: 'Розовый',
		text: 'Ранний сорт (вегетационный период 75 дней). Луковицы крупные до 100 г, 5-10 штук в гнезде. Дает хорошее мощное перо.',
		priceA: '1400 р.',
		priceB: '200 р.'
	}, {
		id: 4,
		src: banan,
		alt: 'банан',
		label: 'шалот',
		item: 'Банановый',
		text: 'Красивые луковицы овально-вытянутой формы до 10 см в длину, довольно крупные (до 100 г). Классический сорт французской кухни. Раннеспелый, высокоурожайный.',
		priceA: '1800 р.',
		priceB: '250 р.'
	}, {
		id: 5,
		src: karmen,
		alt: 'кармен',
		label: 'салатный',
		item: 'Кармен',
		text: 'Ранний сорт (вегетационный период 60 дней). Луковица красивого фиолетового цвета, внутри белая с фиолетовыми прослойками. Лук салатного назначения, для употребления в сыром виде, вкус остро-сладкий.',
		priceA: '1200 р.',
		priceB: '150 р.'
	}, {
		id: 6,
		src: redbaron,
		alt: 'ред барон',
		label: 'салатный',
		item: 'Ред Барон',
		text: 'Один из самых лежких сортов салатного лука. Луковица красивого фиолетово-красного цвета, среднего размера. Лук салатного назначения, для употребления в сыром виде, вкус острый с оттенком сладкого.',
		priceA: '1200 р.',
		priceB: '150 р.'
	}, {
		id: 7,
		src: stardust,
		alt: 'стардаст',
		label: 'универсальный',
		item: 'Стардаст',
		text: 'Луковицы красивого, жемчужно-белого цвета, выровненные. Универсальный сорт как для салата, так и для вторых блюд, а также на перо. Вкус остро-сладкий.',
		priceA: '1200 р.',
		priceB: 'временно нет в продаже'
	}, {
		id: 8,
		src: shtut,
		alt: 'штутгартер',
		label: 'популярный',
		item: 'Штутгартер Ризен',
		text: 'Самый популярный и распространенный сорт в нашей стране, благодаря чему цена севка этого сорта доступна, при этом качество луковицы превосходное. Луковицы золотисто-желтого цвета, сочные чешуи белые. Вкусное длинное перо.',
		priceA: '800 р.',
		priceB: 'временно нет в продаже'
	}
]