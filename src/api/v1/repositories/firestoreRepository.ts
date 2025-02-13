import db from "../../../../config/firebaseConfig";
import { FirestoreDataTypes } from "../types/firestore";

/**
 * Represents a field-value pair used for querying documents.
 * Used primarily in filtering operations when deleting multiple documents.
 */
interface FieldValuePair {
  fieldName: string;
  fieldValue: FirestoreDataTypes;
}
