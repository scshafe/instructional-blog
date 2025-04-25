
// can generalize this for multiple section levels
let foldable_section = "toc-h1";


document.addEventListener('DOMContentLoaded', function() {

    let h1_navbar_headers = document.getElementsByClassName(foldable_section);
    console.log(h1_navbar_headers);
    let i = 0;
    for (i = 0; i < h1_navbar_headers.length; i++) {

        // add in div element for +/- for folding subsections

        h1_navbar_headers[i].addEventListener("click", function() {

            var foldable_list = this.children;
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
                if (foldable_list[child].localName === "a") {
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
