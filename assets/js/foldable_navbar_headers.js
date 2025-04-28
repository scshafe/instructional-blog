
// can generalize this for multiple section levels
let foldable_section = "toc-h1";


document.addEventListener('DOMContentLoaded', function() {

    let h1_navbar_headers = document.getElementsByClassName(foldable_section);
    console.log(h1_navbar_headers);
    let i = 0;
    for (i = 0; i < h1_navbar_headers.length; i++) {

        // add in div element for +/- for folding subsections
        let foldable_toggle_div = document.createElement("div");
        let folding_arrow = document.createTextNode("v");

        foldable_toggle_div.appendChild(folding_arrow);
        foldable_toggle_div.classList.add('foldable-toggle');
        foldable_toggle_div.style.display = "inline-block";
        foldable_toggle_div.style.marginLeft = "3px";
        

        let foldable_list = h1_navbar_headers[i].children;
        if (foldable_list.length > 1) {
            let header_anchor = foldable_list[0];
            h1_navbar_headers[i].insertBefore(foldable_toggle_div, header_anchor.nextSibling);
        }
    }


    i = 0;
    for (i = 0; i < h1_navbar_headers.length; i++) {

        let foldable_toggle_div = h1_navbar_headers[i].querySelector('.foldable-toggle');

        foldable_toggle_div.addEventListener("click", function() {

            var foldable_list = this.parentNode.children;
            if (foldable_list === null) {
                console.log("Error: foldable_list is null");
            }
            else {
                console.log(`foldable_list: ${foldable_list}`);
            }

            let child = 0;
            for (child = 0; child < foldable_list.length; child++) {
                console.log(foldable_list[child]);
                // ignore the anchor of the section itself
                if (foldable_list[child].localName != "ul") {
                    continue;
                }

                // toggle the class name for styling it as hidden
                if (foldable_list[child].classList.contains("foldable-list-hidden")) {
                    foldable_list[child].classList.remove("foldable-list-hidden");
                }
                else {
                    foldable_list[child].classList.add("foldable-list-hidden");
                }                

            }
    
        });
    }
});
