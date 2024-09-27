import { binarySearch, ModeBinarySearch } from './binarySearch'

describe('Binary Search Function', () => {
  const arr = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ]

  // Тесты для случаев, когда элемент найден
  test('должен найти элемент с id = 1 и вернуть сам элемент', () => {
    const result = binarySearch(arr, 1)
    expect(result).toEqual({ id: 1, name: 'Alice' })
  })

  test('должен найти элемент с id = 2 и вернуть индекс', () => {
    const result = binarySearch(arr, 2, ModeBinarySearch.index)
    expect(result).toBe(1)
  })

  test('должен найти элемент с id = 3 и вернуть сам элемент', () => {
    const result = binarySearch(arr, 3)
    expect(result).toEqual({ id: 3, name: 'Charlie' })
  })

  // Тесты для случаев, когда элемента нет
  test('должен вернуть null, если элемента с id = 100 нет', () => {
    const result = binarySearch(arr, 100)
    expect(result).toBeNull()
  })

  test('должен вернуть null, если элемента с id = -1 нет', () => {
    const result = binarySearch(arr, -1)
    expect(result).toBeNull()
  })

  test('должен вернуть null, если элемента с id = 9999 нет', () => {
    const result = binarySearch(arr, 9999)
    expect(result).toBeNull()
  })
})
