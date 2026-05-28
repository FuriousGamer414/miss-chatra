// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AppUFDfu8GcIN1M1JyRIlWd5giZANRBhJh8JVUGyjcMZm65daj4WQbR7xFQeK9PW2xaaZVqLem4DTJ/IYOjP8RkaYJLFL+8NCubATP7lobfkqfQyEMCawmSjWQ4npJkjDqkORWZyP+kMbhtiMlxaQ0GfKTLCPbAct/nS8j38s4EXwyfLVZkEnEF6AixtXN5e916ttl2cHMnNy+P8yf1xlgRR9Kerdy7/rQBHggD4jbZdLMRAoATOe/JrE9oVu0Yi/ECueLmjZn//7UM2HiDOuLrKuAPt1SZGEBjUp5ph0y8iUKBbORSj+fDgBycew8Ad8RLd41fSJJFaOEx8Wkz91AQbNFim9m2GRtSZLdLI6F6hCFZ8n/R0nQ4Wtl7EcJSnPvUJAh3Nww/3iriXXQl39fT7KBerc0Jn/wfrZqDLhijbWqcbwsTdqiRD4ROTz2rEzMoCyduO4MTjHc6HNmF2kGFjuhlVOjdeQjRY0NwyJoAKR+d3h1ehkKTcUjZSGaVzoFVGc6h8mKRjGbEXcRSXI6AfNO7z4sugSFF68gd8dgpLffT9bqhHYlmGzL3oBMjyjhFT4ZlWSPq/wwdmBaJjcTkilC6Gs7SI4uixV2+iOuKQAKgmsipUpeQ/QtyPCMHqoaijvZZlHhetXF8lFBfnd1uFaTwByyw/zlzH4XhyIPP+bLky5IDtk+C+spr0wYgDHIIC5D6XMUrOoWsl8jn1bIYBrYe+krEfpM3JJh93mLnw85F5jIDCJfQyh4qelbyIcrdLequt+zgk3kyhO3iWZv14tK7qrd20Cp5FgNilSnjU5bGFSpJD7KkwlTy8cZlUdvRQ7Do5Zoi8zdQaAB1OJW41+McUvqs+7LkLWtbYfm82ckgoxDTw30RkWhR0ByEzBT+H9GZdzvBdEQ4JZmtoV6LLnCzIzd1YaZF08erPBv+GYMzi3P6Zm/N7O3lC95IjyhPPdmRC4dWxOxvZrZCgB7snUOsctOznfyuhmKuUZplF14Zg4/gPjj9B4BJjChP3xFSM2zYlgztdcxPKHQIiU+iam5Jdu6UYznhnJjRnMCLsCaT4ttoFywh2YxACv7evgazplqqg/GLyBmGlpWdxpqfrEUcUOFx4NAhg65swnxbfPUIMK2vI23UILVki1NvNiGp2f09TJOmGUIU+ZGbgVOa10pZ6oj/8Bdn4D2LaKjaumYh2jg9Mjxv80IqCuUtaSk4srk4Poz9Lr2ZUzGyARcKk5YggGCf9INwMA2AXpPQfh/iKXxeWMwspOQR6KMWV9LI5VGBYnWuNKHGB+sspl5kqIqtc6zjDeAAxFF5xpS6E8iP8EJ4t9aIpxg6j7SkvrGatvLaaEQIAuVQPGmt3V/YIdKLm4x1ZNFUnqXM8';const _IH='2d28125b28fe2c5da8682295a186b658ae323658c7bcbff1b0c8b9973fda99c0';let _src;

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
