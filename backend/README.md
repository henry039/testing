# How to run
- use node version > 8 to run this program
- `yarn` to install dependency
- config the `config.ts` 
- `yarn run test` to have a basic testing
- `ts-node app.ts` to run the program

# Helper function for Admin
- POST `http://localhost:3000/signup` to create user
- POST `http://localhost:3000/login` to get the accesss token
- GET `http://localhost:3000/weather` by providing the valid jwt to retrieve the lastest info of 'HK' weather
