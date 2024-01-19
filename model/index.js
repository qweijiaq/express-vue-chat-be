import mongoose from "mongoose"
import db from '../config/db.js'

const Schema = mongoose.Schema

// 用户表
const UserSchema = new Schema({
    username: { type: String}, // 用户名
    password: { type: String}, // 密码
    email: { type: String}, // 邮箱
    sex: { type: String, default: 'asexual'}, // 性别 - 默认为中性（未知）
    birthday: { type: Date}, // 生日
    phone: {type: String},
    sign: { type: String}, // 个性签名
    imgUrl: { type: String, default: 'user.png'}, // 头像
    register: {type: Date} // 注册时间
})

// 好友表
const FriendSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User'}, // 用户 id
    friendId: { type: Schema.Types.ObjectId, ref: 'User'}, // 好友 id
    state: { type: Number}, // 好友状态(0 已经为好友, 1 申请接受方,尚未同意 2 申请发送方,对方尚未同意)
    time: { type: Date}, // 成为好友的时间
})

// 单聊消息表
const MessageSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User'}, // 用户 id
    friendId: { type: Schema.Types.ObjectId, ref: 'User'}, // 好友 id
    content: {type: String}, // 内容
    type: {type: String}, // 类型
    time: {type: Date}, // 生成时间
    state: {type: Number} // 消息状态(0 未读 1 已读)
})

// 群表
const GroupSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User'}, // 用户 id
    name: {type: String}, // 群名称
    imgUrl: { type: String, default: 'group.png'}, // 群头像
    time: {type: Date}, // 建群时间
    notice: {type: String} // 群公告
})

// 群成员表
const MemberSchema = new Schema({
    groupId: { type: Schema.Types.ObjectId, ref: 'Group'}, // 群 id
    userId: { type: Schema.Types.ObjectId, ref: 'User'}, // 用户 id
    nickname: {type: String}, // 群内昵称
    tip: {type: Number, default: 0}, //未读消息数
    time: { type: Date}, // 加群时间
    shield: {type: Number} // 是否屏蔽群消息(0 不屏蔽 1 屏蔽)

})

// 群聊消息表
const GroupMsgSchema = new Schema({
    groupId: { type: Schema.Types.ObjectId, ref: 'Group'}, // 群 id
    userId: { type: Schema.Types.ObjectId, ref: 'User'}, // 用户 id
    content: {type: String}, // 内容
    type: {type: String}, // 类型
    time: {type: Date}, // 生成时间
})

export const userModel = db.model('User', UserSchema)
export const friendModel = db.model('Friend', FriendSchema)
export const messageModel = db.model('message', MessageSchema)
export const groupModel = db.model('Group', GroupSchema)
export const memberModel = db.model('Member', MemberSchema)
export const groupMsgModel = db.model('GroupMsg', GroupMsgSchema)