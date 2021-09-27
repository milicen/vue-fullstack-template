## First things to do after getting this template

---

**`./backend`**

1. Install dependencies
   ```
    npm install --save-dev nodemon
    npm install --save express cors helmet-csp mysql2 joi bcrypt jsonwebtoken dotenv
   ```
2. Adjust environment variables in `.env`
3. Start adding routes and logics for your backend!

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
4. Have fun with your project!