# Tech Quiz Test Suite

This repository contains the Cypress test suite for the Tech Quiz application. The goal of this project is to implement both component and end-to-end (E2E) testing using Cypress.

## Walkthrough Video

Watch the walkthrough video here: [Tech Quiz Test Suite Walkthrough](https://www.loom.com/share/fb9accda33e1439f95ea3da692847da7?sid=e3975155-80cf-425e-8527-35d52bfb16e5)


## **Project Structure**
tech-quiz-test-suite/
├── Develop/  
│   ├── client/  
│   ├── cypress/ 
│   │   ├── component/  
│   │   ├── e2e/   
│   │   ├── support/   
│   │   ├── tsconfig.json    
│   ├── server/             
│   ├── package.json         
│   ├── tsconfig.json        
│   ├── cypress.config.ts    

## **Installation**
To install dependencies, run:
npm install

### **1. Open Cypress UI:**
npx cypress open
### **2. Run All E2E Tests in Headless Mode:**
npx cypress run --e2e
### **3. Run Component Tests in Headless Mode:**
npx cypress run --component

## **Testing Requirements**
- The application **must work as expected** before running tests.
- Ensure the **backend is running** before executing E2E tests.
- Cypress tests should cover **all key functionalities**.


## **Contributing**
1. Clone the repository:
   git clone https://github.com/your-repo/tech-quiz-test-suite.git
2. Create a new branch:
   git checkout -b feature-branch
3. Make changes and commit:
   git commit -m "Added new Cypress test"
4. Push and create a pull request.

## **License**
This project is licensed under the MIT License.