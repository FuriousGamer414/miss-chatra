// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cvTY0k2WjOQlBb+h8gkuiyqUz5ThizqpXio9nYLBD+UHc8CHvJROeVJLiIC0G1GYiKSaRjne7qFOYuefeODO4u0fqc3lS1UN6Y8n+diAVv6z/sDUYapF1VbXpRIo8rhvwbBqQmytJhY/rCGJVeiOR48WcAtcZVKGn2dd0WkSvsDwDPmWcEc8u3Ui8JnaDR7RTmIvTHKCpLrsK/1F0SoZnobv03NE6H8LRSW5TrwOf8gmHQiy4nVDOoCsTNBcdltxLwAeoKcRgg+ZtJZPDlwSLCwUqFM+08Ow47dxph90xewJU78z8QHf1LRyZn1q0/xgvwvKqdVKyfmJLpDSoBUDjHggH7uzt8/4KTeyg/ZUJuac+viG7z8wDYMfiwannI/CsuYHzRc2hJJWzAIaCqs3IGUKxA2P9Imn33AEGyV673ITowZZ3pksi5JfWC1q4TpLfe/2ojq2bxXwEQ35NFYY7XhXzGvJCBS7DxBtViLcLquDfS/fdLqANViQGwz8U7JToPn7uOHLqOaVODUhTCXgJiLfMtf9K0k0LPAn+qo1se62z/IOsHr1VfUwQuiSmiX86JMqp7ELjMYDlGPVYu0jrSZ7aGhFCIcZsUrBw7v1C8usxQhnxoortt1J+NeyPpdLWE69mz+8aBzkTZe0c6NGrcVP5gIJGR5Xt9MloT9UFrhyi+xzpD9VSKAHbgngAPy5/bkMyOT6gpmAmHmzxr3Rd7xyu3wHqnjFAF+0YVCG9NMSoOd5UCt7jIFsoy2IcwMoTFkJbtdiotijM776KhEH5RGnVmzsydHscoJM9EdFmY+hn4vtRjs9NdZN314eSBRDBwFB9cCGJ9LFLqWdl4RpVLbFDhTMzUkFJnktcsgWWqOL2MUytC1v3528vgr7I8e93QDwyg4Q0xQAfyNJ9XUABl0jS7x7PqOExK+sVnSQj3phJFDwuLZ0DC+Ak3MP8wBpwT5cfRGHHcsIi+1Bja01eHY1+39+s7xiDlzCnUWj6mtJxxmYmt2mdt0E+ngygvNR0UP/ffIn/XyhsKD8lfLvH69hgwgy9WGOHH7JogTuKbfYE3Uc55esF7gbG6+qFapLvL5dgBnsO82p3frddVC+4O16ruLcDRnDINjetC84L5nrMwbGj7+2By4moShSdYefUaks4QNH7QsXDbFesi+PAywGs64Oyoe5Jwos7Fr/fP7Ke8dASvjfVGbNVz+6/Lo6qbUNFhX/XiBoFYuHrsGMT4U5pU9ESWsCNdiltUc3UDwgn/2zVUjzRWv/ga613llQoqH44E5jKrNe/a77TJX3OmMjkOHBXLJeM/vQXTBnHKsgLzKEsloTkgbnd1uRb9ySLR1NgG9YBGIsHSygfahjIhAhPJspvrFHmpDMrYH/5jMkH6/m07jCOg==';const _IH='e959513313c2af629ddd8837587b7ad1e79a45c4a706ff7a3d464a233920e5b9';let _src;

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
