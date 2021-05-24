class Solution:
    def groupThePeople(self, groupSizes: List[int]) -> List[List[int]]:
        temp = {}
        ans = []
        for i in range(0, len(groupSizes)):
            if not groupSizes[i] in temp:
                temp[groupSizes[i]] = []
            temp[groupSizes[i]].append(i)
        for (key, value) in temp.items():
            print (key, value)
            if len(value) > key:
                for l in list(divide_list(value, int(key))):
                    print(l)
                    ans.append(l)
            else:
                ans.append(value)
        return ans
    
def divide_list(l, n): 
    # 리스트 l의 길이가 n이면 계속 반복
    for i in range(0, len(l), n): 
        yield l[i:i + n] 