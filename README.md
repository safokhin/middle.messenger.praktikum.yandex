## Описание проекта

Проект представляет собой мессенджер, позволяющий обмениваться текстом, видеосообщениями, фотографиями, файлами и другими форматами данных.
<br />
Проект разработан на JavaScript с использованием Handelbars, в качестве шаблонизатора. PostCSS - в качестве трансформатора CSS.

## Дизайн

Ссылка на макет:
https://www.figma.com/file/gdBUWwKjPBJHBncHnQn7YH/Untitled?node-id=0%3A1

## Ссылка на приложение (netlify)

https://infallible-bhaskara-6379cb.netlify.app/

## Ссылка на pull request sprint_2

https://github.com/safokhin/middle.messenger.praktikum.yandex/pull/4

## Описание структуры

В static лежит index.html и иконки
В components - верстка всех страничек + верстка отдельных компонентов
В style - подключение стилей + переменные + глобальные стили
page используется, как роутинг между шаблонами. Весь роутинг лежит в index.js. Обрабатывается с помощью глобальной функции, которая привязана к необходимым кнопкам.

## Описание команд для запуска scripts

- `npm install (yarn install)` - установка стабильной версии,
- `npm start (yarn start)` — запуск версии для разработчика (3000 порт)
- `npm run build (yarn run build)` — сборка стабильной версии.
- `npm deploy (yarn deploy)` — сборка стабильной версии для deploy.

> > > > > > > sprint_1
