document.addEventListener('DOMContentLoaded', function() {
    const letterY = document.querySelector('.letter-y');
    const letterI = document.querySelector('.letter-i');
    let animationComplete = false;
    
    // 监听动画结束
    letterY.addEventListener('animationend', function(e) {
        if (e.animationName === 'bounce') {
            animationComplete = true;
        }
    });
    
    // 监听点击事件
    document.addEventListener('click', function() {
        if (animationComplete) {
            // 添加固定在左上角的类
            letterY.classList.add('fixed-top');
            letterI.classList.add('fixed-top');
        }
    });
});
