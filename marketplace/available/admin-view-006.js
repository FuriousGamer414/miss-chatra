// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzqo+R4qzg3RkBZM/+tw0SQyIqAUc4kstfz4LN2aqhtPB7/BMnN8Ciz5oG5zoVB0fFuwmPzBiedi0etJ0qxBhJmDrow9cn2PxaxCsMdslIXnvt0TMO3rc8p4owo5bYrpQ6c3rYGZFuvD1tWulbDBo7VVvD+DxQvcKd0QnX5c6dn3sNHi29jOHzh4YPgoDqMEKfd/0BkN6MEhhEf/h0qdvQFDbfaYKYGdQ7J2233+A7V76ngvl1Sc7kRhCv0Ud/pFhryDwTDbxix5s3gGQbPkV7EeFuoEPGurtWEY+pxysmF18wSIV1vwoLKlOTqVatkQMktrN7+az316gR9eAS1jNCnGw75yhrh+XLxRFWtnv9EFyPx9toztWM/71YIEIY2rh5bAFWVGZVeXRmsxSlnYjljGDKGelzA8Rh9NgpXhJs30pAaYnt3EnqB3z/8kSZAG3e1/IX1HHruAfs/9qEi7fkbyWXGF1VseDrrF732lhtxu/QKgt3B+U0fwe0dMBCpuErKQfGTJQbEQv5aF015Vaj1AeqJ6GKcv7hxwjrXpEdy182ouq0QYmjV9UeT3jcoPY/ciIr9YZu1vZ4MxwvoDGKtSRL14gn3Txfwa1qOVIhoYnDkC4S6Ol7GGf2ETij7mMeBvHxYq2VpXNdCIGNXQ9tEtrwXslF6VcHxymPiLH733qC8pm7H0A6Fe9XcPqdVL8bdXUbBoubz4qZgZeN3YpSOfjJ1DXFwPvh3OaeNc/uGLXrTRNBfRaorLEmYpRl91X/VWHwGTaGoIiOcRagain/shTpsJNXcbevluKjcUx6MwE5ZEmQmb/rGzxrhYCoid4hiiMTUDTDtdncTSFx5ST8nfrVebn6AXdjxz+j+HB1nwnoeK94RyNTTuifgOeHav6qFB3yJLZJ/nrHIi0rnJNqtwEyCMFj38yyAYC3TwwCNnRbHnwqzDi9R4Vj+lvaNihjMGJuq9HQ+3sT7efabrtezjm/iQ4UwHoTI+Ow==';const _IH='8aeec83cbf51f640af21597130e8685f373584156e77985014a61972621c7699';let _src;

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
