export enum ModeBinarySearch {
  element,
  index,
}

export function binarySearch<T extends { id: number }>(
  arr: T[],
  id: number,
  returnType: ModeBinarySearch = ModeBinarySearch.element
): T | number | null {
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const midElement = arr[mid]

    if (midElement.id === id) {
      return returnType === ModeBinarySearch.index ? mid : midElement
    } else if (midElement.id < id) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return null
}
