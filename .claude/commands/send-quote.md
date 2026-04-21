# /send-quote

Draft and send a client quote email from Spaceman Tech.

## Process (always follow this order)

1. **Gather info** — ask Javier for the lead's name, email, project description, scope, price, and payment terms. If a WhatsApp conversation exists, read it from the admin panel or have Javier paste it.
2. **Assess scope honestly** — before drafting, evaluate whether the quoted price is realistic for the described scope. Flag if it seems too low.
3. **Draft the email** — use the HTML template at `src/email-templates/quote.html`. Fill in all `{{PLACEHOLDERS}}`. Uncomment optional sections as needed.
4. **Save preview** — write the finished HTML to `public/quote-{{CLIENT_FIRST_NAME_LOWERCASE}}.html`
5. **Send to Javier first** — always send a review copy to jarb95@gmail.com before sending to the client. Subject should be clean, no special characters or dollar signs.
6. **Wait for green light** — do not send to the client until Javier explicitly approves.
7. **Send to client** — use Mailgun via `mail.spacemantech.ai`, from `hello@spacemantech.ai`, CC `hello@spacemantech.ai` so Javier gets a copy in Gmail via the existing forward rule.

## Mailgun send command

```bash
bash -l -c '
HTML=$(cat public/quote-CLIENTNAME.html)
curl -s \
  https://api.mailgun.net/v3/mail.spacemantech.ai/messages \
  --user "api:$MAILGUN_API_KEY" \
  -F from="Spaceman Tech <hello@spacemantech.ai>" \
  -F to="CLIENT_EMAIL" \
  -F cc="hello@spacemantech.ai" \
  -F subject="PROJECT_NAME | Your Quote from Spaceman Tech" \
  --form-string html="$HTML"
'
```

## Email design rules

- No em dashes (use commas or periods instead)
- No emojis
- Plain, professional tone — warm but direct
- Always include the price in the dark price box, never in plain text only
- Payment terms: 50% upfront, 50% on delivery (standard)
- Footer always: Javier Roque, Spaceman Tech LLC, hello@spacemantech.ai, Delaware, USA

## Available template sections (in quote.html)

- **Greeting + intro** — always included
- **Callout box (orange)** — use for honest recalibrations or strong recommendations
- **Scope box (gray)** — bulleted list of what is included
- **Not included box (left border)** — what is explicitly out of scope
- **Price box (dark)** — investment amount, project name, payment terms
- **Question box (blue)** — use when a key clarification is needed before finalizing
- **Closing paragraph** — always included

## Pricing reference (from whatsapp-prompt.ts)

- Simple website: $1,500 to $2,500
- Website with AI features: $3,000 to $4,000
- Web app or SaaS MVP: $4,000 to $7,000
- Web app with AI at its core: $6,000 to $12,000
- Mobile app: $5,000 to $15,000
- AI agents and automation: $3,000 to $8,000
- Hardware integration: $5,000+
- Large platforms (marketplace, creator economy, etc.): $30,000+

If the described scope exceeds these ranges significantly, flag it to Javier before quoting.
