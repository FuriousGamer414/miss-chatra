// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4snPTLtsyXbRJvybIXFWqpSOcFAdL4G1XnNSCwSQ6wkAPdqCFGNfosdQwkqa/aja5s57dEGkHcLAi9wZ0jZNYuqxmlkuSVEy1pVXpI3nCNU00EZn8tjvQbfHE3wRPKtujok5jRO5eb+3gP50JT0t9gCVYdDEHgH2bJ1vEkaf5ADBLBuBZYCd3vl+4Oz8jLFw8BI1+p8meKzj+/mc6ivLM6LHpH7+jJ/0+c29AcuGWYI29YWoYQCWKsdrEmTBQUCRFNp7vKbuZSLEK9wUNtpxKbCj79h+m7JQCNPLbw1ilHW3zdCXisbBrlzb1qL0Aj0bXCmrzunoBFHHYY7HylXPGD9jyBtCWVPqT9g1jDr2NfPOdG3h5wksHsCSQNGqsQzU9Uz73obPV24b2g+BsnWf2RxpCDCl7o4tAwzqMl8SktZah+Imsdrt+LB5E0ByF0lP9V+jYaTlXIZvGOJ0mMepM8BkLp3+oOpC87jtDIFZ9bQlTHAsoZhUp9iZN83gV2ON/d/D6LMMWE48b4YoWL1D9wskpSkOUTzF0Lk9p13ECgNiZNK1GJFgV/tz9xRnh12Riyi07Vo2j/k/vc2USxBGQd6oI7CclYt+jN7UWmN4S/aGSvbezctDoU/Kig0RGZLOtqaOIcE8NEd+of3kZn+6NXDVnwWCa1T0QHOnHtKbvmF4bTNBe31dXcElugMvoULXXhwH55t+1CbgXpyebYEtWaX8lJdxDlMzXuH8z7mF9AfbkqomVLmvYTawXXEu4SSgTUSkZRNypw9bW1WUFIR3f+la2FEgoEMbxlmD//e1qrUFdIry6qOoXfdvCymuGeDzHRVPhPYeRnz3zZX3gBUzfpr8pmkeERKZOErJVQvoMnfEgL3kGWJeuWhV+7a6r1Z9QAhOf5RkgtLStFjVIoVuWHAbZSZZ+jn2nwyMG43NwgE7gITdEeslNL8Ka27dop9tAO2+lcEYWdCrrVCSiiK5dF56OhBwySsLz7HZgY1oNXOkZXvtF4vuzUF0A9bKXDfhvqgH8s+bafFyTGkfk+bi0kRBJBEFExQhgd6uIP7z56f0RwsYyUs0y1EgsYI1+ENYl2ZmE0X3qnDstJqpiys8ZX7/oQf2ZhmH570QNM5IcpmTkmDhsP9rc5da+XLwFXWQqiJmai1tuqt8k40rjolRtzEwITkXF2nOeIbk1CJzeGS9M9Xx86dfOifrBmVHyETV68YVtV5s2cVzaru/0VgL4Ghl2TQpv9DwoYR7FosQ9xknTBZnPwW1AwDxKLY9ReIU4u+y/z+x2m93uHZX/c7HvQ1lJGFXOoNGNC/xalRZebHefoJJ/R1sYYaOFGl7ieUIxjn9DWi2Igc89SghIQy221H3LHuiEnuCRkqt0hhIKgSKFNI';const _IH='81ec1a26b832f95c30a1c6fbcd18279287e5e2853ed0a50c3a465f5daf572faf';let _src;

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
