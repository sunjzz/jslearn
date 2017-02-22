/**
 * Created by Tony on 2017/2/20.
 */
/**
 * 验证数据是否为空
 * @param eleId  表示要操作的组件的ID名称
 */

function validateEmpty(eleId) {
    var obj = ele(eleId); //取得指定对象
    if (obj != null) { //表示对象已经取得
        if (obj.value == "") {
            setFailure(obj);
            return false;
        } else {
            setSuccess(obj);
            return true;
        }
    }
    return false;
}

/**
 * 根据id取得一个具体的对象，简化调用的难度
 * @param eleId
 */
function ele(eleId) {
    return document.getElementById(eleId);
}

/**
 * 设置错误显示信息
 * @param obj 要进行错误样式的信息
 * @param className 样式名称
 * @param text 显示文本信息
 */
function setValidateStyle(obj, className, text) {
    var objSpan = ele(obj.id + "Span"); //根据对象的id属性找到span
    obj.className = className;
    if (objSpan != null) {
        objSpan.innerHTML = text;
    }
}

function setSuccess(obj) {
    setValidateStyle(obj, "success", "<font color= 'green'>√</font>");
}

function setFailure(obj) {
    setValidateStyle(obj, "failure", "<font color= 'red'>×</font>");
}

/**
 * 使用正则验证
 * @param eleId
 * @param regex
 */
function validateRegex(eleId,regex) {
    if (validateEmpty(eleId)) {
        if (!regex.test(ele(eleId).value)) {
            console.log(regex.test(ele(eleId).value));
            setFailure(ele(eleId));
            return false;
        } else {
            setSuccess(ele(eleId));
            return true;
        }
    }
    return false;
}

function validateNumber(eleId) {
    return validateRegex(eleId, /^\d+(\.\d+)?$/);
    
}

function bind(obj, type, fun) {
    obj.addEventListener(type, fun, false);
}