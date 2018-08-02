// Convert the characters &, <, >, " (double quote), 
// and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {

    arr = str.split("");
    console.log(arr);
    for (let i in arr) {
        if (arr[i] == '<') {
            arr[i] = '&lt;';
        }
        if (arr[i] == '>') {
            arr[i] = '&gt;';
        }
        if (arr[i] == '&') {
            arr[i] = '&amp;';
        }
        if (arr[i] == '\'') {
            arr[i] = "&apos;";
        }
        if (arr[i] == '\"') {
            arr[i] = '&quot;';
        }
    }
    str = arr.join("");
    console.log(str);
    return str;
}

// convertHTML("Dolce & Gabbana") //should return Dolce &​amp; Gabbana.
//convertHTML("Hamburgers < Pizza < Tacos") //should return Hamburgers &​lt; Pizza &​lt; Tacos.
// convertHTML("Sixty > twelve") //should return Sixty &​gt; twelve.
//convertHTML('Stuff in "quotation marks"') //should return Stuff in &​quot;quotation marks&​quot;.
//convertHTML("Schindler's List") //should return Schindler&​apos;s List.
convertHTML("&apos;Stuff in 'quotation marks'&apos;") //should return Stuff in &&#8203;quot;quotation marks&&#8203;quot;.
// convertHTML("<>")// should return &​lt;&​gt;.
//convertHTML("abc") //should return abc.//

//advanced solution:

    // var htmlEntities = {
    //     '&':'&amp;',
    //     '<':'&lt;',
    //     '>':'&gt;',
    //     '\"':'&quot;',
    //     '\'':"&apos;"
    //   };
    
    //   return str.split('').map(function(entity){
    //     console.log(htmlEntities[entity]);
    //     console.log(entity);
    //     return htmlEntities[entity] || entity;
    //   }).join('');

