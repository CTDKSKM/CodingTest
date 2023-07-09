function solution(id_pw, db) {
    const [id, pw] = id_pw
    const idCheck = db.filter(user=>user[0]===id)
    if (idCheck.length) {
        if (idCheck.filter(user=>user[1]===pw).length) return "login"
        return "wrong pw"
    }
    return "fail"
}