#!/usr/bin/python3
""" caching module """
from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """ Represents an object that allows storing and
        retrieving items from a dictionary
    """

    def put(self, key, item):
        """ Add item to the cache """
        if key is None or item is None:
            return
        self.cache_data[key] = item

    def get(self, key):
        """ Retrieve an item from cache """
        return self.cache_data.get(key, None)
