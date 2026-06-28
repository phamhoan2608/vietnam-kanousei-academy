import { supabase } from "./supabase";

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

const FALLBACK: SiteData = {
  registerUrl: "",
  teachers: [],
};

export async function readData(): Promise<SiteData> {
  const { data, error } = await supabase
    .from("site_data")
    .select("data")
    .eq("id", 1)
    .single();

  if (error || !data) return FALLBACK;
  return data.data as SiteData;
}

export async function writeData(siteData: SiteData): Promise<void> {
  await supabase
    .from("site_data")
    .upsert({ id: 1, data: siteData });
}
