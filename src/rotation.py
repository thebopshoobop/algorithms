"Rotate matrices!"


def out_of_place(arr):
    l = len(arr)
    output = [[None for _ in range(l)] for _ in range(l)]

    for x, row in enumerate(arr):
        for y, cell in enumerate(row):
            output[y][l - 1 - x] = cell

    return output


def in_place(arr):
    l = len(arr)
    o = l - 1

    for x in range(l):
        for y in range(0, l - x):
            arr[x][y], arr[o - y][o - x] = arr[o - y][o - x], arr[x][y]

    for i in range(l // 2):
        arr[i], arr[o - i] = arr[o - i], arr[i]

    return arr
