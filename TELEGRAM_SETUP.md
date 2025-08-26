# 🚀 Настройка Telegram бота для формы обратной связи

## 📋 Что нужно сделать:

### 1. Создать Telegram бота

1. Напишите [@BotFather](https://t.me/botfather) в Telegram
2. Отправьте команду `/newbot`
3. Следуйте инструкциям для создания бота
4. Сохраните полученный токен бота

### 2. Получить Chat ID

1. Добавьте бота в нужный чат/канал
2. Отправьте любое сообщение в чат
3. Перейдите по ссылке: `https://api.telegram.org/bot<BOT_TOKEN>/getUpdates`
4. Найдите `chat.id` в ответе

### 3. Создать файл .env.local

Создайте файл `.env.local` в корне проекта:

```bash
# Telegram Bot Configuration
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
NEXT_PUBLIC_TELEGRAM_CHAT_ID=-1001234567890
```

### 4. Перезапустить сервер

```bash
npm run dev
# или
pnpm dev
```

## 🔧 Пример настройки:

```bash
# .env.local
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=5555666677:AAHxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_TELEGRAM_CHAT_ID=-1001234567890
```

## ✅ Проверка работы:

1. Заполните форму на сайте
2. Нажмите "Отправить заявку"
3. Проверьте, что сообщение пришло в Telegram

## 🚨 Важно:

- Токен бота должен быть публичным (NEXT*PUBLIC*)
- Chat ID может быть отрицательным для групп/каналов
- Бот должен быть добавлен в чат/канал
- У бота должны быть права на отправку сообщений

## 🆘 Если не работает:

1. Проверьте токен бота
2. Проверьте Chat ID
3. Убедитесь, что бот добавлен в чат
4. Проверьте консоль браузера на ошибки
5. Проверьте Network tab в DevTools
