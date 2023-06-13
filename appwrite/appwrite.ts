import { LoginInterface, RegisterInterface } from "@/app/interface/auth.interface";
import {
  Account,
  Client as Appwrite,
  Databases,
  ID,
  Query,
  Storage,
} from "appwrite";

const databaseId = "6468c6a24d270eb45fe2";

let api: any = {
  sdk: null,

  provider: () => {
    if (api.sdk) {
      return api.sdk;
    }
    let appwrite = new Appwrite();
    appwrite
      .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
    const account = new Account(appwrite);
    const database = new Databases(appwrite);
    const storage = new Storage(appwrite);

    api.sdk = { database, account, storage };
    return api.sdk;
  },

  createAccount: (registerBody: RegisterInterface) => {
    return api
      .provider()
      .account.create(
        ID.unique(),
        registerBody.email,
        registerBody.password,
        registerBody.userName
      );
  },

  getAccount: () => {
    let account = api.provider().account;
    return account.get();
  },

  createSession: (loginBody: LoginInterface) => {
    return api
      .provider()
      .account.createEmailSession(loginBody.email, loginBody.password);
  },

  deleteCurrentSession: () => {
    return api.provider().account.deleteSession("current");
  },

  createDocument: (collectionId: string, data: JSON, permissions: any) => {
    return api
      .provider()
      .database.createDocument(
        databaseId,
        collectionId,
        "unique()",
        data,
        permissions
      );
  },

  getDocuments: (collectionId: string, query: any) => {
    return api
      .provider()
      .database.listDocuments(databaseId, collectionId, query);
  },

  getDocument: (collectionId: string, documentId: string) => {
    return api
      .provider()
      .database.getDocument(databaseId, collectionId, documentId);
  },

  updateDocument: (collectionId: string, documentId: string, data: JSON) => {
    return api
      .provider()
      .database.updateDocument(databaseId, collectionId, documentId, data);
  },

  deleteDocument: (databaseId: string, collectionId: string, documentId: string) => {
    return api
      .provider()
      .database.deleteDocument(databaseId, collectionId, documentId);
  },

  createFile: (file: any) => {
    return api
      .provider()
      .storage.createFile("6468c89fca5869b28219", ID.unique(), file);
  },

  getFilePreview: (fileId: string) => {
    return api
      .provider()
      .storage.getFileView('648855c0b8a34d012b8d', fileId);
  },
};

export default api;
