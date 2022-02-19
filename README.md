## Описание проекта

Проект представляет собой мессенджер, позволяющий обмениваться текстом, видеосообщениями, фотографиями, файлами и другими форматами данных.
<br />
Проект разработан на JavaScript с использованием Handelbars, в качестве шаблонизатора. PostCSS - в качестве трансформатора CSS.

## Дизайн

Ссылка на макет:
https://www.figma.com/file/gdBUWwKjPBJHBncHnQn7YH/Untitled?node-id=0%3A1

## Ссылка на приложение (netlify)

https://infallible-bhaskara-6379cb.netlify.app/

## Ссылка на приложение (heroku)

https://safohin.herokuapp.com/

## Ссылка на pull request sprint_4

https://github.com/safokhin/middle.messenger.praktikum.yandex/pull/6

## Описание структуры

В static лежит index.html и иконки
В components - верстка всех страничек + верстка отдельных компонентов
В style - подключение стилей + переменные + глобальные стили
page используется, как роутинг между шаблонами. Весь роутинг лежит в index.ts. Обрабатывается с помощью функции, которая привязана к необходимым кнопкам.

### Sprint_2

В util добавлен новый файл для валидирования полей форм.
Формы поддерживают валидацию
В modules добавлены Block и EventBus
Все компоненты реализованы с помощью блока и Event Bus
В service добавлен функционал для работы с запросами

### Sprint_3

Добавлен роутинг в проект.
Добавлены HTTP API чатов, авторизации и пользователей.
Подключены WebSocket для работы с real-time сообщениями.
Тесты роутера, компонента, модуля отправки запросов

## Описание команд для запуска scripts

- `npm install (yarn install)` - установка стабильной версии,
- `npm start (yarn start)` — запуск версии для разработчика (3000 порт)
- `npm run build (yarn run build)` — сборка стабильной версии.
- `npm deploy (yarn deploy)` — сборка стабильной версии для deploy.
- `npm linter (yarn linter)` — запуск линтера.
- `npm test (yarn test)` — запуск тестов.
