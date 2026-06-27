import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, website, goals, businessType } = body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
      // Return a friendly, high-quality markdown static fallback if key is not configured in the panel
      return NextResponse.json({
        success: true,
        offline: true,
        summary: `### ↳ CUSTOMIZED GROWTH ROADMAP FOR ${String(businessType || website || name || "YOUR BRAND").toUpperCase()}

Thank you for booking! Since the Gemini API key is currently offline, we've compiled this expert, high-agency growth blueprint for your **${businessType || "Digital Brand"}**:

1. **🚀 SEO & Topical Authority Engine**
   - Perform a technical audit focusing on Cumulative Layout Shift (CLS) and Largest Contentful Paint (LCP) benchmarks.
   - Dominate high-intent informational queries by mapping out a 15-article semantic cluster covering your core niche.

2. **🎯 Cost-Per-Click (CPC) Alpha Campaign**
   - Establish dedicated landers optimized for high-relevance matches, with forms exceeding 40px touch targets.
   - Scale down budget leakage by negative-keyword mapping competitor terms and phrase-match configurations.

3. **🏗️ High-Converting Funnel Mechanics**
   - Inject a direct interactive assessment or micro-lead magnet on the root route to harvest emails at a >8% conversion rate.
   - Initiate a 3-part automated email nurturing sequence using bold, direct, problem-solving narratives.

*Let's unpack the metrics and personalization further during our call!*`
      });
    }

    const ai = new GoogleGenAI({ 
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });

    const goalsList = goals && goals.length > 0 ? goals.join(", ") : "SEO optimization, high-ROI paid campaigns, content strategy, and landing page audit";
    const prompt = `
You are a highly analytical, top-tier quantitative digital growth marketer at "aelixa.", a premium creative agency.
An aspiring client has scheduled a digital marketing consultation with you. Analyze their context and goals, and generate a concise, customized growth roadmap of exactly 3 highly actionable, impact-driven digital marketing steps you will discuss on the call.

Client Info:
- Brand Name: ${name || 'N/A'}
- Business Type/Industry: ${businessType || 'Digital Venture'}
- Primary Channel Goals: ${goalsList}
- Website URL: ${website || 'N/A'}

Rules:
1. Write a bold layout. 
2. Format in pristine, high-end Markdown.
3. Start directly with the heading: "### ↳ CUSTOMIZED GROWTH ROADMAP FOR [BRAND BRAND]" (all caps)
4. Do not include verbose intros, pleasantries, or salutations, dive straight into the 3 action points.
5. Provide data-centric, high-concept suggestions (use benchmarks, percentages, and professional terminology). Keep the text direct, energetic, and concise.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    const summaryText = response.text || "### ↳ Strategic Growth Roadmap\n\nFailed to compile a custom roadmap. Let's personalizing this together on our call!";

    return NextResponse.json({
      success: true,
      offline: false,
      summary: summaryText,
    });
  } catch (error: any) {
    console.error("Gemini Consultation API Error:", error);
    return NextResponse.json(
      { success: false, error: "Our analytics engine is currently recycling. Please attempt submission once more." },
      { status: 500 }
    );
  }
}
