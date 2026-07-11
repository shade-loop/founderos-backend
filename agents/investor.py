from services.fireworks_client import ask_llm

def investor_agent(idea: str):

    prompt = f"""
You are a senior venture capitalist.

Startup Idea:
{idea}

IMPORTANT:

The FIRST line of your response MUST be exactly:

Fundability Score: <number between 0 and 100>

Example:
Fundability Score: 84

DO NOT write anything before this line.

Then provide:

## Investment Thesis

## VC Attractiveness

## Key Risks

## Funding Recommendation

## Suggested Funding Path

## Investor Summary

Write at least 500 words.
"""

    return ask_llm(prompt)
