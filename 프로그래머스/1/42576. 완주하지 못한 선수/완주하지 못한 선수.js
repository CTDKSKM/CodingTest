const solution = (participant, completion) => participant.find(name=>!completion[name]--,completion.map(name=>completion[name]=(completion[name]|0)+1))