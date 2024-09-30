export function quickSort<T extends { id: number }>(arr: T[]): T[] {
  if (arr.length <= 1) {
    return arr
  }

  const pivot = arr[Math.floor(arr.length / 2)]
  const left: T[] = []
  const right: T[] = []

  for (let i = 0; i < arr.length; i++) {
    if (i === Math.floor(arr.length / 2)) continue
    if (arr[i].id < pivot.id) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}
