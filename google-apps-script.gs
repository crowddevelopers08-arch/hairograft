const FORM_CONFIG = {
  "Hero Form": {
    sheetName: "Submissions",
    headers: [
      "Timestamp",
      "Source",
      "Name",
      "Phone",
      "Email",
      "Treatment",
      "Appointment Date",
      "URL",
      "TeleCRM"
    ]
  },

  "Hair Treatment Form": {
    sheetName: "Hairtreatment Leads",
    headers: [
      "Timestamp",
      "Source",
      "Name",
      "Phone",
      "Location",
      "Concern",
      "URL",
      "TeleCRM"
    ]
  },

  "Influencer Form": {
    sheetName: "Influencer Leads",
    headers: [
      "Timestamp",
      "Source",
      "Name",
      "Phone",
      "Email",
      "Treatment",
      "Appointment Date",
      "Appointment Time",
      "URL",
      "TeleCRM"
    ]
  },

  "website-leads": {
    sheetName: "Website Leads",
    headers: [
      "Timestamp",
      "Source",
      "Name",
      "Phone",
      "Email",
      "Concern",
      "Message",
      "URL",
      "TeleCRM"
    ]
  }
};

/*
 * Run this once manually.
 */
function setupSheets() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  if (!spreadsheet) {
    throw new Error(
      "Open Apps Script from Google Sheet → Extensions → Apps Script"
    );
  }

  Object.keys(FORM_CONFIG).forEach(function (source) {
    const config = FORM_CONFIG[source];

    prepareSheet(
      spreadsheet,
      config.sheetName,
      config.headers
    );
  });

  SpreadsheetApp.flush();
}

/*
 * Receives website form submissions.
 */
function doPost(e) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(30000);

    if (!e || !e.postData || !e.postData.contents) {
      throw new Error("Submission data is missing");
    }

    const payload = JSON.parse(e.postData.contents);
    const source = String(payload.source || "").trim();
    const config = FORM_CONFIG[source];

    if (!config) {
      throw new Error("Unknown form source: " + source);
    }

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

    if (!spreadsheet) {
      throw new Error("Google Spreadsheet is not connected");
    }

    const sheet = prepareSheet(
      spreadsheet,
      config.sheetName,
      config.headers
    );

    const timestamp = payload.timestamp || new Date();
    const name = payload.name || "";
    const phone = payload.phone || "";
    const email = payload.email || "";
    const location = payload.location || "";
    const condition =
      payload.concern ||
      payload.condition ||
      "";

    /*
     * Date and time arrive as separate fields.
     * Older forms still send one combined value.
     */
    const appointmentDateTime = payload.appointmentDateTime || "";

    const appointmentDate =
      payload.appointmentDate ||
      appointmentDateTime;

    const appointmentTime = payload.appointmentTime || "";

    const message = payload.message || "";

    const pageUrl =
      payload.pageUrl ||
      payload.url ||
      "";

    const telecrm = payload.telecrm || "";

    let row;

    /*
     * General landing-page form
     */
    if (source === "Hero Form") {
      row = [
        timestamp,
        source,
        name,
        phone,
        email,
        condition,
        appointmentDateTime || appointmentDate,
        pageUrl,
        telecrm
      ];
    }

    /*
     * Hair-treatment landing-page form
     */
    if (source === "Hair Treatment Form") {
      row = [
        timestamp,
        source,
        name,
        phone,
        location,
        condition,
        pageUrl,
        telecrm
      ];
    }

    /*
     * Influencer landing-page form
     */
    if (source === "Influencer Form") {
      row = [
        timestamp,
        source,
        name,
        phone,
        email,
        condition,
        appointmentDate,
        appointmentTime,
        pageUrl,
        telecrm
      ];
    }

    /*
     * Website contact form
     */
    if (source === "website-leads") {
      row = [
        timestamp,
        source,
        name,
        phone,
        email,
        condition,
        message,
        pageUrl,
        telecrm
      ];
    }

    sheet.appendRow(row);
    SpreadsheetApp.flush();

    return jsonResponse({
      success: true,
      message: "Lead saved successfully",
      source: source,
      sheetName: config.sheetName
    });
  } catch (error) {
    return jsonResponse({
      success: false,
      error: String(error)
    });
  } finally {
    if (lock.hasLock()) {
      lock.releaseLock();
    }
  }
}

/*
 * Creates the correct sheet structure.
 * Existing incorrect sheets are preserved as Backup.
 */
function prepareSheet(spreadsheet, sheetName, requiredHeaders) {
  let sheet = spreadsheet.getSheetByName(sheetName);

  if (sheet && sheet.getLastColumn() > 0) {
    const existingHeaders = sheet
      .getRange(1, 1, 1, sheet.getLastColumn())
      .getDisplayValues()[0]
      .map(function (header) {
        return String(header).trim();
      })
      .filter(function (header) {
        return header !== "";
      });

    const layoutIsCorrect =
      existingHeaders.length === requiredHeaders.length &&
      requiredHeaders.every(function (header, index) {
        return existingHeaders[index] === header;
      });

    if (!layoutIsCorrect) {
      const backupName = createBackupName(
        spreadsheet,
        sheetName
      );

      sheet.setName(backupName);
      sheet = null;
    }
  }

  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);

    sheet
      .getRange(1, 1, 1, requiredHeaders.length)
      .setValues([requiredHeaders]);

    formatHeader(sheet, requiredHeaders.length);
  }

  return sheet;
}

function createBackupName(spreadsheet, sheetName) {
  let backupName = sheetName + " Backup";
  let number = 2;

  while (spreadsheet.getSheetByName(backupName)) {
    backupName = sheetName + " Backup " + number;
    number++;
  }

  return backupName;
}

function formatHeader(sheet, columnCount) {
  sheet
    .getRange(1, 1, 1, columnCount)
    .setFontWeight("bold")
    .setBackground("#354C9C")
    .setFontColor("#FFFFFF");

  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, columnCount);
}

function doGet() {
  return jsonResponse({
    success: true,
    message: "Hair O Graft lead webhook is running",
    timestamp: new Date().toISOString()
  });
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
