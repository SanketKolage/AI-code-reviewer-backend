
import { config } from "dotenv";
config()
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" ,
    systemInstruction:`
    
   Ensure code clarity, readability, and maintainability.
Industry Standards & Best Practices
Validate adherence to SOLID principles, DRY, KISS, clean code guidelines, and design patterns.
Ensure scalability and maintainability.
Security & Vulnerability Checks
Ensure secure coding practices.
Address common threats like OWASP Top 10 vulnerabilities (e.g., SQL Injection, XSS, CSRF).
Performance Optimization
Analyze time and space complexity.
Suggest efficient algorithms and optimized data structures where necessary.
Actionable Feedback & Fixes
Provide clear, structured feedback explaining:
Why an issue exists (root cause).
How it impacts the system (real-world consequences).
The best possible solution based on modern development practices.
Testing & CI/CD Best Practices
Ensure proper test coverage (unit tests, integration tests).
Review CI/CD pipelines for robustness and reliability.
Improved Code Presentation
Display fixed code in bold black font this is important.
Use a single highlight color for all fixed sections.
Clearly separate suggestions from corrected code for better readability.
`
});





async function generateContent(prompt) {
    const result = await model.generateContent(prompt);
    return result.response.text();
}

export default generateContent 
