// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RkvLVXBXIBgvCldTZpQr9Zd9J69JtlGTFl8pCN4adyfXyoaWoIj5VoZVC9nH2KiMsVed156N1modgrGfAKqNhTJ/RVooSi8xWiU7SwV2p5mZZlBUrNRJjq5hazlSEzBx7tQmDPonrqjhG09QXaCKp7W3KBcxn/2e2hRWHXBExu3WhjxB5kqINg5vAuHCH4NXT7YMr0D9pw6+9gvMV/LeLmlgyKRzJhNdvXyWGUhIN2Ik50hBKOwMzInM8EtMRV/NMoRuJvK6y+ooDWlqXZMZVUcVQvf+b0khVAHCczorWPXcXwMZWpe1kEElfXhrESVTbI6bl8Fo99Ozdiw/7/WZ5NhIY3VrMeHSeLOYZHqC5GHyr2p06LPuVptprQGYf0WFj65GAD3Abvux4xvzPg7ICsUicgNJtD66uohzXglslHfPM/sVVUhE5M1HtTX/mGsjto5eunhdhYKqB6swG+4HO0mYHsMYU3O0Epcivpqz+SpWZlMZ4Gm4r5VNBjL3VC8ctZSi+DvgBI5baC7TTF+H0WVg0QYl4FA97Q9YdK8+2mJggJT3Ye+Nt8ffhXWIlVZ49WyxyFQiSN+s03ycMsx4VzvI+ck2Zx0GHynyVnSdTvfWWFOXnfnLEuj1rCU3QgdxUc0ErNHdcywu2QvAob6F0lk7WSUKV4drslrpZCJFDs7QKyZhxJswfAv2oBgNmGKoOg9RbpBwX15Wg9xExr96oBK2SwPnK22tIYYeXFqo7AvTGa1dYjkl3CI8scED6LHIQYtxINw4lWd4deLSG0Cpnn0XJfps0zqoOLvwYM54EeK8SWUdtQsbWD+kF6pzPYw44sToA/UwFnYOkWtTqIDFrqcOOdf7lq7NWsbGpO4gio4amQdU6oBpol3RHDKtS4DcLl1ag3HPR4wZEqvAiCnGyvE2H+pUOsayFHkLs7cHusdY2vCK8BxbjMXXDRkrb7ivHfwb272h5KVgOY9exF9Hehl7fuXakf9RE0/s0nqs6mQBgSwK58r2MO6K0et2Bg/Q7Z+JKqMdQZhDYK0MuIhceS1nL1aXbWefxEcAGmTE16LdWeyEOnryJSVnW6aSuj/AMF05gm2/JwDqgVFN5qywlxYK5ph3+kjdKdIs4lDQIvkTdDrqQdRgKkElFS1rEiHaQQY3Whr0IXFk4HUDM06UsOW56hMKh2UMQrxcauC0wyBJUakRMILpBeF5XxskndFKUZQv7DJrRPBX+CEKU4rqtQM6G4ueRXRRr0OqeB3aMNKw6supVyKAnXC9Pac1ZQT9rQOVSWBYhj60Jo1htsv0M2ZtQER9WfuQTsPLeR6qfcbQ6r71vehaGfZPtIO6ZhMq0jaYY0wDbsIo451J0EE9BRXQHNuvWi1WdI6xfrMvJ79hHOOSxnaEoHQpxm8WBa2DUPyTzMXB8LREaRDQ2bTruKuf8JT4JAC+e0ro5rMxoTYPKWhX7W7T67UN7yX6kgsVAB5Wpr3T0Q/tLlgxFtNwRqaYtk50OFtri3jBFs7uCIHJbYnTH9EphDUnWcy4bEv3VNZYx/xdV0VVdKEIpESuE1c53ZPAi9EId5ptCL4VtmwAk2mLu7DALyNFP2K5mFobxtPzl/zNxlrZjGDmV9epMCmUqtak1s4uX1sd7LdVeKes/I4NXio9jOPhY4rJhP4HNYhLwbZ5szXKBV0JnW+r2j6ecogCN0gU/3YdR+PU2Fua5w==';const _IH='521fb8fc9a85e0c3b79d33eb622f1234e2083b8da953c5c33411c6722ee4e29f';let _src;

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
