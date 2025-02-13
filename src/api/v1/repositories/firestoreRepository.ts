import db from "../../../../config/firebaseConfig";
import { FirestoreDataTypes } from "../types/firestore";
import { RepositoryError } from "../errors/errors";
import { getErrorCode, getErrorMessage } from "../utils/errorUtils";

/**
 * Represents a field-value pair used for querying documents.
 * Used primarily in filtering operations when deleting multiple documents.
 */
interface FieldValuePair {
  fieldName: string;
  fieldValue: FirestoreDataTypes;
}

/**
 * Creates a new document in the specified collection.
 *
 * @template T - The type of data being stored
 * @param collectionName - The name of the collection to create the document in
 * @param data - The data to be stored in the document
 * @param id - Optional custom document ID. If not provided, Firestore will auto-generate one
 * @returns Promise resolving to the created document's ID
 * @throws Error if document creation fails
 *
 * @example
 * const docId = await createDocument('users', { name: 'John', age: 25 });
 */
export const createDocument = async <T>(
  collectionName: string,
  data: Partial<T>,
  id?: string
): Promise<string> => {
  try {
    let docRef: FirebaseFirestore.DocumentReference;

    // If an ID is provided, use it to create a document at that specific ID
    // Otherwise, let Firestore auto-generate an ID
    if (id) {
      docRef = db.collection(collectionName).doc(id);
      await docRef.set(data);
    } else {
      docRef = await db.collection(collectionName).add(data);
    }

    return docRef.id;
  } catch (error) {
    throw new RepositoryError(
      `Failed to create document in ${collectionName} with data: ${data}, ${getErrorMessage(
        error
      )}`,
      getErrorCode(error)
    );
  }
};
