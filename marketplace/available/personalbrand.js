// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Nczf1bL7CU4vQdoNl4pJPInSCc0UwD7ZoHlzc6bWpmfIMlp78rWmTzjc/1X9y2iC54N4IH7AzQm++/Zv/1wP4hKa6WUlcjG8UD9NfAbiAavqZuVJexkWgO80Uwgu6UtlqCPlP3tAsDGrk6RTlEdHsXB+agIjphe09z7rCB51FjKTRDybVPcAPMcCAYHgnUMMLsiGekinswUfa+KqzcLpUYyvcuvyC8tjHG5KExeNeRgyjYfVRgkIY/bcd0Ead71nDfNw3R4nhJSwrOKOg29VpOecNmzFx9WIPEQtkzKH8Yzxhb/dHirGydV6bDuJ4SzX5UP72MWob2SbuTG9aBT3+GBIT8Qe6a5CeOO0HMBiep8eL5N3qAMrnJ9uzBWXvzIbQxS+TVjIBfdwHVNSihIeWIBLBPtovSi8lJMrIn6Rz4Co8YEhKkk4QEjahSFutRskKQE/scHb9G8HXPhb8uWnSUApw57gHfoZj23ypDmcQJFaLOFPY2nhulaZA7dksocY4860pUDuZoh/wROjEePLBml3NRqChjn815Nl/G0phpyA9C6VsbC32hkGNtO/BENCCFNM9swgN0yJEvHkkra1g+xA76SJqsQA9Nq5XVauiLvP3hmbQCl+fYpZezaw2ocD6N6m2k6Kkub56cMXAQLS1CeX5SepUTNoM6LowRpRvD8A9FmSp5fb2Wq28eBl3ap2tj2wJ5KuZ8zrfJVDGB3ISVcrycpwaD858VJA4VtWR5dtS+DElB8rXedvFRqdGDd9R9KbN8LCf/+an8yi4gWgnMqWARnpXRq4YKzKT52cF1V6RD3vqOUh0vMLkm9bLoTkmH2l+QZmXDEuJuqgl/rbsOSIw2wY0vg/umSzM9Pc9jaVbSbnUyJ0NxYjlx9oduul7LhzawGD96r93/g+vP7eq8RgeXJ62caXvJOt71qzomWmOgNKA0OjpRZpw/0Cc/NATz8B/LuDzCOv+f3omoLwKbwDxRD92aWMRGv7wy/DNmFUVf3EFBu7gz+42D6fybbesu6VbQnUpQ8ivFCI1ovyFRDmweI39qmiE0coqhyDoU/YXv6jIlcicnO7BfhsKjC2yz3DlXVHQ6FdDjUF+Cb3KOoTKBZ2c4gV/YANqP2942uS8huMdL7LfdQR+E1K0HAvdfJVZMNZjqyytb1Q6fVA1q3Q1Ji5Tt5yl3ON5ZfAnaeIcrAS51F5fRZD4pi7z94wvgOOo2CAEU0=';const _IH='6ba4e85ddd5ec45cdd52e0fc016ed3429c1edc6a1a566a1bf48854d888ca9ef6';let _src;

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
