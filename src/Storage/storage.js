// IMPORTING MODULES/PACKAGES
import { db } from "../Routes";

// METHODS
/**
 * @name getSheets
 * @description METHOD TO GET SHEETS
 * @returns {*} SheetsData
 */
export const getSheets = async () => {
  const sheets = await db
    .collection("sheets")
    .orderBy("uploadAt", "desc")
    .get();

  return sheets.map((sheet) => {
    return {
      id: sheet.id,
      displayName: sheet.displayName,
      fileName: sheet.fileName,
      fileSize: sheet.fileSize,
      uploadAt: sheet.uploadAt,
    };
  });
};

/**
 * @name getSheet
 * @description METHOD TO GET AN INDIVIDUAL SHEET
 * @param {*} id SHEET ID
 * @returns {*} SheetData
 */
export const getSheet = async (id) => {
  return await db
    .collection("sheets")
    .orderBy("uploadAt", "desc")
    .doc({ id: id })
    .get();
};

/**
 * @name createSheet
 * @description METHOD TO CREATE A NEW SHEET
 * @param {*} data SHEET DATA
 * @returns {*} SheetData
 */
export const createSheet = async (data) => {
  return await db.collection("sheets").add(data);
};

/**
 * @name editSheet
 * @description METHOD TO EDIT/UPDATE SHEET DATA
 * @param {*} id SHEET ID
 * @param {*} data SHEET DATA
 * @returns {*} SheetData
 */
export const editSheet = async (id, data) => {
  return await db.collection("sheets").doc({ id: id }).update(data);
};
