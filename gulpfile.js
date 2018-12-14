var gulp = require('gulp');
var prompt = require("gulp-prompt");





//樣式 sass style
// var styles = require('./gulp/scripts/style.js');
var styles = require('./gulp/scripts/stylus.js');



// 刷新瀏覽器並同步
var browerSync = require('./gulp/task/browerSync.js');
// 選擇 1.html 使用app/html   2.pug 使用app/pug  3. all 使用全部
var selectMoudule = new browerSync('pug') // html or pug or all



//打包

var build = require('./gulp/scripts/copy_dist.js');
// var build = require('./gulp/scripts/connect-php.js');


//壓縮




//==================
// 執行指令
//==================


// 一般開發
// gulp.task('default', ['styles', 'static', 'libs']);
// gulp.task('common', ['styles', 'static']);

//server 專案
gulp.task('server', ['styles', 'connect-sync']);

//打包專案
gulp.task('build', ['dist']);
//壓縮專案

//清除檔案

// gulp.task('clear', ['clean']);

//test function
// gulp.task('test', ['styles']);





gulp.task('selecttask', function () {
    
    //三種模式用變數帶出來    
    var  task_mission = ['all' , 'dev' , 'clear' , 'style' ,'stylus']

    return gulp.src('./gulpfile.js')
        .pipe(prompt.prompt({
            type: 'checkbox',
            name: 'task',
            message: '你想執行那個任務？（ 請按空白鍵選擇 ）',
            choices: task_mission
        }, function (res) {
            var selectedTask = res.task;
            gulp.start(selectedTask);
            // console.log('選中:', res);
        }));
});

// 執行模式  會相對應上方的task_mission 變數
gulp.task('all', ['sass', 'static', 'libs']);
gulp.task('dev', ['sass', 'static']);
gulp.task('clear', ['clean']);
gulp.task('style', ['sass' , 'watch']);
gulp.task('stylus', ['stylus_follow']);

//執行
gulp.task('default', ['selecttask']);



// gulp.task('pugs', ['compilePug']);








//搬家
