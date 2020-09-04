//我们项目需要一个弹窗，弹窗有几种：消息型弹窗，确认型弹窗，取消型弹窗，他们的颜色和内容可能是不一样的。
function popup(type, content, color) {
    if (this instanceof popup) {
        return new this[type](content, color)
    } else {
        return new popup(type, content, color)
    }

}
popup.prototype.infoPopup = function (content, color) { console.log('消息型弹窗', content, color) }
popup.prototype.confirmPopup = function (content, color) { console.log('确认型弹窗', content, color) }
popup.prototype.cancelPopup = function (content, color) { console.log('取消型弹窗', content, color) }

var a=popup('infoPopup',23,23)