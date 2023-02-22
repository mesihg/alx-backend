#!/usr/bin/python3
""" FIFO caching module """
from collections import OrderedDict
from base_caching import BaseCaching


class FIFOCache(BaseCaching):
    """ Represents an object that allows storing and
        retrieving items from a dictionary
    """

    def __init__(self):
        """ Initialize the cache """
        super().__init__()
        self.cache_data = OrderedDict()

    def put(self, key, item):
        """ Add item to the cache """
        if key is None or item is None:
            return
        self.cache_data[key] = item
        if len(self.cache_data) > BaseCaching.MAX_ITEMS:
            f_key, _ = self.cache_data.popitem(False)
            print("DISCARD:", f_key)

    def get(self, key):
        """ Retrieve an item from cache """
        return self.cache_data.get(key, None)
