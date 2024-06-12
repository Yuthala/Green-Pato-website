import odn from './images/odn.jpg';
import zubok from './images/garlic1.jpg';
import shalot from './images/shalot.jpg';
import redbaron from './images/redbaron.jpg';
import bulb from './images/bulb.jpg';

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
        text: 'лук-шалот',
        label: 'лук',
        path: '/onion#onion'
    }, {
        id: 4,
        src: redbaron,
        text: 'лук репчатый',
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