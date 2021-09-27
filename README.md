## First things to do after getting this template

---

**`./backend`**

1. Install dependencies
   ```
    npm install --save-dev nodemon
    npm install --save express cors helmet-csp mysql2 joi bcrypt jsonwebtoken dotenv
   ```
2. Create `.env` file
   ```
    touch .env
   ```
4. Add environment variables in `.env`
   ```
    SERVER_PORT=your_server_port

    DB_NAME=your_database_name
    DB_HOST=your_database_host
    DB_USER=your_database_username
    DB_PASS=your_database_password
   ```
6. Start adding routes and logics for your backend!

---

**`./frontend`**

1. Install dependencies
   ```
    npm install
   ```

   If you use vuex, then install these
   ```
    npm install --save axios vuex
   ```

   If not, then install only axios
   ```
    npm install --save axios
   ```
2. Change author in `package.json`
3. If you don't use vuex store, delete `/store` and remove vuex related stuff in `/src/main.js`
4. If you use vuex, uncomment 2 lines of `store` related imports
5. Have fun with your project!
