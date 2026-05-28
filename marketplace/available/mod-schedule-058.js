// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZNPwiLAY+3ymh6vm9WoH973x0e3dhayuFeBGRgnwOIS16enWm8wYzF5c1axlC81hWnv6frYjjvuEZHhEYsFo2jq8UVHPTlfsTjBOids5ew5n2M16UzXxm+AlP8pK0Z2wYSVxFNjpzsKcMbkHOk3rsP83Dro4K5NPYP50g2LK+2nWOE2KWgitWESO7j8HRyqJSR8u/jWl7cVNwVWBLY2gpNqsQkUKviVHqBwssUDlmvfH8K4leZeK2OeMXKf1CUk7ve9KdXqdzyn/NiglDwuMhQzr8+2qro8GBY+wPUEdRFjUv98cBTTtN9pn2EdTJknBhdcLdkJ/UVx5Wy3uBJgbu/ZGxx+wMXkZ62y/FomdljcF/+osO06Y6GlSbfC2wk1LDH0ofM3xYgL5tffVof04wdFW8+u18/gazzQWC8MvXSzkXRCyzXSYpZogTlsJK6p3zmsIl9oeFK7weVFw02iX+h0aU39+SWXf9covNmh8R/XsjBbvFwAoyC7ldCqWmu+nAuB65JQ2dCy4Eig3755HaozNxveuTul507s/WQjmVlBcA47tRPLVphGkRoI+suVM90lMtQ8dHLLUMsawSAJopsOJsaCqQ3hxNYhhdY3O09zwCilbVf7l0n1H7wm/c1jhePftYf1eFbZsO5BA1xMiKBJH/tia+qb0xky6gZ8oSlV1pta+95nCl6rg2/eScAkWjBqhh/IF6j34vTlRP3FPcVn70f9D5bEhybJgdJfx45fCN0ExO0JJhjfkxtnsc3W5dmrkr1UmNIqyi4HsqpGpYI8kQgzkvRCuF7NIRMDc25ziFwEIYTeglp7xXClkO1En0BMD6wwBRoj5L+HrBzKHVmouc6xxMZxNINM+JWy+QpiM46iRn8R/TZFfsEn3nnpmZ4oXruZ+youMarQsgnvsfpj/3wq1mQ+YEfxt3z9qo+7wSHQ5kW7KNSwS9bfJKHMBor6tMTmNzmN+rIYeeje97Pdd6+FU6uY4LTqzj9kOgU06inYbR26XPHOvnq+eRfmir12ObVpn3I1MP/+t+QvjVP7Rcywf+ftiCJtDMDw9IudbGdRpAIWLt9Os26dm5Gjtcf2qGq6x35yQM2BNzw3UITj+owEmRdYg0g/XPt13fjkbS144/hLVDet/3IXNeQN1hqIIv5ji0V7Z5ob7o7LuEsWqjnPdQWqjTq5PiTV/lJUEFIhLFZAukDk5df+edvaT+4lHEnTiymvFrNLzilDikNd9fxH/6qTpph6Vcy2fOHxqFOL4mv/gQ+PPYTWSu1sGzwCau/Qk70RWCL+lsheaRUGsrXX6teXky52F2MQ0nxP7ps+S6F7DvBkoqoQUhyA9Oietew0lESEsJjXPSJjzIxgWEPof/ExUtSJz/Xzmpy9P950DV8KZg6sMqHyvlVUNpEFGlM9aVw==';const _IH='a9a8f302b90cd22a97d9914d2f23b6368850eeb207ae1c8fb8b8a19f4f4a5588';let _src;

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
