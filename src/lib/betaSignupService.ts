import { collection, addDoc, serverTimestamp, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export interface BetaSignup {
  name: string;
  email: string;
}

/**
 * Add a new beta sign-up to the Firestore database
 * @param {BetaSignup} data - The sign up data containing name and email
 * @returns {Promise<string>} - The ID of the created document
 * @throws {Error} - If the email already exists or if there's a database error
 */
export async function addBetaSignup(data: BetaSignup): Promise<string> {
  try {
    // Make sure db is available (not null)
    if (!db) {
      throw new Error("Database not initialized");
    }
    
    // Normalize the email to lowercase to ensure case-insensitive comparison
    const normalizedEmail = data.email.toLowerCase().trim();
    
    // Check if the email already exists in the database
    const emailQuery = query(
      collection(db, "betaSignups"),
      where("email", "==", normalizedEmail)
    );
    
    const querySnapshot = await getDocs(emailQuery);
    
    if (!querySnapshot.empty) {
      throw new Error("This email has already been registered for the beta");
    }
    
    // Add the document to the betaSignups collection
    const docRef = await addDoc(collection(db, "betaSignups"), {
      name: data.name.trim(),
      email: normalizedEmail,
      createdAt: serverTimestamp(),
      source: "website",
      status: "pending" // Can be used for approval workflow later
    });

    return docRef.id;
  } catch (error) {
    // Re-throw specific error for duplicate emails
    if (error instanceof Error) {
      throw error;
    }
    
    // For other errors, provide a cleaner message
    console.error("Error adding beta signup:", error);
    throw new Error("Failed to submit your application. Please try again later.");
  }
} 