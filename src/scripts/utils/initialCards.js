// теперь картинки можно импортировать,
// вебпак добавит в переменные правильные пути
import сaucasus from './../../images/сaucasus.jpg';
import tundra_plain from './../../images/tundra_plain.jpg';
import volga_river from './../../images/volga_river.jpg';
import yenisei_river from './../../images/yenisei_river.jpg';
import baikal from './../../images/baikal.jpg';
import taiga from './../../images/taiga.jpg';

//Массив карточек с изображениями и подписями к ним
const initialCards = [
  {name: 'Кавказские горы', link: сaucasus},
  {name: 'Тундровая равнина', link: tundra_plain},
  {name: 'Река Волга', link: volga_river},
  {name: 'Река Енисей', link: yenisei_river},
  {name: 'Байкал', link: baikal},
  {name: 'Таёжные леса', link: taiga}
];

export default initialCards;