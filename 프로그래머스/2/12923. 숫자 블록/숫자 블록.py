def solution(begin, end):
    answer = []
    for i in range(begin, end+1):
        temp = []
        if i==1:
            answer.append(0)
            continue
        for j in range(2,int(i**(1/2))+1):
            if i%j==0 :
                if i//j>10**7:
                    temp.append(j)
                    continue
                else:
                    answer.append(i//j)
                    break
        else:
            if len(temp) > 0:
                answer.append(temp[len(temp)-1])
            else:
                answer.append(1)
    return answer