import { quickSort } from './quickSort' // Импортируем твою функцию quickSort

// Вспомогательная функция для генерации массива объектов с случайными id
function generateRandomArrayOfObjects(size: number): { id: number }[] {
  return Array.from({ length: size }, () => ({
    id: Math.floor(Math.random() * 10000),
  }))
}

describe('QuickSort Algorithm for Objects', () => {
  test('должен корректно сортировать массив из 100 объектов по ключу id', () => {
    const arr = generateRandomArrayOfObjects(100)
    const sortedArr = quickSort(arr)
    const expectedArr = [...arr].sort((a, b) => a.id - b.id)
    expect(sortedArr).toEqual(expectedArr)
  })

  test('должен корректно сортировать массив из 500 объектов по ключу id', () => {
    const arr = generateRandomArrayOfObjects(500)
    const sortedArr = quickSort(arr)
    const expectedArr = [...arr].sort((a, b) => a.id - b.id)
    expect(sortedArr).toEqual(expectedArr)
  })

  test('должен корректно сортировать массив из 1000 объектов по ключу id', () => {
    const arr = generateRandomArrayOfObjects(1000)
    const sortedArr = quickSort(arr)
    const expectedArr = [...arr].sort((a, b) => a.id - b.id)
    expect(sortedArr).toEqual(expectedArr)
  })

  test('должен оставлять уже отсортированный по id массив без изменений', () => {
    const arr = Array.from({ length: 100 }, (_, i) => ({ id: i + 1 })) // Массив [{id: 1}, {id: 2}, ..., {id: 100}]
    const sortedArr = quickSort(arr)
    expect(sortedArr).toEqual(arr) // Уже отсортированный массив не должен измениться
  })

  test('должен корректно сортировать массив, отсортированный по убыванию id', () => {
    const arr = Array.from({ length: 100 }, (_, i) => ({ id: 100 - i })) // Массив [{id: 100}, {id: 99}, ..., {id: 1}]
    const sortedArr = quickSort(arr)
    const expectedArr = arr.reverse() // Проверяем, что массив отсортирован по возрастанию
    expect(sortedArr).toEqual(expectedArr)
  })
})
