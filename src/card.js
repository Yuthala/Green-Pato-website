import odn from './images/odn.webp';
import zubok from './images/garlic1.webp';
import shalot from './images/shalot.webp';
import redbaron from './images/redbaron.webp';
import bulb from './images/bulb.webp';

const cards = [
    {
        id: 1,
        src: odn,
        text: 'однозубок чеснока',
        label: 'чеснок',
        path: '/garlic#garlic'
    },{
        id: 2,
        src: zubok,
        text: 'чеснок первого года, выращенный из однозубка',
        label: 'чеснок',
        path: '/garlic#garlic'
    }, {
        id: 3,
        src: shalot,
        text: 'лук шалот',
        label: 'шалот',
        path: '/onion#onion'
    }, {
        id: 4,
        src: redbaron,
        text: 'лук-севок',
        label: 'лук',
        path: '/onion#onion'
    }, {
        id: 5,
        src: bulb,
        text: 'бульбочка чеснока',
        label: 'чеснок',
        path: '/garlic#garlic'
    }
];


export default cards;