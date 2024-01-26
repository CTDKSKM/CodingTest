const solution = (user_id, banned_id) => {
  return numberOfCases(
    getUsedIdObject(user_id),
    new Set(),
    0,
    getBannedList(user_id, banned_id),
    []
  );
};

const isPossible = (user_id, banned_id) => {
  if (user_id.length != banned_id.length) return false;
  for (let i = 0; i < user_id.length; i++) {
    if (banned_id[i] != "*" && user_id[i] != banned_id[i]) return false;
  }
  return true;
};

const getBannedList = (user_id, banned_id) => {
  return banned_id.reduce((bannnedList, banned) => {
    return bannnedList.concat([
      user_id.reduce((userList, user) => {
        return isPossible(user, banned) ? [...userList, user] : userList;
      }, []),
    ]);
  }, []);
};

const getUsedIdObject = (user_id) => {
  return user_id.reduce((obj, id) => {
    obj[id] = obj[id] || false;
    return obj;
  }, {});
};

function numberOfCases(isUsed, banneds, index, banned_id, id) {
  if (id.length == banned_id.length) {
    banneds.add(id.sort().join(""));
    return;
  }
  for (let i = index; i < banned_id.length; i++) {
    for (let j = 0; j < banned_id[i].length; j++) {
      const banned = banned_id[i][j];
      if (isUsed[banned]) continue;
      id.push(banned);
      isUsed[banned] = true;
      numberOfCases({ ...isUsed }, banneds, i + 1, banned_id, [...id]);
      isUsed[banned] = false;
      id.pop();
    }
  }

  return [...banneds].length;
}