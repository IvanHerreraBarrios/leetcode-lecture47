var findingUsersActiveMinutes = function(logs, k) {
    const users = groupActionByUser(logs)
    const uams = groupByActiveMinutes(users)

    const result = []
    for(let i=0; i < k; i++){
        result.push(uams[i+1] || 0)
    }  
    return result
};

function groupActionByUser(logs){
    const users = {}
    for(log of logs){
        const [id, time] = log
        if(users[id]){
            users[id].add(time)
        } else {
            users[id] = new Set([time])
        }
    }
    return users
}

function groupByActiveMinutes(users){
    const uams = {}
    for(id in users){
        const length = users[id].size
        if(uams[length]){
            uams[length]++
        } else {
            uams[length] = 1
        }
    }
    return uams
}