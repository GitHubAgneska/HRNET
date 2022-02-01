
## HRnet : a company's internal application to create and view employee records
---



### ▶︎ STACK

- React / Redux
- Express
- MongoDb

--- 

###  ▶︎ TOOLS
- FakerJs


---
###  ▶︎ INSTALL

```bash
#clone repository to local folder
git clone https://github.com/GitHubAgneska/HRNET.git

#install dependencies
npm i

#run
npm run start
```

---
```
HRNET DATA FLOW DEV                       HRNET DATA FLOW PROD
+--------------------------------------+  +----------------------------------------------+
|           REACT CLIENT               |  |                                              |
|                                      |  |   MONGODB ( seeded by  FakerJs )             |
|                                      |  |                                              |
| => generates data with FakerJS       |  +--------------^---------------------^---------+
|      (at runtime)                    |                 |                     |
|                                      |                 |           OR        |
|                                      |   +-------------v----------+  +-------v---------+
| => serves them on fake MirageJs API  |   |         EXPRESS        |  |                 |
|    (browser-side)                    |   |                        |  |                 |
|                                      |   +-------------+----------+  |                 |
|                                      |                 |             |                 |
|    > GET request:employees-list      |   +-------------v----------+  |                 |
|                                      |   | API route :            |  |                 |
|    > POST request:create employee    |   | 5000/api/employees     |  |                 |
|      = happens in Redux store only   |   |                        |  |     NEXTJS      |
|                                      |   +--------------^---------+  |                 |
|                                      |                  |            |                 |
|                                      |                  |            |                 |
|                                      |   +--------------v---------+  |                 |
|                                      |   |      REACT CLIENT      |  |                 |
|                                      |   |                        |  |                 |
|                                      |   |    > GET request       |  |                 |
|                                      |   |                        |  |                 |
|                                      |   |    > POST request      |  |                 |
|                                      |   |                        |  |                 |
|                                      |   |                        |  |                 |
+--------------------------------------+   +------------------------+  +-----------------+
```



