import {findUser} from "../dao/index.js"

export default function (app) {
    app.get('/test', (req, res) => {
        findUser(res)
    })
}