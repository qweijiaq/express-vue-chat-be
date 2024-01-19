import {userModel} from '../model/index.js'

const User = userModel.model('User')

export function findUser(res) {
    User.find((err, val) => {
        if (err) {
            console.log('用户数据查找失败: ' + err)
        } else {
            res.send(val)
        }
    })
}