#!/usr/bin/env python3

from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """Repr an obj that allows storing and retrieving 
    items from dict"""

    def put(self, key, item):
        """adds an item in cache or return empty"""
        if key is None or item is None:
            return
        self.cache_data[key] = item

        def get(self, key):
            """Retrieves an item by key"""
            return self.cache_data.get(key, None)
