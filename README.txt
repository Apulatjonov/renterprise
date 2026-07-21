RENTERPRISE STATIC WEBSITE

Run:
- Just open index.html in Chrome. No Node.js, npm, server, database, or build step.

Add a new scooter:
1. Put its image into: images/scooters/
2. Open index.html.
3. Find the comment: "COPY THIS TEMPLATE FOR A NEW SCOOTER".
4. Copy the scooter <article class="scooter-card">...</article> block.
5. Paste it inside <div class="fleet">.
6. Change image filename, name, specs, quality, prices and status.

Status:
- Available: <div class="status free">● BO‘SH</div>
- Taken:     <div class="status taken">● BAND</div>
  For a taken scooter, you can also replace its Telegram button class with:
  <a class="btn disabled">HOZIRDA BAND</a>

This keeps the website fully static while making future scooter additions predictable and easy.
