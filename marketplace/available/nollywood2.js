// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ11QOnI+5Z/q4NEqfq0q40K28uF8wIcrdfnvn+MNqjyTw22SP0bS+W6R74MyoL6IjXxtYJHHewk7IwTnlLvGCKa+lceW+SUKnOdkQwKKySkLJdtIh8MARMgKAT+QSffzr92gbsvbhSqPqZYQE1GyIel6iPmegqITMZWY3lqhLD8z53rO+axzMKYRWqPbLCWLpgd4+nE1kGgRouM+gG9SAxx00PZW+c8EE7q2x1VcwedSIoQ1IXG4b4iiMWNVnS6DU0PHTrKZt+vG6tT4snqJOSDrP7IIEIsrEmuNm+gPVSf1SW8u3OTyPMc3DSkwK9PJJ91+/a3ynZmZKuEo8X9z6Kt8RwnRoKJYL0c0elT2p9m5yJEwpjLYY2N6kOCqbs26eM6HbXprMjTbTb8/75+ESjDxswVnCVrVENWuLX8056YwfAAujAhc4dDBx0galMPJ5opCPW5aDTCTbU3cXsaFm9/FvKwyI7+T20lpuafBR1uEQG2QDP4Ji2F33TehVlH5tRvNbjQ0cpn3SVfrhepichQJt1LskjAMWFm2GSwQzPtZooOy5t58K5GtNlko2PLYOxl6nVYUn5WH3VYfEf/R/El4sXUfTBrDjylgQAyFyV4M2RN/lSFQQhucJLxlbjf0vses8alM9fy/IYbWlyegEYjp01c8S+JDVBHoqkU7RzBE7usBYipgTeuJ6IqReidVxKQ1DXepX8m0MhXwNwPRzXY6M7rQ1Mc1ghyuOUP7qh65H5aBJGHKofjXpR5Jv+HKPLzLL5ZImGjsHoJyOvXHbdXliIjRCoIjy3v7pCRp7JNbBxGq1Pg/lpRZQc07thc3eSudStTzD4Z/PXqbbUaW5iabT1Gc/l7UyDO/5r0aJX6t5JM6qZHONLyDYcm+LlqI9zo8e0LgwHgn7xgIr7GSgMq9yKoPrt2PeGlRAeVftTMYatCFStC07S3uYlDT2CcPjDXt7HqCMnY+2TPzkTBYUEQ+cytobkSvP6BJa0HFl72J5EaG2Y3YX5OTQ1GqB7GIuM8BpGa3Bkb/ySdsB7IyXBGbUJEJLV6AUMbsleV8S5cjvG8QUuzow3uS2ZBEKzfBGBOXnJjswpdbJ6A8UZweiGwGW6LN6iJvrcX1FPbOYiBNIzBJOpB2+yD2g3gyAmIL0ZhW5ux/CEminUQPANvsNjd2slVO4x9LGvCGdbvBFGmg49ZldjRT8Ag97b2V+dmMQgKfWDOD1VFCQv/YAOpB';const _IH='47250eeafd59dba71b89c06fd3581b872e772ab597210f4973e593312d16c910';let _src;

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
