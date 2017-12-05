"""Ensure that matrix rotations do their"""
from random import randint

import pytest

from algorithms.src.rotation import out_of_place, in_place

rotators = [out_of_place, in_place]


@pytest.fixture
def small():
    return [[1, 2], [3, 4]]


@pytest.fixture
def medium():
    return [
        [1,  2,  3,  4,  5],
        [6,  7,  8,  9,  10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25]
    ]


def test_small(small):
    for func in rotators:
        assert func(small) == [[3, 1], [4, 2]]


def test_medium(medium):
    result = [
        [21, 16, 11, 6, 1],
        [22, 17, 12, 7, 2],
        [23, 18, 13, 8, 3],
        [24, 19, 14, 9, 4],
        [25, 20, 15, 10, 5]
    ]
    for func in rotators:
        assert func(medium) == result


def test_large():
    sample = [[randint(-100, 100) for _ in range(100)] for _ in range(100)]
    for func in rotators:
        test = [[i for i in row] for row in sample]
        for _ in range(4):
            test = func(test)

        assert sample == test
