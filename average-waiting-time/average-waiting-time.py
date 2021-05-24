from collections import deque
class Solution:
    def averageWaitingTime(self, customers: List[List[int]]) -> float:
        ans = 0
        if len(customers) > 0:
            queue = deque([customers[0][1]])
            i=1
        while (len(queue) > 0 or i<len(customers)):
            #print(i, ans, queue)
            if i<len(customers):
                deltatime = customers[i][0] - customers[i-1][0]
                while (deltatime > 0):
                    #print(deltatime, ans, queue[0])
                    if len(queue)> 0:
                        if queue[0] <= deltatime:
                            ans += len(queue)*queue[0]
                            deltatime -= queue[0]
                            queue.popleft()
                        else:
                            ans += len(queue)*deltatime
                            queue[0] -= deltatime
                            deltatime = 0
                    else:
                         break
                queue.append(customers[i][1])
                i += 1
            else:
                while len(queue) > 0:
                    ans += len(queue) * queue[0]
                    queue.popleft()
            
        return ans/len(customers)
            