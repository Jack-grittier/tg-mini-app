#!/bin/bash

# Чтение переменных из .env файла
source .env

# Убираем кавычки и разделяем по запятым
TELEGRAM_CHAT_IDS_CLEAN=$(echo $TELEGRAM_CHAT_IDS | tr -d '[]"')

# Функция для отправки уведомления в Telegram
send_message() {
    for chat_id in $(echo $TELEGRAM_CHAT_IDS_CLEAN | tr ',' ' '); do
        curl -s -X POST "https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/sendMessage" \
        -d chat_id="$chat_id" \
        -d text="$1" > /dev/null
    done
}

# Если передан флаг успеха, отправляем сообщение о успешном деплое
if [ "$1" == "success" ]; then
    send_message "✅ Деплой прошел успешно! Ваше приложение доступно по ссылке: https://your-app-url.com"
else
    # Если деплой не успешен, отправляем сообщение о неудаче
    send_message "❌ Деплой не удался. Проверьте логи для выяснения причины."
fi
