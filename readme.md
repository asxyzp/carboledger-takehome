# Carbon Emission Data Management Application (CarbonEx)

This repository contains the web client for the carbon emission data management application, where a user can upload the relevant spreadsheet file containing the supplier details, carbon emission data, etc. Here's the link to the problem statement [file](https://carboledger.notion.site/Carboledger-Front-end-Assignment-4dd4b5fb1fb34f73a01d2ef0ab389dc6). It has been built as a take-home assignment for **Carboledger&trade;**.

![CarbonEx](https://s11.gifyu.com/images/SgKPS.gif)

## Context & Requirements

### Context

The task is to build a user interface for a carbon emissions data management application using React.js. The UI should allow users to upload an Excel file containing a company's raw purchase data, extract relevant fields, and display the data.

### Detailed Requirements

- **Excel File Upload:** The application should allow users to **upload an Excel file**. There should be a form that allows users to upload an Excel file containing data for multiple purchases made by a company.
- **Data Display:** After a file is uploaded, The application should: (a) **Show the progress**: Display a progress indicator while the file is being processed & (b) **Display the data**: Once the processing is complete, display the data extracted from the Excel file in a table format. The table should show columns for `company name`, `type of purchase`, `quantity`, `date of purchase`, and `emission factor`.
- **Data Pagination:** To improve user experience and performance, the application should implement pagination & show a maximum of 10 emission records at a time and allow the user to navigate to other pages to see more records.
- **Error Handling:** The application should handle errors gracefully: If there's an error in the file processing or data retrieval, display an appropriate error message to the user.

### Technical Requirements

- The frontend should be built using React.js.
- You may use a state management library if necessary.
- The application should follow responsive design principles and work on various screen sizes.

## Repository Info

### Setup Instructions

```
git clone https://github.com/asxyzp/carboledger-takehome.git carbonex           # Cloning the repository
cd ./carbonex
npm install                                                                     # Installing the dependencies
npm run start                                                                   # Starting the development server (open it in localhost:3000)
```

### File Structure

```
/notes
    /process-log.md     # Development logs
/public                 # Static assets (index.html, manifest.json)
/src
    /Assets             # Static assets (images)
    /Cell               # Data Fetching Components (Abstraction-wise)
    /Component          # Individual Components
    /Context            # Context/State Management
    /Layout             # Application Layout Components
    /Page               # Page Components
    /Style              # Application Theming
    /index.js           # Entry-point Component
    /Routes.js          # Route Handler
    /index.css          # Global Styles
...                     # Other Config Files like `package.json`, etc
```

### Technology Stack

Frameworks, libraries and technologies used to build the application:

```
Framework: React.js
State Management: Recoil.js - https://recoiljs.org/
Components/Styling: Material UI (MUI) - https://mui.com/
Routing: React Router DOM - https://reactrouter.com/en/main
```

### Test Files

There's a folder called `./test_files`, which contains three test files, showing three different conditions:

```
purchase_data.xlsx       # Correct File
purchase_data_err1.xlsx  # Empty File
purchase_data_err2.xlsx  # File with missing columns
```

### Error Handling

As mentioned above, this application handles two cases for handling errors:

1. Empty file (with zero or one rows).
2. Missing column values

## Fully Responsive

Works flawlessly, on all devices

![Responsive](https://i.ibb.co/Nt8D59Q/Untitled.png)

### Further Improvements

I wanted to add some persistence to the application using an IndexedDB-based wrapper, like Localbase, but I decided not to pursue it, due to the limited time at hand. Adding a layer of persistence would allow users to not upload the spreadhsheet, everytime the page is reloaded. Moreover, large amounts of data should not be added to the state stores, also because querying data from an IndexedDB-based wrapper is quite easy.
