-- CreateTable
CREATE TABLE "_AuthorPublishers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_AuthorPublishers_A_fkey" FOREIGN KEY ("A") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AuthorPublishers_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_AuthorPublishers_AB_unique" ON "_AuthorPublishers"("A", "B");

-- CreateIndex
CREATE INDEX "_AuthorPublishers_B_index" ON "_AuthorPublishers"("B");
