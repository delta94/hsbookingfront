import { isValidDate } from 'helpers/index';

function telephoneCheck(str) {
    var isphone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(str);
    return !!isphone;
}
export const validate = (values) => {
    const error = {};
    if (values.fullname && values.fullname.length < 6)
        error.fullname = 'Họ tên phải nhiều hơn 6 ký tự';
    if (values.address && values.address.length < 6)
        error.fullname = 'Địa chỉ phải nhiều hơn 6 ký tự';
    if (values.phone && !telephoneCheck(values.phone))
        error.phone = 'Số diện thoại không hợp lệ';
    if (values.dateOfBirth && values.dateOfBirth !== 10 || !isValidDate(values.dateOfBirth)) {
        error.birthday = 'Ngày không hợp lệ';
    }
    return error;
}

export const validate2 = (values) => {
    const error = {};
    if(values.avatar === undefined)
        error.avatar = "Chưa chọn hình"
    return error;
}