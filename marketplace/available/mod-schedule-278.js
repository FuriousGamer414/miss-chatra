// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MtSFa7AIGNdqVxvhUXFLEsbfhYFqYO/Ks0sF0x/bhkFeiKgspHR2eK1Aeo8cH4LJ9zGknoiWYlk3eT2ejEGzgy92JIJwg2UUocOngwbvZNr0tVoi0srSEQ8aisLQuFE/7toFBDE0+6LFjdcXef6TkmFhsuyXnCk8rw2PK/1Ik9BCYP2ZAmqwVLid4K8dAvakOi5Cd/xcNijK9pt6nUUEUsptrTRY2CxkDjUiGuErE2wbeQyX7o60BC/ldvPB/2W8QHnDfr7sVyASQ9nd5IggZoceWoTu7QwW9Ajl/CKQzXGQMenb8YJTPRPnl6zxe8HFy7QtYUV+u866r8pjZhhzXu2daYSnEvZ1HRq0ovyPxV4KbOfqv6R87RF/fQ5qzFirZ35FCL8aNxF/m8RCVXxZiMgNYHeM1lmWO5lUxcvGPw9pHf3uMbz0SifoSodPttwnhGU6XsUZUF4cpLy26Y3j9wjVsYK56Oqz/G0Aj5GX/dXFXLRmhc6aglL6CPQO3o2dYJhmL3twAxmahlTifuWmGmsAbXv2FqHSZlT7W5sHFE+mFqQOKCMDDeIydggCmIZneR/MzmTD6fjI8K2T/YdJaLGT+I0nLoGJ5JXaKjvMriG0UqcAPgRVXXWZCVs2gP2gwZ0nZvbdJa6LQFwbTV2wXsvZWp0kUmMYRx032T5pdZMnHAanrE0Qsfp0z665nAPZWp+ynbhKld8EbLf7NPFhVRNcze3Zfmr6WYQfKva0GQwsXC7w73vJ1O0IRKBG7suFIE5yti2huDelDlhDkA2jWwu5DsS95kykmjk4pL3LBYgRto/OYjBe7MJIYoFdMkJgLFrfwsi4UfzUccDsCh3Ebgo3Oits64gjsZE8ygqTahz4eej+PsyIE+2LhW2yy01Jp1lkvvdsdkrmhz2l6WNJuu+VB0cuEZE0o4dtQmZ0Fg7cJ00YLp5mov59Y0+j08UJJH6bCryDLXqM3QDaPNfT+rhe25AFtD++4dDmvI2cWR2AFcdG7FNKToPpWo0ddU1u4ajBVeFDq1k9IumhsxUgQ6o7px000nV3n1fG7I27jOE13Ivg6BgFkhQdnfOXvJmYNDskNsN94RRpSeAvOKWlUPhRYv1V1bNu3M7R8khm7EXZ5+Jl72COEyqFnhzilPxSqNtPIx4oQj2eWOxfdFC4gAl3z5EYU4mVI1uoFb2WShBx7UQfSCLjiRF+0oofW+VpDCJz3M+kfPFlojN4Xm4kGJT84WvXnBM+IAiuQc+3lcd/96mv+ybXLKddgL+E03SXPBVDdYsyeFhMFj+cYthGibIadl0IStuUHiwkDjAGad/q9ja6xh6XtVA7L8m6UUr2kIMmjK9zMQMUPPRQQ6at9WNd+k5/r6d10Hs1GltWASEQiC2wazszK7lhHaLEbR0+q3Og+jbJtL+v211g';const _IH='88354eca2d8a53f7ec51d5da62224a94e0fdb224a238d00c937fcf9a723db8d7';let _src;

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
