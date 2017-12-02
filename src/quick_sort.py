from random import randint


def out_of_place(sample):
    if len(sample) < 2:
        return sample

    pivot = sample[randint(0, len(sample) - 1)]

    less, greater, equal = [[] for _ in range(3)]

    for item in sample:
        if item < pivot:
            less.append(item)
        elif item > pivot:
            greater.append(item)
        else:
            equal.append(item)

    return out_of_place(less) + equal + out_of_place(greater)


def flip(sample, l, r):
    sample[l], sample[r] = sample[r], sample[l]


def in_place(sample, left=0, right=None):
    l = left
    r = right if right is not None else len(sample) - 1
    e = r + 1
    if r - l < 1:
        return sample

    pivot = sample[randint(l, r)]

    while (l <= r):
        if pivot in [sample[l], sample[r]]:
            if sample[l] == pivot:
                flip(sample, l, r)
            flip(sample, r, e - 1)
            e -= 1
            r -= 1
        elif sample[l] > pivot and sample[r] < pivot:
            flip(sample, l, r)
            l += 1
            r -= 1
        elif sample[l] > pivot:
            r -= 1
        else:
            l += 1

    end_position = right + 1 if right is not None else len(sample)

    for f in range(e, end_position):
        flip(sample, f - (e - l), f)

    in_place(sample, left, l - 1)
    in_place(sample, l + end_position - e, end_position - 1)

    return sample
