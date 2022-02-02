
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
npm run dev
```

---
```
HRNET DATA FLOW DEV                       HRNET DATA FLOW PROD
+--------------------------------------+  +----------------------------------------------+
|           REACT CLIENT               |  |                                              |
|                                      |  |   MONGODB ( seeded by  FakerJs )             |
|                                      |  |                                              |
| => generates data with FakerJS       |  +--------------^---------------------^---------+
|      (at runtime)                    |                 |                     
|                                      |                 |                     
|                                      |   +-------------v----------+  
| => serves them on fake MirageJs API  |   |         EXPRESS        |  
|    (browser-side)                    |   |                        |  
|                                      |   +-------------+----------+  
|                                      |                 |             
|    > GET request:employees-list      |   +-------------v----------+  
|                                      |   | API route :            |  
|    > POST request:create employee    |   | 5000/api/employees     |  
|      = happens in Redux store only   |   |                        |  
|                                      |   +--------------^---------+  
|                                      |                  |            
|                                      |                  |            
|                                      |   +--------------v---------+  +-------v---------+
|                                      |   |      REACT CLIENT      |  |     REDUX       |
|                                      |   |                        |  |                 |
|                                      |   |    > GET request       |  |                 |
|                                      |   |                        |  |                 |
|                                      |   |    > POST request      |  |                 |
|                                      |   |                        |  |                 |
|                                      |   |                        |  |                 |
+--------------------------------------+   +------------------------+  +-----------------+


+--------------------------------------------------+
|               REACT CLIENT                       | 
+--------------------------------------------------+
|  CREATE EMPLOYEE FORM                            |
+--------------------------------------------------+        +--------------------------------+
|                                                  |        |       REDUX STORE              |
|  LOCAL STATE   form errors/ touched              |        |       ***********              |
|  setState()    form values employee              |        +--------------------------------+
|                modal show/type                   |        |                                |
|                set employee's values             |        |   +------------------------+   |
|                                                  |        |   |                        |   |
|                                                  |    +---+--->   employeeReducer      |   |
| +-----------------------------------------+      |    |   |   |                        |   |
| |GLOBAL STATE    new employee values      +------+----+   |   +------------------------+   |
| +-----------------------------------------+      |    |   |   |                        |   |
|                                                  |    |   |   | -get by id req status  |   |
+--- METHODS---------------------------------------+    |   |   |                        |   |
|                                                  |    |   |   | -put by id req status  |   |
|   handleInputChange() > setState values/touched  |    |   |   |                        |   |
|                                                  |    |   |   |                        |   |
|   handleBlur()        > setState errors          |    |   |   +------------------------+   |
|                                                  |    |   |                                |
|   handleSubmit()      > setState errors/touched  |    |   |   +-------------------------+  |
|                       > dispatch data to store   |    |   |   |                         |  |
|                                                  |    |   |   |       ListReducer       |  |
|                                                  |    |   |   |                         |  |
+--- CHILDREN (controlled components)--------------+    |   |   +-------------------------+  |
|   +------------------+    --+                    |    |   |   |                         |  |
|   | SIMPLE INPUT     <--->  |                    |    |   |   |  -get list req status   |  |
|   +------------------+      |                    |    |   |   |                         |  |
|   | SELECT INPUT     <--->  |                    |    +---+--->  -post new employee req |  |
|   +------------------+      |                    |        |   |                         |  |
|   | DATE INPUT       <--->  +--- events          |        |   |                         |  |
|   +------------------+      |                    |        |   |                         |  |
|   | MODAL cancel     <--->  |                    |        |   |                         |  |
|   +------------------+      |                    |        |   |                         |  |
|   | MODAL success    <--->  |                    |        |   |                         |  |
|   +------------------+     -+                    |        |   |                         |  |
|                                                  |        |   |                         |  |
+--------------------------------------------------+        |   |                         |  |
                                                            |   |                         |  |
+--------------------------------------------------+        |   |                         |  |
|   EMPLOYEES LIST  DATATABLE                      |        |   |                         |  |
+--------------------------------------------------+     +--+---> -list sort/search state |  |
|                                                  |     |  |   |                         |  |
|                 +-----------------------+        |     |  |   | -list pagination state  |  |
|                 | sortBy name/date/...  +--------+-----+  |   |                         |  |
|                 | search                |        |        |   |                         |  |
|                 | active page           |        |        |   |                         |  |
|                 | entries amount        |        |        |   +-------------------------+  |
|                 |                       |        |        |                                |
|                 +-----------------------+        |        |                                |
|                                                  |        |                                |
|                                                  |        +--------------------------------+
+--------------------------------------------------+
```




