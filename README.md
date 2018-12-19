# 專案架構

# 紀錄

## sass 結構
  - version : 
  - 紀錄事項 :

## pug 結構
  - version : 
  - 紀錄事項 :

## js 結構
  - version : 
  - 紀錄事項 :


## gulpfile.js 結構
  - version : 
  - 紀錄事項 :

## vue.js 架構
  - version : 
  - 紀錄事項 :


## webpack 說明

webpack在執行編譯的時候有所謂的production狀態跟development狀態：

webpack4預設是production，所以在不設定mode的情況下watch會執行production狀態，但是這樣不太好，因為開發中的時候你每次執行watch就除了幫你編譯還執行的壓縮跟優化，太消耗資源，而且會佔太多電腦記憶體，所以我們會在執行npm script的時候要加上
`“watch”: “webpack --watch --mode development”`


##  package.json

dependencies字段指定了項目運行所依賴的模塊，devDependencies指定項目開發所需要的模塊。