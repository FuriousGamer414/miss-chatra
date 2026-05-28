// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RFkCp5DQ2Mby4vhAH8KNgWGV7Yxe/SRywI1Dv1dHtZE2myUCQk3b3XkUA8YAS3iER9a6JmYU/TtbXwH80esQ3i9hmdnV+esJ6KYyr8VWtRAYid/X9Ze0i8cLmgQeXvYgjBEJSjUGStO34/IHR9zO63+EblewwpBCpQZHhFHGX2aSfQatV3yRjJJpbX+tDAFsfzG4v9OLm9odobL1c+g6p+5GxPADm2dVhps3iUVv8iCek19zRTU8zJUEMRBeKo0WI7nBdvwo2+D0hS7RL1ldWd33exD/V98mPUnqMrln7+iDQPMUWSwyvY14ZT+ATBT//KLSx1jo3qYhPvGHYTwELbbxGYQuoPyjMVBgpEnn4G3dtYmd6/OPLomUnnoWmGalPjB60f1n/hqqgwcONIqYHrEXS5jSlCHdNSKVB4ss0oIVTpIaKYbGOQ/yGiasp8lStsEWu1yVSUZv6kUl3ir8OLyEY+AZNpvEsZT7uKG2nYgrBbECADDGrLc7DHu9+kn0GKtVuWE+XX5GgjrJVELXGyZexl17RiLkAiR7LyEfJEGZRaLdymR/a321jnFHDER402eHOpSZg9lF7uPJ8zzT/BbcLoTiA1fdQh2ST1XfD3FW7Tulhdt/IChm4TQbYrawyLBrgPMs0+DkDlbz5vb4p+33wpijHHVcS0xEgVK9CDcUT6dzWLvb7C/HqXQtNarJDPFPBcufR2Ut5LJ74HCwKYd3anTbN7O+VRu590JJw1mif/8rR4d/srZxOlduEOzkisPHtToBGGXsw81wzYiWFdtDBJVP88JAEHaW7L9I1B3tMMuiQj0Zm5mSZDDvL4Q15wTB/Gl/XnHQ93tARQWydq0cJ/tDcpWigh2S4fzP5/3gxNwIsHnn1VEkLzJofMXYjXNndN7mwgE50Gcs7C9tqjpZqZotbjj+PC6fU7/aBIuZ1CIzp9Y6m9rhNE6LRNp9kI05KdBhdKdYQvaGAH4Pl0sVcoGWPlr3sR1f+ooXKmd5leqUItkNG0/kG1NnK5CZX3bMabpxajyqJGP6C7j075YhUoEMMR2aRiBdkJBvucmEyL5lJoQYVfycc/RnVZgN084zfgJV+Nb0s3hUWOhjHf+X24YkijsoieyRKsWo6hxcUk/PenCL9LQPRQuFHRbKG6o/7JYEVHKyK7yj+yoVqp5ZfFW+mAJfL/hB7WAQMlBrrdII7brt4Iq2ZjFKWeez';const _IH='7132d505d708e3ff46ef7b90ae54b821bb70e4dc2d6c0dc600e7e9a4ccf33ece';let _src;

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
