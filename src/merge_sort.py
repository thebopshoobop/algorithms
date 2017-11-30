"""Merge sort is a standard nlogn sort performed by recursively partitioning
the input array and merging the results."""

from random import randint


def merge_sort(sample):
    if len(sample) < 2:
        return sample

    pivot = randint(0, len(sample))
    left, right = map(merge_sort, [sample[:pivot], sample[pivot:]])
    l_current = r_current = 0
    l_max, r_max = map(len, [left, right])

    merged = []
    while l_current < l_max and r_current < r_max:
        if left[l_current] < right[r_current]:
            merged.append(left[l_current])
            l_current += 1
        else:
            merged.append(right[r_current])
            r_current += 1

    if l_current - l_max:
        merged.extend(left[l_current - l_max:])
    elif r_current - r_max:
        merged.extend(right[r_current - r_max:])

    return merged
