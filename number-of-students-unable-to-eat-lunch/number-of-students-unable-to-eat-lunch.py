class Solution:
    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
        while len(students) > 0:
            if students[0] == sandwiches[0]:
                students = students[1:]
                sandwiches = sandwiches[1:]
            else:
                if (len(set(students)) == 1):
                    break
                else:
                    students = students[1:]+[students[0]]
        return len(students)