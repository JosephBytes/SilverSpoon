SilverSpoon is a full-stack marketplace web application designed to connect customers with a curated selection of products. The platform enables administrators to easily list, update, and manage items while providing customers with a streamlined browsing and ordering experience. Looking ahead, SilverSpoon can be extended to include payment integrations, personalized recommendations, and analytics dashboards—positioning it not just as a marketplace, but as a flexible platform for commerce.

## To start the app:
1) Open/unzip the folder in VSCode
2) In the terminal, run 'npm i node' to install the node_modules folder
3) In the terminal, run 'nodemon app' to run the app.
4) In Chrome, search 'localhost:3000' to use the app.

User Management:
1) User registration & login (authentication, user token)
2) Role-based access admin has a greater scope than customers.

Data Management (MongoDB):
1) Create, Read, Update, Delete (CRUD) items listed (based on user's role)
2) Categorizing, sorting items, and filtering.
3) Data visualization- Charts, dashboard viewable by admin

Security:
1) Secure login with encryption: bcrypt.hash
2) Data validation & sanitization, preventing injection



