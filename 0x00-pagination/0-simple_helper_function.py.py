#!/usr/bin/env python3
"""Pagination helper function
"""

from typing import Tuple


def index_range(page: int, page_size: int) -> tuple[int, int]:
    """return start and end of index"""
    starting = (page - 1) * page_size
    end = starting + page_size

    return (starting, end)
