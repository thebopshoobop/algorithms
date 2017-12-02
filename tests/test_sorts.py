"""Ensure that sort functions handle reasonably large test cases including
random, sorted, reversed, and identical data"""

from random import randint

import pytest

from algorithms.src.merge_sort import merge_sort
import algorithms.src.quick_sort as quick_sort

sorts = [merge_sort, quick_sort.out_of_place, quick_sort.in_place]


@pytest.fixture
def random_sample():
    return [randint(-100, 100) for _ in range(100)]


@pytest.fixture
def sorted_sample(random_sample):
    return list(sorted(random_sample))


@pytest.fixture
def reversed_sample(random_sample):
    return list(reversed(sorted(random_sample)))


@pytest.fixture
def identical_sample():
    sample = randint(-100, 100)
    return [sample for _ in range(100)]


def test_simple_sort():
    input = [1, 5, 2, 5, 7, 3]
    output = [1, 2, 3, 5, 5, 7]

    for sort_func in sorts:
        assert sort_func(input) == output


def test_large_random_sample(random_sample):
    result = sorted(random_sample)

    for sort_func in sorts:
        assert sort_func(random_sample) == result


def test_large_sorted_sample(sorted_sample):
    for sort_func in sorts:
        assert sort_func([s for s in sorted_sample]) == sorted_sample


def test_large_reversed_sample(reversed_sample):
    result = sorted(reversed_sample)

    for sort_func in sorts:
        assert sort_func(reversed_sample) == result


def test_large_identical_sample(identical_sample):
    for sort_func in sorts:
        assert sort_func([i for i in identical_sample]) == identical_sample
