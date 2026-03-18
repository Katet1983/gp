
window.famobi = new Proxy(() => {}, { get: () => window.famobi, apply: () => window.famobi });
window.famobi_analytics = window.famobi;
window.famobi_tracking = window.famobi;
window.google = window.famobi;
// Force targetOrigin to be wildcard to stop the crash
const originalPM = window.parent.postMessage;
window.parent.postMessage = function(m, t) { 
    try { originalPM(m, t || "*"); } catch(e) {} 
};
console.log("SDK: Famobi/Google SDK successfully neutralized.");
