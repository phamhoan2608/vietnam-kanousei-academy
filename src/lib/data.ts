import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "src/data/siteData.json");

export interface Teacher {
  id: string;
  imageURL: string;
  nameTeacher: string;
  introduction: string;
}

export interface SiteData {
  registerUrl: string;
  teachers: Teacher[];
}

export function readData(): SiteData {
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw) as SiteData;
}

export function writeData(data: SiteData): void {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}
