// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lPOZqfF/y3301qAFysLh0/X0vPlXlRRm2zxOPFBgFiIHmJ7CF/1jFS1cw8HJIVv9IRFH4gHgHt1UQ9ChFYL0IY7DnpCYW/C/19P8zF4tukJpSAbyiPop+tMPS3as5IiOonUUH5QraR1Hv6iOpEf0igufvSSevmSzFF5ic7eHwXiuXTPlAQUpKsexPjf5waPt23evxy+CqzlkF1H8u3Y3p9nHB1rPZ4syiUR2+odcL0lv5IZLC7q/8ymINYokAfZhQCdsfdUoRX1zgXe7oBz6EVTF+v6JCmkULVNTb+HYh+Q11aOgBD7Yq3ZR00wk67RD4ymG5PrEyeKlaQ2BLc8aWDJsvxbzLPPswn2zimhl6WZmgljHGRGIbEdVSIdYGL1bpOnuLMCF8nfEaWtXFjj9NDFWNVdUPtQcptQG+dKtZaz/qigHybQbKZ9XtpZO7wtr5LLx/zof3gwBDPsPNB04jhqYkK7/DCVUCGZ05wbBoz7vh52kfAAeMGUONvkj740Ve02c0hqBJfR88iJ9Co6zkNSG0J2it9vJQNMTdwtSOHVcwomCl9/6qCUiRstxCg08piMdN1n2WoZV5wujxPoULxNq2wCxGcAWDw6+vhbPGCwZdHbXvlYkb0KSSaa39Is4N3/57FVTRkKXpzT8suQHeXF+ML6jmMt/40K+FSrPuM8YJVi5mM+Dc8wO3HhZRD/MGQid3fs5yz2oVU89bS4/6knwCAejg/KCePjXflHqzYs1ogEFY0CXlSb4rlo66YL8TwfpWYEIThtKhgP5sn/PgJgIT5QUOjGPrQSYsGawbIpahBxalJz3LpodaKxDIuqcGvAg6xZl5lMw9dzNNZ9v0pQZVB9guKkNBS7LrewV+fifongmyJrHnT+5dRD6LKJcoLZcPWh9X/s8I7Eq5u4+UDOHa9k9clsAglrDlb/GROO+ZCA0DOifojY5s30wZuGIaZBXrilE0pq8yvfYjMT+/DHEkEHXX+VdQXCVwwdtZc01XgJPoeartlcYdT0tRlcX+9FxPvAjLPNpAseGKBDoCVgD5/9q9SB9hmpII2J+eMLKq8Pks0pKn6Svxy5WGsEEM2nk3sGY3YKH/F4YBti1aYgmg1FgHYW83OxVI0nG3qw70htO2lsX+MSt89qaUWYEihZbxZQ8EMZHpXd7P2hIH7bY1SY0WzCgA5nTKuiyYe2Ex2HT/7ndyJOmIA4YN9zrRk6oFX8RadMHdZ03qPR+kf8=';const _IH='0699833a12c252360c2bb98513998e0f7fd062cde090edb4d751a41575f77450';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
