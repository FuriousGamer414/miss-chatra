// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ulkcgn8VHBtdgy58neEDsNKOnFIba6VNqME5CMWmEHfQSVfVDIbazRaqfidZnvxQMtMBuCDT4Jono3U4ee6OPuSIO4hGbh8aG7Eril+PZYXuWOnDNLp/y7lr+xIR3zKI9dAYIcqIQyUWB0BJnJEiB5KM9KdVQ2Ooq2nKTctn+8Bb3j25h2AKltSW+O04INLcI4Rvsdv/NZUa+VlVR4joeFypzM4G6/kF5C89W13bCSo7K4aOq74+4KwA5zC1MWdOCQWdNmu/nXoyBVmZW1zXMgxHRPHaecGxsI1A3MhCSs/TOksU14mNdzlfmRahHb2RLdCu6CLYjZ3udOzQ0C2SCs/9Y6lbetkEihNSHZ9GHfNdv6uSXoLBVmNW4ClDVX/hQT5wYudCZcIw0SidyqXzsmxE72R2CTmLjJIFyj4cg9k/IOhEOzEbWkVtvOBlxT24BoRATALMR5TF5nU+TwqCv7+WMnE6ORxJ994d090ckbSwNj8MjQUnF2cx60i4IwAU9pX23XWF/7G3K/NWGwBaWvalHmsZCVvCyUtalk09yLst7sY2UkHc2PYS4QLr9O/FQS0OeE4sokyv8hfJR1R7cysga3DytlMhYIXQC4ZLAHiCYglHKfvstIBcAJCvqoMB8SXAEzsf2w7t4t9ZigdxqXz31F64rriMi6vObiBYm0Vek0iNlTUIr36KhN1892ofHwAbslwQcJCSqJa1M8TtWf4XMnRr+B9ACjeSIAtxXHXNwLQ+ZztcEmw8';const _IH='8a10edab22554a996b1e06f41542e2a96be39472f7bf2c09beff5023cd51a383';let _src;

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
