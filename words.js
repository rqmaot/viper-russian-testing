const wordList = [
  { word: 'кот', pronunciation: 'kot', translation: 'cat' },
  { word: 'кто', pronunciation: 'kto', translation: 'who' },
  { word: 'что', pronunciation: 'chto', translation: 'what' },
  { word: 'окно', pronunciation: 'okno', translation: 'window' },
  { word: 'мяч', pronunciation: 'myach', translation: 'ball' },
  { word: 'аптека', pronunciation: 'apteka', translation: 'pharmacy' },
  { word: 'почта', pronunciation: 'pochta', translation: 'post office' },
  { word: 'дом', pronunciation: 'dom', translation: 'house' },
  { word: 'банк', pronunciation: 'bank', translation: 'bank' },
  { word: 'день', pronunciation: 'den', translation: 'day' },
  { word: 'ручка', pronunciation: 'ruchka', translation: 'pen' },
  { word: 'ты', pronunciation: 'ty', translation: 'you (informal)' },
  { word: 'мы', pronunciation: 'my', translation: 'we' },
  { word: 'брат', pronunciation: 'brat', translation: 'brother' },
  { word: 'да', pronunciation: 'da', translation: 'yes' },
  { word: 'добрый', pronunciation: 'dobry', translation: 'good' },
  { word: 'доска', pronunciation: 'doska', translation: 'board' },
  { word: 'комната', pronunciation: 'komnata', translation: 'room' },
  { word: 'май', pronunciation: 'may', translation: 'May' },
  { word: 'море', pronunciation: 'more', translation: 'sea' },
  { word: 'пока', pronunciation: 'poka', translation: 'goodbye' },
  { word: 'секрет', pronunciation: 'sekret', translation: 'secret' },
  { word: 'семья', pronunciation: 'sem`ya', translation: 'family' },
  { word: 'сестра', pronunciation: 'sestra', translation: 'sister' },
  { word: 'собака', pronunciation: 'sobaka', translation: 'dog' },
  { word: 'там', pronunciation: 'tam', translation: 'there' },
  { word: 'урок', pronunciation: 'urok', translation: 'lesson' },
  { word: 'утро', pronunciation: 'utro', translation: 'morning' },
  { word: 'час', pronunciation: 'chas', translation: 'hour' },
  { word: 'доброе утро', pronunciation: 'dobroe utro', translation: 'good morning' },
  { word: 'добрый день', pronunciation: 'dobry den', translation: 'good day' },
  { word: 'курсант', pronunciation: 'kursant', translation: 'cadet (male)' },
  { word: 'курсантка', pronunciation: 'kursantka', translation: 'cadet (female)' },
  { word: 'БТР', pronunciation: 'BTR', translation: 'APC (Armored Personnel Carrier)' },
  { word: 'Танк', pronunciation: 'Tank', translation: 'tank' },
  { word: 'Тарков', pronunciation: 'Tarkov', translation: 'Tarkov' },
  { word: 'Америка', pronunciation: 'Amerika', translation: 'America' },
  { word: 'американец', pronunciation: 'amerikanets', translation: 'American (male)' },
  { word: 'американка', pronunciation: 'amerikanka', translation: 'American (female)' },
  { word: 'библиотека', pronunciation: 'biblioteka', translation: 'library' },
  { word: 'больница', pronunciation: 'bol`nitsa', translation: 'hospital' },
  { word: 'буква', pronunciation: 'bukva', translation: 'letter (of the alphabet)' },
  { word: 'врач', pronunciation: 'vrach', translation: 'doctor' },
  { word: 'где?', pronunciation: 'gde?', translation: 'where?' },
  { word: 'говорить', pronunciation: 'govorit', translation: 'to speak' },
  { word: 'город', pronunciation: 'gorod', translation: 'city' },
  { word: 'друг', pronunciation: 'drug', translation: 'friend (male)' },
  { word: 'жить', pronunciation: 'zhit', translation: 'to live' },
  { word: 'звук', pronunciation: 'zvuk', translation: 'sound' },
  { word: 'игра', pronunciation: 'igra', translation: 'game' },
  { word: 'карандаш', pronunciation: 'karandash', translation: 'pencil' },
  { word: 'медсестра', pronunciation: 'medsestra', translation: 'nurse' },
  { word: 'музей', pronunciation: 'muzei', translation: 'museum' },
  { word: 'музыкант', pronunciation: 'muzykant', translation: 'musician' },
  { word: 'неплохо', pronunciation: 'neplokho', translation: 'not bad' },
  { word: 'парк', pronunciation: 'park', translation: 'park' },
  { word: 'письмо', pronunciation: 'pismo', translation: 'letter' },
  { word: 'плохо', pronunciation: 'ploho', translation: 'bad' },
  { word: 'по-английски', pronunciation: 'po-angliyski', translation: 'in English' },
  { word: 'подруга', pronunciation: 'podruga', translation: 'female friend' },
  { word: 'по-русски', pronunciation: 'po-russki', translation: 'in Russian' },
  { word: 'профессор', pronunciation: 'professor', translation: 'professor' },
  { word: 'работать', pronunciation: 'rabotat', translation: 'to work' },
  { word: 'разговор', pronunciation: 'razgovor', translation: 'conversation' },
  { word: 'ресторан', pronunciation: 'restoran', translation: 'restaurant' },
  { word: 'русская', pronunciation: 'russkaya', translation: 'Russian (female)' },
  { word: 'русский', pronunciation: 'russkiy', translation: 'Russian (male)' },
  { word: 'словарь', pronunciation: 'slovar', translation: 'dictionary' },
  { word: 'слово', pronunciation: 'slovo', translation: 'word' },
  { word: 'университет', pronunciation: 'universitet', translation: 'university' },
  { word: 'учительница', pronunciation: 'uchitelnitsa', translation: 'teacher (female)' },
  { word: 'учиться', pronunciation: 'uchit`sya', translation: 'to study' },
  { word: 'фирма', pronunciation: 'firma', translation: 'company' },
  { word: 'центр', pronunciation: 'tsentr', translation: 'center' },
  { word: 'школа', pronunciation: 'shkola', translation: 'school' },
  { word: 'экономист', pronunciation: 'ekonomist', translation: 'economist' },
  { word: 'юрист', pronunciation: 'yurist', translation: 'lawyer' },
  { word: 'спасибо', pronunciation: 'spasibo', translation: 'thank you' },
  { word: 'один', pronunciation: 'odin', translation: 'one' },
  { word: 'два', pronunciation: 'dva', translation: 'two' },
  { word: 'три', pronunciation: 'tri', translation: 'three' },
  { word: 'четыре', pronunciation: 'chetyre', translation: 'four' },
  { word: 'пять', pronunciation: 'pyat', translation: 'five' },
  { word: 'шесть', pronunciation: 'shest', translation: 'six' },
  { word: 'семь', pronunciation: 'sem', translation: 'seven' },
  { word: 'восемь', pronunciation: 'vosem', translation: 'eight' },
  { word: 'девять', pronunciation: 'devyat', translation: 'nine' },
  { word: 'десять', pronunciation: 'desyat', translation: 'ten' },
  { word: 'военный', pronunciation: 'voennyy', translation: 'military (male)' },
  { word: 'военная', pronunciation: 'voennaya', translation: 'military (female)' },
  { word: 'казарма', pronunciation: 'kazarma', translation: 'barracks' },
  { word: 'военная академия', pronunciation: 'voennaya akademiya', translation: 'military academy' },
  { word: 'артист', pronunciation: 'artist', translation: 'artist' },
  { word: 'аспирант', pronunciation: 'aspirant', translation: 'graduate student (male)' },
  { word: 'аспирантка', pronunciation: 'aspirantka', translation: 'graduate student (female)' },
  { word: 'вон', pronunciation: 'von', translation: 'there' },
  { word: 'вот', pronunciation: 'vot', translation: 'here' },
  { word: 'или', pronunciation: 'ili', translation: 'or' },
  { word: 'какое', pronunciation: 'kakoe', translation: 'which' },
  { word: 'моё', pronunciation: 'moyo', translation: 'my (neuter)' },
  { word: 'они', pronunciation: 'oni', translation: 'they' },
  { word: 'твоё', pronunciation: 'tvoyo', translation: 'your (neuter)' },
  { word: 'театр', pronunciation: 'teatr', translation: 'theater' },
  { word: 'твоя', pronunciation: 'tvoya', translation: 'your (feminine)' },
];
