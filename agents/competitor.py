from services.fireworks_client import ask_llm

def competitor_agent(idea: str):

    prompt = f"""
You are a senior venture capitalist and startup market analyst.

Analyze the following startup idea in depth.

STARTUP IDEA:
{idea}

Return your analysis in this format:

# Market Opportunity Score
Give a score from 0-100 and explain why.

# Total Addressable Market (TAM)
Estimate market size and opportunity.

# Industry Trends
Current trends supporting or hurting adoption.

# Customer Demand
Why customers would pay for this solution.

# Growth Potential
Short-term and long-term growth opportunities.

# Competitive Landscape
How crowded is this market.

# Key Risks
Top 5 risks founders must consider.

# Recommended Next Steps
Specific actions for validation.

Be detailed.
Use bullet points.
Write 500-700 words.
"""

    return ask_llm(prompt)