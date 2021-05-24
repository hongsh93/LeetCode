class Solution:
    def numDecodings(self, s: str) -> int:
        cache = {}
        def fibonaci(n):
            #print(n)
            if n <= 1:
                return 1
            elif n == 2:
                return 2
            else:
                ### 이 부분이 포인트입니다! cache라는 메모리 변수를 이용하는 것이죠!
                if n in cache:
                    return cache[n]
                ### 리턴하기 전에 반드시 메모리에 기록하고 리턴해야합니다!
                cache[n] = fibonaci(n-1) + fibonaci(n-2)
                return cache[n]
            
        def decode(s1):
            if (len(s1) >= 1):
                if (s1[0] == "0"):
                    return 0
            for i in range(len(s1)):
                #print(i, s1[i])
                if s1[i] != "1" and s1[i] != "2":
                    if s1[i-1] == "2":
                        if s1[i] >= "7":
                            return fibonaci(int(i)) * decode(s1[i+1:])
                    if s1[i] != "0":
                        return fibonaci(int(i+1)) * decode(s1[i+1:])
                    else:
                        return fibonaci(int(i-1)) * decode(s1[i+1:])
                if int(i) == len(s1)-1:
                    return fibonaci(len(s1))
            
            return 1
        
        temp = ""
        i=0
        while i<len(s):
            if s[i] == "1" or s[i] == "2":
                temp += s[i]
                if len(s) > i+1 and s[i+1] >="3":
                    temp += s[i+1]
                    i += 1
            elif s[i] == "0":
                temp += s[i]
            i += 1
        #print(temp)
        return decode(temp)
        