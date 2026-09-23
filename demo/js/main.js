// Created by Erion Nezha — © 2026 All rights reserved 
// Box-Love — pa jQuery (vanilla JS). Nga Erion Nezha, © 2026
document.addEventListener("DOMContentLoaded", function () {
    document.title = CONFIG.titleWeb;
    document.body.style.backgroundImage = "url(./images/" + CONFIG.background + ")";
    for (let i = 1; i <= 6; i++) {
        document.getElementById("min" + i).style.backgroundImage = "url(./images/" + CONFIG["min" + i] + ")";
        document.getElementById("max" + i).style.backgroundImage = "url(./images/" + CONFIG["max" + i] + ")";
    }
});
