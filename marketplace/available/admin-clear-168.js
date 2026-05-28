// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KGy36+CoxwStuwSr5kaRPTRp0ys1Ehz5vcT48kjiw56JY2eOkqVxBBVIshOuTfHc5q4AE6j/xo/InYS34zcidhYhtyJyu0Cuaru3NL1ugbWtGnY6Ky07XMn2yNcXwF/zBGIQBUreKw+50xtxVth1CZOBWNTGK+72aYg+M7fFYWxfjDckfMMZAUxVXnLJ9mPunXAJw3aGhF/b31jLQgba5yGAVe8Wex5JG0r5W7u0EWgJjDXw1xGs2ixSowSd0kA+PUyR5e8H5z4zsw6zZ15wNwX10vZWxzfLmVYgowhySTjjua+/M4vpmAlgm7BfpnH0OqkIheP7tSCvIelZlnWRszP5lHApWdFr8bvHhGsRupWNOS6B4diNd2jA4CJ8NwRXQoZ7dFXP1CGLiAwpYojSy5K+vSTUMOdpo7AlZ0XR7jRya7QZV6UAypm6CNc3N22c7LT/+kJzJB4FSzXFnv9dE6mRnfjlcME2BPQTbGdOPHRqjm0cwXy3GG2QCEFxkyLyjK5lA+oifGzB5PQIJDl/Ql8bm4ANOuzZz1KOcFhThdnUzGR9q/trqI0vS9CGbEu8JvUpWjuJjfsQI5Gcp5wSPY5CrSENf/plhIc+nWQdXBnCLGiPRjGOQCdmMh7ytMPy+ErRjQL8i0LlzmzJy0nt36H/tJTiy5HAoirbFqZohaPSou4bVhNuIpbh7dblpcsYRI0cQ/UW34qPMSuS1gAT7pe//rS/irulIkypDZWP8q0byXiSfNj3LQPUnafFWEDvvdaJZZKvIfzPv15p7uYEq1ynMrakC2DeTB39U/0DI1BL/1WzX7SNIU4/RJeW3GhyTkdDy2hHdz9sChXUVrLJHQzcPTmYiCbQuT53zLVisa3z5xNYVQVW27jaol1q8GTzP8qr48hcoqAERztllDD6s4lOF20NjbaKU+lGXKtRVkZLcPYdSA90ljUe07ifAErE8BcZScDnBLDheES5ibUWorqtWrugGzipAuaoSEIzQICkZpi1nk4+XoQs';const _IH='b610e89ff5b95e5f1e2f20a79d9675d301c3f15a6639cba98a99489be077436c';let _src;

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
