"""Merge sort is a standard nlogn sort performed by recursively partitioning
the input array and merging the results."""


def out_of_place(sample):
    if len(sample) < 2:
        return sample

    pivot = len(sample) // 2
    left, right = map(out_of_place, [sample[:pivot], sample[pivot:]])
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


def in_place(sample):
    alt = [s for s in sample]
    return in_place_merge(alt, sample, 0, len(sample))


def in_place_merge(sample, alt, left, right):
    if right - left < 2:
        return sample

    pivot = (right - left) // 2 + left
    in_place_merge(alt, sample, left, pivot)
    in_place_merge(alt, sample, pivot, right)

    l, r = left, pivot
    for c in range(left, right):
        if l < pivot and (r >= right or sample[l] <= sample[r]):
            alt[c] = sample[l]
            l += 1
        else:
            alt[c] = sample[r]
            r += 1

    return alt
