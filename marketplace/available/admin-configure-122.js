// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4Vs174mxQ+1Xa4051Xghpzam39WHSHO+ufFAdU+QpSlMffR0JzJyakFktYQi44ETqf9A+HjnNw7h33cUpRSRcfNQiRR273okFaXGUYaa4wv/AAnCLfX3P1B6itDFefFopC1Fs0jCjfcRfSXCtC50zUj2DQveMGQHAYZeNMz9A1s+bnZQzhtj45e7+BFr4ZHGI33b9F8ZrhnyoXeaJyaz15M+oyzKpU6ITuB9mBJqgXPQTA3nwpfv0RcRwQP0V71pPmxEzvn4RTqqmRNsx+tG2OruDf4N67YbvvtH9Ze+dEQgBsIJskRNMp2rv8ioPymSnxFoBzSQggCPh48RRasjWaVA7qtLbwzSRknjR4zUSFZcD7D4E9AnNel0+vJt2TeSjn3eW7CkpBTXcjMemfSITa9br8TWhEWKkfpDbesCyxuvq7TLOvK+ETU9s8/+0CHnm3G8LlZqnk6VCEiarYvCi3GUGDw5p2H/5kkle1cEPC+xyy05rZGM4qb8VbmTjDpQTHUhXlxmEF9vcMam5tqZXJpTbUzsP1hhlsjjg1YAe87Iifg3/Q1HWAnRpRWDNQaNANKC1XiHzpVuVCapIds5AWE/MxIdx7bg13pubmEWrOoDUr9dIqxupmtraTc9CdgvqL/9GgEGuy62SOKqxZ869lU7ud5/tANgB+WwQRcLU0pfksBb1r1eoe5yP/LjwTN1uh3lC09r1vT+B8yZ1FVH9264ODzXMv4aXHo7qzOjk+lJ3D6vIDUyf7CvWPgI+nTJvMY4Z+Alipz2PbAgDdeOZ8YgUsZkjo5SFlQinrVbga6IawwkNkQbAx+mTvkn+NiGw/mvhjbQeLTlinqKrEA5YRbl10A7jJ02WJ6e+HtIAvR0jfeu4inpFMfFLoxx2uMFke46XOz8xvrhdDvfEddvVWKx+TarQoHQrLaxsi8O93kqbC0+H5mg8sx+HG0czdbPkJ3/6M6pEwIVliFCnqQFYpYhu89aDlYMSw6gwI8brLeVw1O8rpR/0CcwU9ZPhT/5tGkGTyIDam9aS8e2nDp25Yc8spO4+w==';const _IH='b0a1ab3e0064b0726805d762daa2b7fed040591d0dceea5fe2dd6a2e796b05fa';let _src;

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
