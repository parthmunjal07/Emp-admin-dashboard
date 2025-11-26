const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare Report",
        "description": "Create the weekly sales report",
        "date": "2025-11-26",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Team Meeting",
        "description": "Discuss project milestones",
        "date": "2025-11-27",
        "category": "Meeting",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client Follow-up",
        "description": "Email updates to client",
        "date": "2025-11-29",
        "category": "Communication",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Bug Fixing",
        "description": "Fix login form validation issues",
        "date": "2025-11-24",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Testing Module",
        "description": "Write test cases for new feature",
        "date": "2025-11-30",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Documentation Update",
        "description": "Refresh README and architecture details",
        "date": "2025-12-01",
        "category": "Documentation",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Code Review",
        "description": "Review teammate’s merge request",
        "date": "2025-11-26",
        "category": "Review",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design UI Mockups",
        "description": "Create mockups for dashboard",
        "date": "2025-11-28",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Branding Update",
        "description": "Enhance brand color palette",
        "date": "2025-11-27",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Logo Refinement",
        "description": "Improve logo resolution",
        "date": "2025-11-29",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Backend API Integration",
        "description": "Connect frontend with backend services",
        "date": "2025-11-30",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Code Refactor",
        "description": "Improve API performance",
        "date": "2025-12-02",
        "category": "Optimization",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Deployment Setup",
        "description": "Configure production pipeline",
        "date": "2025-11-27",
        "category": "DevOps",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Debug Server Crash",
        "description": "Investigate service downtime issues",
        "date": "2025-11-26",
        "category": "Issue Fixing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Market Research",
        "description": "Collect data on competitors",
        "date": "2025-12-01",
        "category": "Research",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Data Cleanup",
        "description": "Clean outdated entries from database",
        "date": "2025-11-28",
        "category": "Database",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Survey Outreach",
        "description": "Send survey forms to clients",
        "date": "2025-11-27",
        "category": "Communication",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  }
];

const admins = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];
export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}