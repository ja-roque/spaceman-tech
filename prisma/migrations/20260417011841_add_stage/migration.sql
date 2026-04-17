-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Conversation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "phone" TEXT NOT NULL,
    "name" TEXT,
    "company" TEXT,
    "requirements" TEXT,
    "estimatedCost" TEXT,
    "estimatedTimeline" TEXT,
    "email" TEXT,
    "language" TEXT NOT NULL DEFAULT 'en',
    "humanTakeover" BOOLEAN NOT NULL DEFAULT false,
    "blocked" BOOLEAN NOT NULL DEFAULT false,
    "flagPaymentPlan" BOOLEAN NOT NULL DEFAULT false,
    "offerPaymentPlan" BOOLEAN NOT NULL DEFAULT false,
    "context" TEXT,
    "notes" TEXT,
    "stage" TEXT NOT NULL DEFAULT 'qualifying',
    "messageCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Conversation" ("blocked", "company", "context", "createdAt", "email", "estimatedCost", "estimatedTimeline", "flagPaymentPlan", "humanTakeover", "id", "language", "messageCount", "name", "notes", "offerPaymentPlan", "phone", "requirements", "updatedAt") SELECT "blocked", "company", "context", "createdAt", "email", "estimatedCost", "estimatedTimeline", "flagPaymentPlan", "humanTakeover", "id", "language", "messageCount", "name", "notes", "offerPaymentPlan", "phone", "requirements", "updatedAt" FROM "Conversation";
DROP TABLE "Conversation";
ALTER TABLE "new_Conversation" RENAME TO "Conversation";
CREATE UNIQUE INDEX "Conversation_phone_key" ON "Conversation"("phone");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
