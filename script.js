async function quoteRead()
{
    let response = await fetch("https://api.quotable.io/random")
    let data = await response.text()
    //console.log(JSON.parse(data))
    quote =  JSON.parse(data)
    author = quote.author
    content = quote.content
    let code = ""
    code +="<p>"+ content + "</p>"
    code +="<b><i> - "+author+"</i></b>"
    document.getElementById("quotes-for-the-day").innerHTML=code
}

quoteRead()
setInterval(quoteRead,5000)
/*response=fetch("https://api.quotable.io/random")
//return of fetch is promise
//unless you specify method name in fetch function, it
//will always make get request

response.then (
    (response) => {
        response.text().then(
            (data) => console.log(JSON.parse(data)),
            (error) => console.log(error)
        )
    },
    (error) => console.log(error , " is the error")
)
console.log(response)*/
