//for assort
import zubok from './images/garlic/garlic-zubok.webp';
import odn from './images/garlic/garlic-odn.webp';
import bulb from './images/garlic/garlic-bulb.webp';

//for sorts
import lyubasha from './images/garlic/lyubasha.webp';
import bogatyr from './images/garlic/bogatyr.webp';
import dobrynya from './images/garlic/dobrynya.webp';
import shadejka from './images/garlic/shadejka.webp';
import komsomolets from './images/garlic/komsomolets.webp';
import otradn from './images/garlic/otradn.webp';
import bashkir from './images/garlic/bashkirsky.webp';
import osenny from './images/garlic/osenny.webp';


export const assort = [
	{
		id: 1,
		src: zubok,
		alt: 'zubok',
		label: 'зубок первой репродукции',
		priceA: '390 р.',
		priceB: '350 р.',
		sizeA: '(калибр 6+)',
		sizeB: '(калибр 5-6 см)',
		measurement: '1 кг'

	}, {
		id: 2,
		src: odn,
		alt: 'odnozubok',
		label: 'однозубок',
		priceA: '700 р.',
		priceB: '650 р.',
		sizeA: '(диаметр 20 мм+)',
		sizeB: '(диаметр 15-20 мм)',
		measurement: '0,5 кг'
	}, {
		id: 3,
		src: bulb,
		alt: 'bulb',
		label: 'воздушная бульбочка',
		priceA: '350 р.',
		priceB: '300 р.',
		sizeA: '(диаметр 8 мм+)',
		sizeB: '(диаметр 5-8 мм)',
		measurement: '100 г'
	}
];


export const sorts = [
	{
		id: 1,
		src: lyubasha,
		alt: 'любаша',
		label: 'хит',
		item: 'Любаша',
		text1: 'высокоурожайный, средне-ранний (вегетационный период 100 дней) сорт. Морозоустойчивый, нетребователен к поливу и качеству почвы. Устойчив к болезням.',
		text2: 'головка крупная, содержит 6-8 зубков. Вкус средне-острый, аромат насыщенный.'
	}, {
		id: 2,
		src: bogatyr,
		alt: 'богатырь',
		label: 'очень крупный',
		item: 'Богатырь',
		text1: 'средне-ранний (вегетационный период 110 дней) сорт с очень крупной головкой. Неприхотлив, нетребователен к уходу и поливу. Требователен к уровню освещенности. Требует защиты от фузариоза.',
		text2: 'головка очень крупная, содержит 5-6 зубков. Вкус острый, аромат насыщенный.'
	}, {
		id: 3,
		src: dobrynya,
		alt: 'добрыня',
		label: 'мягкий вкус',
		item: 'Добрыня',
		text1: 'средне-поздний (вегетационный период 125 дней) сорт. Морозоустойчивый, нетребователен к поливу. Требует почв с хорошим дренажем и освещенностью.',
		text2: 'головка средних размеров, содержит 5-8 зубков. Отличительной особенностью данного сорта является более мягкий, средне-острый вкус.'
	}, {
		id: 4,
		src: shadejka,
		alt: 'шадейка',
		label: 'морозостойкий',
		item: 'Шадейка',
		text1: 'средне-ранний (вегетационный период 105 дней) сорт, отлично хранится до 11 месяцев. Выведен в Пермском Крае. Морозоустойчивый, неприхотлив в уходе, растет на любых почвах.',
		text2: 'головка крупная, содержит 5-7 зубков. Вкус очень острый, ароматный.'
	}, {
		id: 5,
		src: komsomolets,
		alt: 'комсомолец',
		label: 'морозостойкий',
		item: 'Комсомолец',
		text1: 'средне-ранний (вегетационный период 110 дней) сорт, отличается повышенной морозостойкостью в регионах с небольшим снежным покровом. Требует богатых почв и солнечное место. Устойчив к болезням.',
		text2: 'головка среднего размера, состоит из 6-8 зубков. Вкус острый, аромат насыщенный.'
	}, {
		id: 6,
		src: otradn,
		alt: 'отрадненский',
		label: 'пикантный вкус',
		item: 'Отрадненский',
		text1: 'поздний сорт (вегетационный период 130 дней). Нетребователен к качеству почвы и поливу. Морозостойкость средняя.',
		text2: 'головка среднего размера, состоит из 5-8 зубков. Необычный остро-пикантный вкус с богатым чесночным ароматом. Идеален для употребления в свежем виде.'
	}, {
		id: 7,
		src: bashkir,
		alt: 'башкирский',
		label: 'ранний',
		item: 'Башкирский 85',
		text1: 'один из самых ранних сортов чеснока (вегетационный период 90 дней). Устойчив к болезням, морозостойкий, нетребователен к поливам.',
		text2: 'головка среднего размера, состоит из 4-6 зубков. Вкус острый, аромат насыщенный.'
	}, {
		id: 8,
		src: osenny,
		alt: 'ранний',
		item: 'Осенний',
		label: 'осенний',
		text1: 'ранний сорт чеснока (вегетационный период 90 дней). Выведен в Западной Сибири. Морозостойкий, нетребователен в уходе.',
		text2: 'головки среднего размера, состоят из 4-5 крупных зубков. Вкус острый, с характерным оттенком, очень ароматный. Идеален для консервации.'
	}
];