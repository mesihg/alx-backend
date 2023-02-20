#!/usr/bin/env python3
"""Task 0 module"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """ Return index range from a start index and an end index """
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)
