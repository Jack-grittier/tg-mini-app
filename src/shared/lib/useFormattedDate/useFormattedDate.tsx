import { useMemo } from 'react'

type Formats = 'FULL_DATE' | 'MEDIUM_DATE' | 'FULL_TIME'

// Определяем возможные форматы для удобства
const FORMATS: { [key in Formats]: Intl.DateTimeFormatOptions } = {
  FULL_DATE: {
    weekday: 'long', // Понедельник, вторник...
    year: 'numeric',
    month: 'long', // Октябрь
    day: 'numeric', // 7
  },
  MEDIUM_DATE: {
    year: 'numeric',
    month: 'short', // Oct
    day: 'numeric',
  },
  FULL_TIME: {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true, // Опция для отображения AM/PM для тех, кто использует 12-часовой формат
  },
}

// Тип для опций форматирования
interface DateOptions extends Intl.DateTimeFormatOptions {
  locale?: string // Локаль пользователя
  format?: keyof typeof FORMATS // Предустановленные форматы
}

export const useFormattedDate = (date: Date, options?: DateOptions) => {
  const formattedDate = useMemo(() => {
    // Используем переданные опции или берем локаль и временную зону по умолчанию
    const locale = options?.locale || navigator.language || 'en-US'
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

    // Опции по умолчанию для форматирования даты
    const defaultOptions: Intl.DateTimeFormatOptions = {
      timeZone: timezone,
    }

    // Берем формат из предустановленных или применяем пользовательские опции
    const finalOptions: Intl.DateTimeFormatOptions = {
      ...defaultOptions,
      ...(options && options.format ? FORMATS[options.format] : options),
    }

    return new Intl.DateTimeFormat(locale, finalOptions).format(date)
  }, [date, options])

  return formattedDate
}
