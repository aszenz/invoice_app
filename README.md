# Sales Invoice App
## Build using react.js, redux, firebase, material ui and @react-pdf/renderer

Made by: **Asrar Ul Haq Nehvi**

Email: [asrar.nehvi@gmail.com]() | [aszenx@gmail.com]()

Mobile number: [+91 9622847729]()


## Running the app
1. Ensure that latest version of `node.js` + `npm` is installed.
2. In the app directory run this command: `npm start`
3. The development server will start at port 3000 and the app will start in your default browser window


## Current Implementation
1. User can create new invoices plus view, edit and delete existing ones.
2. Invoices can be created with only four fields: number, address, date and goods
3. Right now the goods field is just a string (not very useful)
4. Instead of making a separate description and amount field for each good 
    I wanted to make a full dynamic react component for adding multiple goods plus their amounts and any additinal info.
    So each invoice would then have an array of goods, with each good being a dictionary(object) with multiple fields like name,
    amount, desciption, quantity etc.
    Due to lack of time I decided to not implement it right now and focus on other things.
5. After creating the invoice, a user can view, download or email the pdf version of the invoice. 
6. Viewing and downloading the invoice pdf works but email functionality is left unimplemented because of its complexity.
    Requirements are to setup email service provider plus account, figuring out the api, use api keys and then integrating it into the app.
    If I was to implement it, I would use Google Cloud functions for firebase and then use the gmail api.


## Technologies Used
1. I decided to go full front-end for this app plus firebase because of the short time.
2. The front-end uses the React+Redux combo in an MVC architecture with styling done in Material UI components library.
3. Uses `creat-react-app` project template for quickly getting started with react in a nodejs environment.
3. For storing the invoices I used Firebase specifically the new firestore database.
4. Firestore is a nosql database that requires almost no setup and can be easily integrated with web or mobile apps.
5. To generate pdf's for invoices I have used a react libray for it `@react-pdf/renderer`, 
    which is easy to use and provides lots of customization. Best part pdfs can be styled entirely using CSS.
6. In addition to these, a number of other libraries have been used which provide convenient firebase operations in react + redux namely `redux-thunk`, `redux-firestore`, `react-redux-firebase`

## Drawbacks
1. As noted the goods (invoice line) field isn't well implemented right now.
2. No authentication but its easy with firebase if required.
3. Creating pdfs purely on the client side could be time consuming for complex invoices.
4. No email functionality currently but it can be done with firebase easily after setting up the required accounts.

## Strengths
1. React + Redux is a popular well supported combination for building front-end web apps.
2. Firebase is easy to get started with and offers many great features like authentication, cloud functions and more.
3. No setting up databases or messing with http fields like in rest apis.
4. Easy to scale and portable, deployment is a dead simple with firebase. 
5. Everything is written in JavaScript which speeds up development and reduces costs.