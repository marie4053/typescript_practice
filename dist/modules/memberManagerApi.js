"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMemberListAll = getMemberListAll;
exports.createMemberList = createMemberList;
exports.updateMemberList = updateMemberList;
exports.deleteMemberList = deleteMemberList;
const memberList = [
    /* 임시데이터 만들거면 여기에서 */
    {
        mno: 1,
        memberId: 'test12',
        password: '1234',
        name: '홍길동',
        age: 21,
        phone: '010-1234-1234',
        hobby: ['영화', '운동'],
        createdDate: new Date(),
    },
    {
        mno: 2,
        memberId: 'test34',
        password: '5688',
        name: '박길동',
        age: 31,
        phone: null,
        hobby: null,
        createdDate: new Date(),
    },
];
function getMemberListAll() {
    return memberList;
}
// export function getMemberList(no: number): Member | null {
//   return memberList;
// }
function createMemberList(newMember) {
    return true;
}
function updateMemberList(no) {
    return true;
}
function deleteMemberList() {
    return true;
}