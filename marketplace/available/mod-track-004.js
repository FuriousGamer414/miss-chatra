// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzW5RSdw5Uv21zmii9lmaaIbIn7ZD1xfmkGlidG9gFgWIv08XoJhvlRrXty2SQzzD5aR35m5+BPDRPTIu9GEy6LHnxrUCv2XGDY45wICtndAyn0Xqyx6WNJuH9AUIpY9zD0CYLo1k/pYpXlcZqVMgzHt2/oyMJnK5SGb0jCES/hYrpLoSsxVxkol8Gh8j26C+V5EzqiYsejFTpbz5WNco2gXsBoiXhE8X1sNf+JnI5EsSsy+fu5jsrDQPiQPAqQv1UaDVEU+QXSlCViWvVFQySKZpxQAsg5WkSPuhsyqind5Su1VlBzZ6+dY0JwtrpMIGwggPdqRxdIOGMJUgu9Z8gswJssVfVvUizod4vKfgnspvv0HsbbRF3mU2GpgE4NKsfSjzrzojlvgYEVlNsEEX5vcggsY9d5YoCoQSWUT5pxdBIzZoSARd5D+5wWK7tYZzroajBu82Fvi0Tktnik3csLhKcHXcKGXOZquMDZdAcHtcd4IQRxXYEvcgqjUqcmf1BW5fRk6w8eVzLSVubQ1Q++7PrE/MaP0VED0ICPJ20zSXOFvaLSBxRQl2xxPkfoW+ocqzbTdEwY3yJ6OxDQOIHINkb3nfhpgOSQbrhvJa3SX6s4w29q/dVVxgOxEF7yRMF5qqGCJRp3ESoVaYNg/1AsLRFZlSqaeM79MEce+mv+rlRAwL10wmaMJqUeQ1WKyZPtsBrNmw8y/nnh/J0+SRUb7GoL/92Kq18Me1LIcJVCJ10gpM37Xs6FIOikB98g5VXtVUZbfUjM4R5ErBwf8VGaLbLgN1KtWuu13HNvK8v6HyvrsKt0v1LXyu0Sh4LtIOvdfh1RzF+PD2oiGQ7tEw7RhbPOxCmW+dPwGzBxVS8p1TYiimMp1zgNcaQmOorHyW+c9QC8d9ZJG4crotbZu/HxK9ZB68iGW+iDgBhsC2ZbyS4SMk0gY4+sg6SDyW+J8mdbXgkjOxyQ8OeKLtVL2mEClQct6kSa7kA8shoCPt3zQJIyCe4bJHWia7VvUcNHwraIwdP1Pq645NbfqILULrs+RO8Slk3QAU4XuF142/owSKdfq1thw8Y7H+tYTKldhAJJv03chsNULx0aFW0J4BdHeEdTT5auUN22PqoX7YxjiEvrMPfnstwLBo8CL9XD3hPI1ls4uxjOIYvOL+fcyEakaGjv+s4dq6VT+2LvUDe0FrYH0B9bXKCiZd14FDLqUn04aO71moVS01n8rAJfzjwr3BQy5EicONlVIsb4y+kYS870FVHLuOtpKJ8h/ExfMkb6AZ4pVmGocc7qFDy3dfXvCsrQF01ggxV+a9H80FONHcEm6GXHxEaEa4OfH8JYpKZ4f47JF3R9cDFrV1xlB1TWY//5T';const _IH='510f85ae57e881ec420c509f1971fbd571e46c75240d9750f5c85b157264c167';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
