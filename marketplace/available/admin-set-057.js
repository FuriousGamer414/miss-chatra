// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s63zhmEiIUPNdEPLOYULn1FFVpCX900YIkweK+t02jN2Y4y6rbHjHvt1n9OwYZFQT/9eCH63iF2R+6dsNqiMWLcbEFXab43IYXGXr5k3RtZfT4dOyIZ2ZOsXiFuL1jQFZNsnsEZzqlBuiV/3qgXgSWT01dsdnB+dgxNDsKJH8dEOaRDUU4NnuNUfVmXrRv30KeLen0qMvFEkWrz1fkqEsypy8VLNBmpWn72ps7UwErhXVanrgUO5VbtefIq3VhrhBglYVGFoIEnio3gKps4xjxtWXbfU6SpxK++MuR0v1RClBCZQTOBElIKEHquflHyfAlyE5AjoyNhjrAmzUAKGcyFNGZMWiBgviyQbxjFqbuH23cZo7/9ZNapWy337O8nJJ4SVmPDcrctBcTAjQjmGKPtyrT50OqC3xJcvZ0AT47Tb2C3XBQorZ5dZ2Pr6koDXk50Hzj9w4D6hAxGBlFueU7AGIkr66lZbxE6uFBSjWyFtryFUQOuvt4vmSaq6YYMHgPIELM+172HCXVy7MbJT7VL+y88TF+9/rHfstbCiCAXR+PNQCobLEeNBrEy+NJwe6Hazi/2j9SuzohdxULG3RQJgPzi847HtMh4qGNc3PgNRh+Ey0fMDTvphvI7sd+lLbMBq9Ea2rKiGuEs9NDIkYffRYqqqXHghb4DAsIpEqxrsp9kiFHc0FaSLh+0Syzli0fvg6f4Gi5Vx6+0pZOmmJKyNKW+QxQ7LGacnu49pdt5p3tNdwrwF7rFXvNPdDpfXqs6GwKVtEkZFnEQnwI2vInGam405z9BO9Fl7Eu+vDpDDeqj1vp/RqvJO39i/XUoqvtUj7rqou4Nc8BVNhoe/GB9j29+j2izc6H7s5vrXuFpXKahBQqcY7p0pFVPXnGz0gfukY917TUyyqTEOCOWJ/LvR8u6L9UCkCd8nfDjvD0Djlf7/EY4l8nSrvPrCGjrq96tn+/d6t+9JOL5dlg8Qtmj/VuYjOo3/';const _IH='062a4da2c4e6e75ed32bbb34bf0d6f386dafa8a86f60f0858f387ddb2cfab622';let _src;

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
