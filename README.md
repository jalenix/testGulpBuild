# Сборка gulp
С помощью этого проекта вы сможете быстро настроить сборку вашего проекта на Gulp.

## Структура каталогов для размещения файлов:
>./src/style/\*/\*/\*.less  
>./src/script/\*/\*/\*.js

# Функционал сборки:
Минификация HTML
Компиляция препроцессоров LESS, SASS
Минификация CSS
Автоматическое добавление префиксов CSS
Преобразование кода ECMAScript2015+ в обратно совместимую версию Java Script с помощью Babel
Минификация Java Script
Объединение нескольких файлов Java Script в один
Сжатие изображении
Отслеживание новых изображении, которые еще не были сжаты 
Отслеживание изменеии в файлах и автоматический запуск повторной обработки
Генерация sourcemaps
Отображение размеров файлов в терминале
Локальный сервер с автоматическим обновлением страницы при изменении файлов

# Инструкция:
1. Скачать все файлы в любую директорию
2. Ввести в терминале команду: npm i (должен быть установлен node.js)
3. Создать каталоги и файлы
4. Выполнить команду gulp (запуск таска default)
5. Писать свой код

# Установленные npm пакеты: 
[gulp](https://www.npmjs.com/package/gulp) Сборщик gulp
[gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin) Минификация HTML файла
[gulp-less](https://www.npmjs.com/package/gulp-less) Компиляция Less файлов
[sass](https://www.npmjs.com/package/sass) Компилятор sass
[gulp-sass](https://www.npmjs.com/package/gulp-sass) Компиляция sass и scss файлов
[gulp-uglify](https://www.npmjs.com/package/gulp-uglify) Сжатие и оптимизация java script кода
[gulp-babel](https://www.npmjs.com/package/gulp-babel) Преобразует java script в старый стандарт
[babel/core](https://www.npmjs.com/package/@babel/core) Ядро babel
[babel/present-env](https://www.npmjs.com/package/@babel/preset-env) Пресет для компиляции babel
[gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) Минификация и оптимизация css файлов
[del](https://www.npmjs.com/package/del) Удаление каталогов и файлов
[gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) Карта строк кода для инструментов разработчика 
[gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) Автоматические добавление префиксов в css
[gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) Сжатие изображении
[gulp-concat](https://www.npmjs.com/package/gulp-concat) Объединение нескольких файлов в один
[gulp-newer](https://www.npmjs.com/package/gulp-newer) Отслеживание только новых файлов
[gulp-rename](https://www.npmjs.com/package/gulp-rename) Переменовывает файлы
[gulp-size](https://www.npmjs.com/package/gulp-size) Отобржание размера файлов в терминале
[browser-sync](https://browsersync.io/docs/gulp) Автоматическое обновление сайта при изменении файлов
