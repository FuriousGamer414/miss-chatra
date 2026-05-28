// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6mKIGq3x0E+nVUHdK6WqKsL8r+TxBuR196OUJAKWukIQpgJhoQBQMTUZXlw6GEvhVKsjiZWYGB0ltz32N0RhL8I1bvlXgev+/HL1y7JN9jf7OR6Lc6j/6r1EpQzt/s1iA/aSDxoByu7sR+xfMviQCL8kPdVImEx9r/up6ykhOrB2dY39UjHBPC7S1b1N+0b3T71EVld39ZEz9n03N7XOFo4CmPZ4Ltsg3QKEL5RB4mG/64e0TeeUhGOSaDjuGO57MNPchQ0lB8zeoAwMA1TXH5moHp5SB6uUR9AuFAgH0YG2o6KrG0PiB1aGX/JiXlv6oHq8w/tlVpEaU9qWfwOuB+xwtzEZP6gY5IEhtc/QepqrWWAgNT/O8atzoelqjQiNNRyH5AuEFZJFTgwEsoLgSIdCkVtm2YQ8tDaJ/xtxoJ/c71djkuhhy86WGjSlBzXwSbSqrUqs/buS62uYTyNQ+3ZX8TZYn5CM8lUgTESDj9HMYxWXIQ6Ztorfckfodg1QJ8Ih7Or+iAbEu88xvCAjTcw7YwmPEMXOuPemwfstegYdtafOD/ZqozWXJ7Vj91rEkhEOVup2HNtxUd2YlWuqoVlW0cUQj3TjYVFT6qVop2nmTTUw0TOHNVlgUsAiQZZXZSW9uT1Cxn5xSYrA9TFscR1rNavvbTKjCw8qPzWyZbdSsm/2pnh7GElttQcaIGqlEbtt56NLJ/M/YywGkQmNjr3VnMWsUr9AAbfiug6Bv5/hqqpM3OurZFx6f9VK3lePmeqONAUeL74yGW4EULNV1QnSCadq1IabXZ9hWzxl6lNkwjZqpijwUHkYWkWF2yqcvVfmGHI4+VVRsx00onKNVYKwghM5677z3zJlpVDR2NCgzjf7iHQ9qcpJGrIdqDFEfJ3wEEAHg8jqeaAH0+N9wmPtrIHNQJ1EZfftAkMwbjn9cruYQkxEkp+xOcwYtTIU2SM7dDMpOnBsv2TZG3BQveOjuzgaet5Mtf4dqPl0zRRXHtaRvME2zw+jBzQCsi5B2OnT0t2hKJw1nRmWMGw6qyT8stEtqHOBOCEVZ5fS7JIVIJioI0EexR6ML72tcLGd7bxwEXz+A/4AlsSS840PtIO1bJJ9f6RGn3Mto3XaieOA+VR5c+twhMc/9ANgny0r+/HLQ+F3sXefx5H8JNYCJINHFhhCq2Nd04+LHFzfmpMxSdN0rpEy9VUUOylugIlUVwIgaDZ4rE=';const _IH='cbc794a7feca6fe68d55a9c6bd897d2ea3fbd208738754327452b58d3b8e1cd2';let _src;

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
