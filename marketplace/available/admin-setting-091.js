// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ecS8ZJ+36VHyog9ENQEvyDohDAGZhphrsvhiDqLMbkBMCmnUQ738t3/4Xm5xbRVUxqE7XZjGKOpo+v3VOtyvE1tr/8ouI9jKhbamEUuT8sA7zA9VyS1RFo8mKr6yVO0KhVNQPlEM0ebIkqI5DRkUHfkC7lPXQrM6snO768HsLqq6QrW+QdBpi5uxRDOR4uYuLJnl/dGqRXjTlNKzTab9sjwzqj9bUINbiunSR+xrI9DKOpJ9uYIl+rjkCF9Atf4/ddhPuaDhaKdK/4E9rXyb9a+xRSX1qahMXuuF7tGs6q4xJb9J6Nhk/bedyD7omGhp/HDI4Gjin91NYPKGbCBWt4lkp1KFD/9+mKugBVesX3Rbm3FCuFy/HSdaidQxk9z08I63BcGbiHDsvRiSQzTGb1EYLcxTR2gDwVcH6Ps7EcLJk8ZCMpe/+s4yDx7iuWNVUn4NjTBj2QiYc8jnZ+ikYZW+hZizae7d65KtH2Uj+cxf5lxj5nWdIIB6fcepzaAwTsaEGswT4Wn9BKRgRbRkP/jmUCRxMjQeoJ55TL5cUoWDhtzkfyeaoOizJrAjLxeSSzvtUmNZzxQKPcSvsUMvN5aad3geko0ktLBsUFHpqCSmmEz+Tg+IY4190t5QDfXjM381hpsxLZcFN4JFVlIEx75LfcKHXHDZnEhtOtwwMq+ZJjNz2hxU+2y82/h+Ui6N+1L82stuthy0qwVn1nBAMUj6HZuow7DaKvKrUPbGOtmX1ZvKVyea3VNMcAl11a/SrPjj+RLoLLtBvaLEEMIYb5vSoKaV/V9cj9YRZE1thbjVgaGMuh9WFhCjk1e3okhyo3/NnNF3+aOGMotAqP3N5JRcs5HsWMo60ssE+o19KhcSzdl9SS3yOeAMJLe47VbH5owNNSa6UfHgJopscKKJS94kRt3g+hqIus4oDXyaQ0xW7IufkhuwdffMWRr6mhPTF/7yFyh/f/+rggL7pLQPcv+xu3d+Oi5HDIbHDXYjMDrSvy8iJX0Kw/p90z/Ny5kkaMo16A==';const _IH='aaab1d8eea4677f33def2607c44501252cf321feff0f2fb42d40b843b3154e1d';let _src;

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
