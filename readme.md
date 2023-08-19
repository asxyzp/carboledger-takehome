# Carbon Emission Data Management UI (CarbonEx)

This repository contains the web client for the carbon emission data management tool, where a user can upload the relevant spreadsheet file containing the supplier details, carbon emission data, etc. Here's the link to the problem statement file: [https://carboledger.notion.site/Carboledger-Front-end-Assignment-4dd4b5fb1fb34f73a01d2ef0ab389dc6](https://carboledger.notion.site/Carboledger-Front-end-Assignment-4dd4b5fb1fb34f73a01d2ef0ab389dc6). It has been built as a take-home assignment for **Carboledger**.

Here are the context and the requirements for the project:

## Context

The task is to build a user interface for a carbon emissions data management application using React.js. The UI should allow users to upload an Excel file containing a company's raw purchase data, extract relevant fields, and display the data.

## Detailed Requirements

- **Excel File Upload:** The application should allow users to **upload an Excel file**. There should be a form that allows users to upload an Excel file containing data for multiple purchases made by a company.
- **Data Display:** After a file is uploaded, The application should: (a) **Show the progress**: Display a progress indicator while the file is being processed & (b) **Display the data**: Once the processing is complete, display the data extracted from the Excel file in a table format. The table should show columns for `company name`, `type of purchase`, `quantity`, `date of purchase`, and `emission factor`.
- **Data Pagination:** To improve user experience and performance, the application should implement pagination & show a maximum of 10 emission records at a time and allow the user to navigate to other pages to see more records.
- **Error Handling:** The application should handle errors gracefully: If there's an error in the file processing or data retrieval, display an appropriate error message to the user.

## **Technical Requirements**

- The frontend should be built using React.js.
- You may use a state management library if necessary.
- The application should follow responsive design principles and work on various screen sizes.

## Development Logs

```
Read the development logs noting down the process for development of this application in the files `/notes/process-log.md`.
```

## Technology Stack

```
Framework: React.js
State Management: Recoil.js - https://recoiljs.org/
Components/Styling: Material UI (MUI) - https://mui.com/
Data Storage: TinyBase - https://tinybase.org/ (IndexedDB-based storage)
```
