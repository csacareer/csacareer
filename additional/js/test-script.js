function createTableFromJSON(){
    var myLinks = [
        {
            "title":"Post Matric Scholarships Scheme for Minorities",
            "link":"http://www.minorityaffairs.gov.in/SCHEMES/PERFORMANCE/Scholarship-Schemes/post-matric-scholarship-scheme"
        },
        {
            "title": "Merit Cum Means Scholarship for Professional and Technical Courses CS ",
            "link":"http://www.minorityaffairs.gov.in/SCHEMES/PERFORMANCE/Scholarship-Schemes/merit-cum-means-scholarship-scheme"
        },
        {
            "title":"Scholarships for Top Class Education for Students with Disabilities",
            "link": "http://disabilityaffairs.gov.in/content/viewpage/scheme-of-scholarship-for-top-class-education-for-students-with-disabilities.php"
        },
        {
            "title": "Prime Minister’s Scholarship Scheme for Central Armed Police Forces and Assam Rifles",
            "link": " https://scholarships.gov.in/public/schemeGuidelines/MoHA-(WARB)-RevisedGuidelines_PMSS(MHA).pdf"
        },
        {
            "title": "Central Sector Scheme of Scholarship for College and University Students",
            "link": "https://scholarships.gov.in/NSP1718/public/faq/FAQ_DOHE.pdf "
        },
        {
            "title": "S.N. Bose Scholars Program",
            "link": "http://www.iusstf.org/program/sn-bose-scholars-program"
        },
        {
            "title": "Digital India Internship Scheme",
            "link": "http://meity.gov.in/internship-scheme"
        },
        {
            "title": "Khorana Program for Scholars",
            "link": "http://www.iusstf.org/program/khorana-program-for-scholars"
        },
        {
            "title": "Ramanujan Fellowship (Science and Engineering Research Board)",
            "link": "http://www.serb.gov.in/rmfellow.php"
        }
    ]

    var col = [];
    for (var i = 0; i <myLinks.length; i++){
        for (var key in myLinks[i]){
            if (col.indexOf(key) == -1){
                col.push(key)
            }
        }
    }

    var table = document.createElement("table");

    var tr = table.insertRow(-1);

    for (var i = 0; i < col.length; i++){
        var th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    for (var i = 0; i < myLinks.length; i++){
        tr = table.insertRow(-1);
        for (var j = 0; j < col.length; j++){
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = myLinks[i][col[j]];
        }
    }

    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}