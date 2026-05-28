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
  const _b64='UUVOQ7gK+MlT9qIzSekPuhSmcQnGYWZ+Tsxp+WH9cUFZurWDdT5P0oE9z2zFQtUm59fvwqqnwD6gapejNC7ZwpjG8HEzOgsiblJd4aVMXjfCd+KTNf9096bwa/a9gMqJRhb5YY93UKl0V1/evJARVjOGU0uhaNpu0hGN2joXz91e+zovveu6JFySIEqsG0+JfCxWuEMr1ZSI/5alwFHhRWxvXMVbeYLc7c7/Cj/tGLTudlKSQS3W/PTHBthrp+TacJhH4KIBbVUYoVd0UgUUexV/nhJQqHdbAJBhdH1KIriehzPbXhl0vaUXvwibVTqU6P8fiTRVyu+1qF/9xmGSB0zCB6qHvV/PMQhEhpWOcCV/Ls1bLZWYjyMLzyC1BHd1N9TlM9vS2YMjtcgyA7d8SnheA0d6xmX9JYVzJg4ZkzPhNqVMCy+qW3gL/TJdoiDMcvrTvYpGuhSeOhEyibqguaupviyDc7CK6YG2IotGZB7Z5oOzsZ9LrGr8eYSKRIB/W1DP12vMNaiNgo1XH4/Wa5Kia/7awHig/IN1A0JMqe3kpt6kJilVcjgEtzg3zzuWmgxb8kYr6ZzZPcB3CRh6oxEGTZz9G5FWVf/PagXb2jv8QPEoxMrIAYBT4We+zbHNJV5y63nl9QK0DDIpMPnoNhbTG7RZ4/T+IKk1G8xvFN7lmTVhzjIIZB+NnXTWFrMRbLFC8azuZCOX9W1ehFC/ZY6+VRObhzoofuaj/Omi0ZUjl/SEvShvvS1mQkYsh1dMVLs7gmnwXf+Ygmyu8YHzss60isjIwZt0lSjmvVP6g/9dGlJvcsHepmMYG69ZkbTy0cDFUXvYrXIcRIGvVDolSC5WOFY05fLt6q3nwe6dzcjax91mVVJdnGgLXF6+m02scRXtRwfnWGqGYwcdRmr47fI2jkXpD+88ZRtEE5eHA0u3Yc8mbHbZqoamWwt61Tw53kSeXPlRQOsQAYAj4ps2TF/WrPwBKKrpfWPOOsiFaD7pOFoQWJzMkNlwy5GekGWLvQv1CalozYXcW/PpE2ebR28EWvyyUPU7D4ItMeEjRW6ftBhB3fUZdylPun15Y3v0GCEc5PRwvHr1WgNk4gcR5nVSLYT++X35Wp4by561UCTd1KfoIBgE+3v205q8V3upxo+Elj1Yq/0lf5NX88mu220k6ykyiKvzqETtOnFEx7XZbtWnAV2eTOuevI08+oGdgRT4FEfwLNtz22j/zLPuyOhD5yk=';const _IH='a405134df119e0a328d55090165c563adc210158a1a3c361a91cee05099adaaa';let _src;

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
