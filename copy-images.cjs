const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\Utente\\.gemini\\antigravity\\brain\\375950b4-90eb-4e37-95d3-99f6eb1dff93';
const detailsDst = path.join(__dirname, 'public', 'images', 'details');
const portfolioDst = path.join(__dirname, 'public', 'images', 'portfolio');

// Create details dir
fs.mkdirSync(detailsDst, { recursive: true });

const copies = [
    // Before images
    [`${src}\\argentario_before_1771795760850.png`, `${portfolioDst}\\argentario_before.png`],
    [`${src}\\rome_before_1771795776826.png`, `${portfolioDst}\\rome_before.png`],
    [`${src}\\como_before_1771795792041.png`, `${portfolioDst}\\como_before.png`],
    // Amalfi details
    [`${src}\\amalfi_detail_1_1771795913501.png`, `${detailsDst}\\amalfi_detail_1.png`],
    [`${src}\\amalfi_detail_2_1771795928700.png`, `${detailsDst}\\amalfi_detail_2.png`],
    [`${src}\\amalfi_detail_3_1771795944601.png`, `${detailsDst}\\amalfi_detail_3.png`],
    [`${src}\\amalfi_detail_4_1771795971294.png`, `${detailsDst}\\amalfi_detail_4.png`],
    // Spello details
    [`${src}\\spello_detail_1_1771795986316.png`, `${detailsDst}\\spello_detail_1.png`],
    [`${src}\\spello_detail_2_1771796000758.png`, `${detailsDst}\\spello_detail_2.png`],
    [`${src}\\spello_detail_3_1771796028771.png`, `${detailsDst}\\spello_detail_3.png`],
    [`${src}\\spello_detail_4_1771796044217.png`, `${detailsDst}\\spello_detail_4.png`],
    // Argentario details
    [`${src}\\argentario_detail_1_1771796058339.png`, `${detailsDst}\\argentario_detail_1.png`],
    [`${src}\\argentario_detail_2_1771796083352.png`, `${detailsDst}\\argentario_detail_2.png`],
    [`${src}\\argentario_detail_3_1771796095633.png`, `${detailsDst}\\argentario_detail_3.png`],
    [`${src}\\argentario_detail_4_1771796109511.png`, `${detailsDst}\\argentario_detail_4.png`],
    // Rome details
    [`${src}\\rome_detail_1_1771796131575.png`, `${detailsDst}\\rome_detail_1.png`],
    [`${src}\\rome_detail_2_1771796145323.png`, `${detailsDst}\\rome_detail_2.png`],
];

let count = 0;
for (const [from, to] of copies) {
    try {
        fs.copyFileSync(from, to);
        count++;
        console.log(`Copied: ${path.basename(to)}`);
    } catch (e) {
        console.error(`Failed: ${path.basename(from)} - ${e.message}`);
    }
}
console.log(`\nDone! ${count}/${copies.length} files copied.`);
