import api from "@/appwrite/appwrite";

export const getAllCourcesList = async () => {
  return await api.getDocuments(process.env.NEXT_PUBLIC_COURCES_COLLECTION_ID);
};
export const getAllChaptersList = async () => {
  return await api.getDocuments(process.env.NEXT_PUBLIC_CHAPTERS_COLLECTION_ID);
};


