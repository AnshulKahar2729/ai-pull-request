import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

/**
 * Generates AI-based content using Google Gemini AI.
 * @param prompt The input prompt for AI.
 * @param modelId The Gemini model to use (default: "gemini-pro").
 * @param maxTokens Maximum tokens in the AI response (default: 400).
 * @returns AI-generated text output.
 */
export async function generateAIContent(
  prompt: string,
  modelId: string = "gemini-2.0-flash",
): Promise<string> {
  try {
    // Load the AI model
    const model = genAI.getGenerativeModel({ model: modelId });

    // Generate content
    const response = await model.generateContent(prompt);
    const result = await response.response.text();

    return result.trim() || "AI response was empty.";
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return "Error generating AI response. Please try again.";
  }
}

/**
 * Creates a structured system prompt for AI code analysis.
 * @param changes List of code changes (file name, type, and code snippet).
 * @returns A detailed system prompt for AI analysis.
 */
export function generateCodeReviewPrompt(
  changes: { file: string; type: string; line: string }[]
): string {
  let prompt = `You are an expert software engineer and code reviewer. Your task is to analyze a GitHub Pull Request and provide a structured report. The analysis should include:
  
1️⃣ **Summary**: Explain the purpose of the changes.  
2️⃣ **Impact**: Describe the impact of these changes on the codebase.  
3️⃣ **Improvements**: Suggest any potential optimizations or best practices.  

Below is the list of changes:\n\n`;

  changes.forEach((change) => {
    prompt += `📂 **File**: ${change.file}\n`;
    prompt += `🔄 **Change Type**: ${change.type === "add" ? "➕ Addition" : "➖ Removal"}\n`;
    prompt += `💻 **Code Snippet**:\n\`\`\`\n${change.line}\n\`\`\`\n\n`;
  });

  prompt += `\n📌 Please provide your detailed insights in a **structured and technical** format.\n`;

  return prompt;
}
