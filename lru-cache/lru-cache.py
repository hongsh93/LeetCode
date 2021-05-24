class LRUCache:

    def __init__(self, capacity: int):
        self.size = capacity
        self.cache = {}
        self.stk = []

    def get(self, key: int) -> int:
        if (key in self.cache):
            self.stk.remove(key)
            self.stk.append(key)
            return self.cache[key]
        else:
            return -1
        

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache[key] = value
            self.stk.remove(key)
            self.stk.append(key)
        else:
            if len(self.cache) < self.size:
                self.cache[key] = value
                self.stk.append(key)
            else:
                del self.cache[self.stk[0]]
                self.stk.remove(self.stk[0])
                self.cache[key] = value
                self.stk.append(key)


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)