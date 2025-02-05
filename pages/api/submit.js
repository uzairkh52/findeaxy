export default async function handler(req, res) {
  if (req.method === "POST") {
    // Extract form data from the request body
    const { name, email, phone, country, message } = req.body;

    // Ensure required fields are provided
    if (!name || !email || !phone || !country || !message) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }

    try {
      // Fetch Google Apps Script URL from environment variables
      const googleScriptURL = process.env.GOOGLE_SCRIPT_URL;

      if (!googleScriptURL) {
        return res.status(500).json({ success: false, message: "Google Script URL is not set." });
      }

      // Send data to the Google Apps Script Web App
      const response = await fetch(googleScriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, country, message }),
      });

      // Handle response from the Google Apps Script
      if (response.ok) {
        return res.status(200).json({ success: true, message: "Form submitted successfully." });
      } else {
        const errorText = await response.text();
        return res
          .status(500)
          .json({ success: false, message: `Failed to save data: ${errorText}` });
      }
    } catch (error) {
      // Handle server errors
      return res.status(500).json({ success: false, message: `Server error: ${error.message}` });
    }
  } else {
    // Return error for unsupported HTTP methods
    return res.status(405).json({ success: false, message: "Method not allowed." });
  }
}
