-- CreateTable
CREATE TABLE "Application" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobileNumber" TEXT,
    "experience" TEXT NOT NULL,
    "currentCTC" TEXT NOT NULL,
    "noticePeriod" TEXT NOT NULL,
    "selectedJob" TEXT NOT NULL,
    "resume" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
