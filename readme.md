# Nodejs - 微服務練習
在 node.js 執行環境運行一個簡單的微服務架構，讓客戶端可以寄發信件與檢視寄件紀錄。

## 專案架構
![image](/readme/project-structure.png)

## 服務說明
客戶端透過 graphql 介面創建 email 內容後，API gateway 將透過微服務達成：
1. 將 email 內容送往 databse_service 儲存，以供下次查詢
2. 將內容送往 RabbitMQ 列隊。待 mailing_service 訂閱取得 RabbitMQ 列隊的 email 內容後，將操作 mailjet 並將信件寄出

## 先備條件
1. 在 MongoDB Atlas 網站註冊並創建 DB instance 與取得連線
2. 在 Rabbit MQ 網站註冊並創建 queue instance 與取得連線
3. 在 mailjet 網站註冊並取得 API keys 和 Sender address 等資訊

## 主要開發工具
* express：API gateway 以及 DB service 伺服器開發框架
* graphql: API gateway 使用之 API 查詢規範
* amqplib：操作 message queue 的套件
* node-mailjet：實現自動發信的套件
* mongoose：MongoDB 的 ODM（Object Data Modeling）套件
* pm2：啟動專案的套件

## 啟動專案方式
1. 至各個 service 專案目錄下安裝依賴套件
```
cd <YOUR-PATH-TO-PROJECT-DIRECTORY>/nodejs-microservices/packages/gateway

npm install
```

```
cd <YOUR-PATH-TO-PROJECT-DIRECTORY>/nodejs-microservices/packages/database_service

npm install
```

```
cd <YOUR-PATH-TO-PROJECT-DIRECTORY>/nodejs-microservices/packages/mailing_service

npm install
```
<br/>

2. 安裝 pm2 套件
```
npm install -g pm2
```
<br/>

3. 至 nodejs-microservices 專案目錄創建 ecosystem.config.js
檔案
```
cd <YOUR-PATH-TO-PROJECT-DIRECTORY>/nodejs-microservices

touch ecosystem.config.js
```
<br/>

4. 依照 ecosystem.config.example.js 範例在 ecosystem.config.js 填上相應資料
<br/>

5. 用 pm2 啟動專案
```
pm2 start ecosystem.config.js
```
<br/>

6. 在瀏覽器輸入 ```localhost:<YOUR API GATEWAY PORT>/gq```，進入 graphql Apollo server 介面
<br/>

7. 在介面新增信件內容，receiver 請輸入自己收得到信的信箱，並按 Run
![image](/readme/graphql-mutation.png)
<br/>

8. 至 reciever 信箱確認是否收到由 mailing-service 寄出的信件
![image](/readme/recieve-email.png)
<br/>

9. 回到 graphql Apollo server 介面，查詢所有建立過的信件
![image](/readme/graphql-query.png)
<br/>

## 查看 service logs 指令
```
pm2 monit
```

## 終止服務的指令
```
pm2 stop all 
pm2 delete all
```








