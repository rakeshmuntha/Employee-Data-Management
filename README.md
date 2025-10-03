# **Employee Management System**

## **Project Overview**

The Employee Management System is a web-based application designed to manage employee records efficiently. It provides features for adding, searching, and managing employee details. The project is built using **React (Frontend)** and **Node.js + Express + MySQL (Backend)** with **Axios** for API communication and **Toast notifications** for user feedback. It demonstrates CRUD operations, form handling, and modal integration.

## **Features**

- **Add Employee**: Create new employee records with name, email, and position.  
- **Search Employees**: Search employees by name, email, or position.  
- **View Employee List**: Display all employees with their details.  
- **Responsive UI**: Clean and user-friendly design built with Tailwind CSS.  
- **CRUD Operations**: Backend APIs connected with MySQL for persistent storage.  
- **Notifications**: Real-time success/error messages using **react-hot-toast**.  

## **Technologies Used**

- **Frontend**: React.js, Tailwind CSS, Axios, React Hot Toast  
- **Backend**: TypeScript, Node.js, Express.js, MySQL  
- **Database**: MySQL
- **Tools**: Postman, Vs code  

## **How to Use**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rakeshmuntha/Employee-Data-Management

2. **Backend Setup**:
   - Navigate to backend folder and install dependencies:
     ```bash
     cd backend
     npm install
     ```
   - Set up environment variables in `.env`:
     ```
     DATABASE_URL = "your sql database url"
     ```
   - Run the backend server:
     ```bash
     npm run dev
     ```

3. **Frontend Setup**:
   - Navigate to frontend directory:
     ```bash
     cd frontend
     npm install
     ```
      - Set up environment variables in `.env`:
     ```
     VITE_BACKEND_URL = "your backend hosted url"
     ```
       - Run the backend server:
     ```bash
     npm run dev
     ```

4. **Access the Application**:
   - Open in browser: `http://localhost:5173`  
   - Add employees, search records, and manage details.

**Live Demo**:  
   🔗 [Live Link](https://employee-data-management-34mhl7jth-rakeshs-projects-82057bd1.vercel.app/)
